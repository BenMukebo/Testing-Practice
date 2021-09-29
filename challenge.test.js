const { stringLength, reverseString, newCalc } = require('./challenge');

test('Should output length', () => {
    const text = stringLength('ben kas')
  expect(text).toBe('The length is: 7');
});

console.log(reverseString('ben-kas'));
test('Reverse the string', () => {
    const texts = reverseString('ben-kas');
  expect(texts).toBe('sak-neb');
});


// CallBack function

describe('My calculator action', () => {
    test('Add calculator', () => {
      expect(newCalc.add(4, 2)).toBe(6);
    });
  
    test('remove calculator', () => {
      expect(newCalc.subtract(4, 2)).toBe(2);
    });
    test('multiple calculator', () => {
        expect(newCalc.multiply(4, 2)).toBe(8);
      });
  });












// const sum = require('./challenge');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });
