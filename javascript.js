function getComputerChoice() {
   let choice = ["Rock", "Paper", "Scissors"];

   return choice[Math.floor(Math.random() * 3)];
}

function selectWinner(playerSelection, computerSelection) {

    let returnStrin = "Sorry! Something went wrong.";

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


// console.log(getComputerChoice());
console.log(selectWinner("Rock", getComputerChoice()));

