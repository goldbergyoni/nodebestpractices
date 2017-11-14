ipaddr = require '../lib/ipaddr'

module.exports =
  'should define main classes': (test) ->
    test.ok(ipaddr.IPv4?, 'defines IPv4 class')
    test.ok(ipaddr.IPv6?, 'defines IPv6 class')
    test.done()

  'can construct IPv4 from octets': (test) ->
    test.doesNotThrow ->
      new ipaddr.IPv4([192, 168, 1, 2])
    test.done()

  'refuses to construct invalid IPv4': (test) ->
    test.throws ->
      new ipaddr.IPv4([300, 1, 2, 3])
    test.throws ->
      new ipaddr.IPv4([8, 8, 8])
    test.done()

  'converts IPv4 to string correctly': (test) ->
    addr = new ipaddr.IPv4([192, 168, 1, 1])
    test.equal(addr.toString(), '192.168.1.1')
    test.equal(addr.toNormalizedString(), '192.168.1.1')
    test.done()

  'returns correct kind for IPv4': (test) ->
    addr = new ipaddr.IPv4([1, 2, 3, 4])
    test.equal(addr.kind(), 'ipv4')
    test.done()

  'allows to access IPv4 octets': (test) ->
    addr = new ipaddr.IPv4([42, 0, 0, 0])
    test.equal(addr.octets[0], 42)
    test.done()

  'checks IPv4 address format': (test) ->
    test.equal(ipaddr.IPv4.isIPv4('192.168.007.0xa'), true)
    test.equal(ipaddr.IPv4.isIPv4('1024.0.0.1'),      true)
    test.equal(ipaddr.IPv4.isIPv4('8.0xa.wtf.6'),     false)
    test.done()

  'validates IPv4 addresses': (test) ->
    test.equal(ipaddr.IPv4.isValid('192.168.007.0xa'), true)
    test.equal(ipaddr.IPv4.isValid('1024.0.0.1'),      false)
    test.equal(ipaddr.IPv4.isValid('8.0xa.wtf.6'),     false)
    test.done()

  'parses IPv4 in several weird formats': (test) ->
    test.deepEqual(ipaddr.IPv4.parse('192.168.1.1').octets,  [192, 168, 1, 1])
    test.deepEqual(ipaddr.IPv4.parse('0xc0.168.1.1').octets, [192, 168, 1, 1])
    test.deepEqual(ipaddr.IPv4.parse('192.0250.1.1').octets, [192, 168, 1, 1])
    test.deepEqual(ipaddr.IPv4.parse('0xc0a80101').octets,   [192, 168, 1, 1])
    test.deepEqual(ipaddr.IPv4.parse('030052000401').octets, [192, 168, 1, 1])
    test.deepEqual(ipaddr.IPv4.parse('3232235777').octets,   [192, 168, 1, 1])
    test.done()

  'barfs at invalid IPv4': (test) ->
    test.throws ->
      ipaddr.IPv4.parse('10.0.0.wtf')
    test.done()

  'matches IPv4 CIDR correctly': (test) ->
    addr = new ipaddr.IPv4([10, 5, 0, 1])
    test.equal(addr.match(ipaddr.IPv4.parse('0.0.0.0'), 0),   true)
    test.equal(addr.match(ipaddr.IPv4.parse('11.0.0.0'), 8),  false)
    test.equal(addr.match(ipaddr.IPv4.parse('10.0.0.0'), 8),  true)
    test.equal(addr.match(ipaddr.IPv4.parse('10.0.0.1'), 8),  true)
    test.equal(addr.match(ipaddr.IPv4.parse('10.0.0.10'), 8), true)
    test.equal(addr.match(ipaddr.IPv4.parse('10.5.5.0'), 16), true)
    test.equal(addr.match(ipaddr.IPv4.parse('10.4.5.0'), 16), false)
    test.equal(addr.match(ipaddr.IPv4.parse('10.4.5.0'), 15), true)
    test.equal(addr.match(ipaddr.IPv4.parse('10.5.0.2'), 32), false)
    test.equal(addr.match(addr, 32), true)
    test.done()

  'parses IPv4 CIDR correctly': (test) ->
    addr = new ipaddr.IPv4([10, 5, 0, 1])
    test.equal(addr.match(ipaddr.IPv4.parseCIDR('0.0.0.0/0')),   true)
    test.equal(addr.match(ipaddr.IPv4.parseCIDR('11.0.0.0/8')),  false)
    test.equal(addr.match(ipaddr.IPv4.parseCIDR('10.0.0.0/8')),  true)
    test.equal(addr.match(ipaddr.IPv4.parseCIDR('10.0.0.1/8')),  true)
    test.equal(addr.match(ipaddr.IPv4.parseCIDR('10.0.0.10/8')), true)
    test.equal(addr.match(ipaddr.IPv4.parseCIDR('10.5.5.0/16')), true)
    test.equal(addr.match(ipaddr.IPv4.parseCIDR('10.4.5.0/16')), false)
    test.equal(addr.match(ipaddr.IPv4.parseCIDR('10.4.5.0/15')), true)
    test.equal(addr.match(ipaddr.IPv4.parseCIDR('10.5.0.2/32')), false)
    test.equal(addr.match(ipaddr.IPv4.parseCIDR('10.5.0.1/32')), true)
    test.throws ->
      ipaddr.IPv4.parseCIDR('10.5.0.1')
    test.throws ->
      ipaddr.IPv4.parseCIDR('0.0.0.0/-1')
    test.throws ->
      ipaddr.IPv4.parseCIDR('0.0.0.0/33')
    test.done()

  'detects reserved IPv4 networks': (test) ->
    test.equal(ipaddr.IPv4.parse('0.0.0.0').range(),         'unspecified')
    test.equal(ipaddr.IPv4.parse('0.1.0.0').range(),         'unspecified')
    test.equal(ipaddr.IPv4.parse('10.1.0.1').range(),        'private')
    test.equal(ipaddr.IPv4.parse('100.64.0.0').range(),      'carrierGradeNat')
    test.equal(ipaddr.IPv4.parse('100.127.255.255').range(), 'carrierGradeNat')
    test.equal(ipaddr.IPv4.parse('192.168.2.1').range(),     'private')
    test.equal(ipaddr.IPv4.parse('224.100.0.1').range(),     'multicast')
    test.equal(ipaddr.IPv4.parse('169.254.15.0').range(),    'linkLocal')
    test.equal(ipaddr.IPv4.parse('127.1.1.1').range(),       'loopback')
    test.equal(ipaddr.IPv4.parse('255.255.255.255').range(), 'broadcast')
    test.equal(ipaddr.IPv4.parse('240.1.2.3').range(),       'reserved')
    test.equal(ipaddr.IPv4.parse('8.8.8.8').range(),         'unicast')
    test.done()

  'checks the conventional IPv4 address format': (test) ->
      test.equal(ipaddr.IPv4.isValidFourPartDecimal('192.168.1.1'),  true)
      test.equal(ipaddr.IPv4.isValidFourPartDecimal('0xc0.168.1.1'), false)
      test.done()

  'can construct IPv6 from 16bit parts': (test) ->
    test.doesNotThrow ->
      new ipaddr.IPv6([0x2001, 0xdb8, 0xf53a, 0, 0, 0, 0, 1])
    test.done()

  'can construct IPv6 from 8bit parts': (test) ->
    test.doesNotThrow ->
      new ipaddr.IPv6([0x20, 0x01, 0xd, 0xb8, 0xf5, 0x3a, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])
    test.deepEqual(new ipaddr.IPv6([0x20, 0x01, 0xd, 0xb8, 0xf5, 0x3a, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]),
      new ipaddr.IPv6([0x2001, 0xdb8, 0xf53a, 0, 0, 0, 0, 1]))
    test.done()

  'refuses to construct invalid IPv6': (test) ->
    test.throws ->
      new ipaddr.IPv6([0xfffff, 0, 0, 0, 0, 0, 0, 1])
    test.throws ->
      new ipaddr.IPv6([0xfffff, 0, 0, 0, 0, 0, 1])
    test.throws ->
      new ipaddr.IPv6([0xffff, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])
    test.done()

  'converts IPv6 to string correctly': (test) ->
    addr = new ipaddr.IPv6([0x2001, 0xdb8, 0xf53a, 0, 0, 0, 0, 1])
    test.equal(addr.toNormalizedString(), '2001:db8:f53a:0:0:0:0:1')
    test.equal(addr.toString(), '2001:db8:f53a::1')
    test.equal(new ipaddr.IPv6([0, 0, 0, 0, 0, 0, 0, 1]).toString(), '::1')
    test.equal(new ipaddr.IPv6([0x2001, 0xdb8, 0, 0, 0, 0, 0, 0]).toString(), '2001:db8::')
    test.done()

  'returns IPv6 zoneIndex': (test) ->
    addr = new ipaddr.IPv6([0x2001, 0xdb8, 0xf53a, 0, 0, 0, 0, 1], 'utun0')
    test.equal(addr.toNormalizedString(), '2001:db8:f53a:0:0:0:0:1%utun0')
    test.equal(addr.toString(), '2001:db8:f53a::1%utun0')

    test.equal(
      ipaddr.parse('2001:db8:f53a::1%2').toString(),
      '2001:db8:f53a::1%2'
    )
    test.equal(
      ipaddr.parse('2001:db8:f53a::1%WAT').toString(),
      '2001:db8:f53a::1%WAT'
    )
    test.equal(
      ipaddr.parse('2001:db8:f53a::1%sUp').toString(),
      '2001:db8:f53a::1%sUp'
    )

    test.done()

  'returns IPv6 zoneIndex for IPv4-mapped IPv6 addresses': (test) ->
    addr = ipaddr.parse('::ffff:192.168.1.1%eth0')
    test.equal(addr.toNormalizedString(), '0:0:0:0:0:ffff:c0a8:101%eth0')
    test.equal(addr.toString(), '::ffff:c0a8:101%eth0')

    test.equal(
      ipaddr.parse('::ffff:192.168.1.1%2').toString(),
      '::ffff:c0a8:101%2'
    )
    test.equal(
      ipaddr.parse('::ffff:192.168.1.1%WAT').toString(),
      '::ffff:c0a8:101%WAT'
    )
    test.equal(
      ipaddr.parse('::ffff:192.168.1.1%sUp').toString(),
      '::ffff:c0a8:101%sUp'
    )

    test.done()

  'returns correct kind for IPv6': (test) ->
    addr = new ipaddr.IPv6([0x2001, 0xdb8, 0xf53a, 0, 0, 0, 0, 1])
    test.equal(addr.kind(), 'ipv6')
    test.done()

  'allows to access IPv6 address parts': (test) ->
    addr = new ipaddr.IPv6([0x2001, 0xdb8, 0xf53a, 0, 0, 42, 0, 1])
    test.equal(addr.parts[5], 42)
    test.done()

  'checks IPv6 address format': (test) ->
    test.equal(ipaddr.IPv6.isIPv6('2001:db8:F53A::1'),     true)
    test.equal(ipaddr.IPv6.isIPv6('200001::1'),            true)
    test.equal(ipaddr.IPv6.isIPv6('::ffff:192.168.1.1'),   true)
    test.equal(ipaddr.IPv6.isIPv6('::ffff:192.168.1.1%z'), true)
    test.equal(ipaddr.IPv6.isIPv6('::ffff:300.168.1.1'),   false)
    test.equal(ipaddr.IPv6.isIPv6('::ffff:300.168.1.1:0'), false)
    test.equal(ipaddr.IPv6.isIPv6('fe80::wtf'),            false)
    test.equal(ipaddr.IPv6.isIPv6('fe80::%'),              false)
    test.done()

  'validates IPv6 addresses': (test) ->
    test.equal(ipaddr.IPv6.isValid('2001:db8:F53A::1'),     true)
    test.equal(ipaddr.IPv6.isValid('200001::1'),            false)
    test.equal(ipaddr.IPv6.isValid('::ffff:192.168.1.1'),   true)
    test.equal(ipaddr.IPv6.isValid('::ffff:192.168.1.1%z'), true)
    test.equal(ipaddr.IPv6.isValid('::ffff:300.168.1.1'),   false)
    test.equal(ipaddr.IPv6.isValid('::ffff:300.168.1.1:0'), false)
    test.equal(ipaddr.IPv6.isValid('::ffff:222.1.41.9000'), false)
    test.equal(ipaddr.IPv6.isValid('2001:db8::F53A::1'),    false)
    test.equal(ipaddr.IPv6.isValid('fe80::wtf'),            false)
    test.equal(ipaddr.IPv6.isValid('fe80::%'),              false)
    test.equal(ipaddr.IPv6.isValid('2002::2:'),             false)
    test.equal(ipaddr.IPv6.isValid('::%z'),                 true)

    test.equal(ipaddr.IPv6.isValid(undefined),              false)
    test.done()

  'parses IPv6 in different formats': (test) ->
    test.deepEqual(ipaddr.IPv6.parse('2001:db8:F53A:0:0:0:0:1').parts, [0x2001, 0xdb8, 0xf53a, 0, 0, 0, 0, 1])
    test.deepEqual(ipaddr.IPv6.parse('fe80::10').parts, [0xfe80, 0, 0, 0, 0, 0, 0, 0x10])
    test.deepEqual(ipaddr.IPv6.parse('2001:db8:F53A::').parts, [0x2001, 0xdb8, 0xf53a, 0, 0, 0, 0, 0])
    test.deepEqual(ipaddr.IPv6.parse('::1').parts, [0, 0, 0, 0, 0, 0, 0, 1])
    test.deepEqual(ipaddr.IPv6.parse('::').parts, [0, 0, 0, 0, 0, 0, 0, 0])
    test.deepEqual(ipaddr.IPv6.parse('::%z').parts, [0, 0, 0, 0, 0, 0, 0, 0])
    test.deepEqual(ipaddr.IPv6.parse('::%z').zoneId, 'z')
    test.done()

  'barfs at invalid IPv6': (test) ->
    test.throws ->
      ipaddr.IPv6.parse('fe80::0::1')
    test.done()

  'matches IPv6 CIDR correctly': (test) ->
    addr = ipaddr.IPv6.parse('2001:db8:f53a::1')
    test.equal(addr.match(ipaddr.IPv6.parse('::'), 0),                  true)
    test.equal(addr.match(ipaddr.IPv6.parse('2001:db8:f53a::1:1'), 64), true)
    test.equal(addr.match(ipaddr.IPv6.parse('2001:db8:f53b::1:1'), 48), false)
    test.equal(addr.match(ipaddr.IPv6.parse('2001:db8:f531::1:1'), 44), true)
    test.equal(addr.match(ipaddr.IPv6.parse('2001:db8:f500::1'), 40),   true)
    test.equal(addr.match(ipaddr.IPv6.parse('2001:db8:f500::1%z'), 40), true)
    test.equal(addr.match(ipaddr.IPv6.parse('2001:db9:f500::1'), 40),   false)
    test.equal(addr.match(ipaddr.IPv6.parse('2001:db9:f500::1'), 40),   false)
    test.equal(addr.match(ipaddr.IPv6.parse('2001:db9:f500::1%z'), 40), false)
    test.equal(addr.match(addr, 128), true)
    test.done()

  'parses IPv6 CIDR correctly': (test) ->
    addr = ipaddr.IPv6.parse('2001:db8:f53a::1')
    test.equal(addr.match(ipaddr.IPv6.parseCIDR('::/0')),                  true)
    test.equal(addr.match(ipaddr.IPv6.parseCIDR('2001:db8:f53a::1:1/64')), true)
    test.equal(addr.match(ipaddr.IPv6.parseCIDR('2001:db8:f53b::1:1/48')), false)
    test.equal(addr.match(ipaddr.IPv6.parseCIDR('2001:db8:f531::1:1/44')), true)
    test.equal(addr.match(ipaddr.IPv6.parseCIDR('2001:db8:f500::1/40')),   true)
    test.equal(addr.match(ipaddr.IPv6.parseCIDR('2001:db8:f500::1%z/40')), true)
    test.equal(addr.match(ipaddr.IPv6.parseCIDR('2001:db9:f500::1/40')),   false)
    test.equal(addr.match(ipaddr.IPv6.parseCIDR('2001:db9:f500::1%z/40')), false)
    test.equal(addr.match(ipaddr.IPv6.parseCIDR('2001:db8:f53a::1/128')),  true)
    test.throws ->
      ipaddr.IPv6.parseCIDR('2001:db8:f53a::1')
    test.throws ->
      ipaddr.IPv6.parseCIDR('2001:db8:f53a::1/-1')
    test.throws ->
      ipaddr.IPv6.parseCIDR('2001:db8:f53a::1/129')
    test.done()

  'converts between IPv4-mapped IPv6 addresses and IPv4 addresses': (test) ->
    addr = ipaddr.IPv4.parse('77.88.21.11')
    mapped = addr.toIPv4MappedAddress()
    test.deepEqual(mapped.parts, [0, 0, 0, 0, 0, 0xffff, 0x4d58, 0x150b])
    test.deepEqual(mapped.toIPv4Address().octets, addr.octets)
    test.done()

  'refuses to convert non-IPv4-mapped IPv6 address to IPv4 address': (test) ->
    test.throws ->
      ipaddr.IPv6.parse('2001:db8::1').toIPv4Address()
    test.done()

  'detects reserved IPv6 networks': (test) ->
    test.equal(ipaddr.IPv6.parse('::').range(),                        'unspecified')
    test.equal(ipaddr.IPv6.parse('fe80::1234:5678:abcd:0123').range(), 'linkLocal')
    test.equal(ipaddr.IPv6.parse('ff00::1234').range(),                'multicast')
    test.equal(ipaddr.IPv6.parse('::1').range(),                       'loopback')
    test.equal(ipaddr.IPv6.parse('fc00::').range(),                    'uniqueLocal')
    test.equal(ipaddr.IPv6.parse('::ffff:192.168.1.10').range(),       'ipv4Mapped')
    test.equal(ipaddr.IPv6.parse('::ffff:0:192.168.1.10').range(),     'rfc6145')
    test.equal(ipaddr.IPv6.parse('64:ff9b::1234').range(),             'rfc6052')
    test.equal(ipaddr.IPv6.parse('2002:1f63:45e8::1').range(),         '6to4')
    test.equal(ipaddr.IPv6.parse('2001::4242').range(),                'teredo')
    test.equal(ipaddr.IPv6.parse('2001:db8::3210').range(),            'reserved')
    test.equal(ipaddr.IPv6.parse('2001:470:8:66::1').range(),          'unicast')
    test.equal(ipaddr.IPv6.parse('2001:470:8:66::1%z').range(),        'unicast')
    test.done()

  'is able to determine IP address type': (test) ->
    test.equal(ipaddr.parse('8.8.8.8').kind(), 'ipv4')
    test.equal(ipaddr.parse('2001:db8:3312::1').kind(), 'ipv6')
    test.equal(ipaddr.parse('2001:db8:3312::1%z').kind(), 'ipv6')
    test.done()

  'throws an error if tried to parse an invalid address': (test) ->
    test.throws ->
      ipaddr.parse('::some.nonsense')
    test.done()

  'correctly processes IPv4-mapped addresses': (test) ->
    test.equal(ipaddr.process('8.8.8.8').kind(), 'ipv4')
    test.equal(ipaddr.process('2001:db8:3312::1').kind(), 'ipv6')
    test.equal(ipaddr.process('::ffff:192.168.1.1').kind(), 'ipv4')
    test.equal(ipaddr.process('::ffff:192.168.1.1%z').kind(), 'ipv4')
    test.done()

  'correctly converts IPv6 and IPv4 addresses to byte arrays': (test) ->
    test.deepEqual(ipaddr.parse('1.2.3.4').toByteArray(),
          [0x1, 0x2, 0x3, 0x4]);
    # Fuck yeah. The first byte of Google's IPv6 address is 42. 42!
    test.deepEqual(ipaddr.parse('2a00:1450:8007::68').toByteArray(),
          [42, 0x00, 0x14, 0x50, 0x80, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x68 ])
    test.deepEqual(ipaddr.parse('2a00:1450:8007::68%z').toByteArray(),
          [42, 0x00, 0x14, 0x50, 0x80, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x68 ])

    test.done()

  'correctly parses 1 as an IPv4 address': (test) ->
    test.equal(ipaddr.IPv6.isValid('1'), false)
    test.equal(ipaddr.IPv4.isValid('1'), true)
    test.deepEqual(new ipaddr.IPv4([0, 0, 0, 1]), ipaddr.parse('1'))
    test.done()

  'correctly detects IPv4 and IPv6 CIDR addresses': (test) ->
    test.deepEqual([ipaddr.IPv6.parse('fc00::'), 64],
                   ipaddr.parseCIDR('fc00::/64'))
    test.deepEqual([ipaddr.IPv4.parse('1.2.3.4'), 5],
                   ipaddr.parseCIDR('1.2.3.4/5'))
    test.done()

  'does not consider a very large or very small number a valid IP address': (test) ->
    test.equal(ipaddr.isValid('4999999999'), false)
    test.equal(ipaddr.isValid('-1'), false)
    test.done()

  'does not hang on ::8:8:8:8:8:8:8:8:8': (test) ->
    test.equal(ipaddr.IPv6.isValid('::8:8:8:8:8:8:8:8:8'), false)
    test.equal(ipaddr.IPv6.isValid('::8:8:8:8:8:8:8:8:8%z'), false)
    test.done()

  'subnetMatch does not fail on empty range': (test) ->
    ipaddr.subnetMatch(new ipaddr.IPv4([1,2,3,4]), {}, false)
    ipaddr.subnetMatch(new ipaddr.IPv4([1,2,3,4]), {subnet: []}, false)
    test.done()

  'subnetMatch returns default subnet on empty range': (test) ->
    test.equal(ipaddr.subnetMatch(new ipaddr.IPv4([1,2,3,4]), {}, false), false)
    test.equal(ipaddr.subnetMatch(new ipaddr.IPv4([1,2,3,4]), {subnet: []}, false), false)
    test.done()

  'subnetMatch does not fail on IPv4 when looking for IPv6': (test) ->
    rangelist = {subnet6: ipaddr.parseCIDR('fe80::/64')}
    test.equal(ipaddr.subnetMatch(new ipaddr.IPv4([1,2,3,4]), rangelist, false), false)
    test.done()

  'subnetMatch does not fail on IPv6 when looking for IPv4': (test) ->
    rangelist = {subnet4: ipaddr.parseCIDR('1.2.3.0/24')}
    test.equal(ipaddr.subnetMatch(new ipaddr.IPv6([0xfe80, 0, 0, 0, 0, 0, 0, 1]), rangelist, false), false)
    test.done()

  'subnetMatch can use a hybrid IPv4/IPv6 range list': (test) ->
    rangelist = {dual64: [ipaddr.parseCIDR('1.2.4.0/24'), ipaddr.parseCIDR('2001:1:2:3::/64')]}
    test.equal(ipaddr.subnetMatch(new ipaddr.IPv4([1,2,4,1]), rangelist, false), 'dual64')
    test.equal(ipaddr.subnetMatch(new ipaddr.IPv6([0x2001, 1, 2, 3, 0, 0, 0, 1]), rangelist, false), 'dual64')
    test.done()

  'is able to determine IP address type from byte array input': (test) ->
    test.equal(ipaddr.fromByteArray([0x7f, 0, 0, 1]).kind(), 'ipv4')
    test.equal(ipaddr.fromByteArray([0x20, 0x01, 0xd, 0xb8, 0xf5, 0x3a, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]).kind(), 'ipv6')
    test.throws ->
      ipaddr.fromByteArray([1])
    test.done()

  'prefixLengthFromSubnetMask returns proper CIDR notation for standard IPv4 masks': (test) ->
    test.equal(ipaddr.IPv4.parse('255.255.255.255').prefixLengthFromSubnetMask(), 32)
    test.equal(ipaddr.IPv4.parse('255.255.255.254').prefixLengthFromSubnetMask(), 31)
    test.equal(ipaddr.IPv4.parse('255.255.255.252').prefixLengthFromSubnetMask(), 30)
    test.equal(ipaddr.IPv4.parse('255.255.255.248').prefixLengthFromSubnetMask(), 29)
    test.equal(ipaddr.IPv4.parse('255.255.255.240').prefixLengthFromSubnetMask(), 28)
    test.equal(ipaddr.IPv4.parse('255.255.255.224').prefixLengthFromSubnetMask(), 27)
    test.equal(ipaddr.IPv4.parse('255.255.255.192').prefixLengthFromSubnetMask(), 26)
    test.equal(ipaddr.IPv4.parse('255.255.255.128').prefixLengthFromSubnetMask(), 25)
    test.equal(ipaddr.IPv4.parse('255.255.255.0').prefixLengthFromSubnetMask(), 24)
    test.equal(ipaddr.IPv4.parse('255.255.254.0').prefixLengthFromSubnetMask(), 23)
    test.equal(ipaddr.IPv4.parse('255.255.252.0').prefixLengthFromSubnetMask(), 22)
    test.equal(ipaddr.IPv4.parse('255.255.248.0').prefixLengthFromSubnetMask(), 21)
    test.equal(ipaddr.IPv4.parse('255.255.240.0').prefixLengthFromSubnetMask(), 20)
    test.equal(ipaddr.IPv4.parse('255.255.224.0').prefixLengthFromSubnetMask(), 19)
    test.equal(ipaddr.IPv4.parse('255.255.192.0').prefixLengthFromSubnetMask(), 18)
    test.equal(ipaddr.IPv4.parse('255.255.128.0').prefixLengthFromSubnetMask(), 17)
    test.equal(ipaddr.IPv4.parse('255.255.0.0').prefixLengthFromSubnetMask(), 16)
    test.equal(ipaddr.IPv4.parse('255.254.0.0').prefixLengthFromSubnetMask(), 15)
    test.equal(ipaddr.IPv4.parse('255.252.0.0').prefixLengthFromSubnetMask(), 14)
    test.equal(ipaddr.IPv4.parse('255.248.0.0').prefixLengthFromSubnetMask(), 13)
    test.equal(ipaddr.IPv4.parse('255.240.0.0').prefixLengthFromSubnetMask(), 12)
    test.equal(ipaddr.IPv4.parse('255.224.0.0').prefixLengthFromSubnetMask(), 11)
    test.equal(ipaddr.IPv4.parse('255.192.0.0').prefixLengthFromSubnetMask(), 10)
    test.equal(ipaddr.IPv4.parse('255.128.0.0').prefixLengthFromSubnetMask(), 9)
    test.equal(ipaddr.IPv4.parse('255.0.0.0').prefixLengthFromSubnetMask(), 8)
    test.equal(ipaddr.IPv4.parse('254.0.0.0').prefixLengthFromSubnetMask(), 7)
    test.equal(ipaddr.IPv4.parse('252.0.0.0').prefixLengthFromSubnetMask(), 6)
    test.equal(ipaddr.IPv4.parse('248.0.0.0').prefixLengthFromSubnetMask(), 5)
    test.equal(ipaddr.IPv4.parse('240.0.0.0').prefixLengthFromSubnetMask(), 4)
    test.equal(ipaddr.IPv4.parse('224.0.0.0').prefixLengthFromSubnetMask(), 3)
    test.equal(ipaddr.IPv4.parse('192.0.0.0').prefixLengthFromSubnetMask(), 2)
    test.equal(ipaddr.IPv4.parse('128.0.0.0').prefixLengthFromSubnetMask(), 1)
    test.equal(ipaddr.IPv4.parse('0.0.0.0').prefixLengthFromSubnetMask(), 0)
    # negative cases
    test.equal(ipaddr.IPv4.parse('192.168.255.0').prefixLengthFromSubnetMask(), null)
    test.equal(ipaddr.IPv4.parse('255.0.255.0').prefixLengthFromSubnetMask(), null)
    test.done()

  'prefixLengthFromSubnetMask returns proper CIDR notation for standard IPv6 masks': (test) ->
    test.equal(ipaddr.IPv6.parse('ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff').prefixLengthFromSubnetMask(), 128)
    test.equal(ipaddr.IPv6.parse('ffff:ffff:ffff:ffff::').prefixLengthFromSubnetMask(), 64)
    test.equal(ipaddr.IPv6.parse('ffff:ffff:ffff:ff80::').prefixLengthFromSubnetMask(), 57)
    test.equal(ipaddr.IPv6.parse('ffff:ffff:ffff::').prefixLengthFromSubnetMask(), 48)
    test.equal(ipaddr.IPv6.parse('ffff:ffff:ffff::%z').prefixLengthFromSubnetMask(), 48)
    test.equal(ipaddr.IPv6.parse('::').prefixLengthFromSubnetMask(), 0)
    test.equal(ipaddr.IPv6.parse('::%z').prefixLengthFromSubnetMask(), 0)
    # negative cases
    test.equal(ipaddr.IPv6.parse('2001:db8::').prefixLengthFromSubnetMask(), null)
    test.equal(ipaddr.IPv6.parse('ffff:0:0:ffff::').prefixLengthFromSubnetMask(), null)
    test.equal(ipaddr.IPv6.parse('ffff:0:0:ffff::%z').prefixLengthFromSubnetMask(), null)
    test.done()

  'subnetMaskFromPrefixLength returns correct IPv4 subnet mask given prefix length': (test) ->

    test.equal(ipaddr.IPv4.subnetMaskFromPrefixLength(0), "0.0.0.0");
    test.equal(ipaddr.IPv4.subnetMaskFromPrefixLength(1), "128.0.0.0")
    test.equal(ipaddr.IPv4.subnetMaskFromPrefixLength(2), "192.0.0.0")
    test.equal(ipaddr.IPv4.subnetMaskFromPrefixLength(3), "224.0.0.0")
    test.equal(ipaddr.IPv4.subnetMaskFromPrefixLength(4), "240.0.0.0")
    test.equal(ipaddr.IPv4.subnetMaskFromPrefixLength(5), "248.0.0.0")
    test.equal(ipaddr.IPv4.subnetMaskFromPrefixLength(6), "252.0.0.0")
    test.equal(ipaddr.IPv4.subnetMaskFromPrefixLength(7), "254.0.0.0")
    test.equal(ipaddr.IPv4.subnetMaskFromPrefixLength(8), "255.0.0.0");
    test.equal(ipaddr.IPv4.subnetMaskFromPrefixLength(9), "255.128.0.0")
    test.equal(ipaddr.IPv4.subnetMaskFromPrefixLength(10), "255.192.0.0")
    test.equal(ipaddr.IPv4.subnetMaskFromPrefixLength(11), "255.224.0.0")
    test.equal(ipaddr.IPv4.subnetMaskFromPrefixLength(12), "255.240.0.0")
    test.equal(ipaddr.IPv4.subnetMaskFromPrefixLength(13), "255.248.0.0")
    test.equal(ipaddr.IPv4.subnetMaskFromPrefixLength(14), "255.252.0.0")
    test.equal(ipaddr.IPv4.subnetMaskFromPrefixLength(15), "255.254.0.0")
    test.equal(ipaddr.IPv4.subnetMaskFromPrefixLength(16), "255.255.0.0")
    test.equal(ipaddr.IPv4.subnetMaskFromPrefixLength(17), "255.255.128.0")
    test.equal(ipaddr.IPv4.subnetMaskFromPrefixLength(18), "255.255.192.0")
    test.equal(ipaddr.IPv4.subnetMaskFromPrefixLength(19), "255.255.224.0")
    test.equal(ipaddr.IPv4.subnetMaskFromPrefixLength(20), "255.255.240.0")
    test.equal(ipaddr.IPv4.subnetMaskFromPrefixLength(21), "255.255.248.0")
    test.equal(ipaddr.IPv4.subnetMaskFromPrefixLength(22), "255.255.252.0")
    test.equal(ipaddr.IPv4.subnetMaskFromPrefixLength(23), "255.255.254.0")
    test.equal(ipaddr.IPv4.subnetMaskFromPrefixLength(24), "255.255.255.0")
    test.equal(ipaddr.IPv4.subnetMaskFromPrefixLength(25), "255.255.255.128")
    test.equal(ipaddr.IPv4.subnetMaskFromPrefixLength(26), "255.255.255.192")
    test.equal(ipaddr.IPv4.subnetMaskFromPrefixLength(27), "255.255.255.224")
    test.equal(ipaddr.IPv4.subnetMaskFromPrefixLength(28), "255.255.255.240")
    test.equal(ipaddr.IPv4.subnetMaskFromPrefixLength(29), "255.255.255.248")
    test.equal(ipaddr.IPv4.subnetMaskFromPrefixLength(30), "255.255.255.252")
    test.equal(ipaddr.IPv4.subnetMaskFromPrefixLength(31), "255.255.255.254")
    test.equal(ipaddr.IPv4.subnetMaskFromPrefixLength(32), "255.255.255.255")
    test.done()

  'broadcastAddressFromCIDR returns correct IPv4 broadcast address': (test) ->
    test.equal(ipaddr.IPv4.broadcastAddressFromCIDR("172.0.0.1/24"), "172.0.0.255")
    test.equal(ipaddr.IPv4.broadcastAddressFromCIDR("172.0.0.1/26"), "172.0.0.63")
    test.done()

  'networkAddressFromCIDR returns correct IPv4 network address': (test) ->
    test.equal(ipaddr.IPv4.networkAddressFromCIDR("172.0.0.1/24"), "172.0.0.0")
    test.equal(ipaddr.IPv4.networkAddressFromCIDR("172.0.0.1/5"), "168.0.0.0")
    test.done()
