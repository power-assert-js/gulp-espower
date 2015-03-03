/**
 * gulp-espower - A gulp plugin to apply espower to target files.
 * 
 * https://github.com/twada/gulp-espower
 *
 * Copyright (c) 2013-2015 Takuto Wada
 * Licensed under the MIT license.
 *   https://github.com/twada/gulp-espower/blob/master/LICENSE-MIT
 */
'use strict';

var through = require('through2'),
    gutil = require('gulp-util'),
    extend = require('xtend'),
    BufferStreams = require('bufferstreams'),
    espower = require('espower'),
    espowerSource = require('espower-source'),
    esprima = require('esprima'),
    escodegen = require('escodegen'),
    applySourceMap = require('vinyl-sourcemaps-apply'),
    transfer = require('multi-stage-sourcemap').transfer,
    convert = require('convert-source-map');

function mergeSourceMap(incomingSourceMap, outgoingSourceMap) {
    if (typeof outgoingSourceMap === 'string' || outgoingSourceMap instanceof String) {
        outgoingSourceMap = JSON.parse(outgoingSourceMap);
    }
    if (!incomingSourceMap) {
        return outgoingSourceMap;
    }
    return JSON.parse(transfer({fromSourceMap: outgoingSourceMap, toSourceMap: incomingSourceMap}));
}

function transform (file, encoding, opt) {
    var inMap = file.sourceMap;
    var escodegenOptions = {};
    var jsCode = file.contents.toString(encoding);

    // use file.relative to keep paths relative until the end of chain
    var jsAst = esprima.parse(jsCode, {tolerant: true, loc: true, source: file.relative});

    var espowerOptions = extend(espower.defaultOptions(), opt, {
        destructive: true,
        path: file.path
    });
    if (inMap) {
        espowerOptions.sourceMap = inMap;
        escodegenOptions = extend(escodegenOptions, {
            file: file.relative,
            sourceMap: true,
            // do not set sourceMapRoot to keep paths relative until the end of chain
            // sourceMapRoot: file.base,
            sourceMapWithCode: true
        });
    }
    var modifiedAst = espower(jsAst, espowerOptions);
    var escodegenOutput = escodegen.generate(modifiedAst, escodegenOptions);
    if (inMap) {
        file.contents = new Buffer(escodegenOutput.code);
        var outMap = convert.fromJSON(escodegenOutput.map.toString());
        outMap.setProperty('sources', inMap.sources);
        outMap.setProperty('sourcesContent', inMap.sourcesContent);

        var reMap;
        if (inMap.mappings === '') {
            applySourceMap(file, outMap.toJSON());
            reMap = convert.fromObject(file.sourceMap);
        } else {
            reMap = convert.fromObject(mergeSourceMap(inMap, outMap.toJSON()));
        }
        reMap.setProperty('sources', inMap.sources);
        reMap.setProperty('sourcesContent', inMap.sourcesContent);
        // do not set sourceMapRoot to keep paths relative until the end of chain
        // reMap.setProperty('sourceRoot', file.base);

        file.sourceMap = reMap.toObject();
    } else {
        file.contents = new Buffer(escodegenOutput);
    }
}

module.exports = function (opt) {
    return through.obj(function (file, encoding, callback) {
        encoding = encoding || 'utf8';
        if (file.isNull()) {
            this.push(file);
        } else if (file.isBuffer()) {
            try {
              transform(file, encoding, opt);
              this.push(file);
            } catch (err) {
              return callback(new gutil.PluginError('gulp-espoewr', err, {showStack: true}));
            }
        } else if (file.isStream()) {
            file.contents = file.contents.pipe(new BufferStreams(function(err, buf, cb) {
                if(err) {
                    cb(new gutil.PluginError('gulp-espower', err, {showStack: true}));
                } else {
                    cb(null, new Buffer(espowerSource(buf.toString(encoding), file.path, opt)));
                }
            }));
            this.push(file);
        }
        callback();
    });
};
