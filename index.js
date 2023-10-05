let playerScore = 0;
document.querySelector(
  "#player-score"
).textContent = `Player Score: ${playerScore}`;

let computerScore = 0;
document.querySelector(
  "#computer-score"
).textContent = `Computer Score: ${computerScore}`;

let gamesPlayed = 0;
document.querySelector(
  "#games-played"
).textContent = `Games Played: ${gamesPlayed}`;

let computerSelection = "";
let currentRoundResults = "";
let winner = "";

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    gamesPlayed += 1;
    document.querySelector(
      "#games-played"
    ).textContent = `Games Played: ${gamesPlayed}`;
    if (button.textContent === "restart") {
      restartGame();
    } else {
      playRound(button.textContent, getComputerChoice());
    }
  });
});

function getComputerChoice() {
  // return a random int from 0 to 2
  let randNum = Math.floor(Math.random() * 3);

  if (randNum === 0) {
    return "rock";
  } else if (randNum === 1) {
    return "paper";
  } else if (randNum === 2) {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  // check scores for 5

  document.querySelector(
    "#computer-selection"
  ).textContent = `${computerSelection}`;

  let playerSelectionLowerCase = playerSelection.toLowerCase();

  // case where they are the same
  if (computerSelection === playerSelectionLowerCase) {
    document.querySelector("#current-round-results").textContent =
      "tie game, select another choice";
  }

  if (playerSelectionLowerCase === "rock") {
    if (computerSelection === "scissors") {
      playerScore += 1;
      document.querySelector(
        "#player-score"
      ).textContent = `Player Score: ${playerScore}`;
      document.querySelector("#current-round-results").textContent =
        "You win! Rock beats Scissors";
    } else if (computerSelection === "paper") {
      computerScore += 1;
      document.querySelector(
        "#computer-score"
      ).textContent = `Computer Score: ${computerScore}`;
      document.querySelector("#current-round-results").textContent =
        "You lose! Paper beats Rock";
    }
  } else if (playerSelectionLowerCase === "paper") {
    if (computerSelection === "rock") {
      playerScore += 1;
      document.querySelector(
        "#player-score"
      ).textContent = `Player Score: ${playerScore}`;
      document.querySelector("#current-round-results").textContent =
        "You win! Paper beats Rock";
    } else if (computerSelection === "scissors") {
      computerScore += 1;
      document.querySelector(
        "#computer-score"
      ).textContent = `Computer Score: ${computerScore}`;
      document.querySelector("#current-round-results").textContent =
        "You lose! Scissors beats Paper";
    }
  } else if (playerSelectionLowerCase === "scissors") {
    if (computerSelection === "paper") {
      playerScore += 1;
      document.querySelector(
        "#player-score"
      ).textContent = `Player Score: ${playerScore}`;
      document.querySelector("#current-round-results").textContent =
        "You win! Scissors beats paper";
    } else if (computerSelection === "rock") {
      computerScore += 1;
      document.querySelector(
        "#computer-score"
      ).textContent = `Computer Score: ${computerScore}`;
      document.querySelector("#current-round-results").textContent =
        "You lose! Rock beats Scissors";
    }
  }

  if (playerScore === 5 || computerScore === 5) {
    if (computerScore > playerScore) {
      document.querySelector("#winner").textContent = "Winner: Computer";
      document.getElementById("restart").focus({ focusVisible: true });
    } else {
      document.querySelector("#winner").textContent = "Winner: Player";
      document.getElementById("restart").focus({ focusVisible: true });
    }
  }
}

function restartGame() {
  playerScore = 0;
  document.querySelector(
    "#player-score"
  ).textContent = `Player Score: ${playerScore}`;

  computerScore = 0;
  document.querySelector(
    "#computer-score"
  ).textContent = `Computer Score: ${computerScore}`;

  gamesPlayed = 0;
  document.querySelector(
    "#games-played"
  ).textContent = `Games Played: ${gamesPlayed}`;

  computerSelection = "";
  document.querySelector(
    "#computer-selection"
  ).textContent = `${computerSelection}`;
  currentRoundResults = "";
  document.querySelector(
    "#current-round-results"
  ).textContent = `${currentRoundResults}`;
  winner = "";
  document.querySelector("#winner").textContent = `${winner}`;
}
