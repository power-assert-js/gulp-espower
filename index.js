/**
 * gulp-espower - A gulp plugin to apply espower to target files.
 * 
 * https://github.com/twada/gulp-espower
 *
 * Copyright (c) 2013-2014 Takuto Wada
 * Licensed under the MIT license.
 *   https://github.com/twada/gulp-espower/blob/master/LICENSE-MIT
 */
var through = require('through2'),
    gutil = require('gulp-util'),
    BufferStreams = require('bufferstreams'),
    espowerSource = require('espower-source');

module.exports = function (opt) {
    'use strict';

    var transform = function (code, path) {
        return new Buffer(espowerSource(code, path, opt));
    };

    return through.obj(function (file, encoding, callback) {
        encoding = encoding || 'utf8';
        if (file.isNull()) {
            this.push(file);
        } else if (file.isBuffer()) {
            file.contents = transform(file.contents.toString(encoding), file.path);
            this.push(file);
        } else if (file.isStream()) {
            file.contents = file.contents.pipe(new BufferStreams(function(err, buf, cb) {
                if(err) {
                    cb(new gutil.PluginError('gulp-espower', err, {showStack: true}));
                } else {
                    cb(null, transform(buf.toString(encoding), file.path));
                }
            }));
            this.push(file);
        }
        callback();
    });
};
