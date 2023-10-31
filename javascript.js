let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

function getComputerChoice() {
    const computerChoice = ["Rock", "Paper", "Scissors"];
    return computerChoice[Math.floor(Math.random() * 3)];
}

function isRock(choice) {
    return choice.toLowerCase() == 'rock';
}

function isPaper(choice) {
    return choice.toLowerCase() == 'paper';
}

function isScissor(choice) {
    return choice.toLowerCase() == 'scissors';
}

function playRockPaperScissor(playerSelection, computerChoice) {
    let result = "Invalid selection, should be Rock, Paper, or Scissors!";
    if (playerSelection.toLowerCase() == computerChoice.toLowerCase()) {
        result = `Draw! ${playerSelection} and ${computerChoice} is the same!`;
        drawScore += 1;
    } else if (isRock(playerSelection)) {
        if (isPaper(computerChoice)) {
            result = `You Lose! ${playerSelection} lost against ${computerChoice}`;
            computerScore += 1;
        } else if (isScissor(computerChoice)){
            result = `You Win! ${playerSelection} beats ${computerChoice}`;
            playerScore += 1;
        }
    } else if (isPaper(playerSelection)) {
        if (isScissor(computerChoice)) {
            result = `You Lose! ${playerSelection} lost against ${computerChoice}`;
            computerScore += 1;
        } else if (isRock(computerChoice)){
            result = `You Win! ${playerSelection} beats ${computerChoice}`;
            playerScore += 1;
        }
    } else if (isScissor(playerSelection)) {
        if (isRock(computerChoice)) {
            result = `You Lose! ${playerSelection} lost against ${computerChoice}`;
            computerScore += 1;
        } else if (isPaper(computerChoice)){
            result = `You Win! ${playerSelection} beats ${computerChoice}`;
            playerScore += 1;
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

function updateDisplay() {
    const playerScoreDisplay = document.querySelector('#playerScore');
    const computerScoreDisplay = document.querySelector('#computerScore');
    const drawScoreDisplay = document.querySelector('#drawScore');

    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    drawScoreDisplay.textContent = drawScore;
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const result = playRockPaperScissor(button.id, getComputerChoice());

        const historyDisplay = document.querySelector('#history');
        const roundResultDisplay = document.createElement('li');
        roundResultDisplay.classList.add('log');
        roundResultDisplay.textContent = result;

        historyDisplay.appendChild(roundResultDisplay);

        updateDisplay();
    });
});