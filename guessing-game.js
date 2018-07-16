// This game has already been discussed in the notes on the site.
// Do not look back at those notes, that would ruin the learning.
// If you have not yet done so, run npm install random-int in terminal.
// Google "npm random-int" to see how it works.
// We will make a guessing game as follows:

var randomInt = require("random-int");
var readline = require("readline-sync");


// Set a random number from 1 to 100 to be the answer.
let correctAnswer = randomInt(1, 100);
let howManyGuesses = 0;
// Ask the user to guess a number.
let userGuess = readline.question("Please guess a number between 1 and 100: ");
// If they're wrong, you should ask them to guess again.

while (userGuess != correctAnswer){
	console.log("Sorry, that's not the right answer. Try Again.");
	howManyGuesses++;
	console.log("You've guessed incorrectly " + howManyGuesses + " time(s).");
	if (userGuess > correctAnswer){
		console.log("That guess is too high!");
	} else if (userGuess < correctAnswer){
		console.log("That guess is much too low.");
	}
	userGuess = readline.question("Please guess another number: ");	
}

if (howManyGuesses <= 5){ 
	console.log("It took you " + howManyGuesses + " guesses! That's amazing!");
} else if (howManyGuesses >= 6){
	console.log("It took you " + howManyGuesses + " guesses. Oof.");
}
console.log("Congradulations! " + correctAnswer + " was the right guess!");

// Each time they guess, you should be telling them if their guess was too high or too low.
// Also, you should be tracking how many times they have guessed.
// Then, at the end, when you tell them that they guessed correctly,
// you should mention how many guesses it took them.