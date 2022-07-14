const choice = ['ROCK', 'PAPER', 'SCISSORS'];

function computerPlay(array) {
    return(array[Math.floor(Math.random() * choice.length)])
}

   computerPlay(choice);
   let computerSelection = computerPlay(choice);
function shoot(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() == choice[0] && computerSelection == choice[2]) {
        console.log(`You Win! ${playerSelection.toUpperCase()} beats ${computerSelection}!`)
    } else if (playerSelection.toUpperCase() == choice[2] && computerSelection == choice[1]) {
        console.log(`You Win! ${playerSelection.toUpperCase()} beats ${computerSelection}!`)
    } else if (playerSelection.toUpperCase() == choice[1] && computerSelection == choice[0]) {
        console.log(`You Win! ${playerSelection.toUpperCase()} beats ${computerSelection}!`)
    } else if (playerSelection.toUpperCase() == choice[2] && computerSelection == choice[0]) {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection.toUpperCase()}!`)
    } else if (playerSelection.toUpperCase() == choice[1] && computerSelection == choice[2]) {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection.toUpperCase()}!`)
    } else if (playerSelection.toUpperCase() == choice[0] && computerSelection == choice[1]) {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection.toUpperCase()}!`)
    } else if (playerSelection.toUpperCase() == computerSelection) {
        console.log(`It's a tie! Both players chose ${computerSelection}!`)
    }
}
// Write a function that plays a single round of Rock Paper Scissors. 
// The function should take two parameters - the playerSelection and 
// computerSelection - and then return a string that declares the winner 
// of the round like so: "You Lose! Paper beats Rock"
// Make your function’s playerSelection parameter case-insensitive 
// (so users can input rock, ROCK, RocK or any other variation).

function game() {
    for (let i=0; i<5; i++) {
        prompt('Make your choice! ROCK, PAPER, or SCISSORS?');
            console.log(shoot(prompt(), computerSelection))
    }
}

game();