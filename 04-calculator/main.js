function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

function operate(a, b, operator) {
  if (operator) return operator(a, b);
}

console.log(operate(3, 2, add));
console.log(operate(3, 2, subtract));
console.log(operate(3, 2, multiply));
console.log(operate(3, 2, divide));
