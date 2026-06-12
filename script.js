"use strict";

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = Math.trunc(Math.random() * 3) + 1;

  if (choice === 1) {
    return "rock";
  } else if (choice === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Enter your choice. rock, paper, scissors");
  return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  console.log(computerChoice);
  if (humanChoice === computerChoice) return "no one wins";
  else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    return "You won rock beats scissors";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    return "You won paper beats rock";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    return "You won scissors beats paper";
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    return "Computer won paper beats rock";
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    return "Computer won scissors beats paper";
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    return "Computer won rock beats scissors";
  }
}

for (let i = 0; i < 5; i++) {
  playRound(getHumanChoice(), getComputerChoice());
}

console.log(humanScore);
console.log(computerScore);
