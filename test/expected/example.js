var assert = require('power-assert'), truthy = 'true', falsy = 'false';
assert(assert._expr(assert._capt(falsy, 'ident', {
    start: {
        line: 4,
        column: 7
    }
}), {
    start: {
        line: 4,
        column: 7
    },
    path: 'test/fixtures/example.js'
}, 'assert(falsy);'));
assert.equal(assert._expr(assert._capt(truthy, 'ident', {
    start: {
        line: 5,
        column: 13
    }
}), {
    start: {
        line: 5,
        column: 13
    },
    path: 'test/fixtures/example.js'
}, 'assert.equal(truthy, falsy);'), assert._expr(assert._capt(falsy, 'ident', {
    start: {
        line: 5,
        column: 21
    }
}), {
    start: {
        line: 5,
        column: 21
    },
    path: 'test/fixtures/example.js'
}, 'assert.equal(truthy, falsy);'));