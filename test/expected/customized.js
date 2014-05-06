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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZml4dHVyZXMvY3VzdG9taXplZC5qcyJdLCJuYW1lcyI6WyJlbXBvd2VyIiwicmVxdWlyZSIsImZvcm1hdHRlciIsImJ1c3RlckFzc2VydGlvbnMiLCJyZWZ1dGUiLCJ0YXJnZXRNZXRob2RzIiwib25lQXJnIiwidHdvQXJncyIsInRydXRoeSIsImZhbHN5IiwiX2V4cHIiLCJfY2FwdCIsImNvbnRlbnQiLCJmaWxlcGF0aCIsImxpbmUiLCJpc051bGwiLCJzYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxPQUFBLEdBQVVDLE9BQUEsQ0FBUSxTQUFSLENBQWQsRUFDSUMsU0FBQSxHQUFZRCxPQUFBLENBQVEsd0JBQVIsQ0FEaEIsRUFFSUUsZ0JBQUEsR0FBbUJGLE9BQUEsQ0FBUSxtQkFBUixDQUZ2QixFQUdJRyxNQUFBLEdBQVNKLE9BQUEsQ0FBUUcsZ0JBQUEsQ0FBaUJDLE1BQXpCLEVBQWlDRixTQUFBLEVBQWpDLEVBQThDO0FBQUEsUUFBRUcsYUFBQSxFQUFlO0FBQUEsWUFBRUMsTUFBQSxFQUFRLENBQUMsUUFBRCxDQUFWO0FBQUEsWUFBc0JDLE9BQUEsRUFBUyxDQUFDLE1BQUQsQ0FBL0I7QUFBQSxTQUFqQjtBQUFBLEtBQTlDLENBSGIsRUFJSUMsTUFBQSxHQUFTLE1BSmIsRUFLSUMsS0FBQSxHQUFRLE9BTFo7QUFNQUwsTUFBQSxDQUFPQSxNQUFBLENBQUFNLEtBQUEsQ0FBQU4sTUFBQSxDQUFBTyxLQUFBLENBQUFILE1BQUE7QUFBQSxJQUFBSSxPQUFBO0FBQUEsSUFBQUMsUUFBQTtBQUFBLElBQUFDLElBQUE7QUFBQSxFQUFQLEVBTkE7QUFPQVYsTUFBQSxDQUFPVyxNQUFQLENBQWNYLE1BQUEsQ0FBQU0sS0FBQSxDQUFBTixNQUFBLENBQUFPLEtBQUEsQ0FBQUYsS0FBQTtBQUFBLElBQUFHLE9BQUE7QUFBQSxJQUFBQyxRQUFBO0FBQUEsSUFBQUMsSUFBQTtBQUFBLEVBQWQsRUFQQTtBQVFBVixNQUFBLENBQU9ZLElBQVAsQ0FBWVosTUFBQSxDQUFBTSxLQUFBLENBQUFOLE1BQUEsQ0FBQU8sS0FBQSxDQUFBSCxNQUFBO0FBQUEsSUFBQUksT0FBQTtBQUFBLElBQUFDLFFBQUE7QUFBQSxJQUFBQyxJQUFBO0FBQUEsRUFBWixFQUFvQlYsTUFBQSxDQUFBTSxLQUFBLENBQUFOLE1BQUEsQ0FBQU8sS0FBQSxDQUFBRixLQUFBO0FBQUEsSUFBQUcsT0FBQTtBQUFBLElBQUFDLFFBQUE7QUFBQSxJQUFBQyxJQUFBO0FBQUEsRUFBcEIifQ==
