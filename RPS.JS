const choice = ['Rock', 'Paper', 'Scissors'];

function computerPlay(array) {
    return(array[Math.floor(Math.random() * choice.length)])
}

   computerPlay(choice);
   let computerSelection = computerPlay(choice);

function shoot(playerSelection, computerSelection) {
    if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}!`)
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}!`)
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}!`)
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}!`)
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}!`)
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}!`)
    } else if (playerSelection === computerSelection) {
        console.log(`It's a tie! Both players chose ${playerSelection}!`)
    }
}

shoot('Scissors', computerSelection);
// Write a function that plays a single round of Rock Paper Scissors. 
// The function should take two parameters - the playerSelection and 
// computerSelection - and then return a string that declares the winner 
// of the round like so: "You Lose! Paper beats Rock"
// Make your function’s playerSelection parameter case-insensitive 
// (so users can input rock, ROCK, RocK or any other variation).