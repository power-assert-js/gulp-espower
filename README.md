# gulp-espower

[![Build Status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]
[![Dependency Status][depstat-image]][depstat-url]
[![License][license-image]][license-url]

> A [gulp](https://github.com/gulpjs/gulp) plugin for [power-assert](https://github.com/power-assert-js/power-assert).

## Description

`gulp-espower` is a gulp plugin to instrument "Power Assert" feature into your code.


Internally, `gulp-espower` task uses `espower` module that manipulates assertion expression (JavaScript Code) defined in [The ESTree Spec](https://github.com/estree/estree) (formerly known as [Mozilla SpiderMonkey Parser API](https://developer.mozilla.org/en-US/docs/SpiderMonkey/Parser_API)), to instrument power-assert feature into the code. The magic is done by using [Esprima](http://esprima.org/) and [Escodegen](https://github.com/Constellation/escodegen).


Pull-requests, issue reports and patches are always welcomed. See [power-assert](https://github.com/power-assert-js/power-assert) project for more documentation.


## Usage

First, install `gulp-espower` as a development dependency:

```shell
npm install --save-dev gulp-espower
```

Then, add it to your `gulpfile.js`:

```javascript
var espower = require('gulp-espower');

gulp.src('./test/*.js')
    .pipe(espower())
    .pipe(gulp.dest('./dist'));
```


## Source maps

gulp-espower works with [gulp-sourcemaps](https://github.com/floridoo/gulp-sourcemaps) to generate source maps for the instrumented javascript code. Note that you should `init` gulp-sourcemaps prior to running the gulp-espower and `write` the source maps after. gulp-espower works well with some gulp plugins that supports [gulp-sourcemaps](https://github.com/floridoo/gulp-sourcemaps).

```javascript
var espower = require('gulp-espower');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

// compile, instrument then concatinate
gulp.src('./test/*test.coffee')
    .pipe(sourcemaps.init())
    .pipe(coffee())
    .pipe(espower())
    .pipe(concat('all_test.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build'));
// will write the source maps inline in the code
```

For more information, see [gulp-sourcemaps](https://github.com/floridoo/gulp-sourcemaps).


## API

### espower(options)

#### options.patterns

| type                | default value       |
|:--------------------|:--------------------|
| `Array` of `string` | objects shown below |

```javascript
[
    'assert(value, [message])',
    'assert.ok(value, [message])',
    'assert.equal(actual, expected, [message])',
    'assert.notEqual(actual, expected, [message])',
    'assert.strictEqual(actual, expected, [message])',
    'assert.notStrictEqual(actual, expected, [message])',
    'assert.deepEqual(actual, expected, [message])',
    'assert.notDeepEqual(actual, expected, [message])',
    'assert.deepStrictEqual(actual, expected, [message])',
    'assert.notDeepStrictEqual(actual, expected, [message])'
]
```

Target patterns for power assert feature instrumentation.

If callee name (for example, `assert.equal`) matches exactly and number of arguments is satisfied, then the assertion will be modified.
Detection is done by [escallmatch](https://github.com/twada/escallmatch). Any arguments enclosed in bracket (for example, `[message]`) means optional parameters. Without bracket means mandatory parameters.


## CHANGELOG

See [CHANGELOG](https://github.com/power-assert-js/gulp-espower/blob/master/CHANGELOG.md)


## OUR SUPPORT POLICY

We support Node under maintenance. In other words, we stop supporting old Node version when [their maintenance ends](https://github.com/nodejs/LTS).

This means that any other environment is not supported.

NOTE: If gulp-espower works in any of the unsupported environments, it is purely coincidental and has no bearing on future compatibility. Use at your own risk.


## AUTHOR

* [Takuto Wada](https://github.com/twada)


## CONTRIBUTORS

* [bouzuya](http://bouzuya.net)


## License

Licensed under the [MIT](https://github.com/power-assert-js/gulp-espower/blob/master/LICENSE-MIT) license.

[npm-url]: https://npmjs.org/package/gulp-espower
[npm-image]: https://badge.fury.io/js/gulp-espower.svg

[travis-url]: https://travis-ci.org/power-assert-js/gulp-espower
[travis-image]: https://secure.travis-ci.org/power-assert-js/gulp-espower.svg?branch=master

[depstat-url]: https://gemnasium.com/power-assert-js/gulp-espower
[depstat-image]: https://gemnasium.com/power-assert-js/gulp-espower.svg

[license-url]: https://github.com/power-assert-js/gulp-espower/blob/master/LICENSE-MIT
[license-image]: https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat
