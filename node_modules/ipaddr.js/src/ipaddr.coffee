# Define the main object
ipaddr = {}

root = this

# Export for both the CommonJS and browser-like environment
if module? && module.exports
  module.exports = ipaddr
else
  root['ipaddr'] = ipaddr

# A generic CIDR (Classless Inter-Domain Routing) RFC1518 range matcher.
matchCIDR = (first, second, partSize, cidrBits) ->
  if first.length != second.length
    throw new Error "ipaddr: cannot match CIDR for objects with different lengths"

  part = 0
  while cidrBits > 0
    shift = partSize - cidrBits
    shift = 0 if shift < 0

    if first[part] >> shift != second[part] >> shift
      return false

    cidrBits -= partSize
    part     += 1

  return true

# An utility function to ease named range matching. See examples below.
# rangeList can contain both IPv4 and IPv6 subnet entries and will not throw errors
# on matching IPv4 addresses to IPv6 ranges or vice versa.
ipaddr.subnetMatch = (address, rangeList, defaultName='unicast') ->
  for rangeName, rangeSubnets of rangeList
    # ECMA5 Array.isArray isn't available everywhere
    if rangeSubnets[0] && !(rangeSubnets[0] instanceof Array)
      rangeSubnets = [ rangeSubnets ]

    for subnet in rangeSubnets
      if address.kind() == subnet[0].kind()
        if address.match.apply(address, subnet)
          return rangeName

  return defaultName

# An IPv4 address (RFC791).
class ipaddr.IPv4
  # Constructs a new IPv4 address from an array of four octets
  # in network order (MSB first)
  # Verifies the input.
  constructor: (octets) ->
    if octets.length != 4
      throw new Error "ipaddr: ipv4 octet count should be 4"

    for octet in octets
      if !(0 <= octet <= 255)
        throw new Error "ipaddr: ipv4 octet should fit in 8 bits"

    @octets = octets

  # The 'kind' method exists on both IPv4 and IPv6 classes.
  kind: ->
    return 'ipv4'

  # Returns the address in convenient, decimal-dotted format.
  toString: ->
    return @octets.join "."

  # Symmetrical method strictly for aligning with the IPv6 methods.
  toNormalizedString: ->
    return this.toString()

  # Returns an array of byte-sized values in network order (MSB first)
  toByteArray: ->
    return @octets.slice(0) # octets.clone

  # Checks if this address matches other one within given CIDR range.
  match: (other, cidrRange) ->
    if cidrRange == undefined
      [other, cidrRange] = other

    if other.kind() != 'ipv4'
      throw new Error "ipaddr: cannot match ipv4 address with non-ipv4 one"

    return matchCIDR(this.octets, other.octets, 8, cidrRange)

  # Special IPv4 address ranges.
  # See also https://en.wikipedia.org/wiki/Reserved_IP_addresses
  SpecialRanges:
    unspecified: [
      [ new IPv4([0,     0,    0,   0]),  8 ]
    ]
    broadcast: [
      [ new IPv4([255, 255,  255, 255]), 32 ]
    ]
    multicast: [ # RFC3171
      [ new IPv4([224,   0,    0,   0]), 4  ]
    ]
    linkLocal: [ # RFC3927
      [ new IPv4([169,   254,  0,   0]), 16 ]
    ]
    loopback: [ # RFC5735
      [ new IPv4([127,   0,    0,   0]), 8  ]
    ]
    carrierGradeNat: [ # RFC6598
      [ new IPv4([100,   64,   0,   0]), 10 ]
    ]
    private: [ # RFC1918
      [ new IPv4([10,    0,    0,   0]), 8  ]
      [ new IPv4([172,   16,   0,   0]), 12 ]
      [ new IPv4([192,   168,  0,   0]), 16 ]
    ]
    reserved: [ # Reserved and testing-only ranges; RFCs 5735, 5737, 2544, 1700
      [ new IPv4([192,   0,    0,   0]), 24 ]
      [ new IPv4([192,   0,    2,   0]), 24 ]
      [ new IPv4([192,  88,   99,   0]), 24 ]
      [ new IPv4([198,  51,  100,   0]), 24 ]
      [ new IPv4([203,   0,  113,   0]), 24 ]
      [ new IPv4([240,   0,    0,   0]), 4  ]
    ]

  # Checks if the address corresponds to one of the special ranges.
  range: ->
    return ipaddr.subnetMatch(this, @SpecialRanges)

  # Convrets this IPv4 address to an IPv4-mapped IPv6 address.
  toIPv4MappedAddress: ->
    return ipaddr.IPv6.parse "::ffff:#{@toString()}"

  # returns a number of leading ones in IPv4 address, making sure that
  # the rest is a solid sequence of 0's (valid netmask)
  # returns either the CIDR length or null if mask is not valid
  prefixLengthFromSubnetMask: ->
    # number of zeroes in octet
    zerotable =
      0:   8
      128: 7
      192: 6
      224: 5
      240: 4
      248: 3
      252: 2
      254: 1
      255: 0

    cidr = 0
    # non-zero encountered stop scanning for zeroes
    stop = false
    for i in [3..0] by -1
      octet = @octets[i]
      if octet of zerotable
        zeros = zerotable[octet]
        if stop and zeros != 0
          return null
        unless zeros == 8
          stop = true
        cidr += zeros
      else
        return null
    return 32 - cidr

# A list of regular expressions that match arbitrary IPv4 addresses,
# for which a number of weird notations exist.
# Note that an address like 0010.0xa5.1.1 is considered legal.
ipv4Part = "(0?\\d+|0x[a-f0-9]+)"
ipv4Regexes =
  fourOctet: new RegExp "^#{ipv4Part}\\.#{ipv4Part}\\.#{ipv4Part}\\.#{ipv4Part}$", 'i'
  longValue: new RegExp "^#{ipv4Part}$", 'i'

# Classful variants (like a.b, where a is an octet, and b is a 24-bit
# value representing last three octets; this corresponds to a class C
# address) are omitted due to classless nature of modern Internet.
ipaddr.IPv4.parser = (string) ->
  parseIntAuto = (string) ->
    if string[0] == "0" && string[1] != "x"
      parseInt(string, 8)
    else
      parseInt(string)

  # parseInt recognizes all that octal & hexadecimal weirdness for us
  if match = string.match(ipv4Regexes.fourOctet)
    return (parseIntAuto(part) for part in match[1..5])
  else if match = string.match(ipv4Regexes.longValue)
    value = parseIntAuto(match[1])
    if value > 0xffffffff || value < 0
      throw new Error "ipaddr: address outside defined range"
    return ((value >> shift) & 0xff for shift in [0..24] by 8).reverse()
  else
    return null

# An IPv6 address (RFC2460)
class ipaddr.IPv6
  # Constructs an IPv6 address from an array of eight 16-bit parts
  # or sixteen 8-bit parts in network order (MSB first).
  # Throws an error if the input is invalid.
  constructor: (parts, zoneId) ->
    if parts.length == 16
      @parts = []
      for i in [0..14] by 2
        @parts.push((parts[i] << 8) | parts[i + 1])
    else if parts.length == 8
      @parts = parts
    else
      throw new Error "ipaddr: ipv6 part count should be 8 or 16"

    for part in @parts
      if !(0 <= part <= 0xffff)
        throw new Error "ipaddr: ipv6 part should fit in 16 bits"

    if zoneId
      @zoneId = zoneId

  # The 'kind' method exists on both IPv4 and IPv6 classes.
  kind: ->
    return 'ipv6'

  # Returns the address in compact, human-readable format like
  # 2001:db8:8:66::1
  toString: ->
    stringParts = (part.toString(16) for part in @parts)

    compactStringParts = []
    pushPart = (part) -> compactStringParts.push part

    state = 0
    for part in stringParts
      switch state
        when 0
          if part == '0'
            pushPart('')
          else
            pushPart(part)

          state = 1
        when 1
          if part == '0'
            state = 2
          else
            pushPart(part)
        when 2
          unless part == '0'
            pushPart('')
            pushPart(part)
            state = 3
        when 3
          pushPart(part)

    if state == 2
      pushPart('')
      pushPart('')

    addr = compactStringParts.join ":"

    suffix = ''
    if @zoneId
      suffix = '%' + @zoneId

    return addr + suffix

  # Returns an array of byte-sized values in network order (MSB first)
  toByteArray: ->
    bytes = []
    for part in @parts
      bytes.push(part >> 8)
      bytes.push(part & 0xff)

    return bytes

  # Returns the address in expanded format with all zeroes included, like
  # 2001:db8:8:66:0:0:0:1
  toNormalizedString: ->
    addr = (part.toString(16) for part in @parts).join ":"

    suffix = ''
    if @zoneId
      suffix = '%' + @zoneId

    return addr + suffix

  # Checks if this address matches other one within given CIDR range.
  match: (other, cidrRange) ->
    if cidrRange == undefined
      [other, cidrRange] = other

    if other.kind() != 'ipv6'
      throw new Error "ipaddr: cannot match ipv6 address with non-ipv6 one"

    return matchCIDR(this.parts, other.parts, 16, cidrRange)

  # Special IPv6 ranges
  SpecialRanges:
    unspecified: [ new IPv6([0,      0,      0, 0, 0,      0,      0, 0]), 128 ] # RFC4291, here and after
    linkLocal:   [ new IPv6([0xfe80, 0,      0, 0, 0,      0,      0, 0]), 10  ]
    multicast:   [ new IPv6([0xff00, 0,      0, 0, 0,      0,      0, 0]), 8   ]
    loopback:    [ new IPv6([0,      0,      0, 0, 0,      0,      0, 1]), 128 ]
    uniqueLocal: [ new IPv6([0xfc00, 0,      0, 0, 0,      0,      0, 0]), 7   ]
    ipv4Mapped:  [ new IPv6([0,      0,      0, 0, 0,      0xffff, 0, 0]), 96  ]
    rfc6145:     [ new IPv6([0,      0,      0, 0, 0xffff, 0,      0, 0]), 96  ] # RFC6145
    rfc6052:     [ new IPv6([0x64,   0xff9b, 0, 0, 0,      0,      0, 0]), 96  ] # RFC6052
    '6to4':      [ new IPv6([0x2002, 0,      0, 0, 0,      0,      0, 0]), 16  ] # RFC3056
    teredo:      [ new IPv6([0x2001, 0,      0, 0, 0,      0,      0, 0]), 32  ] # RFC6052, RFC6146
    reserved: [
      [ new IPv6([ 0x2001, 0xdb8, 0, 0, 0, 0, 0, 0]), 32 ] # RFC4291
    ]

  # Checks if the address corresponds to one of the special ranges.
  range: ->
    return ipaddr.subnetMatch(this, @SpecialRanges)

  # Checks if this address is an IPv4-mapped IPv6 address.
  isIPv4MappedAddress: ->
    return @range() == 'ipv4Mapped'

  # Converts this address to IPv4 address if it is an IPv4-mapped IPv6 address.
  # Throws an error otherwise.
  toIPv4Address: ->
    unless @isIPv4MappedAddress()
      throw new Error "ipaddr: trying to convert a generic ipv6 address to ipv4"

    [high, low] = @parts[-2..-1]

    return new ipaddr.IPv4([high >> 8, high & 0xff, low >> 8, low & 0xff])

  # returns a number of leading ones in IPv6 address, making sure that
  # the rest is a solid sequence of 0's (valid netmask)
  # returns either the CIDR length or null if mask is not valid
  prefixLengthFromSubnetMask: ->
    # number of zeroes in octet
    zerotable =
      0    : 16
      32768: 15
      49152: 14
      57344: 13
      61440: 12
      63488: 11
      64512: 10
      65024: 9
      65280: 8
      65408: 7
      65472: 6
      65504: 5
      65520: 4
      65528: 3
      65532: 2
      65534: 1
      65535: 0

    cidr = 0
    # non-zero encountered stop scanning for zeroes
    stop = false
    for i in [7..0] by -1
      part = @parts[i]
      if part of zerotable
        zeros = zerotable[part]
        if stop and zeros != 0
          return null
        unless zeros == 16
          stop = true
        cidr += zeros
      else
        return null
    return 128 - cidr

# IPv6-matching regular expressions.
# For IPv6, the task is simpler: it is enough to match the colon-delimited
# hexadecimal IPv6 and a transitional variant with dotted-decimal IPv4 at
# the end.
ipv6Part = "(?:[0-9a-f]+::?)+"
zoneIndex = "%[0-9a-z]{1,}"
ipv6Regexes =
  zoneIndex:    new RegExp zoneIndex, 'i'
  native:       new RegExp "^(::)?(#{ipv6Part})?([0-9a-f]+)?(::)?(#{zoneIndex})?$", 'i'
  transitional: new RegExp "^((?:#{ipv6Part})|(?:::)(?:#{ipv6Part})?)" +
                           "#{ipv4Part}\\.#{ipv4Part}\\.#{ipv4Part}\\.#{ipv4Part}" +
                           "(#{zoneIndex})?$", 'i'

# Expand :: in an IPv6 address or address part consisting of `parts` groups.
expandIPv6 = (string, parts) ->
  # More than one '::' means invalid adddress
  if string.indexOf('::') != string.lastIndexOf('::')
    return null

  # Remove zone index and save it for later
  zoneId = (string.match(ipv6Regexes['zoneIndex']) || [])[0]
  if zoneId
    zoneId = zoneId.substring(1)
    string = string.replace(/%.+$/, '')

  # How many parts do we already have?
  colonCount = 0
  lastColon = -1
  while (lastColon = string.indexOf(':', lastColon + 1)) >= 0
    colonCount++

  # 0::0 is two parts more than ::
  colonCount-- if string.substr(0, 2) == '::'
  colonCount-- if string.substr(-2, 2) == '::'

  # The following loop would hang if colonCount > parts
  if colonCount > parts
    return null

  # replacement = ':' + '0:' * (parts - colonCount)
  replacementCount = parts - colonCount
  replacement = ':'
  while replacementCount--
    replacement += '0:'

  # Insert the missing zeroes
  string = string.replace('::', replacement)

  # Trim any garbage which may be hanging around if :: was at the edge in
  # the source string
  string = string[1..-1] if string[0] == ':'
  string = string[0..-2] if string[string.length-1] == ':'

  parts = (parseInt(part, 16) for part in string.split(":"))
  return { parts: parts, zoneId: zoneId }

# Parse an IPv6 address.
ipaddr.IPv6.parser = (string) ->
  if ipv6Regexes['native'].test(string)
    return expandIPv6(string, 8)

  else if match = string.match(ipv6Regexes['transitional'])
    zoneId = match[6] || ''
    addr = expandIPv6(match[1][0..-2] + zoneId, 6)
    if addr.parts
      octets = [parseInt(match[2]), parseInt(match[3]),
                parseInt(match[4]), parseInt(match[5])]
      for octet in octets
        if !(0 <= octet <= 255)
          return null

      addr.parts.push(octets[0] << 8 | octets[1])
      addr.parts.push(octets[2] << 8 | octets[3])
      return { parts: addr.parts, zoneId: addr.zoneId }

  return null

# Checks if a given string is formatted like IPv4/IPv6 address.
ipaddr.IPv4.isIPv4 = ipaddr.IPv6.isIPv6 = (string) ->
  return @parser(string) != null

# Checks if a given string is a valid IPv4/IPv6 address.
ipaddr.IPv4.isValid = (string) ->
  try
    new this(@parser(string))
    return true
  catch e
    return false

ipaddr.IPv4.isValidFourPartDecimal = (string) ->
  if ipaddr.IPv4.isValid(string) and string.match(/^\d+(\.\d+){3}$/)
    return true
  else
    return false

ipaddr.IPv6.isValid = (string) ->
  # Since IPv6.isValid is always called first, this shortcut
  # provides a substantial performance gain.
  if typeof string == "string" and string.indexOf(":") == -1
    return false

  try
    addr = @parser(string)
    new this(addr.parts, addr.zoneId)
    return true
  catch e
    return false

# Tries to parse and validate a string with IPv4/IPv6 address.
# Throws an error if it fails.
ipaddr.IPv4.parse = (string) ->
  parts = @parser(string)
  if parts == null
    throw new Error "ipaddr: string is not formatted like ip address"

  return new this(parts)

ipaddr.IPv6.parse = (string) ->
  addr = @parser(string)
  if addr.parts == null
    throw new Error "ipaddr: string is not formatted like ip address"

  return new this(addr.parts, addr.zoneId)

ipaddr.IPv4.parseCIDR = (string) ->
  if match = string.match(/^(.+)\/(\d+)$/)
    maskLength = parseInt(match[2])
    if maskLength >= 0 and maskLength <= 32
      return [@parse(match[1]), maskLength]

  throw new Error "ipaddr: string is not formatted like an IPv4 CIDR range"

# A utility function to return subnet mask in IPv4 format given the prefix length
ipaddr.IPv4.subnetMaskFromPrefixLength = (prefix) ->
  prefix = parseInt(prefix)
  if prefix < 0 or prefix > 32
    throw new Error('ipaddr: invalid IPv4 prefix length')
  octets = [0, 0, 0, 0]
  j = 0
  filledOctetCount = Math.floor(prefix / 8)
  while j < filledOctetCount
    octets[j] = 255
    j++
  if filledOctetCount < 4
    octets[filledOctetCount] = Math.pow(2, (prefix % 8)) - 1 << 8 - (prefix % 8)
  new @(octets)

# A utility function to return broadcast address given the IPv4 interface and prefix length in CIDR notation
ipaddr.IPv4.broadcastAddressFromCIDR = (string) ->
  try
    cidr = @parseCIDR(string)
    ipInterfaceOctets = cidr[0].toByteArray()
    subnetMaskOctets = @subnetMaskFromPrefixLength(cidr[1]).toByteArray()
    octets = []
    i = 0
    while i < 4
      # Broadcast address is bitwise OR between ip interface and inverted mask
      octets.push parseInt(ipInterfaceOctets[i], 10) | parseInt(subnetMaskOctets[i], 10) ^ 255
      i++
    return new @(octets)
  catch error
    throw new Error('ipaddr: the address does not have IPv4 CIDR format')
  return

# A utility function to return network address given the IPv4 interface and prefix length in CIDR notation
ipaddr.IPv4.networkAddressFromCIDR = (string) ->
  try
    cidr = @parseCIDR(string)
    ipInterfaceOctets = cidr[0].toByteArray()
    subnetMaskOctets = @subnetMaskFromPrefixLength(cidr[1]).toByteArray()
    octets = []
    i = 0
    while i < 4
      # Network address is bitwise AND between ip interface and mask
      octets.push parseInt(ipInterfaceOctets[i], 10) & parseInt(subnetMaskOctets[i], 10)
      i++
    return new @(octets)
  catch error
    throw new Error('ipaddr: the address does not have IPv4 CIDR format')
  return

ipaddr.IPv6.parseCIDR = (string) ->
  if match = string.match(/^(.+)\/(\d+)$/)
    maskLength = parseInt(match[2])
    if maskLength >= 0 and maskLength <= 128
      return [@parse(match[1]), maskLength]

  throw new Error "ipaddr: string is not formatted like an IPv6 CIDR range"

# Checks if the address is valid IP address
ipaddr.isValid = (string) ->
  return ipaddr.IPv6.isValid(string) || ipaddr.IPv4.isValid(string)

# Try to parse an address and throw an error if it is impossible
ipaddr.parse = (string) ->
  if ipaddr.IPv6.isValid(string)
    return ipaddr.IPv6.parse(string)
  else if ipaddr.IPv4.isValid(string)
    return ipaddr.IPv4.parse(string)
  else
    throw new Error "ipaddr: the address has neither IPv6 nor IPv4 format"

ipaddr.parseCIDR = (string) ->
  try
    return ipaddr.IPv6.parseCIDR(string)
  catch e
    try
      return ipaddr.IPv4.parseCIDR(string)
    catch e
      throw new Error "ipaddr: the address has neither IPv6 nor IPv4 CIDR format"

# Try to parse an array in network order (MSB first) for IPv4 and IPv6
ipaddr.fromByteArray = (bytes) ->
  length = bytes.length
  if length == 4
    return new ipaddr.IPv4(bytes)
  else if length == 16
    return new ipaddr.IPv6(bytes)
  else
    throw new Error "ipaddr: the binary input is neither an IPv6 nor IPv4 address"

# Parse an address and return plain IPv4 address if it is an IPv4-mapped address
ipaddr.process = (string) ->
  addr = @parse(string)
  if addr.kind() == 'ipv6' && addr.isIPv4MappedAddress()
    return addr.toIPv4Address()
  else
    return addr
