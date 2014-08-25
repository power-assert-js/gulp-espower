/*global describe, it*/
"use strict";

delete require.cache[require.resolve('../')];

var fs = require("fs"),
    es = require("event-stream"),
    assert = require("assert"),
    gutil = require("gulp-util"),
    espower = require("../");

describe("gulp-espower", function () {
    
    it("should produce expected file via buffer", function (done) {
        var stream = espower(),
            srcFile = new gutil.File({
                path: "test/fixtures/example.js",
                cwd: "test/",
                base: "test/fixtures",
                contents: fs.readFileSync("test/fixtures/example.js")
            }),
            expectedFile = new gutil.File({
                path: "test/expected/example.js",
                cwd: "test/",
                base: "test/expected",
                contents: fs.readFileSync("test/expected/example.js")
            });
        srcFile.sourceMap = {
            version : 3,
            file: srcFile.relative,
            names: [],
            mappings: '',
            sources: [srcFile.relative],
            sourcesContent: [srcFile.contents.toString()]
        };
        stream.on("error", function(err) {
            assert(err);
            done(err);
        });
        stream.on("data", function (newFile) {
            assert(newFile);
            assert(newFile.contents);
            assert.equal(newFile.contents.toString() + '\n', expectedFile.contents.toString());
            assert(newFile.sourceMap);
            assert.deepEqual(newFile.sourceMap, {
                "version":3,
                "sources":["example.js"],
                "names":["assert","require","truthy","falsy","_expr","_capt","content","filepath","line","equal"],
                "mappings":"AAAA,IAAIA,MAAA,GAASC,OAAA,CAAQ,cAAR,CAAb,EACIC,MAAA,GAAS,MADb,EAEIC,KAAA,GAAQ,OAFZ;AAGAH,MAAA,CAAOA,MAAA,CAAAI,KAAA,CAAAJ,MAAA,CAAAK,KAAA,CAAAF,KAAA;AAAA,IAAAG,OAAA;AAAA,IAAAC,QAAA;AAAA,IAAAC,IAAA;AAAA,EAAP,EAHA;AAIAR,MAAA,CAAOS,KAAP,CAAaT,MAAA,CAAAI,KAAA,CAAAJ,MAAA,CAAAK,KAAA,CAAAH,MAAA;AAAA,IAAAI,OAAA;AAAA,IAAAC,QAAA;AAAA,IAAAC,IAAA;AAAA,EAAb,EAAqBR,MAAA,CAAAI,KAAA,CAAAJ,MAAA,CAAAK,KAAA,CAAAF,KAAA;AAAA,IAAAG,OAAA;AAAA,IAAAC,QAAA;AAAA,IAAAC,IAAA;AAAA,EAArB",
                "file":"example.js",
                "sourceRoot":"test/fixtures",
                "sourcesContent":["var assert = require('power-assert'),\n    truthy = 'true',\n    falsy = 'false';\nassert(falsy);\nassert.equal(truthy, falsy);\n"]
            });
            done();
        });
        stream.write(srcFile);
        stream.end();
    });


    it("custom options", function (done) {
        var stream = espower({
            patterns: [
                'refute(actual, [message])',
                'refute.same(actual, expected, [message])',
                'refute.isNull(object, [message])'
            ]
        }),
            srcFile = new gutil.File({
                path: "test/fixtures/customized.js",
                cwd: "test/",
                base: "test/fixtures",
                contents: fs.readFileSync("test/fixtures/customized.js")
            }),
            expectedFile = new gutil.File({
                path: "test/expected/example.js",
                cwd: "test/",
                base: "test/expected",
                contents: fs.readFileSync("test/expected/customized.js")
            });
        srcFile.sourceMap = {
            version : 3,
            file: srcFile.relative,
            names: [],
            mappings: '',
            sources: [srcFile.relative],
            sourcesContent: [srcFile.contents.toString()]
        };
        stream.on("error", function(err) {
            assert(err);
            done(err);
        });
        stream.on("data", function (newFile) {
            assert(newFile);
            assert(newFile.contents);
            assert.equal(String(newFile.contents), String(expectedFile.contents));
            done();
        });
        stream.write(srcFile);
        stream.end();
    });


    it('should produce expected file via stream', function (done) {
        var stream = espower(),
            srcStream = new gutil.File({
                path: 'test/fixtures/example.js',
                cwd: 'test/',
                base: 'test/fixtures',
                contents: fs.createReadStream('test/fixtures/example.js')
            }),
            expectedFile = new gutil.File({
                path: 'test/expected/example.js',
                cwd: 'test/',
                base: 'test/expected',
                contents: fs.readFileSync('test/expected/example-with-sourcemap.js')
            });
        stream.on('error', function(err) {
            assert(err);
            done();
        });
        stream.on('data', function (newFile) {
            assert(newFile);
            assert(newFile.contents);
            newFile.contents.pipe(es.wait(function(err, data) {
                assert(!err);
                assert.equal(data, String(expectedFile.contents));
                done();
            }));
        });
        stream.write(srcStream);
        stream.end();
    });

});
