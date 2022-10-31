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

/*
Write a function that plays a single round of Rock Paper Scissors. 
The function should take two parameters - the playerSelection and computerSelection - 
and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
*/

function playRound(playerSelection, computerSelection) {
  // Make function’s playerSelection parameter case-insensitive
  playerSelection = playerSelection.toLowerCase();
  // Compare inputted parameters
  // If player == 'rock' and computer == 'rock' return string message "Tie"
  // If player == 'rock' and computer == 'paper' return string message "You Lose! Paper beats Rock"
  // If player == 'rock' and computer == 'scissors' return string message "You win! Rock beats Scissors"
  if (playerSelection === 'rock' && computerSelection === 'rock') return 'Tie';
  if (playerSelection === 'rock' && computerSelection === 'paper')
    return 'You Lose! Paper beats Rock';
  if (playerSelection === 'rock' && computerSelection === 'scissors')
    return 'You win! Rock beats Scissors';
  // If player == 'paper' and computer == 'rock' return string message "You win! Paper beats Rock"
  // If player == 'paper' and computer == 'paper' return string message "Tie"
  // If player == 'paper' and computer == 'scissors' return string message "You Lose! Scissors beats Paper"
  if (playerSelection === 'paper' && computerSelection === 'rock')
    return 'You win! Paper beats Rock';
  if (playerSelection === 'paper' && computerSelection === 'paper')
    return 'Tie';
  if (playerSelection === 'paper' && computerSelection === 'scissors')
    return 'You Lose! Scissors beats Paper';
  // If player == 'scissors' and computer == 'rock' return string message "You Lose! Rock beats Scissors"
  // If player == 'scissors' and computer == 'paper' return string message "You win! Scissors beats Paper"
  // If player == 'scissors' and computer == 'scissors' return string message "Tie"
  if (playerSelection === 'scissors' && computerSelection === 'rock')
    return 'You Lose! Rock beats Scissors';
  if (playerSelection === 'scissors' && computerSelection === 'paper')
    return 'You win! Scissors beats Paper';
  if (playerSelection === 'scissors' && computerSelection === 'scissors')
    return 'Tie';
}

const playerSelection = 'scissors';
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
