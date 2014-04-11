var empower = require('empower'), formatter = require('power-assert-formatter'), busterAssertions = require('buster-assertions'), refute = empower(busterAssertions.refute, formatter(), {
        targetMethods: {
            oneArg: ['isNull'],
            twoArgs: ['same']
        }
    }), truthy = 'true', falsy = 'false';
refute(refute._expr(refute._capt(truthy, ''), {
    tree: {
        'type': 'Identifier',
        'name': 'truthy',
        'loc': {
            'start': {
                'line': 7,
                'column': 7
            },
            'end': {
                'line': 7,
                'column': 13
            },
            'source': 'test/fixtures/customized.js'
        }
    },
    tokens: [{
            'type': 'Identifier',
            'value': 'truthy',
            'loc': {
                'start': {
                    'line': 7,
                    'column': 7
                },
                'end': {
                    'line': 7,
                    'column': 13
                }
            }
        }],
    content: 'refute(truthy);',
    filepath: 'test/fixtures/customized.js'
}));
refute.isNull(refute._expr(refute._capt(falsy, ''), {
    tree: {
        'type': 'Identifier',
        'name': 'falsy',
        'loc': {
            'start': {
                'line': 8,
                'column': 14
            },
            'end': {
                'line': 8,
                'column': 19
            },
            'source': 'test/fixtures/customized.js'
        }
    },
    tokens: [{
            'type': 'Identifier',
            'value': 'falsy',
            'loc': {
                'start': {
                    'line': 8,
                    'column': 14
                },
                'end': {
                    'line': 8,
                    'column': 19
                }
            }
        }],
    content: 'refute.isNull(falsy);',
    filepath: 'test/fixtures/customized.js'
}));
refute.same(refute._expr(refute._capt(truthy, ''), {
    tree: {
        'type': 'Identifier',
        'name': 'truthy',
        'loc': {
            'start': {
                'line': 9,
                'column': 12
            },
            'end': {
                'line': 9,
                'column': 18
            },
            'source': 'test/fixtures/customized.js'
        }
    },
    tokens: [{
            'type': 'Identifier',
            'value': 'truthy',
            'loc': {
                'start': {
                    'line': 9,
                    'column': 12
                },
                'end': {
                    'line': 9,
                    'column': 18
                }
            }
        }],
    content: 'refute.same(truthy, falsy);',
    filepath: 'test/fixtures/customized.js'
}), refute._expr(refute._capt(falsy, ''), {
    tree: {
        'type': 'Identifier',
        'name': 'falsy',
        'loc': {
            'start': {
                'line': 9,
                'column': 20
            },
            'end': {
                'line': 9,
                'column': 25
            },
            'source': 'test/fixtures/customized.js'
        }
    },
    tokens: [{
            'type': 'Identifier',
            'value': 'falsy',
            'loc': {
                'start': {
                    'line': 9,
                    'column': 20
                },
                'end': {
                    'line': 9,
                    'column': 25
                }
            }
        }],
    content: 'refute.same(truthy, falsy);',
    filepath: 'test/fixtures/customized.js'
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZml4dHVyZXMvY3VzdG9taXplZC5qcyJdLCJuYW1lcyI6WyJlbXBvd2VyIiwicmVxdWlyZSIsImZvcm1hdHRlciIsImJ1c3RlckFzc2VydGlvbnMiLCJyZWZ1dGUiLCJ0YXJnZXRNZXRob2RzIiwib25lQXJnIiwidHdvQXJncyIsInRydXRoeSIsImZhbHN5IiwiX2V4cHIiLCJfY2FwdCIsInRyZWUiLCJ0b2tlbnMiLCJjb250ZW50IiwiZmlsZXBhdGgiLCJpc051bGwiLCJzYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxPQUFBLEdBQVVDLE9BQUEsQ0FBUSxTQUFSLENBQWQsRUFDSUMsU0FBQSxHQUFZRCxPQUFBLENBQVEsd0JBQVIsQ0FEaEIsRUFFSUUsZ0JBQUEsR0FBbUJGLE9BQUEsQ0FBUSxtQkFBUixDQUZ2QixFQUdJRyxNQUFBLEdBQVNKLE9BQUEsQ0FBUUcsZ0JBQUEsQ0FBaUJDLE1BQXpCLEVBQWlDRixTQUFBLEVBQWpDLEVBQThDO0FBQUEsUUFBRUcsYUFBQSxFQUFlO0FBQUEsWUFBRUMsTUFBQSxFQUFRLENBQUMsUUFBRCxDQUFWO0FBQUEsWUFBc0JDLE9BQUEsRUFBUyxDQUFDLE1BQUQsQ0FBL0I7QUFBQSxTQUFqQjtBQUFBLEtBQTlDLENBSGIsRUFJSUMsTUFBQSxHQUFTLE1BSmIsRUFLSUMsS0FBQSxHQUFRLE9BTFo7QUFNQUwsTUFBQSxDQUFPQSxNQUFBLENBQUFNLEtBQUEsQ0FBQU4sTUFBQSxDQUFBTyxLQUFBLENBQUFILE1BQUE7QUFBQSxJQUFBSSxJQUFBLEU7Ozs7Ozs7Ozs7Ozs7O0tBQUE7QUFBQSxJQUFBQyxNQUFBLEU7Ozs7Ozs7Ozs7Ozs7VUFBQTtBQUFBLElBQUFDLE9BQUE7QUFBQSxJQUFBQyxRQUFBO0FBQUEsRUFBUCxFQU5BO0FBT0FYLE1BQUEsQ0FBT1ksTUFBUCxDQUFjWixNQUFBLENBQUFNLEtBQUEsQ0FBQU4sTUFBQSxDQUFBTyxLQUFBLENBQUFGLEtBQUE7QUFBQSxJQUFBRyxJQUFBLEU7Ozs7Ozs7Ozs7Ozs7O0tBQUE7QUFBQSxJQUFBQyxNQUFBLEU7Ozs7Ozs7Ozs7Ozs7VUFBQTtBQUFBLElBQUFDLE9BQUE7QUFBQSxJQUFBQyxRQUFBO0FBQUEsRUFBZCxFQVBBO0FBUUFYLE1BQUEsQ0FBT2EsSUFBUCxDQUFZYixNQUFBLENBQUFNLEtBQUEsQ0FBQU4sTUFBQSxDQUFBTyxLQUFBLENBQUFILE1BQUE7QUFBQSxJQUFBSSxJQUFBLEU7Ozs7Ozs7Ozs7Ozs7O0tBQUE7QUFBQSxJQUFBQyxNQUFBLEU7Ozs7Ozs7Ozs7Ozs7VUFBQTtBQUFBLElBQUFDLE9BQUE7QUFBQSxJQUFBQyxRQUFBO0FBQUEsRUFBWixFQUFvQlgsTUFBQSxDQUFBTSxLQUFBLENBQUFOLE1BQUEsQ0FBQU8sS0FBQSxDQUFBRixLQUFBO0FBQUEsSUFBQUcsSUFBQSxFOzs7Ozs7Ozs7Ozs7OztLQUFBO0FBQUEsSUFBQUMsTUFBQSxFOzs7Ozs7Ozs7Ozs7O1VBQUE7QUFBQSxJQUFBQyxPQUFBO0FBQUEsSUFBQUMsUUFBQTtBQUFBLEVBQXBCIn0=
