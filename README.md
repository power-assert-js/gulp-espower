# gulp-espower [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]

> A [gulp](https://github.com/wearefractal/gulp) plugin for [power-assert](http://github.com/twada/power-assert).

## Description
`gulp-espower` is a gulp plugin to instrument "Power Assert" feature into your code.


Internally, `gulp-espower` task uses `espower` module that manipulates assertion expression (JavaScript Code) represented as [Mozilla JavaScript AST](https://developer.mozilla.org/en-US/docs/SpiderMonkey/Parser_API), to instrument power-assert feature into the code. The magic is done by using [Esprima](http://esprima.org/) and [Escodegen](https://github.com/Constellation/escodegen).


Please note that `gulp-espower` is a beta version product. Pull-requests, issue reports and patches are always welcomed. See [power-assert](http://github.com/twada/power-assert) project for more documentation.


## Usage

First, install `gulp-espower` as a development dependency:

```shell
npm install --save-dev gulp-espower
```

Then, add it to your `gulpfile.js`:

```javascript
var espower = require("gulp-espower");

gulp.src("./test/*.js")
    .pipe(espower())
    .pipe(gulp.dest("./dist"));
```

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
    'assert.notDeepEqual(actual, expected, [message])'
]
```

Target patterns for power assert feature instrumentation.

If callee name (for example, `assert.equal`) matches exactly and number of arguments is satisfied, then the assertion will be modified.
Detection is done by [escallmatch](http://github.com/twada/escallmatch). Any arguments enclosed in bracket (for example, `[message]`) means optional parameters. Without bracket means mandatory parameters.


## CHANGELOG

See [CHANGELOG](https://github.com/twada/gulp-espower/blob/master/CHANGELOG.md)


## License

Licensed under the [MIT](https://github.com/twada/gulp-espower/blob/master/LICENSE-MIT) license.

[npm-url]: https://npmjs.org/package/gulp-espower
[npm-image]: https://badge.fury.io/js/gulp-espower.svg

[travis-url]: http://travis-ci.org/twada/gulp-espower
[travis-image]: https://secure.travis-ci.org/twada/gulp-espower.svg?branch=master

[depstat-url]: https://gemnasium.com/twada/gulp-espower
[depstat-image]: https://gemnasium.com/twada/gulp-espower.svg
