const container = document.getElementById('grid-container');

let baseSize = 256;

function createGrid(size) {
    for (i = 1; i <= size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        container.appendChild(square);
    }
}

createGrid(baseSize);

document.getElementById('grid-container').addEventListener('mouseover', e => {
    if (e.target.className === 'grid-square') {
        e.target.style.backgroundColor = 'black';
    }
});

document.querySelector('button').addEventListener('click', function() {
    let askForSize = prompt('Enter the amount of squares desired on each side of the new grid!');
    let userInput = askForSize * askForSize;
    container.replaceChildren();

    // console.log(userInput);

    createGrid(userInput);
})