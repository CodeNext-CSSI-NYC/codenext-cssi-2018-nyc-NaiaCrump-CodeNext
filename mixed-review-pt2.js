let fs = require('fs');
const words = fs.readFileSync('words.txt').toString().split("\n");
let readline = require('readline-sync');
let randomInt = require('random-int');
let randomItem = require('random-item');




// Write a function that randomly returns the name of a cafe where we could have lunch.
// An array with all of the cafe names is provided.
function lunch() {
  //let cafes = ["The Mezz", "Highline", "Hemispheres", "Panorama"];
  // Your code here
  console.log(randomItem(["The Mezz", "Highline", "Hemispheres", "Panorama"])); 

}
// Run your function a bunch of times and make sure all 4 of these appear, and that
// you never get undefined.

//lunch();


// Write a function that tracks the score of a football team: It asks the user to
// type in either touchdown or field goal. If they say touchdown or td,
// it adds 7 points to the score, and if they say field goal or fg it adds 3 points.
// (Yes, I am aware that there is more nuance in actual football.)
// If they type anything else, it prints out their total points and the program ends.
let totalScore = 0;

function football() {
	console.log("Lets play some American Football! Ready  to throw that pigskin?");
	let userPoints = readline.question("Did you get a touchdown or a field goal? ");

	while (userPoints == "touchdown".toLowerCase() || userPoints == "touch down".toLowerCase()){
		totalScore = totalScore + 7; 
		console.log("Your scored a " + userPoints + "!" + " Your score is " + totalScore + ".");
		userPoints = readline.question("Did you get a touchdown or a field goal? ");

		if (userPoints == "field goal".toLowerCase() || userPoints == "fieldgoal".toLowerCase()){
			totalScore =  totalScore + 3;
			console.log("Your scored a " + userPoints + "!" + " Your score is " + totalScore + ".");
			userPoints = readline.question("Did you get a touchdown or a field goal? ");
		}

	}
}
// You can test this one yourself, since it will depend on what you type in.
//football();



// Write a function called duckDuckGoose() that prints out "Duck Duck Goose" 10 times.
// Here is the catch: you are only allowed to type "Duck" one time in your code.

let onlyOneDuck = "";

function duckDuckGoose() {
	for (a = 0; a < 2; a++){
		onlyOneDuck = onlyOneDuck + "Duck ";
	}
	for (b = 0; b < 10; b++){
		console.log(onlyOneDuck + "Goose")
	}
	
}
// I can't test this one without looking at your code to see if you followed the rule.

//duckDuckGoose();


// Write a function that has two parameters -- an array of strings and a letter
// -- and returns true if every string in the array starts with that letter.
// Otherwise it returns false.
let firstLetter = "";

function sameStart(arr, letter) {
	for (c = 0; c < arr.length; c++){
		let firstLetter = arr[c].charAt(0);	 
	
	if (firstLetter != letter){	
		return false;
	}
}

return true; 
}
// These should print true
// console.log(sameStart(["bear", "ball"], "b") == true);
// console.log(sameStart(["bear", "call"], "c") == false);




// Write a function that has one parameter -- a single letter --
// and returns true if it's a capital letter.
function isCapital(letter) {
	if (letter == letter.toUpperCase()){
		return true;
	}
return false;

}
// These should print true
// console.log(isCapital("B") == true);
// console.log(isCapital("x") == false);




// Write a function that finds all words (in the array at the top) that have
// the same second and third letter and returns them in an array.
// Hint: You need to first check to make sure the word actually has three letters.

let arrayLetters = [];

function repeatedLetter() {
	for (d = 0; d < words.length; d++){
		
		let entireWord = words[d];
		let secondLetter = words[d].charAt(words[d].length + 1);
		let thirdLetter = words[d].charAt(words[d].length + 2);
		if (entireWord.length < 3){
			if (secondLetter == thirdLetter){
				arrayLetters.push(secondLetter, thirdLetter);
			}
		}
	}
	
}
// These should print true
// console.log(repeatedLetter().includes("assessments") == true);
// console.log(repeatedLetter().includes("from") == false);




// Write a function that takes a number as a parameter and returns whether or not
// that number is exactly one away from a multiple of 10.
function oneAway(num) {
  // Hint: One approach is to start by converting a number to a string like this:
  // let numStr = "" + num;
  // Then you want to look at a specific spot in that string.
  // Hint2: A different approach involves using %
}
// These should all print true
// console.log(oneAway(101) == true);
// console.log(oneAway(79) == true);
// console.log(oneAway(60) == false);
// console.log(oneAway(1145) == false);




// Write a function with one parameter (a number) that returns how many times
// you need to divide the number by 2 for the answer to be less than 2.
// For example, if we start with 100:
// 100 / 2 = 50
// 50 / 2 = 25
// 25 / 2 = 12.5
// 12.5 / 2 = 6.25
// 6.25 / 2 = 3.125
// 3.125 / 2 = 1.5625
// So in this case your function would return 6, since we had to divide by 2
// six times to get an answer that was less than 2.

let howManyDivides = 0;

function log2(num) {
	while (num > 2){
		num = num / 2; 
		howManyDivides++; 

	}

	return howManyDivides;
}
// I called this log2 because this is very similar to finding "log base 2" of a number.
// These should all print true
// console.log(log2(100) == 6);
// console.log(log2(1000) == 9);




// Write a function that has one parameter: a 2D Array.
// Return true if any of the rows have the number 9 two or more times.

let nienCounter = 0;

function rowHasMultiple9s(arr) {
	for (row = 0; row < arr.length; row++){
		for (col = 0; col < arr[0].length; col++){
			let 
		}
	}
}
// Should be true
// console.log(rowHasMultiple9s([
//   [1, 2, 9],
//   [9, 2, 9]
// ]));
// Should be false
// console.log(rowHasMultiple9s([
//   [1, 2, 9],
//   [9, 2, 3]
// ]));