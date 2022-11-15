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
  // Compare inputted parameters
  // If player and computer choices are equal it's a tie
  if (playerSelection === computerSelection) {
    return 'Tie';
  }
  // Computer wincon
  if (
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'rock')
  ) {
    computerScore++;
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
  // Player wincon
  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    playerScore++;
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  }
}

function isGameOver() {
  return playerScore >= 5 || computerScore >= 5;
}

function game(e) {
  if (isGameOver()) return;
  const playerSelection = e.target.id;
  const computerSelection = getComputerChoice();
  // Call playRound function with user input
  results.textContent = playRound(playerSelection, computerSelection);
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
