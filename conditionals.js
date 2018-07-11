// Complete these one at a time. Test each one several times to make sure it works.
// When you are done with each one, comment it out when you move to the next one, so it doesn't keep showing up.
var readline = require("readline-sync");

// 1. Ask the user for a number and print whether it is positive or negative or zero.
// var numUser = readline.question("Please enter a number: ")
// if (numUser == 0){
// 	console.log("Oh, that's zero.")
// }else if (numUser < 0){
// 	console.log("Oh, thats a negative number.")
// } else if (numUser >= 1){
// 	console.log("Oh, thats a postive number!")
// }


// 2. Ask the user to enter three numbers, and then print out the biggest number they entered.
// console.log("Please enter 3 numbers: ")
// var numUser1 = readline.question("Enter a number: ")
// var numUser2 = readline.question("Enter another number: ")
// var numUser3 = readline.question("Enter one more number: ")

// if (numUser1 == numUser2 == numUser3){
// 	console.log("Those are all the same number. Can't trick me!")
// } else if (numUser1 > numUser2 && numUser1 > numUser3){
// 	console.log(numUser1 + " is the biggest number of the bunch!")
// } else if (numUser2 > numUser1 && numUser2 > numUser3){
// 	console.log(numUser2 + " is the biggest number of the bunch!")
// }else if (numUser3 > numUser2 && numUser3 > numUser1){
// 	console.log(numUser3 + " is the biggest number of the bunch!")
// 	}

// 3. Ask the user for a number and print whether it is odd or even
// var numUser = parseInt(readline.question("Please enter a number: "))

// if ((numUser %= 2) == 0){
// 	console.log("Woah! That's an EVEN number!")
// }else if ((numUser %= 1) == 0){
// 	console.log("Wowee! That number is ODD!")
// }

// 4. Ask the user to enter a letter and tell them if it is a vowel or consonant
var userLetter = readline.question("Please select a letter: ")

 if (userLetter != "a" && userLetter != "e" && userLetter != "i" && userLetter != "o" && userLetter != "u" && userLetter != "y"){
 	console.log("That's a consonant!")
 }else if (userLetter == "y" ){
 	console.log("Sometimes it is, sometimes it not. Who knows?")
 } else {
 	console.log("Yup, that's a vowel alright.")
 }

// 5. Ask the user to enter a year, and tell them if it was a leap year.
// (You can use Google if you're not sure when leap years happen.)s

// 6. Ask the user if they have been a citizen for at least 9 years (yes or no), ask them their age, and ask if they live in New York state.
// If they answer yes, their age is above 30, and yes, then tell them they can run for senate in NY. Otherwise, say that they cannot.

// 7. Write a program that asks the user to enter a whole number 1-7 and prints out the corresponding day of the week.
// If you want another challenge, look up how to use switch statements and use a switch instead of if-else for this.
// Note that we usually don't bother with switch statements unless there are more than a few elses.