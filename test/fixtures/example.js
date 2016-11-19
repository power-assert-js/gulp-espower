var assert = require('assert'),
    truthy = 'true',
    falsy = 'false';
assert(falsy);
assert.equal(truthy, falsy);
