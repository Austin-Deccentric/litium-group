/*
 * Complete the 'calculate' function below.
 *
 * The function is expected to return a NUMBER.
 * The function accepts following parameters:
 *  1. STRING operation
 *  2. NUMBER a
 *  3. NUMBER b
 */

function calculate(operation, a, b) {
  // TODO: use an object literal to map operations to functions
  let result = 0;
  switch (operation) {
    case "add":
      result = a + b;
      break;
    case "subtract":
     result =  a - b;
     break;
    case "multiply":
      result = a * b;
      break;
    case "divide":
      result = a / b;
      break;
    case "power":
      result = a ** b;
      break;
    case "modulo":
      result = a % b;
      break;
  
    default:
      result = "Invalid operation";
  }
  return result;
}

module.exports = calculate;
