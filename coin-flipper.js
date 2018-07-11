//Naia Crump 

var readline = require("readline-sync");

console.log("********************************************************************************")
console.log("A complete game of luck! Welcome, to the COIN FLIPPER!")
var userFlip = readline.question("Heads or Tails? ")

let result = Math.random(0,1)

if ((result >= 0.5) && (userFlip == "tails")){
	console.log("Congrads, you got it!")
} else if ((result <= 0.5) && (userFlip == "tails")){
	console.log("Sorry, you lost. Try Again?")
}

if ((result <= 0.5) && (userFlip == "heads")){
	console.log("Congrads, you got it!")
} else if ((result >= 0.5) && (userFlip == "heads")){
	console.log("Sorry, you lost. Try Again?")
} 