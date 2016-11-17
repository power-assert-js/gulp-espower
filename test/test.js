/*global describe, it*/
"use strict";

delete require.cache[require.resolve('../')];

var fs = require("fs");
var es = require("event-stream");
var assert = require("assert");
var gutil = require("gulp-util");
var convert = require('convert-source-map');
var espower = require("../");

describe("gulp-espower", function () {

    describe("should produce expected file via buffer", function () {
        var stream, srcFile, expectedFile;
        beforeEach(function () {
            stream = espower();
            srcFile = new gutil.File({
                path: process.cwd() + "/test/fixtures/example.js",
                cwd: process.cwd(),
                base: process.cwd() + "/test/fixtures",
                contents: fs.readFileSync("test/fixtures/example.js")
            });
            expectedFile = new gutil.File({
                path: process.cwd() + "/test/expected/example.js",
                cwd: process.cwd(),
                base: process.cwd() + "/test/expected",
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
                            '_PowerAssertRecorder1',
                            'PowerAssertRecorder',
                            'captured',
                            'prototype',
                            '_capt',
                            'value',
                            'espath',
                            'push',
                            '_expr',
                            'source',
                            'powerAssertContext',
                            'events',
                            '_rec1',
                            '_rec2',
                            '_rec3',
                            'assert',
                            'require',
                            'truthy',
                            'falsy',
                            'content',
                            'filepath',
                            'line',
                            'equal'
                        ],
                        mappings: 'AAAA,IAAAA,qBAAA;AAAA,aAAAC,mBAAA;AAAA,aAAAC,QAAA;AAAA;AAAA,IAAAD,mBAAA,CAAAE,SAAA,CAAAC,KAAA,YAAAA,KAAA,CAAAC,KAAA,EAAAC,MAAA;AAAA,aAAAJ,QAAA,CAAAK,IAAA;AAAA,YAAAF,KAAA,EAAAA,KAAA;AAAA,YAAAC,MAAA,EAAAA,MAAA;AAAA;AAAA,eAAAD,KAAA;AAAA;AAAA,IAAAJ,mBAAA,CAAAE,SAAA,CAAAK,KAAA,YAAAA,KAAA,CAAAH,KAAA,EAAAI,MAAA;AAAA;AAAA,YAAAC,kBAAA;AAAA,gBAAAL,KAAA,EAAAA,KAAA;AAAA,gBAAAM,MAAA,OAAAT,QAAA;AAAA;AAAA,YAAAO,MAAA,EAAAA,MAAA;AAAA;AAAA;AAAA,WAAAR,mBAAA;AAAA;AAGO,IAAAW,KAAA,OAAAZ,qBAAA,GAHP;AAIa,IAAAa,KAAA,OAAAb,qBAAA,GAJb;AAIqB,IAAAc,KAAA,OAAAd,qBAAA,GAJrB;AAAA,IAAIe,MAAA,GAASC,OAAA,CAAQ,cAAR,CAAb,EACIC,MAAA,GAAS,MADb,EAEIC,KAAA,GAAQ,OAFZ;AAGAH,MAAA,CAAOH,KAAA,CAAAJ,KAAA,CAAAI,KAAA,CAAAR,KAAA,CAAAc,KAAA;AAAA,IAAAC,OAAA;AAAA,IAAAC,QAAA;AAAA,IAAAC,IAAA;AAAA,EAAP,EAHA;AAIAN,MAAA,CAAOO,KAAP,CAAaT,KAAA,CAAAL,KAAA,CAAAK,KAAA,CAAAT,KAAA,CAAAa,MAAA;AAAA,IAAAE,OAAA;AAAA,IAAAC,QAAA;AAAA,IAAAC,IAAA;AAAA,EAAb,EAAqBP,KAAA,CAAAN,KAAA,CAAAM,KAAA,CAAAV,KAAA,CAAAc,KAAA;AAAA,IAAAC,OAAA;AAAA,IAAAC,QAAA;AAAA,IAAAC,IAAA;AAAA,EAArB',
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
                path: process.cwd() + "/test/fixtures/customized.js",
                cwd: process.cwd(),
                base: process.cwd() + "/test/fixtures",
                contents: fs.readFileSync("test/fixtures/customized.js")
            });
            expectedFile = new gutil.File({
                path: process.cwd() + "/test/expected/example.js",
                cwd: process.cwd(),
                base: process.cwd() + "/test/expected",
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
                            '_PowerAssertRecorder1',
                            'PowerAssertRecorder',
                            'captured',
                            'prototype',
                            '_capt',
                            'value',
                            'espath',
                            'push',
                            '_expr',
                            'source',
                            'powerAssertContext',
                            'events',
                            '_rec1',
                            '_rec2',
                            '_rec3',
                            '_rec4',
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
                            'content',
                            'filepath',
                            'line',
                            'isNull',
                            'same'
                        ],
                        mappings: 'AAAA,IAAAA,qBAAA;AAAA,aAAAC,mBAAA;AAAA,aAAAC,QAAA;AAAA;AAAA,IAAAD,mBAAA,CAAAE,SAAA,CAAAC,KAAA,YAAAA,KAAA,CAAAC,KAAA,EAAAC,MAAA;AAAA,aAAAJ,QAAA,CAAAK,IAAA;AAAA,YAAAF,KAAA,EAAAA,KAAA;AAAA,YAAAC,MAAA,EAAAA,MAAA;AAAA;AAAA,eAAAD,KAAA;AAAA;AAAA,IAAAJ,mBAAA,CAAAE,SAAA,CAAAK,KAAA,YAAAA,KAAA,CAAAH,KAAA,EAAAI,MAAA;AAAA;AAAA,YAAAC,kBAAA;AAAA,gBAAAL,KAAA,EAAAA,KAAA;AAAA,gBAAAM,MAAA,OAAAT,QAAA;AAAA;AAAA,YAAAO,MAAA,EAAAA,MAAA;AAAA;AAAA;AAAA,WAAAR,mBAAA;AAAA;AAMO,IAAAW,KAAA,OAAAZ,qBAAA,GANP;AAOc,IAAAa,KAAA,OAAAb,qBAAA,GAPd;AAQY,IAAAc,KAAA,OAAAd,qBAAA,GARZ;AAQoB,IAAAe,KAAA,OAAAf,qBAAA,GARpB;AAAA,IAAIgB,OAAA,GAAUC,OAAA,CAAQ,SAAR,CAAd,EACIC,SAAA,GAAYD,OAAA,CAAQ,wBAAR,CADhB,EAEIE,gBAAA,GAAmBF,OAAA,CAAQ,mBAAR,CAFvB,EAGIG,MAAA,GAASJ,OAAA,CAAQG,gBAAA,CAAiBC,MAAzB,EAAiCF,SAAA,EAAjC,EAA8C;AAAA,QAAEG,aAAA,EAAe;AAAA,YAAEC,MAAA,EAAQ,CAAC,QAAD,CAAV;AAAA,YAAsBC,OAAA,EAAS,CAAC,MAAD,CAA/B;AAAA,SAAjB;AAAA,KAA9C,CAHb,EAIIC,MAAA,GAAS,MAJb,EAKIC,KAAA,GAAQ,OALZ;AAMAL,MAAA,CAAOR,KAAA,CAAAJ,KAAA,CAAAI,KAAA,CAAAR,KAAA,CAAAoB,MAAA;AAAA,IAAAE,OAAA;AAAA,IAAAC,QAAA;AAAA,IAAAC,IAAA;AAAA,EAAP,EANA;AAOAR,MAAA,CAAOS,MAAP,CAAchB,KAAA,CAAAL,KAAA,CAAAK,KAAA,CAAAT,KAAA,CAAAqB,KAAA;AAAA,IAAAC,OAAA;AAAA,IAAAC,QAAA;AAAA,IAAAC,IAAA;AAAA,EAAd,EAPA;AAQAR,MAAA,CAAOU,IAAP,CAAYhB,KAAA,CAAAN,KAAA,CAAAM,KAAA,CAAAV,KAAA,CAAAoB,MAAA;AAAA,IAAAE,OAAA;AAAA,IAAAC,QAAA;AAAA,IAAAC,IAAA;AAAA,EAAZ,EAAoBb,KAAA,CAAAP,KAAA,CAAAO,KAAA,CAAAX,KAAA,CAAAqB,KAAA;AAAA,IAAAC,OAAA;AAAA,IAAAC,QAAA;AAAA,IAAAC,IAAA;AAAA,EAApB',
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
        var stream = espower();
        var srcStream = new gutil.File({
            path: process.cwd() + '/test/fixtures/example.js',
            cwd: process.cwd(),
            base: process.cwd() + '/test/fixtures',
            contents: fs.createReadStream('test/fixtures/example.js')
        });
        var expectedFile = new gutil.File({
            path: process.cwd() + '/test/expected/example.js',
            cwd: process.cwd(),
            base: process.cwd() + '/test/expected',
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
                assert.equal(data.toString('utf-8'), String(expectedFile.contents));
                done();
            }));
        });
        stream.write(srcStream);
        stream.end();
    });


    describe('should emit error when the file has a syntax error', function () {
        it('when file is Buffer', function (done) {
            var stream = espower();
            var srcFile = new gutil.File({
                path: process.cwd() + "/test/fixtures/syntax-error.js",
                cwd: process.cwd(),
                base: process.cwd() + "/test/fixtures",
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
        it('when file is Stream', function (done) {
            var stream = espower();
            var srcStream = new gutil.File({
                path: process.cwd() + "/test/fixtures/syntax-error.js",
                cwd: process.cwd(),
                base: process.cwd() + "/test/fixtures",
                contents: fs.createReadStream("test/fixtures/syntax-error.js")
            });
            assert.doesNotThrow(function() {
                stream.on("error", function(err) {
                    assert(err);
                    done();
                });
                stream.write(srcStream);
                stream.end();
            });
        });
    });
});
