var empower = require('empower'), formatter = require('power-assert-formatter'), busterAssertions = require('buster-assertions'), refute = empower(busterAssertions.refute, formatter(), {
        targetMethods: {
            oneArg: ['isNull'],
            twoArgs: ['same']
        }
    }), truthy = 'true', falsy = 'false';
refute(refute._expr(refute._capt(truthy, 'arguments/0'), {
    content: 'refute(truthy)',
    filepath: 'test/fixtures/customized.js',
    line: 7
}));
refute.isNull(refute._expr(refute._capt(falsy, 'arguments/0'), {
    content: 'refute.isNull(falsy)',
    filepath: 'test/fixtures/customized.js',
    line: 8
}));
refute.same(refute._expr(refute._capt(truthy, 'arguments/0'), {
    content: 'refute.same(truthy, falsy)',
    filepath: 'test/fixtures/customized.js',
    line: 9
}), refute._expr(refute._capt(falsy, 'arguments/1'), {
    content: 'refute.same(truthy, falsy)',
    filepath: 'test/fixtures/customized.js',
    line: 9
}));
