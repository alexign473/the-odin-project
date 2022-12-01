const expression = document.querySelector('.expression');
const result = document.querySelector('.result');
const buttons = document.querySelector('.buttons');

const actions = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

let inputValue = '';
let firstNum = null;
let operator = null;
let waitingForSecondNum = false;

function calculate(a, b, operator) {
  if (operator) return operator(a, b);
  return b;
}

function updateDisplay() {
  result.textContent = inputValue;
}

function inputDigit(digit) {
  if (waitingForSecondNum) {
    inputValue = digit;
    waitingForSecondNum = false;
  } else {
    inputValue += digit;
  }
}

function inputDecimal(dot) {
  if (!inputValue.includes(dot)) {
    inputValue += dot;
  }
}

function handleOperator(nextOperator) {
  if (operator && waitingForSecondNum) {
    operator = nextOperator;
    return;
  }
  if (!firstNum) {
    firstNum = +inputValue;
  } else if (operator) {
    const res = calculate(firstNum, +inputValue, actions[operator]);
    inputValue = res;
    firstNum = res;
  }

  operator = nextOperator;
  waitingForSecondNum = true;
}

function resetCalculator() {
  inputValue = '';
  firstNum = null;
  operator = null;
  waitingForSecondNum = false;
}

buttons.addEventListener('click', (e) => {
  const { value } = e.target;

  if (!e.target.matches('button')) {
    return;
  }
  switch (value) {
    case 'add':
    case 'subtract':
    case 'multiply':
    case 'divide':
    case '=':
      handleOperator(value);
      break;
    case '.':
      inputDecimal(value);
      break;
    case 'clear':
      resetCalculator();
      break;
    default:
      inputDigit(value);
  }
  updateDisplay();
});
