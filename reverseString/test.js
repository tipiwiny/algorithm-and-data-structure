const {reverse1, reverse2, reverse3} = require('./index');

test('Reverse 1 function exists', () => {
  expect(reverse1).toBeDefined();
});

test('Reverse 1 reverses a string', () => {
  expect(reverse1('abcd')).toEqual('dcba');
});

test('Reverse 1 reverses a string', () => {
  expect(reverse1('  abcd')).toEqual('dcba  ');
});

test('Reverse 2 function exists', () => {
  expect(reverse2).toBeDefined();
});

test('Reverse 2 reverses a string', () => {
  expect(reverse2('abcd')).toEqual('dcba');
});

test('Reverse 2 reverses a string', () => {
  expect(reverse2('  abcd')).toEqual('dcba  ');
});

test('Reverse 3 function exists', () => {
  expect(reverse3).toBeDefined();
});

test('Reverse 3 reverses a string', () => {
  expect(reverse3('abcd')).toEqual('dcba');
});

test('Reverse 3 reverses a string', () => {
  expect(reverse3('  abcd')).toEqual('dcba  ');
});
