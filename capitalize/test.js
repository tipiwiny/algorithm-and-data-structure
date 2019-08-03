const {capitalize1, capitalize2} = require('./index');

test('Capitalize is a function', () => {
  expect(typeof capitalize1).toEqual('function');
});

test('capitalizes the first letter of every word in a sentence', () => {
  expect(capitalize1('hi there, how is it going?')).toEqual(
    'Hi There, How Is It Going?'
  );
});

test('capitalizes the first letter', () => {
  expect(capitalize1('i love breakfast at bill miller bbq')).toEqual(
    'I Love Breakfast At Bill Miller Bbq'
  );
});


test('Capitalize is a function', () => {
  expect(typeof capitalize2).toEqual('function');
});

test('capitalizes the first letter of every word in a sentence', () => {
  expect(capitalize2('hi there, how is it going?')).toEqual(
    'Hi There, How Is It Going?'
  );
});

test('capitalizes the first letter', () => {
  expect(capitalize2('i love breakfast at bill miller bbq')).toEqual(
    'I Love Breakfast At Bill Miller Bbq'
  );
});
