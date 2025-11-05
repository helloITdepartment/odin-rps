//Options 0: Rock, 1: Paper, 2: Scissors 

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