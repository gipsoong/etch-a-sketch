const container = document.querySelector('div');
const square = document.createElement('div');

square.classList.add('grid-square');


function createGrid() {
    for (i = 1; i <= 16; i++) {
        container.appendChild(square);
        console.log(i);
    }
}

createGrid();