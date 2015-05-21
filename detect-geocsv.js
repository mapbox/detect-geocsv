module.exports = function(buf) {
    var lines = buf.toString().split(/\r\n|\r|\n/g);

    var i = 0;

    while (lines[i] === '')
        i++;

    var firstline = lines[i];

    var separator = detectSeparator(firstline);

    var headers = firstline.split(separator);

    headers = headers.map(function(header) {
        return header.replace(/"/g, '');
    });

    var geometryField = detectGeometryField(headers);
    if (!geometryField) {
        return false;
    }

    return true;
};

function detectSeparator(csv_line) {
    // implemented like: https://github.com/mapnik/mapnik/blob/f42805a5321d42f59b447a70f459058cf2c6cd5c/plugins/input/csv/csv_datasource.cpp#L209

    var separators = [',','\t','|',';'];
    var counts = separators.map(function(separator){
        return csv_line.split(separator).length - 1;
    });

    var best = null, max = 0;
    for (var i = 0; i < 4; i++) {
        if (counts[i] > max) {
            max = counts[i];
            best = separators[i];
        }
    }
    return best;
}

function detectGeometryField(fieldnames) {
    // adapted from: https://github.com/mapnik/mapnik/blob/f42805a5321d42f59b447a70f459058cf2c6cd5c/plugins/input/csv/csv_datasource.cpp#L293
    var result;
    for (var i = 0, n = fieldnames.length; i < n; i++) {
        var name = fieldnames[i].toLowerCase();
        if (name === 'wkt' || name === 'geom' || name === 'geometry') {
            result = {
                id: i,
                name: fieldnames[i],
                encoding: "WKT"
            }
            break;
        }
        if (name === 'geojson') {
            result = {
                id: i,
                name: fieldnames[i],
                encoding: "GeoJSON"
            };
            break;
        }
        if (name === 'x'
            || name === 'lon'
            || name === 'lng'
            || name === 'long'
            || name === 'longitude')
        {

            result = result || {
                id: {},
                name: {},
                encoding: "PointFromColumns"
            }
            continue;
        }
        if (name === 'y'
            || name === 'lat'
            || name === 'latitude')
        {

            result = result || {
                id: {},
                name: {},
                encoding: "PointFromColumns"
            }
            continue;
        }
    }
    return result;
};
