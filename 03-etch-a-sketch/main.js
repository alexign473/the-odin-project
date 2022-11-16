let size = 100;
let colorMode = true;
let currentColor = 'black';
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

const container = document.querySelector('.container');
const sizeBtn = document.querySelector('#size');
const resetBtn = document.querySelector('#reset');
const colorModeBtn = document.querySelector('#colorMode');
const rainbowModeBtn = document.querySelector('#rainbowMode');

function createGrid(size) {
  container.style.setProperty('--grid-rows', size);
  container.style.setProperty('--grid-cols', size);
  for (let c = 0; c < size * size; c++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('mouseover', dye);
    container.append(cell);
  }
}

function rainbowColor() {
  const RAINBOW = [
    '#9400D3',
    '#4B0082',
    '#0000FF',
    '#00FF00',
    '#FFFF00',
    '#FF7F00',
    '#FF0000',
  ];
  return RAINBOW[Math.floor(Math.random() * RAINBOW.length)];
}

function dye(e) {
  if (mouseDown) {
    e.target.style.backgroundColor = colorMode ? currentColor : rainbowColor();
  }
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
colorModeBtn.addEventListener('click', () => (colorMode = true));
rainbowModeBtn.addEventListener('click', () => (colorMode = false));
