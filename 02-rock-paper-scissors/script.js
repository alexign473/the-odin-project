function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}

function getUserInput() {
  let userInput = prompt('Enter rock, paper or scissors');
  if (!userInput) return;
  userInput = userInput.toLowerCase();
  if (
    userInput === 'rock' ||
    userInput === 'paper' ||
    userInput === 'scissors'
  ) {
    return userInput;
  } else {
    return getUserInput();
  }
}

/*
Write a function that plays a single round of Rock Paper Scissors. 
The function should take two parameters - the playerSelection and computerSelection - 
and then return the winner of the round and log like so: "You Lose! Paper beats Rock"
*/

function playRound(playerSelection, computerSelection) {
  // Make function’s playerSelection parameter case-insensitive
  playerSelection = playerSelection.toLowerCase();
  // Compare inputted parameters
  // If player and computer choices are equal return string "tie"
  if (playerSelection === computerSelection) {
    console.log('Tie');
    return 'tie';
  }
  // Computer wincon
  if (
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'rock')
  ) {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    return 'computer';
  }
  // Player wincon
  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    return 'player';
  }
}

/*
Write a NEW function called game(). 
Call the playRound function inside of this one to play a 5 round game 
that keeps score and reports a winner or loser at the end.
*/

function game() {
  // Create variable of player score
  let playerScore = 0;
  // Create variable of computer score
  let computerScore = 0;

  // Loop from 0 to 5
  for (let i = 0; i < 5; i++) {
    // Get user input
    const playerSelection = getUserInput();
    if (!playerSelection) {
      return;
    }
    const computerSelection = getComputerChoice();
    // Call playRound function with user input
    const roundWinner = playRound(playerSelection, computerSelection);
    // If player wins, add 1 to player score
    // If computer wins, add 1 to computer score
    if (roundWinner === 'player') {
      playerScore++;
    } else if (roundWinner === 'computer') {
      computerScore++;
    }
  }
  // Report a winner
  if (playerScore === computerScore) {
    return "It's a Tie";
  } else if (playerScore > computerScore) {
    return 'Player won!';
  } else {
    return 'Computer won!';
  }
}

console.log('End of the game!', game());
