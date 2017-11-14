# cvss
A CommonJS library for working with Common Vulnerability Scoring System vectors and scores.

## Install

`npm i cvss`

## Usage

```javascript
var cvss = require('cvss');

var score = cvss.getScore('CVSS:3.0/AV:P/AC:H/PR:N/UI:R/S:C/C:L/I:H/A:L');

console.log(score) // => 6.2

var rating = cvss.getRating(score);

console.log(rating) // => Medium
```

### #getScore [String or Object input], [Object options (optional)]

This is the main scoring method. It may be called with either a valid CVSS3 vector string (`'CVSS:3.0/AV:P/AC:H/PR:N/UI:R/S:C/C:L/I:H/A:L'`) or an object containing the key/value pairs (`{ AV: 'P', AC: 'H', PR: 'N', UI:'R', S: 'C', C: 'L', I: 'H', A: 'L' }`) corresponding to one as its **input** parameter.

The optional **options** parameter controls whether validation errors throw or not and whether optional temporal and environmental metrics are considered in score calculation

**options**
- _throw_: if validation returns an error, throw the error
- _baseOnly_: only consider base metrics when calculating score
- _temporal_: include temporal metrics when calculating score
- _environmental_: include temporal AND environmental metrics when calculating score (both are included per CVSS3 spec)

### #getBaseScore [String or Object input], [Object options (optional)]

Accepts the same arguments as _getScore_ above, but enforces the _baseOnly_ option.

### #getTemporalScore [String or Object input], [Object options (optional)]

Accepts the same arguments as _getScore_ above, but enforces the _temporal_ option.
### #getEnvironmentalScore [String or Object input], [Object options (optional)]

Accepts the same arguments as _getScore_ above, but enforces the _environmental_ option.

### #getRating [Number score]

Given a numeric score, returns the appropriate CVSS3 severity rating for that number: _None_ for scores < 0.1, _Low_ for scores >= 0.1 and < 4, _Medium_ for scores >=4 and < 7, _High_ for scores >= 7 and < 9, _Critical_ for scores >= 9.

### #getBase [String or Object input], [Object options (optional)]

Returns an object with the base score and its rating. Equivalent to
```javascript
{
    score: getBaseScore(input),
    rating: getRating(getBaseScore(input))
}
```

### #getEnvironmental [String or Object input], [Object options (optional)]

Returns an object with the environmental score and its rating. Equivalent to
```javascript
{
    score: getEnvironmentalScore(input),
    rating: getRating(getEnvironmentalScore(input))
}
```

### #getTemporal [String or Object input], [Object options (optional)]

Returns an object with the environmental score and its rating. Equivalent to
```javascript
{
    score: getTemporalScore(input),
    rating: getRating(getTemporalScore(input))
}
```

### #getAll [String or Object input], [Object options (optional)]

Returns object with the score and rating for all three scores:
```javascript
{
    base: getBase(input),
    temporal: getTemporal(input),
    environmental: getEnvironmental(input)
}
```
