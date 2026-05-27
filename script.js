let humanScore = 0;
let ComputerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    console.log(computerChoice);
    return computerChoice;
}

const computerSelection = getComputerChoice();

function getHumanChoice() {
    const humanChoice = prompt("Please! Select rock, paper or scissors =>").toLocaleLowerCase();
    console.log(humanChoice);
    return humanChoice;
}

const humanSelection = getHumanChoice();

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Draw! Play again");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        ComputerScore++;
        console.log("You Lose! Paper beats Rock");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        console.log("You Win! Rock beats Scissors");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        console.log("You Win! Paper beats Rock");
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        ComputerScore++;
        console.log("You Lose! Scissors beats Paper");
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        ComputerScore++;
        console.log("You Lose! Rock beats Scissors");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log("You Win! Scissors beats paper");
    }
    console.log(`Score: You: ${humanScore} | Computer: ${ComputerScore}`);
}

playRound(humanSelection, computerSelection);

