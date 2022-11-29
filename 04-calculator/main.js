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

const expression = document.querySelector('.expression');
const result = document.querySelector('.result');
const numbers = document.querySelectorAll('.number');

// on a number button click
// take number value and store it in a variable
// add this variable as text content to the div
let displayValue = '';

function fillDisplay(e) {
  displayValue += e.target.value;
  result.textContent = displayValue;
}

numbers.forEach((num) => num.addEventListener('click', fillDisplay));
