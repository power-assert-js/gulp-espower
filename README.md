# gulp-espower [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]

> espower plugin for [gulp](https://github.com/wearefractal/gulp)

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

#### options.destructive
Type: `Boolean`
Default value: `false`

Instrument target AST destructively or not.

#### options.powerAssertVariableName
Type: `String`
Default value: `'assert'`

Target variable name to instrument.

#### options.lineSeparator
Type: `String`
Default value: `'\n'`

Line separator in target sources.

#### options.targetMethods
Type: `Object`
Default value: 

```javascript
targetMethods: {
    oneArg: [
        'ok'
    ],
    twoArgs: [
        'equal',
        'notEqual',
        'strictEqual',
        'notStrictEqual',
        'deepEqual',
        'notDeepEqual'
    ]
}
```

Target assertion methods to insrtument.

* `oneArg` array for assertion methods with a expression argument (like `assert.ok(actual)`)
* `twoArgs` array for assertion methods with two expression arguments (like `assert.equal(actual, expected)`)


## License

Licensed under the [MIT](https://raw.github.com/twada/gulp-espower/master/LICENSE-MIT) license.

[npm-url]: https://npmjs.org/package/gulp-espower
[npm-image]: https://badge.fury.io/js/gulp-espower.png

[travis-url]: http://travis-ci.org/twada/gulp-espower
[travis-image]: https://secure.travis-ci.org/twada/gulp-espower.png?branch=master

[depstat-url]: https://gemnasium.com/twada/gulp-espower
[depstat-image]: https://gemnasium.com/twada/gulp-espower.png
