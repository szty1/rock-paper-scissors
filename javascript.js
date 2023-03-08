let scorePlayer = 0;
let scoreComputer = 0;

function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissors"];
    return choice[Math.floor(Math.random() * 3)];
}

function selectRoundWinner(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
            return "tie";
    }

    if ((playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")) {
            scorePlayer++;
            return "player";
        
    }

    scoreComputer++;
    return "computer";
}

function displayResult(winner, playerChoice, computerChoice) {

    if (winner === "player") {
        playerScoreDisplay.innerText = scorePlayer;
        announcementDisplay.innerText = `You won this round! ${playerChoice} beats ${computerChoice}.`;
    } else if (winner === "computer") {
        computerScoreDisplay.innerText = scoreComputer;
        announcementDisplay.innerText = `You lost this round! ${computerChoice} beats ${playerChoice}.`;
    } else {
        announcementDisplay.innerText = `It's a tie! You both chose ${computerChoice}.`;
    }
}

function checkWinner() {
    if (scorePlayer < 5 && scoreComputer < 5) return;

    buttons.forEach(button => button.disabled = true);
    if (scorePlayer >= 5) {
        announcementDisplay.innerText = "You won this game! Congratulations!";
    } else {
        announcementDisplay.innerText = "You lost! Better luck next time!";
    }
}

function playRound(playerChoice) {

let computerChoice;
let roundWinner;

    computerChoice = getComputerChoice();

    playerChoiceDisplay.innerText = playerChoice;
    computerChoiceDisplay.innerText = computerChoice;

    roundWinner = selectRoundWinner(playerChoice, computerChoice);
    displayResult(roundWinner, playerChoice, computerChoice);
    checkWinner();
}

const playerScoreDisplay  = document.querySelector("#you h1");
const computerScoreDisplay  = document.querySelector("#computer h1");
const playerChoiceDisplay = document.querySelector("#you p");
const computerChoiceDisplay  = document.querySelector("#computer p");
const announcementDisplay  = document.querySelector(".announcement h2");
const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener('click', startNewRound));


function startNewRound(e) {
    playRound(e.target.innerText);
}