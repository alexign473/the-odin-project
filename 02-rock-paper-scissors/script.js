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
