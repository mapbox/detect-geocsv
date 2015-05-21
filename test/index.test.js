var tape = require('tape');
var path = require('path');
var fs = require('fs');
var testData = path.dirname(require.resolve('mapnik-test-data'));
var isgeocsv = require('../detect-geocsv.js');

tape('[CSV] Detecting valid CSV files: should return true', function(assert) {
    var folder = testData + '/data/csv/';
    var files = fs.readdirSync(folder);

    files.forEach(function(filename) {
        var filepath = folder + filename;
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
        assert.ok(result, filename + 'comes back true');
    });
    assert.end();
});

tape('[GEOJSON] Detecting non-CSV files: should return false', function(assert) {
    var folder = testData + '/data/geojson/';
    var files = fs.readdirSync(folder);

    files.forEach(function(filename) {
        var filepath = folder + filename;
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
        assert.ok(!result, filename + 'comes back false');
    });
    assert.end();
});

tape('[GEOTIFF] Detecting non-CSV files: should return false', function(assert) {
    var folder = testData + '/data/geotiff/';
    var files = fs.readdirSync(folder);

    files.forEach(function(filename) {
        var filepath = folder + filename;
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
        assert.ok(!result, filename + 'comes back false');
    });
    assert.end();
});

tape('[GPX] Detecting non-CSV files: should return false', function(assert) {
    var folder = testData + '/data/gpx/';
    var files = fs.readdirSync(folder);

    files.forEach(function(filename) {
        var filepath = folder + filename;
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
        assert.ok(!result, filename + ' comes back false');
    });
    assert.end();
});

tape('[KML] Detecting non-CSV files: should return false', function(assert) {
    var folder = testData + '/data/kml/';
    var files = fs.readdirSync(folder);

    files.forEach(function(filename) {
        var filepath = folder + filename;
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
        assert.ok(!result, filename + ' comes back false');
    });
    assert.end();
});

tape('[topojson] Detecting non-CSV files: should return false', function(assert) {
    var folder = testData + '/data/topojson/';
    var files = fs.readdirSync(folder);

    files.forEach(function(filename) {
        var filepath = folder + filename;
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
        assert.ok(!result, filename + ' comes back false');
    });
    assert.end();
});

tape('[vrt] Detecting non-CSV files: should return false', function(assert) {
    var folder = testData + '/data/vrt/';
    var files = fs.readdirSync(folder);

    files.forEach(function(filename) {
        var filepath = folder + filename;
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
        assert.ok(!result, filename + ' comes back false');
    });
    assert.end();
});

tape('[zip] Detecting non-CSV files: should return false', function(assert) {
    var folder = testData + '/data/zip/';
    var files = fs.readdirSync(folder);

    files.forEach(function(filename) {
        var filepath = folder + filename;
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
        assert.ok(!result, filename + ' comes back false');
    });
    assert.end();
});
