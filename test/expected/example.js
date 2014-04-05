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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZml4dHVyZXMvZXhhbXBsZS5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwidHJ1dGh5IiwiZmFsc3kiLCJfZXhwciIsIl9jYXB0Iiwic3RhcnQiLCJsaW5lIiwiY29sdW1uIiwicGF0aCIsImVxdWFsIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxNQUFBLEdBQVNDLE9BQUEsQ0FBUSxjQUFSLENBQWIsRUFDSUMsTUFBQSxHQUFTLE1BRGIsRUFFSUMsS0FBQSxHQUFRLE9BRlo7QUFHQUgsTUFBQSxDQUFPQSxNQUFBLENBQUFJLEtBQUEsQ0FBQUosTUFBQSxDQUFBSyxLQUFBLENBQUFGLEtBQUE7QUFBQSxJQUFBRyxLQUFBO0FBQUEsUUFBQUMsSUFBQTtBQUFBLFFBQUFDLE1BQUE7QUFBQTtBQUFBO0FBQUEsSUFBQUYsS0FBQTtBQUFBLFFBQUFDLElBQUE7QUFBQSxRQUFBQyxNQUFBO0FBQUE7QUFBQSxJQUFBQyxJQUFBO0FBQUEsb0JBQVAsRUFIQTtBQUlBVCxNQUFBLENBQU9VLEtBQVAsQ0FBYVYsTUFBQSxDQUFBSSxLQUFBLENBQUFKLE1BQUEsQ0FBQUssS0FBQSxDQUFBSCxNQUFBO0FBQUEsSUFBQUksS0FBQTtBQUFBLFFBQUFDLElBQUE7QUFBQSxRQUFBQyxNQUFBO0FBQUE7QUFBQTtBQUFBLElBQUFGLEtBQUE7QUFBQSxRQUFBQyxJQUFBO0FBQUEsUUFBQUMsTUFBQTtBQUFBO0FBQUEsSUFBQUMsSUFBQTtBQUFBLGtDQUFiLEVBQXFCVCxNQUFBLENBQUFJLEtBQUEsQ0FBQUosTUFBQSxDQUFBSyxLQUFBLENBQUFGLEtBQUE7QUFBQSxJQUFBRyxLQUFBO0FBQUEsUUFBQUMsSUFBQTtBQUFBLFFBQUFDLE1BQUE7QUFBQTtBQUFBO0FBQUEsSUFBQUYsS0FBQTtBQUFBLFFBQUFDLElBQUE7QUFBQSxRQUFBQyxNQUFBO0FBQUE7QUFBQSxJQUFBQyxJQUFBO0FBQUEsa0NBQXJCIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFzc2VydCA9IHJlcXVpcmUoJ3Bvd2VyLWFzc2VydCcpLFxuICAgIHRydXRoeSA9ICd0cnVlJyxcbiAgICBmYWxzeSA9ICdmYWxzZSc7XG5hc3NlcnQoZmFsc3kpO1xuYXNzZXJ0LmVxdWFsKHRydXRoeSwgZmFsc3kpO1xuIl19
