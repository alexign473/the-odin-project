let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
const results = document.querySelector('.results');
const score = document.querySelector('.score');

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  let result = '';
  // Compare inputted parameters
  // If player and computer choices are equal it's a tie
  if (playerSelection === computerSelection) {
    result = 'Tie';
    return result;
  }
  // Computer wincon
  if (
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'rock')
  ) {
    result = `You Lose! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
    return result;
  }
  // Player wincon
  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    result = `You Win! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
    return result;
  }
  return result;
}

function isGameOver() {
  return playerScore >= 5 || computerScore >= 5;
}

function game(e) {
  if (isGameOver()) return;
  const playerSelection = e.target.id;
  const computerSelection = getComputerChoice();
  // Call playRound function with user input
  const roundResult = playRound(playerSelection, computerSelection);
  results.textContent = roundResult;
  score.textContent = `Player score: ${playerScore}, Computer score: ${computerScore}`;

  if (playerScore >= 5) {
    results.textContent = 'End of the game! PLAYER WIN';
    return;
  }
  if (computerScore >= 5) {
    results.textContent = 'End of the game! COMP WIN';
    return;
  }
}

buttons.forEach((button) => button.addEventListener('click', game));

/*
Write a NEW function called game(). 
Call the playRound function inside of this one to play a 5 round game 
that keeps score and reports a winner or loser at the end.
*/

// function game() {
//   // Create variable of player score
//   let playerScore = 0;
//   // Create variable of computer score
//   let computerScore = 0;

//   // Loop from 0 to 5
//   for (let i = 0; i < 5; i++) {
//     // Get user input
//     const playerSelection = getUserInput();
//     if (!playerSelection) {
//       return;
//     }
//     const computerSelection = getComputerChoice();
//     // Call playRound function with user input
//     const roundWinner = playRound(playerSelection, computerSelection);
//     // If player wins, add 1 to player score
//     // If computer wins, add 1 to computer score
//     if (roundWinner === 'player') {
//       playerScore++;
//     } else if (roundWinner === 'computer') {
//       computerScore++;
//     }
//   }
//   // Report a winner
//   if (playerScore === computerScore) {
//     return "It's a Tie";
//   } else if (playerScore > computerScore) {
//     return 'Player won!';
//   } else {
//     return 'Computer won!';
//   }
// }

// console.log('End of the game!', game());
