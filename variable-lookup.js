// Variable Lookup - depends on SCOPE
// {} - code block

const globalNumber = 5;

function add(num1, num2) {
  // 1. Do you have "globalNumber" in my scope?
  // 2. NO? then go check in the OUTER Scope until Global Scope

  const globalNumber = 20;
  const result = num1 + num2 + globalNumber; // 10 + 10 + 20

  function multiply() {
    const globalNumber = 100;
    const multiplyResult = result * globalNumber; // 40 * 100
    console.log(multiplyResult);
  }
  multiply();
  return result; // 40
}

console.log(add(10, 10));
