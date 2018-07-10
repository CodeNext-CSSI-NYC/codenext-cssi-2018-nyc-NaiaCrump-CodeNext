//Author: Naia Crump
var readline = require("readline-sync");


// Remember that you can comment parts of your code in and out!
// Try this as you move from question to question below.

// 1. Ask the user to enter a number, and print out "The square root of ___ is ___ ", but with the blanks filled in correctly. (Not sure how to get the square root of a number in JavaScript? Google it!)

var numberUser = readline.question("Please enter a number: ")
console.log("The square root of " + numberUser + " is " + (Math.sqrt(numberUser)))

// 2. Ask the user to enter their name, and print out "Your name has ___ letters", but with the blank filled in. Not sure how to get the number of letters in a string in JavaScript? Google it!

let userName = readline.question("Please enter your name: ");
console.log("Your name has " + userName.length + " letters." );

// 3. Ask the user to enter any word, and print out "The word ____ starts with the letter ___", but with the blanks filled in. Not sure how to get the first letter of a string in JavaScript? ...

let userWord = readline.question("Please type in any word: ")
console.log("Oh I know! The word " + userWord + " starts with the letter " +  userWord.charAt(0))

// 4. Ask the user to enter two numbers, and print out "The average of ___ and ___ is ____", but with the blanks filled in.

let userNumber1 = parseInt(readline.question("Please enter a number:  "));
let userNumber2 = parseInt(readline.question("Please enter another number: "));

console.log("This is easy! The average of " + userNumber1 + " and " + userNumber2 + " is " + ((userNumber1 + userNumber2)/2));