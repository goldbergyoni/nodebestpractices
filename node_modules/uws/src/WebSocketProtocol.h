#ifndef WEBSOCKETPROTOCOL_UWS_H
#define WEBSOCKETPROTOCOL_UWS_H

// we do need to include this for htobe64, should be moved from networking!
#include "Networking.h"

#include <cstring>
#include <cstdlib>

namespace uWS {

enum OpCode : unsigned char {
    TEXT = 1,
    BINARY = 2,
    CLOSE = 8,
    PING = 9,
    PONG = 10
};

enum {
    CLIENT,
    SERVER
};

// 24 bytes perfectly
template <bool isServer>
struct WebSocketState {
public:
    static const unsigned int SHORT_MESSAGE_HEADER = isServer ? 6 : 2;
    static const unsigned int MEDIUM_MESSAGE_HEADER = isServer ? 8 : 4;
    static const unsigned int LONG_MESSAGE_HEADER = isServer ? 14 : 10;

    // 16 bytes
    struct State {
        unsigned int wantsHead : 1;
        unsigned int spillLength : 4;
        int opStack : 2; // -1, 0, 1
        unsigned int lastFin : 1;

        // 15 bytes
        unsigned char spill[LONG_MESSAGE_HEADER - 1];
        OpCode opCode[2];

        State() {
            wantsHead = true;
            spillLength = 0;
            opStack = -1;
            lastFin = true;
        }

    } state;

    // 8 bytes
    unsigned int remainingBytes = 0;
    char mask[isServer ? 4 : 1];
};

template <const bool isServer, class Impl>
class WIN32_EXPORT WebSocketProtocol {
public:
    static const unsigned int SHORT_MESSAGE_HEADER = isServer ? 6 : 2;
    static const unsigned int MEDIUM_MESSAGE_HEADER = isServer ? 8 : 4;
    static const unsigned int LONG_MESSAGE_HEADER = isServer ? 14 : 10;

private:
    static inline bool isFin(char *frame) {return *((unsigned char *) frame) & 128;}
    static inline unsigned char getOpCode(char *frame) {return *((unsigned char *) frame) & 15;}
    static inline unsigned char payloadLength(char *frame) {return ((unsigned char *) frame)[1] & 127;}
    static inline bool rsv23(char *frame) {return *((unsigned char *) frame) & 48;}
    static inline bool rsv1(char *frame) {return *((unsigned char *) frame) & 64;}

    static inline void unmaskImprecise(char *dst, char *src, char *mask, unsigned int length) {
        for (unsigned int n = (length >> 2) + 1; n; n--) {
            *(dst++) = *(src++) ^ mask[0];
            *(dst++) = *(src++) ^ mask[1];
            *(dst++) = *(src++) ^ mask[2];
            *(dst++) = *(src++) ^ mask[3];
        }
    }

    static inline void unmaskImpreciseCopyMask(char *dst, char *src, char *maskPtr, unsigned int length) {
        char mask[4] = {maskPtr[0], maskPtr[1], maskPtr[2], maskPtr[3]};
        unmaskImprecise(dst, src, mask, length);
    }

    static inline void rotateMask(unsigned int offset, char *mask) {
        char originalMask[4] = {mask[0], mask[1], mask[2], mask[3]};
        mask[(0 + offset) % 4] = originalMask[0];
        mask[(1 + offset) % 4] = originalMask[1];
        mask[(2 + offset) % 4] = originalMask[2];
        mask[(3 + offset) % 4] = originalMask[3];
    }

    static inline void unmaskInplace(char *data, char *stop, char *mask) {
        while (data < stop) {
            *(data++) ^= mask[0];
            *(data++) ^= mask[1];
            *(data++) ^= mask[2];
            *(data++) ^= mask[3];
        }
    }

    enum {
        SND_CONTINUATION = 1,
        SND_NO_FIN = 2,
        SND_COMPRESSED = 64
    };

    template <unsigned int MESSAGE_HEADER, typename T>
    static inline bool consumeMessage(T payLength, char *&src, unsigned int &length, WebSocketState<isServer> *wState) {
        if (getOpCode(src)) {
            if (wState->state.opStack == 1 || (!wState->state.lastFin && getOpCode(src) < 2)) {
                Impl::forceClose(wState);
                return true;
            }
            wState->state.opCode[++wState->state.opStack] = (OpCode) getOpCode(src);
        } else if (wState->state.opStack == -1) {
            Impl::forceClose(wState);
            return true;
        }
        wState->state.lastFin = isFin(src);

        if (Impl::refusePayloadLength(payLength, wState)) {
            Impl::forceClose(wState);
            return true;
        }

        if (payLength + MESSAGE_HEADER <= length) {
            if (isServer) {
                unmaskImpreciseCopyMask(src + MESSAGE_HEADER - 4, src + MESSAGE_HEADER, src + MESSAGE_HEADER - 4, payLength);
                if (Impl::handleFragment(src + MESSAGE_HEADER - 4, payLength, 0, wState->state.opCode[wState->state.opStack], isFin(src), wState)) {
                    return true;
                }
            } else {
                if (Impl::handleFragment(src + MESSAGE_HEADER, payLength, 0, wState->state.opCode[wState->state.opStack], isFin(src), wState)) {
                    return true;
                }
            }

            if (isFin(src)) {
                wState->state.opStack--;
            }

            src += payLength + MESSAGE_HEADER;
            length -= payLength + MESSAGE_HEADER;
            wState->state.spillLength = 0;
            return false;
        } else {
            wState->state.spillLength = 0;
            wState->state.wantsHead = false;
            wState->remainingBytes = payLength - length + MESSAGE_HEADER;
            bool fin = isFin(src);
            if (isServer) {
                memcpy(wState->mask, src + MESSAGE_HEADER - 4, 4);
                unmaskImprecise(src, src + MESSAGE_HEADER, wState->mask, length - MESSAGE_HEADER);
                rotateMask(4 - (length - MESSAGE_HEADER) % 4, wState->mask);
            } else {
                src += MESSAGE_HEADER;
            }
            Impl::handleFragment(src, length - MESSAGE_HEADER, wState->remainingBytes, wState->state.opCode[wState->state.opStack], fin, wState);
            return true;
        }
    }

    static inline bool consumeContinuation(char *&src, unsigned int &length, WebSocketState<isServer> *wState) {
        if (wState->remainingBytes <= length) {
            if (isServer) {
                int n = wState->remainingBytes >> 2;
                unmaskInplace(src, src + n * 4, wState->mask);
                for (int i = 0, s = wState->remainingBytes % 4; i < s; i++) {
                    src[n * 4 + i] ^= wState->mask[i];
                }
            }

            if (Impl::handleFragment(src, wState->remainingBytes, 0, wState->state.opCode[wState->state.opStack], wState->state.lastFin, wState)) {
                return false;
            }

            if (wState->state.lastFin) {
                wState->state.opStack--;
            }

            src += wState->remainingBytes;
            length -= wState->remainingBytes;
            wState->state.wantsHead = true;
            return true;
        } else {
            if (isServer) {
                unmaskInplace(src, src + ((length >> 2) + 1) * 4, wState->mask);
            }

            wState->remainingBytes -= length;
            if (Impl::handleFragment(src, length, wState->remainingBytes, wState->state.opCode[wState->state.opStack], wState->state.lastFin, wState)) {
                return false;
            }

            if (isServer && length % 4) {
                rotateMask(4 - (length % 4), wState->mask);
            }
            return false;
        }
    }

public:
    WebSocketProtocol() {

    }

    // Based on utf8_check.c by Markus Kuhn, 2005
    // https://www.cl.cam.ac.uk/~mgk25/ucs/utf8_check.c
    // Optimized for predominantly 7-bit content by Alex Hultman, 2016
    // Licensed as Zlib, like the rest of this project
    static bool isValidUtf8(unsigned char *s, size_t length)
    {
        for (unsigned char *e = s + length; s != e; ) {
            if (s + 4 <= e && ((*(uint32_t *) s) & 0x80808080) == 0) {
                s += 4;
            } else {
                while (!(*s & 0x80)) {
                    if (++s == e) {
                        return true;
                    }
                }

                if ((s[0] & 0x60) == 0x40) {
                    if (s + 1 >= e || (s[1] & 0xc0) != 0x80 || (s[0] & 0xfe) == 0xc0) {
                        return false;
                    }
                    s += 2;
                } else if ((s[0] & 0xf0) == 0xe0) {
                    if (s + 2 >= e || (s[1] & 0xc0) != 0x80 || (s[2] & 0xc0) != 0x80 ||
                            (s[0] == 0xe0 && (s[1] & 0xe0) == 0x80) || (s[0] == 0xed && (s[1] & 0xe0) == 0xa0)) {
                        return false;
                    }
                    s += 3;
                } else if ((s[0] & 0xf8) == 0xf0) {
                    if (s + 3 >= e || (s[1] & 0xc0) != 0x80 || (s[2] & 0xc0) != 0x80 || (s[3] & 0xc0) != 0x80 ||
                            (s[0] == 0xf0 && (s[1] & 0xf0) == 0x80) || (s[0] == 0xf4 && s[1] > 0x8f) || s[0] > 0xf4) {
                        return false;
                    }
                    s += 4;
                } else {
                    return false;
                }
            }
        }
        return true;
    }

    struct CloseFrame {
        uint16_t code;
        char *message;
        size_t length;
    };

    static inline CloseFrame parseClosePayload(char *src, size_t length) {
        CloseFrame cf = {};
        if (length >= 2) {
            memcpy(&cf.code, src, 2);
            cf = {ntohs(cf.code), src + 2, length - 2};
            if (cf.code < 1000 || cf.code > 4999 || (cf.code > 1011 && cf.code < 4000) ||
                (cf.code >= 1004 && cf.code <= 1006) || !isValidUtf8((unsigned char *) cf.message, cf.length)) {
                return {};
            }
        }
        return cf;
    }

    static inline size_t formatClosePayload(char *dst, uint16_t code, const char *message, size_t length) {
        if (code) {
            code = htons(code);
            memcpy(dst, &code, 2);
            memcpy(dst + 2, message, length);
            return length + 2;
        }
        return 0;
    }

    static inline size_t formatMessage(char *dst, const char *src, size_t length, OpCode opCode, size_t reportedLength, bool compressed) {
        size_t messageLength;
        size_t headerLength;
        if (reportedLength < 126) {
            headerLength = 2;
            dst[1] = reportedLength;
        } else if (reportedLength <= UINT16_MAX) {
            headerLength = 4;
            dst[1] = 126;
            *((uint16_t *) &dst[2]) = htons(reportedLength);
        } else {
            headerLength = 10;
            dst[1] = 127;
            *((uint64_t *) &dst[2]) = htobe64(reportedLength);
        }

        int flags = 0;
        dst[0] = (flags & SND_NO_FIN ? 0 : 128) | (compressed ? SND_COMPRESSED : 0);
        if (!(flags & SND_CONTINUATION)) {
            dst[0] |= opCode;
        }

        char mask[4];
        if (!isServer) {
            dst[1] |= 0x80;
            uint32_t random = rand();
            memcpy(mask, &random, 4);
            memcpy(dst + headerLength, &random, 4);
            headerLength += 4;
        }

        messageLength = headerLength + length;
        memcpy(dst + headerLength, src, length);

        if (!isServer) {

            // overwrites up to 3 bytes outside of the given buffer!
            //WebSocketProtocol<isServer>::unmaskInplace(dst + headerLength, dst + headerLength + length, mask);

            // this is not optimal
            char *start = dst + headerLength;
            char *stop = start + length;
            int i = 0;
            while (start != stop) {
                (*start++) ^= mask[i++ % 4];
            }
        }
        return messageLength;
    }

    static inline void consume(char *src, unsigned int length, WebSocketState<isServer> *wState) {
        if (wState->state.spillLength) {
            src -= wState->state.spillLength;
            length += wState->state.spillLength;
            memcpy(src, wState->state.spill, wState->state.spillLength);
        }
        if (wState->state.wantsHead) {
            parseNext:
            while (length >= SHORT_MESSAGE_HEADER) {

                // invalid reserved bits / invalid opcodes / invalid control frames / set compressed frame
                if ((rsv1(src) && !Impl::setCompressed(wState)) || rsv23(src) || (getOpCode(src) > 2 && getOpCode(src) < 8) ||
                    getOpCode(src) > 10 || (getOpCode(src) > 2 && (!isFin(src) || payloadLength(src) > 125))) {
                    Impl::forceClose(wState);
                    return;
                }

                if (payloadLength(src) < 126) {
                    if (consumeMessage<SHORT_MESSAGE_HEADER, uint8_t>(payloadLength(src), src, length, wState)) {
                        return;
                    }
                } else if (payloadLength(src) == 126) {
                    if (length < MEDIUM_MESSAGE_HEADER) {
                        break;
                    } else if(consumeMessage<MEDIUM_MESSAGE_HEADER, uint16_t>(ntohs(*(uint16_t *) &src[2]), src, length, wState)) {
                        return;
                    }
                } else if (length < LONG_MESSAGE_HEADER) {
                    break;
                } else if (consumeMessage<LONG_MESSAGE_HEADER, uint64_t>(be64toh(*(uint64_t *) &src[2]), src, length, wState)) {
                    return;
                }
            }
            if (length) {
                memcpy(wState->state.spill, src, length);
                wState->state.spillLength = length;
            }
        } else if (consumeContinuation(src, length, wState)) {
            goto parseNext;
        }
    }

    static const int CONSUME_POST_PADDING = 4;
    static const int CONSUME_PRE_PADDING = LONG_MESSAGE_HEADER - 1;
};

}

#endif // WEBSOCKETPROTOCOL_UWS_H
