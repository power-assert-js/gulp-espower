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
