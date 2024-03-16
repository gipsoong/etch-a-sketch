const container = document.querySelector('div');



function createGrid() {
    for (i = 1; i <= 256; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        container.appendChild(square);
        console.log(i);
    }
}

createGrid();