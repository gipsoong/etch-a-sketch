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

function parsePrompt() {
    let promptUserInput = prompt('Enter the amount of squares desired on each side of the new grid!');

    if (isNaN(promptUserInput)) {
        // console.log(promptUserInput);
        alert('Please enter a number below 100!');
        return parsePrompt();
    } else {
        // console.log(`Is valid, user input ${promptUserInput}`);
        let userInput = promptUserInput * promptUserInput;
        console.log(userInput);
        return userInput;
    }
}

document.querySelector('button').addEventListener('click', function() {
    let askForSize = parsePrompt();
    container.replaceChildren();

    createGrid(askForSize);
})