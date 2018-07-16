var readline = require("readline-sync");
var randomInt = require("random-int");

// 1. Do each step below on a separate line
// Create an array with exactly five numbers.
let arrayFive = [1, 2 , 3, 4, 5]
// Store the second value from the array in a variable named secondValue.
let secondValue = arrayFive[1]
// Print out the third value from the array.
console.log(arrayFive[2])
// Change the fourth value in the array to 0.
arrayFive[3] = 0
// Remove the last value from the array and store it in the variable lastVal.
lastVal = arrayFive.pop() 
// Print out lastVal to make sure it has the value you expected.
console.log(lastVal)
// Add 524 to the end of the array.
arrayFive.push(524)
// Add 76 to the end of the array.
arrayFive.push(76)
// Print out the second-to-last value in the array (which should be 524) by
// placing a number inside square brackets (e.g. arr[3], though 3 is wrong).
console.log(arrayFive[4])
// Print out the second-to-last value in the array again, but this time,
// use the length property and subtraction (e.g. arr[arr.length + 3], though +3 is wrong).
console.log(arrayFive[arrayFive.length - 2])
console.log("**********")
/*********************************************************************************************************************
*********************************************************************************************************************/

// 2a. Create an array with five items.
let arrayFive2 = ["apple", "orange", "banana", "cherry", "kiwi"];
// Without using a for loop, print out each item in the array, one at a time.

console.log(arrayFive2[0])
console.log(arrayFive2[1])
console.log(arrayFive2[2])
console.log(arrayFive2[3])
console.log(arrayFive2[4])
console.log("**********")
// Do NOT just print out the whole array with a command like console.log(arr).
// Make sure you actually print out each item in the array one at a time.
// What if there were 100 items in the array? 1000?

// for (a = 0; a < arrayFive2.length; a++){
// 	console.log(arrayFive2[a]);
// }



/*********************************************************************************************************************
*********************************************************************************************************************/


// 2b. Create an empty array.
let arrayPush = []
// Add a few items to the array one at a time using push.
arrayPush.push("Trust")
console.log(arrayPush)
arrayPush.push("Security")
console.log(arrayPush)
arrayPush.push("Confindence", "Cozy") 
console.log(arrayPush)
// What if you needed to add 100 items to the array, or 1000?
// Hopefully these examples illustrate how helpful for loops can be.

/*********************************************************************************************************************
*********************************************************************************************************************/

// 3. Make a new empty array.
let arrayTen = []
// Set up a for loop that will run ten times. Think carefully to make sure it will run ten times.
for (let b = 0; b < 11 ; b++){
	arrayTen.push(7)
	arrayTen.push(7)
}
// Inside the for loop, add your favorite number to the array two times.
// You will need to do this on two separate lines.
// How many numbers should be in your array when the for loop is done?
// Print out the array and the array's length at the end and make sure you are right.
console.log(arrayTen)
console.log(arrayTen.length)
console.log("**********")
/*********************************************************************************************************************
*********************************************************************************************************************/

// 4. Make an array that contains four foods.
let arrayFood = ["Pasta", "Soup", "Rice", "Pizza"]
// Set up a for loop that will iterate (go through) the array.
for (let c = 0; c < arrayFood.length; c++){
	let currentFood = arrayFood[c]
	console.log(currentFood)
	console.log(currentFood.toUpperCase())
}
console.log("**********")
// Do NOT use the number 4 (or 3) in your for loop.
// Instead, use the length of the array in the condition portion (the 2nd part) of the for loop.
// Inside the for loop, get the item that is at the current index and store it in a variable.
// On the next line, print out the variable.
// On the line after that, print out the variable but use toUpperCase() on it.
// When it is done running, you should see something like:
// apple
// APPLE
// orange
// ORANGE
// pear
// PEAR
// plum
// PLUM

/*********************************************************************************************************************
*********************************************************************************************************************/

// 5. Make an array that contains five cities.
let arrayCity = ["New York", "Kansas", "Moscow", "Tokyo"]
// Set up a for loop that will iterate (go through) the array.
for (let d = 0; d < arrayCity.length; d++){
	let city = arrayCity[d]
	console.log([d] + ": " + city )
}
console.log("**********")
// Do NOT use the number 5 (or 4) in your for loop.
// Instead, use the length of the array in the condition portion (the 2nd part) of the for loop.
// (Yes, this is the same as last time. This is super important.)
// Inside the for loop, store the name of the city in a variable called city.
// Then print out the index from the for loop, then a colon, followed by the city.
// When it is done running, you should see something like:
// 0: New York
// 1: Boston
// 2: Seattle
// 3: LA
// 4: San Diego

/*********************************************************************************************************************
*********************************************************************************************************************/

// 6. Make an array that contains six numbers.
let arraySix = [20, 18, 16, 14, 12, 10]
// Also make a new, separate empty array called squares.
let arraySquare = []
// Set up a for loop that will iterate (go through) the array.
for (let e = 0; e < arraySix.length; e++){
	let num = arraySix[e]
	arraySquare.push( num ** 2 )
}

console.log(arraySquare)
console.log("**********")
// Do NOT use the number 6 (or 5) in your for loop.
// Instead, use the length of the array in the condition portion (the 2nd part) of the for loop.
// (Yes, this is the same as the last 2 times. This is super important.)
// Inside the for loop, store the number from the array with numbers in a variable called num.
// Add the square of the number to the end of your new array.
// At the end, print out the new array.
// Assuming your original array was [2,6,4,3,1,7] ...
// When it is done running, you should see something like [4, 36, 16, 9, 1, 49]

/*********************************************************************************************************************
*********************************************************************************************************************/

// 7. Make an array that contains six numbers. Feel free to use the same one.
let arraySix2 = [20, 18, 16, 14, 12, 10]
// Also make a new, separate empty array called reverse.
let arrayReverse = []
// Set up a for loop that will iterate (go through) the array, but BACKWARDS.
for (let f = arraySix2.length - 1; f >= 0; f--){
	let num2 = arraySix2[f]
	arrayReverse.push( num2 )
}

console.log(arraySix2)
console.log(arrayReverse)
console.log("**********")
// This means, rather than i = 0; i < arr.length; i++
// You will instead do: i = arr.length - 1; i >= 0; i--
// Make sure that you 110% understand that previous line, because it is very important. Ask questions.
// Inside the for loop, store the number from the array with numbers in a variable called num.
// Add the number to the end of your new array (reverse).
// Note that, since we are looping backwards, we will be adding the numbers from the end first.
// At the end, print out both the original and new array.
// Assuming your original array was [2,6,4,3,1,7] ...
// When it is done running, you should see [7, 1, 3, 4, 6, 2] (it was reversed!)


/*********************************************************************************************************************
*********************************************************************************************************************/

// 8. Make a new empty array.
let arrayLetters = []
// Ask the user how many letters they would like to type in.
let howManyLetters = readline.question("How many letters woyld you like to type in?: ")
// Use a for loop to loop that many times.
for (let g = 0; g < howManyLetters; g++ ){ 
	let userLetter = readline.question("Enter a letter: ")
	arrayLetters.push(userLetter)
}

let completedString = arrayLetters.join("")
console.log(completedString)
 console.log("**********")
// Each time through the loop, ask the user to enter a letter. Add that letter to the array.
// At the very end use let str = arr.join("") to turn your array into a string.
// Print out the str
// For example, if they type in 4, and then type in c, a, k, e when asked
// Then at the end it should just say "cake"

/*********************************************************************************************************************
*********************************************************************************************************************/

// 9. Make a new empty array.
let arrayRandom = []
// Write a for loop that run ten times. Each time, it should add one random number to your array.
for (h = 0; h < 11; h++){
	num3 = randomInt(1, 100)
	arrayRandom.push(num3)
}

 for (i = 0; i < arrayRandom.length; i++){
 	console.log(arrayRandom[i])
 }
 console.log("**********")
// When that is done, create another for loop that goes throught this array and,
// one at a time, prints out each item, so that you can see which items were added.
// Do NOT just print the whole array at once. Get them one at a time and print them.

/*********************************************************************************************************************
*********************************************************************************************************************/

// 10. We will make a deck of cards -- sort of.
// Create an empty array called deck.
let arrayDeck = []
// Make a for loop that goes from 1 to 13.
for ( j =  1; j <= 13; j++){
	for (k = 1; k <= 4; k++){
		let cardNum = "";

		if (j >= 2 && j <= 10){
			cardNum = j;
		} else if (j == 1){
			cardNum = "A";
		} else if (j == 11){
			cardNum = "J";
		} else if (j == 12){
			cardNum = "Q";
		} else if (j == 13){
			cardNum = "K";
		}

		let cardSuit = "";

		if (k == 1){
			cardSuit = "clubs";
		} else if (k == 2){
			cardSuit = "diamonds";
		} else if (k == 3){
			cardSuit = "spades";
		} else if (k == 4){
			cardSuit = "hearts";
		}

		arrayDeck.push(cardNum + " of " + cardSuit);

	}
}

console.log(arrayDeck)

// Inside that for loop make another for loop that goes from 1 to 4.
// Do NOT use i for both for loops! You can use j if you want.
// Inside the inner for loop:
// Create an empty string
// If the outer loop variable is 2-10 add that number to the empty string.
// However, if it's 1, add A, if it's 11 add J, if it's 12 and Q, if it's 13 and K.
// This is the value of the card (2-10, Ace, Jack, Queen, King)
// Then, using the inner loop, add the suit.
// If it's 1 add "clubs", for 2 add "diamonds", for 3 add "spades", for 4 add "hearts"
// Then, add this string onto the array.
// After both loops are done, print out both the length of the array (should be 52)
// as well as the array itself, which should look like a deck of cards
// Something like: ["Aclubs", "Adiamonds", "Aspades", "Ahearts", "2Clubs", "2Diamonds", ...]