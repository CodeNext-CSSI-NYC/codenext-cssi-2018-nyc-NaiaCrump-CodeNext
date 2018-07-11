// Complete these one at a time. Test each one several times to make sure it works.
// When you are done with each one, comment it out when you move to the next one, so it doesn't keep showing up.
var readline = require("readline-sync");

// 1. Ask the user for a number and print whether it is positive or negative or zero.
var numUser = readline.question("Please enter a number: ")
if (numUser == 0){
	console.log("Oh, that's zero.")
}else if (numUser < 0){
	console.log("Oh, thats a negative number.")
} else if (numUser >= 1){
	console.log("Oh, thats a postive number!")
}


// 2. Ask the user to enter three numbers, and then print out the biggest number they entered.
console.log("Please enter 3 numbers: ")
var numUser1 = readline.question("Enter a number: ")
var numUser2 = readline.question("Enter another number: ")
var numUser3 = readline.question("Enter one more number: ")

if (numUser1 == numUser2 == numUser3){
	console.log("Those are all the same number. Can't trick me!")
} else if (numUser1 > numUser2 && numUser1 > numUser3){
	console.log(numUser1 + " is the biggest number of the bunch!")
} else if (numUser2 > numUser1 && numUser2 > numUser3){
	console.log(numUser2 + " is the biggest number of the bunch!")
}else if (numUser3 > numUser2 && numUser3 > numUser1){
	console.log(numUser3 + " is the biggest number of the bunch!")
	}

// 3. Ask the user for a number and print whether it is odd or even
var numUser = parseInt(readline.question("Please enter a number: "))

if ((numUser %= 2) == 0){
	console.log("Woah! That's an EVEN number!")
}else if ((numUser %= 1) == 0){
	console.log("Wowee! That number is ODD!")
}

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
// (You can use Google if you're not sure when leap years happen.)

var userYear = readline.question("Please enter a year: ")

if ((userYear % 4) == 0){
	console.log("That's a leap year!")
} else {
	console.log("Sorry, that's not a leap year.")
         
}


// 6. Ask the user if they have been a citizen for at least 9 years (yes or no), ask them their age, and ask if they live in New York state.
// If they answer yes, their age is above 30, and yes, then tell them they can run for senate in NY. Otherwise, say that they cannot.

console.log("Want to know if you can run for NY Senate? Well, now you can get you answer in this quick test!")
var userCitizen = readline.question("Have you been a New York Citizen for at least 9 years? ")
var userLive = readline.question("Do you live in New York State? ")
var userAge = parseInt(readline.question("How old are you? "))


if ((userCitizen = "yes") && (userLive = "yes") && (userAge >= 30)){
	console.log("Wow! You can run for NY Senate! Good luck!")
}else if ((userCitizen !== "yes") || (userLive !== "yes") || (userAge < 30)){
	console.log("Sorry, you don't meet the requirements.")
}


// 7. Write a program that asks the user to enter a whole number 1-7 and prints out the corresponding day of the week.

console.log("Wanna know what day of the week it is? Give me a number, and I can tell you!")
var userDay = parseInt(readline.question("Give me a number from 1 - 7: "))

if (userDay > 7){ 
	console.log("Sorry, I can't give you a day for that number... Try again?")
} else if (userDay == 1){ 
	console.log("It's Monday my man.")
} else if (userDay == 2){
	console.log("It's Tuesday my guy.")
} else if (userDay == 3){
	console.log("IT'S WEdNESday MY DUdes! AhhHHH")
}else if (userDay == 4){
	console.log("Its Thursday my dude.")
}else if (userDay == 5){
	console.log("Its Friday! Woo!")
}else if (userDay == 6){
	console.log("Its Saturday man! PARTY!")
}else if (userDay == 7){
	console.log("It's Sunday my friend! Relax and prepare.")

}

