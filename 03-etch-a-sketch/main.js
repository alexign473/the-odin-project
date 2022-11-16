let size = 100;
let colorMode = true;
let currentColor = '#333333';
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

const canvas = document.querySelector('.canvas');
const sizeBtn = document.querySelector('#size');
const resetBtn = document.querySelector('#reset');
const colorModeBtn = document.querySelector('#colorMode');
const rainbowModeBtn = document.querySelector('#rainbowMode');
const colorPicker = document.querySelector('input[type="color"]');

function createGrid(size) {
  canvas.style.setProperty('--grid-rows', size);
  canvas.style.setProperty('--grid-cols', size);
  for (let c = 0; c < size * size; c++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.addEventListener('mouseover', dye);
    canvas.append(cell);
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
  canvas.innerHTML = '';
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
colorPicker.addEventListener('change', (e) => {
  currentColor = e.target.value;
  colorMode = true;
});
