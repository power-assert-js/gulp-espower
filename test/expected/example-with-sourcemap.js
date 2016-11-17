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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZml4dHVyZXMvZXhhbXBsZS5qcyJdLCJuYW1lcyI6WyJfUG93ZXJBc3NlcnRSZWNvcmRlcjEiLCJQb3dlckFzc2VydFJlY29yZGVyIiwiY2FwdHVyZWQiLCJwcm90b3R5cGUiLCJfY2FwdCIsInZhbHVlIiwiZXNwYXRoIiwicHVzaCIsIl9leHByIiwic291cmNlIiwicG93ZXJBc3NlcnRDb250ZXh0IiwiZXZlbnRzIiwiX3JlYzEiLCJfcmVjMiIsIl9yZWMzIiwiYXNzZXJ0IiwicmVxdWlyZSIsInRydXRoeSIsImZhbHN5IiwiY29udGVudCIsImZpbGVwYXRoIiwibGluZSIsImVxdWFsIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFBQSxxQkFBQTtBQUFBLGFBQUFDLG1CQUFBO0FBQUEsYUFBQUMsUUFBQTtBQUFBO0FBQUEsSUFBQUQsbUJBQUEsQ0FBQUUsU0FBQSxDQUFBQyxLQUFBLFlBQUFBLEtBQUEsQ0FBQUMsS0FBQSxFQUFBQyxNQUFBO0FBQUEsYUFBQUosUUFBQSxDQUFBSyxJQUFBO0FBQUEsWUFBQUYsS0FBQSxFQUFBQSxLQUFBO0FBQUEsWUFBQUMsTUFBQSxFQUFBQSxNQUFBO0FBQUE7QUFBQSxlQUFBRCxLQUFBO0FBQUE7QUFBQSxJQUFBSixtQkFBQSxDQUFBRSxTQUFBLENBQUFLLEtBQUEsWUFBQUEsS0FBQSxDQUFBSCxLQUFBLEVBQUFJLE1BQUE7QUFBQTtBQUFBLFlBQUFDLGtCQUFBO0FBQUEsZ0JBQUFMLEtBQUEsRUFBQUEsS0FBQTtBQUFBLGdCQUFBTSxNQUFBLE9BQUFULFFBQUE7QUFBQTtBQUFBLFlBQUFPLE1BQUEsRUFBQUEsTUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFBUixtQkFBQTtBQUFBO0FBR08sSUFBQVcsS0FBQSxPQUFBWixxQkFBQSxHQUhQO0FBSWEsSUFBQWEsS0FBQSxPQUFBYixxQkFBQSxHQUpiO0FBSXFCLElBQUFjLEtBQUEsT0FBQWQscUJBQUEsR0FKckI7QUFBQSxJQUFJZSxNQUFBLEdBQVNDLE9BQUEsQ0FBUSxjQUFSLENBQWIsRUFDSUMsTUFBQSxHQUFTLE1BRGIsRUFFSUMsS0FBQSxHQUFRLE9BRlo7QUFHQUgsTUFBQSxDQUFPSCxLQUFBLENBQUFKLEtBQUEsQ0FBQUksS0FBQSxDQUFBUixLQUFBLENBQUFjLEtBQUE7QUFBQSxJQUFBQyxPQUFBO0FBQUEsSUFBQUMsUUFBQTtBQUFBLElBQUFDLElBQUE7QUFBQSxFQUFQLEVBSEE7QUFJQU4sTUFBQSxDQUFPTyxLQUFQLENBQWFULEtBQUEsQ0FBQUwsS0FBQSxDQUFBSyxLQUFBLENBQUFULEtBQUEsQ0FBQWEsTUFBQTtBQUFBLElBQUFFLE9BQUE7QUFBQSxJQUFBQyxRQUFBO0FBQUEsSUFBQUMsSUFBQTtBQUFBLEVBQWIsRUFBcUJQLEtBQUEsQ0FBQU4sS0FBQSxDQUFBTSxLQUFBLENBQUFWLEtBQUEsQ0FBQWMsS0FBQTtBQUFBLElBQUFDLE9BQUE7QUFBQSxJQUFBQyxRQUFBO0FBQUEsSUFBQUMsSUFBQTtBQUFBLEVBQXJCIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFzc2VydCA9IHJlcXVpcmUoJ3Bvd2VyLWFzc2VydCcpLFxuICAgIHRydXRoeSA9ICd0cnVlJyxcbiAgICBmYWxzeSA9ICdmYWxzZSc7XG5hc3NlcnQoZmFsc3kpO1xuYXNzZXJ0LmVxdWFsKHRydXRoeSwgZmFsc3kpO1xuIl19
