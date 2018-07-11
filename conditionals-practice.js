//Author: Naia Crump


var readline = require("readline-sync");
var randomInt = require("random-int");


var ourNum = randomInt(1, 10);
var userNum = parseInt(readline.question("Please guess a number from 1 - 10: "));
if (userNum == ourNum){
	console.log("You guessed it! Great Job!")
} else if (userNum < ourNum) {
	console.log("Sorry, your guess is too low...")
} else {
	console.log("Sorry, your guess is too high...")
}