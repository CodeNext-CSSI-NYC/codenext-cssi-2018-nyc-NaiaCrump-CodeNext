//Naia Crump 

var randomInt = require("random-int");
var readline = require("readline-sync");



//1a. Use a while loop to print out numbers from 1 to 10
let count = 0;
while (count <= 10){
	console.log(count);
	count++;
}
//**************************************************************************************************

//1b. Use a while loop to print out numbers from 30 to 15

let count2 = 30;
while (count2 >= 15){
	console.log(count2)
	count2--
} 
//**************************************************************************************************

// 2. Write a program that keeps rolling a die until the roll is a 5. Print out each roll.
// If you haven't yet done so, you should run
// npm install random-int
// and use that to get a random number from 1 to 6.
// Google "npm random-int" for more info.

let dieRoll

while (dieRoll != 5){
	dieRoll = randomInt(1, 6); 
	console.log(dieRoll)
}

console.log("You rolled 5! Congrats!")
//**************************************************************************************************

// 3. Write a program that asks the user to guess a secret password.
// Until the user enters the correct password (which is chosen by you in advance),
// the program will keep asking for all eternity. When they finally do enter the
// correct password, exit the loop and print a congratulatory message.

// Hint: Declare userInput outside the loop and initialize it to the value of readline.question("Enter password: ").
// The while loop will check if userInput matches the correct password.
// If not, inside the loop you should print "Sorry! That's incorrect", then
// assign userInput to the value of readline.question("Enter password: ") again.

// Bonus: Enhance your program to only allow the user to try entering the correct password three times.
// If they fail three times, the program should kick them out and tell them they are a robot.
// When the user enters the wrong password, the program tells them that they are wrong,
// along with how many attempts they've made so far.

let correctPassword = "Naia";
let userGuesses = 1;

let userPassword = readline.question("Whats the secret password?: ");


while ((userPassword !== correctPassword) && (userGuesses <= 3)){
	console.log("Sorry, that's not the password. Try Again.")
	console.log("You've guessed the password " + userGuesses + " time(s)")
	userPassword = readline.question("Whats the secret password?: ")
	userGuesses++ 
	
	}

if ((userGuesses = 3) && (userPassword !== correctPassword)){
	console.log("Sorry, You've tried too many times. You must be a robot.")
}


if (userPassword == correctPassword) {
	console.log("Congrats! You got the password!")
} 




