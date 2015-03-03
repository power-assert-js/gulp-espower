/*global describe, it*/
"use strict";

delete require.cache[require.resolve('../')];

var fs = require("fs"),
    es = require("event-stream"),
    assert = require("assert"),
    gutil = require("gulp-util"),
    convert = require('convert-source-map'),
    espower = require("../");

describe("gulp-espower", function () {

    describe("should produce expected file via buffer", function () {
        var stream, srcFile, expectedFile;
        beforeEach(function () {
            stream = espower();
            srcFile = new gutil.File({
                path: "test/fixtures/example.js",
                cwd: "test/",
                base: "test/fixtures",
                contents: fs.readFileSync("test/fixtures/example.js")
            });
            expectedFile = new gutil.File({
                path: "test/expected/example.js",
                cwd: "test/",
                base: "test/expected",
                contents: fs.readFileSync("test/expected/example.js")
            });
        });
        describe('without upstream sourceMap', function () {
            it("produce code without sourceMap", function (done) {
                stream.on("error", function(err) {
                    assert(err);
                    done(err);
                });
                stream.on("data", function (newFile) {
                    assert(newFile);
                    assert(newFile.contents);
                    assert(expectedFile.contents);
                    assert.equal(newFile.contents.toString() + '\n', expectedFile.contents.toString());
                    assert(! newFile.sourceMap);
                    done();
                });
                stream.write(srcFile);
                stream.end();
            });
        });
        describe('with upstream sourceMap', function () {
            beforeEach(function () {
                srcFile.sourceMap = {
                    version : 3,
                    file: srcFile.relative,
                    names: [],
                    mappings: '',
                    sources: [srcFile.relative],
                    sourcesContent: [srcFile.contents.toString()]
                };
            });
            it("push file.sourceMap to downstream", function (done) {
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
                        version: 3,
                        sources: [
                            'example.js'
                        ],
                        names: [
                            'assert',
                            'require',
                            'truthy',
                            'falsy',
                            '_expr',
                            '_capt',
                            'content',
                            'filepath',
                            'line',
                            'equal'
                        ],
                        mappings: 'AAAA,IAAIA,MAAA,GAASC,OAAA,CAAQ,cAAR,CAAb,EACIC,MAAA,GAAS,MADb,EAEIC,KAAA,GAAQ,OAFZ;AAGAH,MAAA,CAAOA,MAAA,CAAAI,KAAA,CAAAJ,MAAA,CAAAK,KAAA,CAAAF,KAAA;AAAA,IAAAG,OAAA;AAAA,IAAAC,QAAA;AAAA,IAAAC,IAAA;AAAA,EAAP,EAHA;AAIAR,MAAA,CAAOS,KAAP,CAAaT,MAAA,CAAAI,KAAA,CAAAJ,MAAA,CAAAK,KAAA,CAAAH,MAAA;AAAA,IAAAI,OAAA;AAAA,IAAAC,QAAA;AAAA,IAAAC,IAAA;AAAA,EAAb,EAAqBR,MAAA,CAAAI,KAAA,CAAAJ,MAAA,CAAAK,KAAA,CAAAF,KAAA;AAAA,IAAAG,OAAA;AAAA,IAAAC,QAAA;AAAA,IAAAC,IAAA;AAAA,EAArB',
                        file: 'example.js',
                        sourcesContent: [ 'var assert = require(\'power-assert\'),\n    truthy = \'true\',\n    falsy = \'false\';\nassert(falsy);\nassert.equal(truthy, falsy);\n' ] 
                    });
                    done();
                });
                stream.write(srcFile);
                stream.end();
            });
        });
    });
    


    describe("custom options", function (done) {
        var stream, srcFile, expectedFile;
        beforeEach(function () {
            stream = espower({
                patterns: [
                    'refute(actual, [message])',
                    'refute.same(actual, expected, [message])',
                    'refute.isNull(object, [message])'
                ]
            });
            srcFile = new gutil.File({
                path: "test/fixtures/customized.js",
                cwd: "test/",
                base: "test/fixtures",
                contents: fs.readFileSync("test/fixtures/customized.js")
            });
            expectedFile = new gutil.File({
                path: "test/expected/example.js",
                cwd: "test/",
                base: "test/expected",
                contents: fs.readFileSync("test/expected/customized.js")
            });
        });
        describe('without upstream sourceMap', function () {
            it("produce code without sourceMap", function (done) {
                stream.on("error", function(err) {
                    assert(err);
                    done(err);
                });
                stream.on("data", function (newFile) {
                    assert(newFile);
                    assert(newFile.contents);
                    assert.equal(newFile.contents.toString() + '\n', expectedFile.contents.toString());
                    assert(! newFile.sourceMap);
                    done();
                });
                stream.write(srcFile);
                stream.end();
            });
        });
        describe('with upstream sourceMap', function () {
            beforeEach(function () {
                srcFile.sourceMap = {
                    version : 3,
                    file: srcFile.relative,
                    names: [],
                    mappings: '',
                    sources: [srcFile.relative],
                    sourcesContent: [srcFile.contents.toString()]
                };
            });
            it("push file.sourceMap to downstream", function (done) {
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
                        version: 3,
                        sources: [
                            'customized.js'
                        ],
                        names: [
                            'empower',
                            'require',
                            'formatter',
                            'busterAssertions',
                            'refute',
                            'targetMethods',
                            'oneArg',
                            'twoArgs',
                            'truthy',
                            'falsy',
                            '_expr',
                            '_capt',
                            'content',
                            'filepath',
                            'line',
                            'isNull',
                            'same'
                        ],
                        mappings: 'AAAA,IAAIA,OAAA,GAAUC,OAAA,CAAQ,SAAR,CAAd,EACIC,SAAA,GAAYD,OAAA,CAAQ,wBAAR,CADhB,EAEIE,gBAAA,GAAmBF,OAAA,CAAQ,mBAAR,CAFvB,EAGIG,MAAA,GAASJ,OAAA,CAAQG,gBAAA,CAAiBC,MAAzB,EAAiCF,SAAA,EAAjC,EAA8C;AAAA,QAAEG,aAAA,EAAe;AAAA,YAAEC,MAAA,EAAQ,CAAC,QAAD,CAAV;AAAA,YAAsBC,OAAA,EAAS,CAAC,MAAD,CAA/B;AAAA,SAAjB;AAAA,KAA9C,CAHb,EAIIC,MAAA,GAAS,MAJb,EAKIC,KAAA,GAAQ,OALZ;AAMAL,MAAA,CAAOA,MAAA,CAAAM,KAAA,CAAAN,MAAA,CAAAO,KAAA,CAAAH,MAAA;AAAA,IAAAI,OAAA;AAAA,IAAAC,QAAA;AAAA,IAAAC,IAAA;AAAA,EAAP,EANA;AAOAV,MAAA,CAAOW,MAAP,CAAcX,MAAA,CAAAM,KAAA,CAAAN,MAAA,CAAAO,KAAA,CAAAF,KAAA;AAAA,IAAAG,OAAA;AAAA,IAAAC,QAAA;AAAA,IAAAC,IAAA;AAAA,EAAd,EAPA;AAQAV,MAAA,CAAOY,IAAP,CAAYZ,MAAA,CAAAM,KAAA,CAAAN,MAAA,CAAAO,KAAA,CAAAH,MAAA;AAAA,IAAAI,OAAA;AAAA,IAAAC,QAAA;AAAA,IAAAC,IAAA;AAAA,EAAZ,EAAoBV,MAAA,CAAAM,KAAA,CAAAN,MAAA,CAAAO,KAAA,CAAAF,KAAA;AAAA,IAAAG,OAAA;AAAA,IAAAC,QAAA;AAAA,IAAAC,IAAA;AAAA,EAApB',
                        file: 'customized.js',
                        sourcesContent: [ 'var empower = require(\'empower\'),\n    formatter = require(\'power-assert-formatter\'),\n    busterAssertions = require("buster-assertions"),\n    refute = empower(busterAssertions.refute, formatter(), { targetMethods: { oneArg: [\'isNull\'], twoArgs: [\'same\'] } }),\n    truthy = \'true\',\n    falsy = \'false\';\nrefute(truthy);\nrefute.isNull(falsy);\nrefute.same(truthy, falsy);\n' ]
                    });
                    done();
                });
                stream.write(srcFile);
                stream.end();
            });
        });
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

    it('should emit the error when the file has a syntax error', function (done) {
        var stream = espower(),
            srcFile = new gutil.File({
                path: "test/fixtures/syntax-error.js",
                cwd: "test/",
                base: "test/fixtures",
                contents: fs.readFileSync("test/fixtures/syntax-error.js")
            });
        assert.doesNotThrow(function() {
          stream.on("error", function(err) {
            assert(err);
            done();
          });
          stream.write(srcFile);
          stream.end();
        });
    });
});
