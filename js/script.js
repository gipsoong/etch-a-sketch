const container = document.getElementById('grid-container');

let baseSide = 16;

function createGrid(num) {
    for (i = 1; i <= num; i ++) {
        let row = document.createElement('div');
        row.classList.add('grid-row');
        container.appendChild(row);
        
        for (x = 1; x <= num; x++) {
            let square = document.createElement('div');
            square.classList.add('grid-square');
            row.appendChild(square);
        }
    }
}

createGrid(baseSide);

document.getElementById('grid-container').addEventListener('mouseover', e => {
    if (e.target.className === 'grid-square') {
        e.target.style.backgroundColor = 'black';
    }
});

function parsePrompt() {
    let userInput = prompt('Enter the amount of squares desired on each side of the new grid!');

    if (isNaN(userInput) || userInput > 100) {
        alert('Please enter a number below 100!');
        return parsePrompt();
    } else {
        return userInput;
    }
}

document.querySelector('button').addEventListener('click', function() {
    let askForSize = parsePrompt();
    container.innerHTML = '';
    
    createGrid(askForSize);
})