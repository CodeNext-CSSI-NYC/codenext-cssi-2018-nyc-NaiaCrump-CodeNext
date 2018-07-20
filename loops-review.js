
var readline = require("readline-sync");
var randomInt = require("random-int");


// 1. We did this last time, but we are going to do it again to make sure you can.
// Do not look back and copy. Then you would not be learning.
// Ask the user to guess a password.
let correctPassword = "Naia"; 
let userGuess = readline.question("What is the secret password?: "); 
let howManyGuesses = 0;

while (userGuess != correctPassword){
	console.log("Sorry, that's incorrect. Try Again");
	howManyGuesses++;
	console.log("You have tried " + howManyGuesses + " time(s).");
	userGuess = readline.question("What is the secret password?: ");
} 

console.log("Congradulations! You got the password!");
console.log("*************");
// Keep asking them until they get it right.
// At the end, tell them how many guesses it took them.

/************************************************************************************************************************************
************************************************************************************************************************************/


// 2. Make a for loop that prints out the numbers from 0 to 9.

for (a = 0; a < 10; a++){
	console.log(a);
}
console.log("*************");

/************************************************************************************************************************************
************************************************************************************************************************************/

// 3. Make a for loop that prints out the even numbers from 0 to 100.
// Note that there are two ways to do this. One way is to use i += 2 instead of i++.
// This makes i go up by two each time, so that it skips odd numbers.

for (b = 0; b <= 100; b += 2){
	console.log(b);
}
console.log("*************");
// The other way is to use an if statement inside the for loop that only prints
// even numbers. Make sure you can do it both ways. (As in, actually do it both ways.)

 for (c = 0; c <= 100; c++){
 	if (c % 2 == 0 ){
 		console.log(c);
 	}
 }
console.log("*************");

/************************************************************************************************************************************
************************************************************************************************************************************/

// 4. Make a variable called sum that is equal to 0.
let sum = 0;
let userNumber1;
// Keep asking the user to enter in numbers until all of the numbers they have typed in
// add up to more than 100 in total.
console.log("Your goal is to enter numbers to get to 100 or more!");

while (sum < 100){
	let userNumber1 = parseInt(readline.question("Enter a number: "));
	sum = sum + userNumber1;
	console.log("You are at " + sum + " out of 100." );	
}

if (sum > 100 ){
	let sumOver = sum - 100;
	console.log("You got " + sumOver + " over 100.")
} else {
	console.log("You got it!")
}
// For example, it might end after two times through the loop if I type 77, 44.
// But it might take many more attempts if I type 1, 1, 1, 1, 1 ....
console.log("*************");

/************************************************************************************************************************************
************************************************************************************************************************************/

// 5a. Use a loop to make this pattern:
// *
// **
// ***
// ****
// *****
// ******
let patternFinal = ""

for (let e = 0; e < 6; e++){
	console.log(patternFinal = patternFinal + "*" )

}

/************************************************************************************************************************************
************************************************************************************************************************************/

// 5b. Use a loop to make this pattern:
// ***********
//
// ***********
// 
// ***********
//
// ***********
//
// ***********
//
// ***********
//
// ***********
//

for (let d = 0; d < 6; d++){
	console.log("***********");
	console.log("           ");
}

/************************************************************************************************************************************
************************************************************************************************************************************/

// 6. Use this line:
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// Set up a for loop that goes through this string.
for (f = 0; f < alphabet.length; f++){
	let letter = alphabet[f].toLowerCase();
	console.log(letter);
}
console.log("*************");

// Do not use 26 or 25 in your for loop. Instead use the .length property of strings.
// Inside the for loop, store the corresponding letter for each index in a variable called letter.
// Then, print out the toLowerCase() version of each letter.
// You should see the alphabet, in lower case, with a new letter on each line.



// 7. Last time we listed out all of the factors of a number.
// This time we will do something similar: we will check if a number is a perfect number.
// A perfect number is one where all of the factors (other than the number itself)
// add up to the number itself.
// We will write a function that returns true or false, depending on whether or not it is perfect.
// See https://en.wikipedia.org/wiki/List_of_perfect_numbers if you want to.
// 6 is perfect: 1 + 2 + 3 = 6.
// 28 is too: 1 + 2 + 4 + 7 + 14 = 28
// No other small numbers are.
// Write a function that takes in a number uses a for loop to go through the
// values from 1 to number - 1 and add together all the ones that are factors of
// number. Return true if this sum is equal to number, false otherwise.
// Make sure it returns true for 6 and 28 and false for pretty much anything else.