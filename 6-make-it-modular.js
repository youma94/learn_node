var fs = require('fs')
path = require('path')

module.exports = function (dir, ext, callback) {
    ext = '.' + ext

    fs.readdir(dir, function (err, data) {
        if (err) return callback(err);

        data = data.filter(el => path.extname(el) === ext)

        callback(null, data);
    });
};