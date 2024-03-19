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

document.getElementById('grid-container').addEventListener('mouseover', e => {
    if (e.target.className === 'grid-square') {
        // console.log('hi');
        e.target.style.backgroundColor = 'black';
    }
});