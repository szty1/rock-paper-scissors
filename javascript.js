function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissors"];
    return choice[Math.floor(Math.random() * 3)];
}

function getPlayerChoice(message = "Pleas enter your choice:") {
    let playerChoice;

    playerChoice = window.prompt(message);

    if (playerChoice === null) {
        
    }

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
        console.log(`You won this round! ${playerChoice} beats ${computerChoice}.`);
    } else if (winner === "computer") {
        console.log(`You lost this round! ${computerChoice} beats ${playerChoice}.`);
    } else {
        console.log(`It's a tie! You both chose ${computerChoice}.`);
    }
}

function playGame(rounds) {

    let computerChoice;
    let playerChoice;
    let roundWinner;
    let scorePlayer = 0;
    let scoreComputer = 0;

    for (let i = 0; i < rounds; i++) {

        console.log(`Round ${i + 1}:`);
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

        console.log(`You: ${scorePlayer} Computer: ${scoreComputer} `);
    }

    if (scorePlayer > scoreComputer){
        console.log(`YOU WON!!!\nCongratulations!`);
    } else if (scorePlayer < scoreComputer) {
        console.log(`YOU LOST!\nBetter luck next time!`);
    } else {
        console.log(`IT'S A TIE!\nTry again!`);
    };

}

console.log(`Play a game of Rock-Paper-Scissors against the computer.\nWinner will be the best of five.\nGood Luck!`);

playGame(5);

