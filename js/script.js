const container = document.querySelector('div');

function createGrid() {
    for (i = 1; i <= 256; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        container.appendChild(square);
        // console.log(i);
    }
}

createGrid();

function changeColor() {
    gridSquare.style.backgroundColor = 'black';
}

// let gridSquare = document.querySelectorAll('.grid-square');
// gridSquare.addEventListener('mouseover', changeColor);
// console.log(gridSquare);

let gridSquare = document.querySelector('.grid-square');
gridSquare.addEventListener('mouseover', changeColor);