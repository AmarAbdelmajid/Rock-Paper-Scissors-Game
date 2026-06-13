"use strict";

let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

const selectedBtn = document.querySelectorAll(".btn");

const playerImg = document.querySelector(".player-selection-img");

const computerImg = document.querySelector(".computer-selection-img");

const humanPoints = document.querySelector(".player-points");

const computerPoints = document.querySelector(".computer-points");

const displayRounds = document.querySelector(".played-rounds");

function getComputerChoice() {
  let choice = Math.trunc(Math.random() * 3) + 1;

  let result;

  if (choice === 1) {
    result = "rock";
  } else if (choice === 2) {
    result = "paper";
  } else {
    result = "scissors";
  }

  computerImg.src = `img/${result}.png`;
  return result;
}

function getHumanChoice(event) {
  let playerChoice = event.target.textContent.toLowerCase();

  playerImg.src = `img/${playerChoice}.png`;

  return playerChoice;
}

function playRound(humanChoice, computerChoice) {
  if (humanScore < 5 && computerScore < 5) {
    if (humanChoice === computerChoice) {
      roundsPlayed++;
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      roundsPlayed++;
    } else {
      computerScore++;
      roundsPlayed++;
    }

    displayRounds.textContent = roundsPlayed;
    humanPoints.textContent = humanScore;
    computerPoints.textContent = computerScore;
  }
}

selectedBtn.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const humanChoice = getHumanChoice(event);
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  });
});
