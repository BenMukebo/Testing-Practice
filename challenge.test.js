const { stringLength } = require('./challenge');

test('Should output length', () => {
    const text = stringLength('ben kas')
  expect(text).toBe('The length is: 7');
});










// const sum = require('./challenge');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });
