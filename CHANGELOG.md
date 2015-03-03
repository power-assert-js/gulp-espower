### [0.10.1](https://github.com/twada/gulp-espower/releases/tag/v0.10.1) (2015-03-04)


#### Bug Fixes

* **gulp-espower:**
  * fix a bug that throw an error when the file has a syntax error ([603a681b](https://github.com/twada/gulp-espower/commit/603a681b9be2b809970c9aa89052d954feb2134b)) (by @bouzuya)


## [0.10.0](https://github.com/twada/gulp-espower/releases/tag/v0.10.0) (2014-11-11)


* **gulp-espower:**
  * update espower and espower-source to 0.10.0 ([724aead0](https://github.com/twada/gulp-espower/commit/724aead0ac2ec8be7572eb133956729813d56518))
  * update vinyl-sourcemaps-apply ([c19ca9ab](https://github.com/twada/gulp-espower/commit/c19ca9abe9da0eec3c8134e63ccd72ec240092e5))


### 0.9.1 (2014-09-17)


#### Features

* **gulp-espower:** update espower and espower-source to 0.9.1 ([681f1ab9](https://github.com/twada/gulp-espower/commit/681f1ab9b786066fd66236686f0f118470851ef5))


## 0.9.0 (2014-09-02)


#### Features

* **gulp-espower:**
  * gulp-sourcemaps support ([caf2a275](https://github.com/twada/gulp-espower/commit/caf2a275aa26a1ce2ff43b024d73a8dc055feb3d))
  * keep paths relative until the end of chain ([9dc8f50b](https://github.com/twada/gulp-espower/commit/9dc8f50b0ecf3a0d77c472bf75e7730a54748c9f))


## 0.8.0 (2014-08-12)


#### Features

* **gulp-espower:**
  * update espower-source to 0.8.0 ([a9ab1f7d](https://github.com/twada/gulp-espower/commit/a9ab1f7de7275b717589bd8eb8048b89bc575763))
  * now supports streams as well ([ada19f90](https://github.com/twada/gulp-espower/commit/ada19f90f0dfc674405342310259e31ddd3a6dd0))


#### Breaking Changes

  * update espower-source to 0.8.0 ([a9ab1f7d](https://github.com/twada/gulp-espower/commit/a9ab1f7de7275b717589bd8eb8048b89bc575763))

If you already customize instrumentation pattern using `powerAssertVariableName` and `targetMethods`, you need to migarte. To migrate, change your code from the following:

```javascript
var espower = require("gulp-espower");

gulp.src("./test/*.js")
    .pipe(espower({
        powerAssertVariableName: 'yourAssert',
        targetMethods: {
            oneArg: [
                'okay'
            ],
            twoArgs: [
                'equal',
                'customEqual'
            ]
        }
    }))
    .pipe(gulp.dest("./dist"));
```

To:

```javascript
var espower = require("gulp-espower");

gulp.src("./test/*.js")
    .pipe(espower({
        patterns: [
            'yourAssert(value, [message])',
            'yourAssert.okay(value, [message])',
            'yourAssert.equal(actual, expected, [message])',
            'yourAssert.customEqual(actual, expected, [message])'
        ]
    }))
    .pipe(gulp.dest("./dist"));
```
