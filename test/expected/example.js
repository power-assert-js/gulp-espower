var _PowerAssertRecorder1 = function () {
    function PowerAssertRecorder() {
        this.captured = [];
    }
    PowerAssertRecorder.prototype._capt = function _capt(value, espath) {
        this.captured.push({
            value: value,
            espath: espath
        });
        return value;
    };
    PowerAssertRecorder.prototype._expr = function _expr(value, source) {
        return {
            powerAssertContext: {
                value: value,
                events: this.captured
            },
            source: source
        };
    };
    return PowerAssertRecorder;
}();
var _rec1 = new _PowerAssertRecorder1();
var _rec2 = new _PowerAssertRecorder1();
var _rec3 = new _PowerAssertRecorder1();
var assert = require('power-assert'), truthy = 'true', falsy = 'false';
assert(_rec1._expr(_rec1._capt(falsy, 'arguments/0'), {
    content: 'assert(falsy)',
    filepath: 'test/fixtures/example.js',
    line: 4
}));
assert.equal(_rec2._expr(_rec2._capt(truthy, 'arguments/0'), {
    content: 'assert.equal(truthy, falsy)',
    filepath: 'test/fixtures/example.js',
    line: 5
}), _rec3._expr(_rec3._capt(falsy, 'arguments/1'), {
    content: 'assert.equal(truthy, falsy)',
    filepath: 'test/fixtures/example.js',
    line: 5
}));
