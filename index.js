
let playerScore = 0;
document.querySelector('#player-score').innerHTML = `Player Score: ${playerScore}`;


let computerScore = 0;
document.querySelector('#computer-score').innerHTML = `Computer Score: ${computerScore}`;

let gamesPlayed = 0;
document.querySelector('#games-played').innerHTML = `Games Played: ${gamesPlayed}`;

let computerSelection = '';
let currentRoundResults = '';
let winner = ''; 

const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', () => {

    gamesPlayed += 1;
    document.querySelector('#games-played').innerHTML = `Games Played: ${gamesPlayed}`;
    playRound(button.textContent, getComputerChoice())

}))

function getComputerChoice() {

    // return a random int from 0 to 2 
    let randNum = Math.floor(Math.random() * 3);

    if (randNum === 0) {
        return 'rock'
    } else if (randNum === 1) {
        return 'paper'
    } else if (randNum === 2) {
        return 'scissors'
    }

}

function playRound(playerSelection, computerSelection) {

    // check scores for 5 

    document.querySelector('#computer-selection').innerHTML = `${computerSelection}`;

    let playerSelectionLowerCase = playerSelection.toLowerCase();

    // case where they are the same 
    if (computerSelection === playerSelectionLowerCase) {
        document.querySelector('#current-round-results').innerHTML = 'tie game, select another choice';
    }

    if (playerSelectionLowerCase === 'rock') {
        if (computerSelection === 'scissors') {
            playerScore += 1;
            document.querySelector('#player-score').innerHTML = `Player Score: ${playerScore}`;
            document.querySelector('#current-round-results').innerHTML = 'You win! Rock beats Scissors';
        } else if (computerSelection === 'paper') {
            computerScore += 1;
            document.querySelector('#computer-score').innerHTML = `Computer Score: ${computerScore}`;
            document.querySelector('#current-round-results').innerHTML = 'You lose! Paper beats Rock';
        }
    } else if (playerSelectionLowerCase === 'paper') {
        if (computerSelection === 'rock') {
            playerScore += 1;
            document.querySelector('#player-score').innerHTML = `Player Score: ${playerScore}`;
            document.querySelector('#current-round-results').innerHTML = 'You win! Paper beats Rock';
        } else if (computerSelection === 'scissors') {
            computerScore += 1;
            document.querySelector('#computer-score').innerHTML = `Computer Score: ${computerScore}`;
            document.querySelector('#current-round-results').innerHTML = 'You lose! Scissors beats Paper';
        }
    } else if (playerSelectionLowerCase === 'scissors') {
        if (computerSelection === 'paper') {
            playerScore += 1;
            document.querySelector('#player-score').innerHTML = `Player Score: ${playerScore}`;
            document.querySelector('#current-round-results').innerHTML = 'You win! Scissors beats paper';
        } else if (computerSelection === 'rock') {
            computerScore += 1;
            document.querySelector('#computer-score').innerHTML = `Computer Score: ${computerScore}`;
            document.querySelector('#current-round-results').innerHTML = 'You lose! Rock beats Scissors';
        }
    }

}






