# detect-geocsv

Node module that returns if a buffer has geocsv headers.

Version format follows [Semantic Version](http://semver.org/)

[![Build Status](https://travis-ci.org/mapbox/detect-geocsv.svg?branch=master)](https://travis-ci.org/mapbox/detect-geocsv)

## Install

With npm:

    npm install @mapbox/detect-geocsv

## API

### detectGeoCSV

Determine whether an input is a CSV file that could be
put on a map: that it has geographical information
that amounts to points or geography.

**Parameters**

-   `buf` **string or Buffer** input, an upload that could be any format

**Examples**

```javascript
var detect = require('@mapbox/detect-geocsv');
var buffer = fs.readFileSync('path/to/data/file.csv');
var isgeocsv = detect(buffer);
assert.ok(isgeocsv);
```

Returns **boolean** whether the content is or is not geographic

## CLI Usage

```sh
$ detect-geocsv file.csv
# echoes either true or false
```

## Tests

`npm test`
