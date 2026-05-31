let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    return computerChoice;
}

const buttons = document.querySelectorAll(".btn");
const resultDiv = document.querySelector(".result");
const scoreDiv = document.querySelector(".score");
const endResultDiv = document.querySelector(".end-result");


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        resultDiv.textContent = "Draw! ummh same choice.";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        resultDiv.textContent = "You Lose! Paper beats Rock";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        resultDiv.textContent = "You Win! Rock beats Scissors";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        resultDiv.textContent = "You Win! Paper beats Rock";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        resultDiv.textContent = "You Lose! Scissors beats Paper";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        resultDiv.textContent = "You Lose! Rock beats Scissors";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        resultDiv.textContent = "You Win! Scissors beats paper";
    }
    scoreDiv.textContent = `Score: You: ${humanScore} | Computer: ${computerScore}`;
}

function playGame() {
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if (roundCount < 5) {
                const computerSelection = getComputerChoice();
                const humanSelection = button.id;
                playRound(humanSelection, computerSelection);
                roundCount++;
            } if(roundCount === 5) {
                if (humanScore === computerScore) {
                    endResultDiv.textContent = "Its a draw! Play again";
                } else if (humanScore > computerScore) {
                    endResultDiv.textContent = `You win the whole series with ${humanScore} points.`;
                } else if (computerScore > humanScore) {
                    endResultDiv.textContent = `Computer wins the whole series with ${computerScore} points.`;
                }
            }
        });
    });
}

playGame();







