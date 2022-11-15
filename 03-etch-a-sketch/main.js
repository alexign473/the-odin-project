const container = document.querySelector('.container');

function createGrid(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (let c = 0; c < rows * cols; c++) {
    const cell = document.createElement('div');
    cell.innerText = c + 1;
    cell.classList.add('cell');
    container.append(cell);
  }
}

createGrid(16, 16);
