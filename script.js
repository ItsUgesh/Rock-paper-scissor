let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    console.log(computerChoice);
    return computerChoice;
}



function getHumanChoice() {
    const humanChoice = prompt("Please! Select rock, paper or scissors ->").toLocaleLowerCase();
    console.log(humanChoice);
    return humanChoice;
}



function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Draw! ummh same choice.");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        console.log("You Lose! Paper beats Rock");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        console.log("You Win! Rock beats Scissors");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        console.log("You Win! Paper beats Rock");
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        console.log("You Lose! Scissors beats Paper");
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        console.log("You Lose! Rock beats Scissors");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log("You Win! Scissors beats paper");
    }
    console.log(`Score: You: ${humanScore} | Computer: ${computerScore}`);
}



function playGame() {
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        playRound(humanSelection, computerSelection);
    }
}

playGame();

if(humanScore === computerScore){
console.log("Its a draw! Play again")
}else if(humanScore > computerScore){
    console.log(`You win the whole series with ${humanScore} points.`)
}else if(computerScore > humanScore){
    console.log(`Computer wins the whole series with ${computerScore} points.`)
}

