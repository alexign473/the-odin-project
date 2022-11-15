let size = 100;

const container = document.querySelector('.container');
const sizeBtn = document.querySelector('#size');
const resetBtn = document.querySelector('#reset');

function createGrid(size) {
  container.style.setProperty('--grid-rows', size);
  container.style.setProperty('--grid-cols', size);
  for (let c = 0; c < size * size; c++) {
    const cell = document.createElement('div');
    // cell.classList.add('cell');
    cell.addEventListener('mouseover', dye);
    container.append(cell);
  }
}

function dye(e) {
  e.target.style.backgroundColor = 'black';
}

function resetCanvas() {
  container.innerHTML = '';
  createGrid(size);
}

function changeSize() {
  const input = getUserInput();
  if (!input) return;
  size = input;
  resetCanvas();
}

function getUserInput() {
  const input = +prompt(
    'On a scale of 16-100, how big would you like your canvas?',
    16
  );
  if (!input) return;
  if (input > 100 || input < 16) return getUserInput();
  return input;
}

createGrid(size);

sizeBtn.addEventListener('click', changeSize);
resetBtn.addEventListener('click', resetCanvas);
