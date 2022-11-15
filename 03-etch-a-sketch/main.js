const container = document.querySelector('.container');

function createGrid(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (let c = 0; c < rows * cols; c++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('mouseover', dye);
    container.append(cell);
  }
}

function dye(e) {
  e.target.style.backgroundColor = 'black';
}

createGrid(100, 100);
