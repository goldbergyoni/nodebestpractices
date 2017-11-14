# base64url  [![Build Status](https://secure.travis-ci.org/brianloveswords/base64url.png)](http://travis-ci.org/brianloveswords/base64url)

Converting to, and from, [base64url](http://en.wikipedia.org/wiki/Base64#RFC_4648)

# Install

```bash
$ npm install base64url
```

After installing with `npm` you can require this library from JavaScript or TypeScript:

JavaScript
```js
const base64url = require('base64url');
```

TypeScript:
```typescript
import base64url from "base64url";
```

# Usage

## CLI

The CLI has been removed. For the time being, please install `base64url@1.0.6` if you need the CLI.

## Library

### base64url(input: string | Buffer, encoding: string = "utf8"): string

### base64url.encode(input: string | Buffer, encoding: string = "utf8"): string

base64url encode `input`. Input should be a `string` or a `Buffer`.


Example

```js
> base64url("ladies and gentlemen we are floating in space")
'bGFkaWVzIGFuZCBnZW50bGVtYW4sIHdlIGFyZSBmbG9hdGluZyBpbiBzcGFjZQ'
```

---

### base64url.decode(input: string, encoding: string = "utf8"): string

Convert a base64url encoded string into a raw string. The `encoding` argument can be used if the input is a string that's not utf8.

```js
> base64url.decode("cmlkZTogZHJlYW1zIGJ1cm4gZG93bg")
'ride: dreams burn down'
```

---

### base64url.fromBase64(input: string): string

Convert a base64 encoded string to a base64url encoded string.

Example

```js
> base64url.fromBase64('qL8R4QIcQ/ZsRqOAbeRfcZhilN/MksRtDaErMA==')
'qL8R4QIcQ_ZsRqOAbeRfcZhilN_MksRtDaErMA'
```

---


### base64url.toBase64(input: string): string

Convert a base64url encoded string to a base64 encoded string.

```js
> base64url.toBase64('qL8R4QIcQ_ZsRqOAbeRfcZhilN_MksRtDaErMA')
'qL8R4QIcQ/ZsRqOAbeRfcZhilN/MksRtDaErMA=='
```

---


### base64url.toBuffer(input: string): Buffer

Convert a base64url encoded string to a Buffer containing the decoded bytes.

```js
> base64url.toBuffer('c3Bpcml0dWFsaXplZA')
<Buffer 73 70 69 72 69 74 75 61 6c 69 7a 65 64>
```

# License

MIT

```
Copyright (c) 2013–2016 Brian J. Brennan

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
