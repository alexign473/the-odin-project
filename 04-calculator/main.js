const expression = document.querySelector('.expression');
const result = document.querySelector('.result');
const buttons = document.querySelector('.buttons');

const actions = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
};

let inputValue = '';
let expressionValue = '';
let firstNum = null;
let operator = null;
let waitingForSecondNum = false;

function calculate(a, b, operator) {
  if (operator) return operator(a, b);
  return b;
}

function updateDisplay() {
  result.textContent = inputValue;
  expression.textContent = expressionValue;
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
    expressionValue = `${inputValue} ${operator}`;
    return;
  }
  if (!firstNum) {
    firstNum = +inputValue;
  } else if (operator) {
    const res = calculate(firstNum, +inputValue, actions[operator]);
    inputValue = +res.toFixed(7);
    firstNum = res;
  }

  operator = nextOperator;
  waitingForSecondNum = true;
  expressionValue = `${inputValue} ${operator}`;
}

function resetCalculator() {
  inputValue = '';
  expressionValue = '';
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
    case '+':
    case '-':
    case '*':
    case '/':
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
