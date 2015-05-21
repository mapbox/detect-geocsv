var tape = require('tape');
var path = require('path');
var fs = require('fs');
var testData = path.dirname(require.resolve('mapnik-test-data'));
var isgeocsv = require('../detect-geocsv.js');

tape('[CSV] Sniffing file with empty rows: should return csv filetype and omnivore protocol', function(assert) {
    var filepath = path.resolve('./test/data/valid-empty_rows.csv');
    var buffer;
    try {
        fs.statSync(filepath);
        buffer = new Buffer(512);
        var fd = fs.openSync(filepath, 'r');
        fs.readSync(fd, buffer, 0, 512, 0);
        fs.closeSync(fd);
    } catch (err) {
        return assert.end(err);
    }
    var result = isgeocsv(buffer);
    assert.ok(result);
    assert.end();
});
