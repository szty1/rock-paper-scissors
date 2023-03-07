function getComputerChoice() {
    let choice = ["Rock", "Paper", "Scissors"];

    return choice[Math.floor(Math.random() * 3)];
}

function getPlayerChoice(message = "Pleas enter your choice:") {
    let playerChoice;

    playerChoice = window.prompt(message);

    playerChoice = playerChoice.toLowerCase();
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);

    if (playerChoice === "Rock" || playerChoice === "Paper" || playerChoice === "Scissors") {
        return playerChoice;
    }
    else {
        return;
    }
}

function selectRoundWinner(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
            return "tie";
    }

    if ((playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")) {
            return "player";
        
    }

    if ((playerChoice === "Rock" && computerChoice === "Paper") ||
        (playerChoice === "Paper" && computerChoice === "Scissors") ||
        (playerChoice === "Scissors" && computerChoice === "Rock")) {
            return "computer";
    }

    return;
}

function displayResult(winner, playerChoice, computerChoice) {

    if (winner === "player") {
        console.log(`You win! ${playerChoice} beats ${computerChoice}.`);
    } else if (winner === "computer") {
        console.log(`You lost! ${computerChoice} beats ${playerChoice}.`);
    } else {
        console.log(`It's a tie! You both chose ${computerChoice}.`);
    }
}

function displayScore(scorePlayer, scoreComputer) {

}

function displayWinner(scorePlayer, scoreComputer) {

}

function game(rounds) {

    let computerChoice;
    let playerChoice;
    let roundWinner;
    let scorePlayer = 0;
    let scoreComputer = 0;

    for (let i = 0; i < rounds; i++) {
        computerChoice = getComputerChoice();
        playerChoice = getPlayerChoice();

        while (playerChoice === undefined) {
            playerChoice = getPlayerChoice("This is not a valid choice. Try again:");
        }

        roundWinner = selectRoundWinner(playerChoice, computerChoice);
        displayResult(roundWinner, playerChoice, computerChoice);

        if (roundWinner === "player") {
            scorePlayer++;
        } else if (roundWinner === "computer") {
            scoreComputer++;
        }

        displayScore(scorePlayer, scoreComputer);
    }

    displayWinner(scorePlayer, scoreComputer);

}


// console.log(getComputerChoice());
game(5);

