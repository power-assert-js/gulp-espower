var assert = require('power-assert'), truthy = 'true', falsy = 'false';
assert(assert._expr(assert._capt(falsy, ''), {
    tree: {
        'type': 'Identifier',
        'name': 'falsy',
        'loc': {
            'start': {
                'line': 4,
                'column': 7
            },
            'end': {
                'line': 4,
                'column': 12
            },
            'source': 'test/fixtures/example.js'
        }
    },
    tokens: [{
            'type': 'Identifier',
            'value': 'falsy',
            'loc': {
                'start': {
                    'line': 4,
                    'column': 7
                },
                'end': {
                    'line': 4,
                    'column': 12
                }
            }
        }],
    content: 'assert(falsy);',
    filepath: 'test/fixtures/example.js'
}));
assert.equal(assert._expr(assert._capt(truthy, ''), {
    tree: {
        'type': 'Identifier',
        'name': 'truthy',
        'loc': {
            'start': {
                'line': 5,
                'column': 13
            },
            'end': {
                'line': 5,
                'column': 19
            },
            'source': 'test/fixtures/example.js'
        }
    },
    tokens: [{
            'type': 'Identifier',
            'value': 'truthy',
            'loc': {
                'start': {
                    'line': 5,
                    'column': 13
                },
                'end': {
                    'line': 5,
                    'column': 19
                }
            }
        }],
    content: 'assert.equal(truthy, falsy);',
    filepath: 'test/fixtures/example.js'
}), assert._expr(assert._capt(falsy, ''), {
    tree: {
        'type': 'Identifier',
        'name': 'falsy',
        'loc': {
            'start': {
                'line': 5,
                'column': 21
            },
            'end': {
                'line': 5,
                'column': 26
            },
            'source': 'test/fixtures/example.js'
        }
    },
    tokens: [{
            'type': 'Identifier',
            'value': 'falsy',
            'loc': {
                'start': {
                    'line': 5,
                    'column': 21
                },
                'end': {
                    'line': 5,
                    'column': 26
                }
            }
        }],
    content: 'assert.equal(truthy, falsy);',
    filepath: 'test/fixtures/example.js'
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZml4dHVyZXMvZXhhbXBsZS5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwidHJ1dGh5IiwiZmFsc3kiLCJfZXhwciIsIl9jYXB0IiwidHJlZSIsInRva2VucyIsImNvbnRlbnQiLCJmaWxlcGF0aCIsImVxdWFsIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxNQUFBLEdBQVNDLE9BQUEsQ0FBUSxjQUFSLENBQWIsRUFDSUMsTUFBQSxHQUFTLE1BRGIsRUFFSUMsS0FBQSxHQUFRLE9BRlo7QUFHQUgsTUFBQSxDQUFPQSxNQUFBLENBQUFJLEtBQUEsQ0FBQUosTUFBQSxDQUFBSyxLQUFBLENBQUFGLEtBQUE7QUFBQSxJQUFBRyxJQUFBLEU7Ozs7Ozs7Ozs7Ozs7O0tBQUE7QUFBQSxJQUFBQyxNQUFBLEU7Ozs7Ozs7Ozs7Ozs7VUFBQTtBQUFBLElBQUFDLE9BQUE7QUFBQSxJQUFBQyxRQUFBO0FBQUEsRUFBUCxFQUhBO0FBSUFULE1BQUEsQ0FBT1UsS0FBUCxDQUFhVixNQUFBLENBQUFJLEtBQUEsQ0FBQUosTUFBQSxDQUFBSyxLQUFBLENBQUFILE1BQUE7QUFBQSxJQUFBSSxJQUFBLEU7Ozs7Ozs7Ozs7Ozs7O0tBQUE7QUFBQSxJQUFBQyxNQUFBLEU7Ozs7Ozs7Ozs7Ozs7VUFBQTtBQUFBLElBQUFDLE9BQUE7QUFBQSxJQUFBQyxRQUFBO0FBQUEsRUFBYixFQUFxQlQsTUFBQSxDQUFBSSxLQUFBLENBQUFKLE1BQUEsQ0FBQUssS0FBQSxDQUFBRixLQUFBO0FBQUEsSUFBQUcsSUFBQSxFOzs7Ozs7Ozs7Ozs7OztLQUFBO0FBQUEsSUFBQUMsTUFBQSxFOzs7Ozs7Ozs7Ozs7O1VBQUE7QUFBQSxJQUFBQyxPQUFBO0FBQUEsSUFBQUMsUUFBQTtBQUFBLEVBQXJCIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFzc2VydCA9IHJlcXVpcmUoJ3Bvd2VyLWFzc2VydCcpLFxuICAgIHRydXRoeSA9ICd0cnVlJyxcbiAgICBmYWxzeSA9ICdmYWxzZSc7XG5hc3NlcnQoZmFsc3kpO1xuYXNzZXJ0LmVxdWFsKHRydXRoeSwgZmFsc3kpO1xuIl19
