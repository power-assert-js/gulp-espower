var assert = require('power-assert'), truthy = 'true', falsy = 'false';
assert(assert._expr(assert._capt(falsy, 'arguments/0'), {
    content: 'assert(falsy)',
    filepath: 'example.js',
    line: 4
}));
assert.equal(assert._expr(assert._capt(truthy, 'arguments/0'), {
    content: 'assert.equal(truthy, falsy)',
    filepath: 'example.js',
    line: 5
}), assert._expr(assert._capt(falsy, 'arguments/1'), {
    content: 'assert.equal(truthy, falsy)',
    filepath: 'example.js',
    line: 5
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWt1dG8vc3JjL2dpdGh1Yi5jb20vcG93ZXItYXNzZXJ0LWpzL2d1bHAtZXNwb3dlci90ZXN0L2ZpeHR1cmVzL2V4YW1wbGUuanMiXSwibmFtZXMiOlsiYXNzZXJ0IiwicmVxdWlyZSIsInRydXRoeSIsImZhbHN5IiwiX2V4cHIiLCJfY2FwdCIsImNvbnRlbnQiLCJmaWxlcGF0aCIsImxpbmUiLCJlcXVhbCJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsTUFBQSxHQUFTQyxPQUFBLENBQVEsY0FBUixDQUFiLEVBQ0lDLE1BQUEsR0FBUyxNQURiLEVBRUlDLEtBQUEsR0FBUSxPQUZaO0FBR0FILE1BQUEsQ0FBT0EsTUFBQSxDQUFBSSxLQUFBLENBQUFKLE1BQUEsQ0FBQUssS0FBQSxDQUFBRixLQUFBO0FBQUEsSUFBQUcsT0FBQTtBQUFBLElBQUFDLFFBQUE7QUFBQSxJQUFBQyxJQUFBO0FBQUEsRUFBUCxFQUhBO0FBSUFSLE1BQUEsQ0FBT1MsS0FBUCxDQUFhVCxNQUFBLENBQUFJLEtBQUEsQ0FBQUosTUFBQSxDQUFBSyxLQUFBLENBQUFILE1BQUE7QUFBQSxJQUFBSSxPQUFBO0FBQUEsSUFBQUMsUUFBQTtBQUFBLElBQUFDLElBQUE7QUFBQSxFQUFiLEVBQXFCUixNQUFBLENBQUFJLEtBQUEsQ0FBQUosTUFBQSxDQUFBSyxLQUFBLENBQUFGLEtBQUE7QUFBQSxJQUFBRyxPQUFBO0FBQUEsSUFBQUMsUUFBQTtBQUFBLElBQUFDLElBQUE7QUFBQSxFQUFyQiIsInNvdXJjZXNDb250ZW50IjpbInZhciBhc3NlcnQgPSByZXF1aXJlKCdwb3dlci1hc3NlcnQnKSxcbiAgICB0cnV0aHkgPSAndHJ1ZScsXG4gICAgZmFsc3kgPSAnZmFsc2UnO1xuYXNzZXJ0KGZhbHN5KTtcbmFzc2VydC5lcXVhbCh0cnV0aHksIGZhbHN5KTtcbiJdfQ==
