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

function selectWinner(playerSelection, computerSelection) {

    let returnString = "Sorry! Something went wrong.";

    if (playerSelection === computerSelection) {
        returnString = `It's a tie! You both chose ${playerSelection}.`;
    }

    if ((playerSelection === "Rock" && computerSelection === "Scissors") || 
        (playerSelection === "Paper" && computerSelection === "Rock") || 
        (playerSelection === "Scissors" && computerSelection === "Paper")) {
            returnString = `You win! ${playerSelection} beats ${computerSelection}.`;
    }

    if ((playerSelection === "Rock" && computerSelection === "Paper") || 
        (playerSelection === "Paper" && computerSelection === "Scissors") || 
        (playerSelection === "Scissors" && computerSelection === "PRock")) {
            returnString = `You lost! ${computerSelection} beats ${playerSelection}.`;
    }

    return returnString;
} 

function game(rounds) {
    for (let i = 0; i < rounds; i++) {

    }

}


// console.log(getComputerChoice());
console.log(selectWinner(getPlayerChoice(), getComputerChoice()));

