#include "Socket.h"

namespace uS {

Socket::Address Socket::getAddress()
{
    uv_os_sock_t fd = getFd();

    sockaddr_storage addr;
    socklen_t addrLength = sizeof(addr);
    if (getpeername(fd, (sockaddr *) &addr, &addrLength) == -1) {
        return {0, "", ""};
    }

    static __thread char buf[INET6_ADDRSTRLEN];

    if (addr.ss_family == AF_INET) {
        sockaddr_in *ipv4 = (sockaddr_in *) &addr;
        inet_ntop(AF_INET, &ipv4->sin_addr, buf, sizeof(buf));
        return {ntohs(ipv4->sin_port), buf, "IPv4"};
    } else {
        sockaddr_in6 *ipv6 = (sockaddr_in6 *) &addr;
        inet_ntop(AF_INET6, &ipv6->sin6_addr, buf, sizeof(buf));
        return {ntohs(ipv6->sin6_port), buf, "IPv6"};
    }
}

}
