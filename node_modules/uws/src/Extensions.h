#ifndef EXTENSIONS_UWS_H
#define EXTENSIONS_UWS_H

#include <string>

namespace uWS {

enum Options : unsigned int {
    NO_OPTIONS = 0,
    PERMESSAGE_DEFLATE = 1,
    SERVER_NO_CONTEXT_TAKEOVER = 2,
    CLIENT_NO_CONTEXT_TAKEOVER = 4,
    NO_DELAY = 8
};

template <bool isServer>
class ExtensionsNegotiator {
private:
    int options;
public:
    ExtensionsNegotiator(int wantedOptions);
    std::string generateOffer();
    void readOffer(std::string offer);
    int getNegotiatedOptions();
};

}

#endif // EXTENSIONS_UWS_H
