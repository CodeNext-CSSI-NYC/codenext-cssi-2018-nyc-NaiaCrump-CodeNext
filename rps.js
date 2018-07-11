//Naia Crump

var readline = require("readline-sync");


const compNum = Math.random() * 3
let compChoice


if ((0 <= compNum) && (compNum <= 1)){
	 compChoice = "rock"

	} else if ((1 < compNum) && (compNum <= 2)){
	 compChoice = "scissors"

	} else if((2 < compNum) && (compNum <= 3)){
	 compChoice = "paper"
}

var userChoice = readline.question("Rock, Paper, or Scissors? ")
 
if (userChoice == compChoice){
	console.log("Whoops, its a tie!")
}

if ((userChoice == "rock") && (compChoice == "paper")){
		console.log("Too bad, you lose...")
	} else if ((userChoice == "rock") && (compChoice == "scissors")) {
		console.log("You win!")
	} else if ((userChoice == "paper") && (compChoice == "rock")){
		console.log("You win!")
	} else if ((userChoice == "paper") && (compChoice == "scissors")){
		console.log("Too bad, you lose...")
	} else if ((userChoice == "scissors") && (compChoice == "rock")){
		console.log("Too bad, you lose...")
	} else if ((userChoice == "scissors") && (compChoice == "paper")){
		console.log("You win!")
	}



console.log("The computer chose " + compChoice)