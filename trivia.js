//Naia Crump

var readline = require("readline-sync");

let points = 0;

console.log("How well do you know Naia?!? Take the quiz to find out!")

var userQuest1 = parseInt(readline.question("First question, this should be easy: How old is Naia? "))

if (userQuest1 == 16){
	console.log("You're correct!")
	points++
} else {
	console.log("Nope...")
}

var userQuest2 = readline.question("Second Question!: What is Naia's horoscope sign? (ie: Libra, Cancer, Aquarius, etc) " )

if (userQuest2 == "aries" || "Aries"){
	console.log("You're right!")
	points++
} else {
	console.log("Sorry...that's wrong")
}

var userQuest3 = readline.question("Third Question, what school does Naia go to? ")

if ((userQuest3 == "FSSAH") || (userQuest3 == "Frank Sinatra School") || (userQuest3 == "Frank Sinatra School of the Arts") || (userQuest3 == "FSSA")){
	console.log("Correcto!")
	points++
} else {
	console.log("Incorrect...")
}

console.log("(I'll give you a hint: the studios in her school are: Fine Art, Drama, Vocal, Instrumental, Dance, and Film)")
var userQuest4 = readline.question("Fourth question, almost there! What is Naia's studio in school? ")


if (userQuest4 == "Drama" || "drama"){
	console.log("Hey, that's right!")
	points++
} else {
	console.log("Nope, not even close.")
}

console.log("I'll be nice and give you choices: 'Kill la Kill', 'Black Butler', 'DevilMan Crybaby', 'One Punch Man' or all of them. ")
var userQuest5 = readline.question("Fifth question, getting a bit harder: What is Naia's favorite anime?" )

if (userQuest5 == "All" || "all"){
	console.log("Wow, you got it!")
	points++
} else {
	console.log("Sorry... close though.")
}

var userQuest6 = parseInt(readline.question("Sixth final question! How long has Naia been connected to Google? (In Years) "))

if (userQuest6 == 3){
	console.log("Whoopie doo! You got it!")
	points++
} else {
	console.log("Come on now...")
}


console.log("You're all done! You got " + points + " out of 7 correct!")

