const actions = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

function calculate(a, b, operator) {
  if (operator) return operator(a, b);
  return b;
}

const expression = document.querySelector('.expression');
const result = document.querySelector('.result');
const buttons = document.querySelector('.buttons');

let inputValue = '';
let firstNum = null;
let operator = null;
let waitingForSecondNum = false;

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

buttons.addEventListener('click', (e) => {
  const { target } = e;

  if (!target.matches('button')) {
    return;
  }
  if (target.classList.contains('operator')) {
    handleOperator(target.value);
    updateDisplay();
    return;
  }
  if (target.classList.contains('decimal')) {
    inputDecimal(target.value);
    updateDisplay();
    return;
  }
  inputDigit(target.value);
  updateDisplay();
});
