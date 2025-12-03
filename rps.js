//Options 0: Rock, 1: Paper, 2: Scissors 
let computerScore = 0;
let humanScore = 0;

const postgame = document.querySelector("#postgame");
const scoreboard = document.querySelector("#scoreboard");
const winnerMessage = document.createElement("p");
winnerMessage.setAttribute("id", "winner-message");
winnerMessage.textContent = "testtest";

const resetButton = document.createElement("button");
resetButton.setAttribute("id", "reset-button");
resetButton.textContent = "Reset";
resetButton.addEventListener("click", () => {
	humanScore = 0;
	computerScore = 0;
	winnerMessage.textContent = "";
	winnerMessage.remove();
	resetButton.remove();
	scoreboard.textContent = `Current score: ${humanScore}-${computerScore}`;
	rockButton.disabled = false;
	paperButton.disabled = false;
	scissorsButton.disabled = false;
});

function getComputerChoice() {
	return parseInt(Math.random() * 3);
}

function getHumanChoice() {
	let humanChoice = prompt("Please enter your move");

	if (humanChoice.toLowerCase().trim() === "rock") {
		return 0;
	} else if (humanChoice.toLowerCase().trim() === "paper") {
		return 1;
	} else if (humanChoice.toLowerCase().trim() === "scissors") {
		return 2;
	}
}

function playRound(computerChoice, humanChoice) {
	if (humanChoice === computerChoice) {
		console.log("It's a tie!");
	} else if (humanChoice === 0) {
		if (computerChoice === 2) {
			console.log("Computer chose scissors, you win!");
			humanScore++;
		} else {
			console.log("Computer chose paper, you loose");
			computerScore++;
		}
	} else if (humanChoice === 1) {
		if (computerChoice === 0) {
			console.log("Computer chose rock, you win!");
			humanScore++;
		} else {
			console.log("Computer chose scissors, you loose");
			computerScore++;
		}
	} else if (humanChoice === 2) {
		if (computerChoice === 1) {
			console.log("Computer chose paper, you win!");
			humanScore++;
		} else {
			console.log("Computer chose rock, you loose");
			computerScore++;
		}
	}

	scoreboard.textContent = `Current score: ${humanScore}-${computerScore}`;
	if (humanScore + computerScore >= 5) {
		rockButton.disabled = true;
		paperButton.disabled = true;
		scissorsButton.disabled = true;
		winnerMessage.textContent = `${humanScore > computerScore ? "Human" : "Computer"} wins!`
		postgame.appendChild(winnerMessage);
		postgame.appendChild(resetButton);
	}
}

function playGame(numRounds) {
	while(computerScore + humanScore < numRounds) {	
		const computerChoice = getComputerChoice();
		const humanChoice = getHumanChoice();
		playRound(computerChoice, humanChoice);

		console.log("Human: ", humanScore, ", computer: ", computerScore);
	}
}

// playGame(5);
//#ID
const rockButton = document.querySelector("#rock-button");
rockButton.addEventListener("click", () => {playRound(getComputerChoice(), 0)});

const paperButton = document.querySelector("#paper-button");
paperButton.addEventListener("click", () => {playRound(getComputerChoice(), 1)});

const scissorsButton = document.querySelector("#scissors-button");
scissorsButton.addEventListener("click", () => {playRound(getComputerChoice(), 2)});

