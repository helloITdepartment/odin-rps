//Options 0: Rock, 1: Paper, 2: Scissors 
let computerScore = 0;
let humanScore = 0;

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
}


function playGame(numRounds) {
	while(computerScore + humanScore < numRounds) {	
		const computerChoice = getComputerChoice();
		const humanChoice = getHumanChoice();
		playRound(computerChoice, humanChoice);

		console.log("Human: ", humanScore, ", computer: ", computerScore);
	}
}

playGame(5);