/**
 * gulp-espower - A gulp plugin to apply espower to target files.
 * 
 * https://github.com/twada/gulp-espower
 *
 * Copyright (c) 2013-2014 Takuto Wada
 * Licensed under the MIT license.
 *   https://github.com/twada/gulp-espower/blob/master/LICENSE-MIT
 */
var es = require('event-stream'),
    espowerSource = require('espower-source');

module.exports = function (opt) {
    'use strict';

    function instrument(file, cb) {
        if (file.isNull()) {
            cb(null, file); // pass along
        } else if (file.isStream()) {
            cb(new Error('gulp-espower: Streaming not supported'));
        } else {
            file.contents = new Buffer(espowerSource(file.contents.toString('utf8'), file.path, opt));
            cb(null, file);
        }
    }

    return es.map(instrument);
};
