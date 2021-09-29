// Task 1
exports.stringLength = (str) => {
  if(str.length > 0 && str.length <= 10){
    return `The length is: ${str.length}`;
  }

 throw new Error('you are using the wrong JDK');
};

// Task 2
exports.reverseString = (str) => {
    const reverseStr = str.split('').reverse().join('');
  return reverseStr;
};
  



// function sum(a, b) {
//     return a + b;
//   }
//   module.exports = sum;