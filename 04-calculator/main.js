const expression = document.querySelector('.expression');
const result = document.querySelector('.result');
const buttons = document.querySelector('.buttons');

const actions = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
};

let inputValue = '0';
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
    inputValue = inputValue === '0' ? digit : inputValue + digit;
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
  if (firstNum === null) {
    firstNum = +inputValue;
  } else if (operator) {
    const res = calculate(firstNum, +inputValue, actions[operator]);
    // restrict the digits after the decimal point to 7 digits
    // and remove extra zeros
    inputValue = `${+res.toFixed(7)}`;
    firstNum = res;
  }

  operator = nextOperator;
  waitingForSecondNum = true;
  expressionValue = `${inputValue} ${operator}`;
}

function resetCalculator() {
  inputValue = '0';
  expressionValue = '';
  firstNum = null;
  operator = null;
  waitingForSecondNum = false;
}

function removeDigit() {
  if (waitingForSecondNum) return;
  inputValue = inputValue.length === 1 ? '0' : inputValue.slice(0, -1);
}

// Event delegation listener
buttons.addEventListener('click', (e) => {
  const { value } = e.target;

  // listen only for child buttons
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
    case 'delete':
      removeDigit();
      break;
    default:
      inputDigit(value);
  }
  updateDisplay();
});

document.addEventListener('keydown', (e) => {
  let { key } = e;

  if (key === 'Enter') {
    key = '=';
  }
  if (key === 'Escape' || key === 'c') {
    key = 'clear';
  }
  if (key === 'Backspace') {
    key = 'delete';
  }

  const btn = document.querySelector(`button[value="${key}"]`);
  if (btn) {
    btn.click();
  }
});
