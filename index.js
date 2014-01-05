/*
 * gulp-espower - A gulp plugin to apply espower to target files.
 * 
 * https://github.com/twada/gulp-espower
 *
 * Copyright (c) 2013-2014 Takuto Wada
 * Licensed under the MIT license.
 *   https://raw.github.com/twada/gulp-espower/master/LICENSE-MIT
 */
var es = require('event-stream'),
    espower = require('espower'),
    esprima = require('esprima'),
    escodegen = require('escodegen'),
    merge = require('lodash.merge');

module.exports = function (opt) {
    'use strict';

    function instrument(file, cb) {
        var espowerOptions, jsCode, jsAst, modifiedAst;
        if (file.isNull()) {
            cb(null, file); // pass along
        } else if (file.isStream()) {
            cb(new Error('gulp-espower: Streaming not supported'));
        } else {
            jsCode = file.contents.toString('utf8');
            jsAst = esprima.parse(jsCode, {tolerant: true, loc: true, range: true});
            espowerOptions = merge(merge(espower.defaultOptions(), opt), {
                path: file.path,
                source: jsCode
            });
            modifiedAst = espower(jsAst, espowerOptions);
            file.contents = new Buffer(escodegen.generate(modifiedAst));
            cb(null, file);
        }
    }

    return es.map(instrument);
};
