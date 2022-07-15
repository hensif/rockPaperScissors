const SELECTIONS = [
    {
        name: 'rock',
        symbol: '✊',
        beats: 'scissors'
    },
    {
        name: 'paper',
        symbol: '✋',
        beats: 'rock'
    },
    {
        name: 'scissors',
        symbol: '✌',
        beats: 'paper'
    }
];

// This function plays 1 round using player and computer selections 
// as parameters, and outputs the result.

function playRound() {

// This function randomly selects computer choice and assigns 
// it to SELECTIONS[i]

    function randomSelection() {
        const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
        return SELECTIONS[randomIndex];
    }
    computerSelection = randomSelection();
    let selectionName = prompt(`Rock, Paper, Scissors`);

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
} else if (computerSelection.beats === playerSelection.name) {
    console.log(`You lose! ${computerSelection.name} beats ${playerSelection.name}.`)
} else if (computerSelection.name === playerSelection.name)
    console.log(`It's a tie`);
}

function game() {
for (i=0; i<5; i++) {
    playRound();
}
}

game()



// This function will play 5 rounds and declare a winner at first to 3.

