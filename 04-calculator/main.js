const actions = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

function operate(a, b, operator) {
  if (operator) return operator(a, b);
}

const expression = document.querySelector('.expression');
const result = document.querySelector('.result');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');

let inputValue = '';
let firstNum = null;
let operator = null;

function fillDisplay(e) {
  inputValue += e.target.value;
  result.textContent = inputValue;
}

function handleOperator(e) {
  operator = e.target.value;
  result.textContent += e.target.textContent;

  if (!firstNum) {
    firstNum = +inputValue;
  }
  inputValue = '';
}

numbers.forEach((num) => num.addEventListener('click', fillDisplay));

operators.forEach((op) => op.addEventListener('click', handleOperator));

equal.addEventListener('click', function () {
  const res = operate(firstNum, +inputValue, actions[operator]);
  result.textContent = res;
  firstNum = res;
});
