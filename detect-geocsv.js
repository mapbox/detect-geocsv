/**
 * Determine whether an input is a CSV file that could be
 * put on a map: that it has geographical information
 * that amounts to points or geography.
 * @param {string|Buffer} buf input, an upload that could be any format
 * @returns {boolean} whether the content is or is not geographic
 * @example
 * var detect = require('detect-geocsv');
 * var buffer = fs.readFileSync('path/to/data/file.csv');
 * var isgeocsv = detect(buffer);
 * assert.ok(isgeocsv);
 */
function detectGeoCSV(buf) {
    var lines = buf.toString()
        .split(/\r\n|\r|\n/g)
        .filter(function(line) {
            return line !== '';
        });

    return !!lines.length &&
        !!detectGeometryField(lines[0]
            .split(detectSeparator(lines[0]))
            .map(function(header) {
                return header.replace(/"/g, '');
            }));

}

function detectSeparator(csv_line) {
    // implemented like: <https://github.com/mapnik/mapnik/blob/f42805a5321d42f59b447a70f459058cf2c6cd5c/plugins/input/csv/csv_datasource.cpp#L209>
    return [',','\t','|',';'].map(function(separator) {
        return [separator, csv_line.split(separator).length - 1];
    }).sort(function(a, b) {
        return b[1] - a[1];
    })[0][0];
}

function hasOne(list, items) {
    return list.some(function(item) {
        return items.indexOf(item) !== -1;
    });
}

function detectGeometryField(fieldnames) {
    // adapted from: <https://github.com/mapnik/mapnik/blob/f42805a5321d42f59b447a70f459058cf2c6cd5c/plugins/input/csv/csv_datasource.cpp#L293>
    var lowerCaseNames = fieldnames.map(function(name) {
        return name.toLowerCase().trim();
    });

    return hasOne(lowerCaseNames, ['wkt', 'geom', 'geometry', 'geojson']) ||
        (hasOne(lowerCaseNames, ['x', 'lon', 'lng', 'long', 'longitude']) &&
        hasOne(lowerCaseNames, ['y', 'lat', 'latitude']));

}

module.exports = detectGeoCSV;
