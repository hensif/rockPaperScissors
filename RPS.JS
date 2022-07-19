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
let results = document.getElementById('results');
let resultsHead = document.getElementById('results-head');
let scores = document.getElementById('scores');
let playerScoreMarker = document.getElementById('player-score');
let computerScoreMarker = document.getElementById('computer-score'); 
let roundOutcome = document.getElementById('round-outcome');
let bod = document.getElementById('bod');
let buttons = document.getElementById('buttons');

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
    if (selectionName === SELECTIONS[0].name) {
        return SELECTIONS[0];
    } else if (selectionName === SELECTIONS[1].name) {
     return SELECTIONS[1];
    } else if (selectionName === SELECTIONS[2].name) {
       return SELECTIONS[2];
    }
}

    playerSelection = playerInput();

    if (computerSelection.name === playerSelection.beats) {
        roundOutcome.textContent = `You win! ${playerSelection.name} beats ${computerSelection.name}.`;
        ++playerScore;
        playerScoreMarker.textContent = `Player: ${playerScore}`;
    } else if (computerSelection.beats === playerSelection.name) {
        roundOutcome.textContent = `You lose! ${computerSelection.name} beats ${playerSelection.name}.`;
        ++computerScore;
        computerScoreMarker.textContent = `Computer: ${computerScore}`;
    } else roundOutcome.textContent = `It's a tie`; 

if (playerScore === 5) {
    buttons.textContent = 'You won the game!\nRefresh to play again.'
}
if (computerScore === 5) {
    buttons.textContent = 'You lost the game!\nRefresh to play again.'
}
};