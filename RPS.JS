const SELECTIONS = [
    {
        name: 'rock',
        icon: '✊',
        beats: 'scissors'
    },
    {
        name: 'paper',
        icon: '✋',
        beats: 'rock'
    },
    {
        name: 'scissors',
        icon: '✌',
        beats: 'paper'
    }
];

let playerScore = 0;
let computerScore = 0;

let selectionName = '';

const selectionButtons = document.querySelectorAll('[data-selection]');

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        selectionName = selectionButton.dataset.selection;
        playRound();
    })
})

// This function plays 1 round using player and computer selections 
// as parameters, and outputs the result, including the score.

function playRound() {

// This function randomly selects computer choice and assigns 
// it to SELECTIONS[i]

    function randomSelection() {
        const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
        return SELECTIONS[randomIndex];
    }
    
    computerSelection = randomSelection();
// This function determines player prompt input and assigns it 
// to SELECTIONS

function playerInput () {
    if (selectionName.toLowerCase() === SELECTIONS[0].name) {
        return SELECTIONS[0];
    } else if (selectionName.toLowerCase() === SELECTIONS[1].name) {
     return SELECTIONS[1];
    } else if (selectionName.toLowerCase() === SELECTIONS[2].name) {
       return SELECTIONS[2];
    }
}

    playerSelection = playerInput();
    if (computerSelection.name === playerSelection.beats) {
        console.log(`You win! ${playerSelection.name} beats ${computerSelection.name}.`)
        ++playerScore;
    } else if (computerSelection.beats === playerSelection.name) {
        console.log(`You lose! ${computerSelection.name} beats ${playerSelection.name}.`)
        ++computerScore;
    } else if (computerSelection.name === playerSelection.name) {
        console.log(`It's a tie`); 
    } else (console.log(`error: invalid entry`));
        console.log(`Player Score: ${playerScore} --- Computer Score: ${computerScore}`)  
} 