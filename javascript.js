function getComputerChoice() {
    const computerChoice = ["Rock", "Paper", "Scissor"];
    return computerChoice[Math.floor(Math.random() * 3)];
}

function isRock(choice) {
    return choice.toLowerCase() == 'rock';
}

function isPaper(choice) {
    return choice.toLowerCase() == 'paper';
}

function isScissor(choice) {
    return choice.toLowerCase() == 'scissor';
}

function playRockPaperScissor(playerSelection, computerChoice) {
    let result = "Invalid selection, should be Rock, Paper, or Scissor!";
    if (playerSelection.toLowerCase() == computerChoice.toLowerCase()) {
        result = `Draw! ${playerSelection} and ${computerChoice} is the same!`;
    } else if (isRock(playerSelection)) {
        if (isPaper(computerChoice)) {
            result = `You Lose! ${computerChoice} beats ${playerSelection}`;
        } else if (isScissor(computerChoice)){
            result = `You Win! ${playerSelection} beats ${computerChoice}`;
        }
    } else if (isPaper(playerSelection)) {
        if (isScissor(computerChoice)) {
            result = `You Lose! ${computerChoice} beats ${playerSelection}`;
        } else if (isRock(computerChoice)){
            result = `You Win! ${playerSelection} beats ${computerChoice}`;
        }
    } else if (isScissor(playerSelection)) {
        if (isRock(computerChoice)) {
            result = `You Lose! ${computerChoice} beats ${playerSelection}`;
        } else if (isPaper(computerChoice)){
            result = `You Win! ${playerSelection} beats ${computerChoice}`;
        }
    }
    return result
}

function game() {
    for (let i = 0; i < 10; i += 1) {
        let playerSelection = prompt('Choose your weapon!', 'Rock');
        console.log(playRockPaperScissor(playerSelection, getComputerChoice()))
    }
}