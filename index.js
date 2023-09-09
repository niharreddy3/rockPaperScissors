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

function playRound(playersChoice, computersChoice) {

    let playersChoiceLowerCase = playersChoice.toLowerCase();

    // case where they are the same 
    if (computersChoice === playersChoiceLowerCase) {
        return 'tie game'
    }

    if (playersChoiceLowerCase === 'rock') {
        if (computersChoice === 'scissors') {
            return 'You win! Rock beats Scissors';
        } else if (computersChoice === 'paper') {
            return 'You lose! Paper beats Rock'
        }
    } else if (playersChoiceLowerCase === 'paper') {
        if (computersChoice === 'rock') {
            return 'You win! Paper beats Rock';
        } else if (computersChoice === 'scissors') {
            return 'You lose! Scissors beats Paper'
        }
    } else if (playersChoiceLowerCase === 'scissors') {
        if (computersChoice === 'paper') {
            return 'You win! Scissors beats paper';
        } else if (computersChoice === 'rock') {
            return 'You lose! Rock beats Scissors'
        }
    }

}

function game() {

    for (let i = 0; i <= 5; i++) {
        let playerSelection = prompt('What is player choice?')
        let computersChoice = getComputerChoice()
        console.log(`Player choice was: ${playerSelection}`)
        console.log(`Computer choice was: ${computersChoice}`)
        console.log(playRound(playerSelection, computersChoice));
    }

}





