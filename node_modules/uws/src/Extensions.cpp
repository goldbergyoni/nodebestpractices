#include "Extensions.h"

namespace uWS {

enum ExtensionTokens {
    TOK_PERMESSAGE_DEFLATE = 1838,
    TOK_SERVER_NO_CONTEXT_TAKEOVER = 2807,
    TOK_CLIENT_NO_CONTEXT_TAKEOVER = 2783,
    TOK_SERVER_MAX_WINDOW_BITS = 2372,
    TOK_CLIENT_MAX_WINDOW_BITS = 2348
};

class ExtensionsParser {
private:
    int *lastInteger = nullptr;

public:
    bool perMessageDeflate = false;
    bool serverNoContextTakeover = false;
    bool clientNoContextTakeover = false;
    int serverMaxWindowBits = 0;
    int clientMaxWindowBits = 0;

    int getToken(const char *&in, const char *stop);
    ExtensionsParser(const char *data, size_t length);
};

int ExtensionsParser::getToken(const char *&in, const char *stop) {
    while (!isalnum(*in) && in != stop) {
        in++;
    }

    int hashedToken = 0;
    while (isalnum(*in) || *in == '-' || *in == '_') {
        if (isdigit(*in)) {
            hashedToken = hashedToken * 10 - (*in - '0');
        } else {
            hashedToken += *in;
        }
        in++;
    }
    return hashedToken;
}

ExtensionsParser::ExtensionsParser(const char *data, size_t length) {
    const char *stop = data + length;
    int token = 1;
    for (; token && token != TOK_PERMESSAGE_DEFLATE; token = getToken(data, stop));

    perMessageDeflate = (token == TOK_PERMESSAGE_DEFLATE);
    while ((token = getToken(data, stop))) {
        switch (token) {
        case TOK_PERMESSAGE_DEFLATE:
            return;
        case TOK_SERVER_NO_CONTEXT_TAKEOVER:
            serverNoContextTakeover = true;
            break;
        case TOK_CLIENT_NO_CONTEXT_TAKEOVER:
            clientNoContextTakeover = true;
            break;
        case TOK_SERVER_MAX_WINDOW_BITS:
            serverMaxWindowBits = 1;
            lastInteger = &serverMaxWindowBits;
            break;
        case TOK_CLIENT_MAX_WINDOW_BITS:
            clientMaxWindowBits = 1;
            lastInteger = &clientMaxWindowBits;
            break;
        default:
            if (token < 0 && lastInteger) {
                *lastInteger = -token;
            }
            break;
        }
    }
}

template <bool isServer>
ExtensionsNegotiator<isServer>::ExtensionsNegotiator(int wantedOptions) {
    options = wantedOptions;
}

template <bool isServer>
std::string ExtensionsNegotiator<isServer>::generateOffer() {
    std::string extensionsOffer;
    if (options & Options::PERMESSAGE_DEFLATE) {
        extensionsOffer += "permessage-deflate";

        if (options & Options::CLIENT_NO_CONTEXT_TAKEOVER) {
            extensionsOffer += "; client_no_context_takeover";
        }

        if (options & Options::SERVER_NO_CONTEXT_TAKEOVER) {
            extensionsOffer += "; server_no_context_takeover";
        }
    }

    return extensionsOffer;
}

template <bool isServer>
void ExtensionsNegotiator<isServer>::readOffer(std::string offer) {
    if (isServer) {
        ExtensionsParser extensionsParser(offer.data(), offer.length());
        if ((options & PERMESSAGE_DEFLATE) && extensionsParser.perMessageDeflate) {
            if (extensionsParser.clientNoContextTakeover || (options & CLIENT_NO_CONTEXT_TAKEOVER)) {
                options |= CLIENT_NO_CONTEXT_TAKEOVER;
            }

            if (extensionsParser.serverNoContextTakeover) {
                options |= SERVER_NO_CONTEXT_TAKEOVER;
            } else {
                options &= ~SERVER_NO_CONTEXT_TAKEOVER;
            }
        } else {
            options &= ~PERMESSAGE_DEFLATE;
        }
    } else {
        // todo!
    }
}

template <bool isServer>
int ExtensionsNegotiator<isServer>::getNegotiatedOptions() {
    return options;
}

template class ExtensionsNegotiator<true>;
template class ExtensionsNegotiator<false>;

}
