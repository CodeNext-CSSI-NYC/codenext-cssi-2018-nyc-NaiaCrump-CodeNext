//Naia Crump

var readline = require("readline-sync");


// MAKE SURE YOU CHOOSE GOOD, RELEVANT NAMES FOR YOUR FUNCTIONS AND PARAMETERS

// 1a. Write (declare) a function that prints out "meow"
// 1b. Call it three times in a row. Run your code to make sure it works.

function makeSound(){
	console.log("Meow!")
}

makeSound();
makeSound();
makeSound();

// 2a. Write (declare) a function that takes one parameter and prints out the square of that number
// 2b. Call it three times with three different parameters. Run your code to make sure it works.

function numberSquared(num){
	return num ** 2
}

console.log(numberSquared(2))
console.log(numberSquared(6))
console.log(numberSquared(12))

// 3a. Write (declare) a function that takes two parameters and prints out
// "_____ is greater than ____" with the blanks filled in correctly with the two inputs.
// 3b. Call it three times with three different parameters
// Make sure to try cases where the first one is bigger, the second one is bigger, and when they are equal.
// Run your code to make sure it works.

function isGreaterThan (num1, num2){

	if (num1 > num2) {
		console.log(num1 + " is greater than " + num2)
	} else if (num2 > num1) {
		console.log(num2 + " is greater than " + num1)
	} else if (num1 == num2){
		console.log(num1 + " is equal to " + num2)
	}
}

isGreaterThan(8, 12);
isGreaterThan(7, 2);
isGreaterThan(5, 5);

// 4a. Write (declare) a function that takes one parameter called name and
// returns (not prints out, just returns) the string "Hello ____", with the name in the blank.
// 4b. Call the function and store the result in a variable. Then, print out that variable.
// Repeat this three times with different names.

let name;

function userName(name){
	var name = readline.question("What is your name? ")
	return "Hello " + name
}

var helloName = userName(name)
console.log(helloName)

// 5a. Write (declare) a function that takes two parameters and
// returns (not prints out, just returns) the average of the parameters.
// 5b. Call the function and store the result in a variable. Then, print out that variable
// in a sentence like "The average is _____".
// Repeat this three times with different numbers. What happens if you pass in
// something that isn't a number, like true or "apple"?

function averageOfParameters(num1, num2){
	return parseInt((num1 + num2) / 2)
}

var average1 = averageOfParameters(2, 9)
var average2 = averageOfParameters(41, 4)
var average3 = averageOfParameters("apple", "true")

console.log("The average is: " + average1)
console.log("The average is: " + average2)
console.log("The average is: " + average3) 

