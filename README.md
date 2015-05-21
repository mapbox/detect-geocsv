detect-geocsv
=============

Node module that returns if a buffer has geocsv headers.

Version format follows [Semantic Version](http://semver.org/)

[![Build Status](https://travis-ci.org/mapbox/detect-geocsv.svg?branch=master)](https://travis-ci.org/mapbox/detect-geocsv)

## Install
With npm:
```
npm install -g detect-geocsv
```

## Example
```
var detect = require('detect-geocsv');
var buffer = fs.readFileSync('path/to/data/file.csv');

var isgeocsv = detect(buffer);

assert.ok(isgeocsv);
```

## Tests
`npm test`
