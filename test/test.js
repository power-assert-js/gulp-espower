/*global describe, it*/
"use strict";

var fs = require("fs"),
    es = require("event-stream"),
    should = require("should"),
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
        stream.on("error", function(err) {
            should.exist(err);
            done(err);
        });
        stream.on("data", function (newFile) {
            should.exist(newFile);
            should.exist(newFile.contents);
            String(newFile.contents).should.equal(String(expectedFile.contents));
            done();
        });
        stream.write(srcFile);
        stream.end();
    });


    it("custom options", function (done) {
        var stream = espower({
            destructive: true,
            powerAssertVariableName: 'refute',
            targetMethods: {
                oneArg: [
                    'isNull'
                ],
                twoArgs: [
                    'same'
                ]
            }
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
        stream.on("error", function(err) {
            should.exist(err);
            done(err);
        });
        stream.on("data", function (newFile) {
            should.exist(newFile);
            should.exist(newFile.contents);
            String(newFile.contents).should.equal(String(expectedFile.contents));
            done();
        });
        stream.write(srcFile);
        stream.end();
    });


    it("should error on stream", function (done) {
        var stream = espower(),
            srcFile = new gutil.File({
                path: "test/fixtures/example.js",
                cwd: "test/",
                base: "test/fixtures",
                contents: fs.createReadStream("test/fixtures/example.js")
            });
        stream.on("error", function(err) {
            should.exist(err);
            done();
        });
        stream.on("data", function (newFile) {
            newFile.contents.pipe(es.wait(function(err, data) {
                done(err);
            }));
        });
        stream.write(srcFile);
        stream.end();
    });


    /*
    it("should produce expected file via stream", function (done) {

        var srcFile = new gutil.File({
            path: "test/fixtures/example.js",
            cwd: "test/",
            base: "test/fixtures",
            contents: fs.createReadStream("test/fixtures/example.js")
        });

        var stream = espower("World");

        stream.on("error", function(err) {
            should.exist(err);
            done();
        });

        stream.on("data", function (newFile) {

            should.exist(newFile);
            should.exist(newFile.contents);

            newFile.contents.pipe(es.wait(function(err, data) {
                should.not.exist(err);
                data.should.equal(String(expectedFile.contents));
                done();
            }));
        });

        stream.write(srcFile);
        stream.end();
    });
    */
});
