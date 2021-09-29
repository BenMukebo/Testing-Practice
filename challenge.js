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
  
// Task 3
class Calculator {
  constructor(){
  }

  add(a, b) {
    // this.calculators.push(calc)
    return a+b;
  }

  subtract(a, b){
    // this.calculators = this.calculators.filter((calc) => calc.index.toString() !== calcId);
    return a-b;
  }

  multiply(a, b){
    // this.calculators = calc.reduce((acc, curr) => acc * curr, 0);
    return a*b;
  }

  divide(){
    
  }
}

const newCalc = new Calculator();

exports.newCalc = newCalc ;



// function sum(a, b) {
//     return a + b;
//   }
//   module.exports = sum;