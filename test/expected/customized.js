var empower = require('empower'), formatter = require('power-assert-formatter'), busterAssertions = require('buster-assertions'), refute = empower(busterAssertions.refute, formatter(), {
        targetMethods: {
            oneArg: ['isNull'],
            twoArgs: ['same']
        }
    }), truthy = 'true', falsy = 'false';
refute(refute._expr(refute._capt(truthy, 'ident', {
    start: {
        line: 7,
        column: 7
    }
}), {
    start: {
        line: 7,
        column: 7
    },
    path: 'test/fixtures/customized.js'
}, 'refute(truthy);'));
refute.isNull(refute._expr(refute._capt(falsy, 'ident', {
    start: {
        line: 8,
        column: 14
    }
}), {
    start: {
        line: 8,
        column: 14
    },
    path: 'test/fixtures/customized.js'
}, 'refute.isNull(falsy);'));
refute.same(refute._expr(refute._capt(truthy, 'ident', {
    start: {
        line: 9,
        column: 12
    }
}), {
    start: {
        line: 9,
        column: 12
    },
    path: 'test/fixtures/customized.js'
}, 'refute.same(truthy, falsy);'), refute._expr(refute._capt(falsy, 'ident', {
    start: {
        line: 9,
        column: 20
    }
}), {
    start: {
        line: 9,
        column: 20
    },
    path: 'test/fixtures/customized.js'
}, 'refute.same(truthy, falsy);'));