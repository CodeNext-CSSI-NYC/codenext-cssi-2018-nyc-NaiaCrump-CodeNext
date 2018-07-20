//Naia Crump

let readline = require("readline-sync");
let randomItem = require('random-item');

let topic = randomItem(["Naia!"])
//, "Coding!", "Nintendo Games!", "Miscellaneous Knowledge!"

let userPoints = 0;

console.log("Heya! WELCOME TO THE TRIVIA GAME NAIA MADE! WOO!");
console.log("Anyways- the topic is: " + topic + "! Hell yeah!" );

if (topic == "Naia!"){
	triviaNaia()
} else if (topic == "Coding!"){
	//triviaCoding()
} else if (topic == "Nintendo Games") {
	//triviaNintendo()
} else if (topic == "Miscellaneous Knowledge"){
	//triviaMisc()
}


function triviaNaia(){

	console.log("Ready? Lets Go!")

	console.log("*********************************************")
	console.log("A: 15");
	console.log("B: 16");
	console.log("C: 14");
	console.log("D: 17")
	let userNaiaQ1 = parseInt(readline.question("First question, this should be easy: How old is Naia? "));
	console.log("*********************************************")

	if (userNaiaQ1 == 16 || (userNaiaQ1 == "B")){
		console.log("You're correct!")
		userPoints++
	} else {
		console.log("Oh come on. How did you get this wrong?");
		console.log("The correct answer was B: 16 years old.");
	}
	console.log("*********************************************")
	console.log("A: Libra");
	console.log("B: Pisces");
	console.log("C: Virgo");
	console.log("D: Aries");
	let userNaiaQ2 = readline.question("Second Question!: What is Naia's horoscope sign? " );
	console.log("*********************************************")


	if ((userNaiaQ2 == "aries") || (userNaiaQ2 == "Aries") || (userNaiaQ2 == "D") || (userNaiaQ2 == "d")){
		console.log("You're right! Colour me impressed!");
		userPoints++
	} else {
		console.log("Sorry...that's wrong...");
		console.log("The correct answer was D: Aries");
	}
	console.log("*********************************************")
	let userNaiaQ3 = readline.question("Third Question, true or false: Naia has been a dancer since 2nd grade. ")
	console.log("*********************************************")

	if ((userNaiaQ3 == "False") || (userNaiaQ3 == "false")){
		console.log("Correcto!")
		userPoints++
	} else {
		console.log("Incorrect... I actually hate dancing in public.");
	}
	console.log("*********************************************")
	console.log("A: Kiwis");
	console.log("B: Nothing");
	console.log("C: Nuts");
	console.log("D: Giovanni")
	let userNaiaQ4 = readline.question("Fourth question, almost there! What is Naia allergic to? ")
	console.log("*********************************************")


	if ((userNaiaQ4 == "Nothing") || (userNaiaQ4 == "nothing") || (userNaiaQ4 == "B") || (userNaiaQ4 == "b" )){
		console.log("Hey, that's right!")
		userPoints++
	} else if ((userNaiaQ4 == "Gio") || (userNaiaQ4 == "Giovanni") || (userNaiaQ4 == "D") || (userNaiaQ4 == "d" )){
		console.log("No, but I'll give you the point cause it's funny.")
		userPoints++
	} else {
		console.log("Nope, not even close.")
	}
	console.log("*********************************************")
	let userNaiaQ5 = readline.question("Fifth question, getting a bit harder- True or False: Naia has never watched a horror movie in her life. " )
	console.log("*********************************************")


	if ((userNaiaQ5 == "True") || (userNaiaQ5 == "true")){
		console.log("I hate horror movies, so that's correct! Yay!")
		userPoints++
	} else {
		console.log("Sorry, I hate horror movies. ")
	}
	console.log("*********************************************")
	console.log("A: Rick and Morty")
	console.log("B: Big Mouth")
	console.log("C: Bojack Horseman")
	console.log("D: Steven Universe")
	let userNaiaQ6 = parseInt(readline.question("Sixth and final question! What is Naia's favorite cartoon? "))
	console.log("*********************************************")

	if ((userNaiaQ6 == "A") || (userNaiaQ6 == "a") || (userNaiaQ6 == "Rick and Morty")){
		console.log("I love all of them, but I LOVE Rick and Morty.")
		userPoints++
	} else if (userNaiaQ6 == "C") {
		console.log("WHAT IS WRONG WITH YOU. NO. WRONG. TERRIBLE.")

	} else {
		console.log("Sorry, you were close though!")
	}
console.log("*********************************************")

	console.log("You're all done! You got " + userPoints + " out of 6 correct!")
	

}

function triviaNintendo(){
	console.log("Ready! Lets A-Go!");

	console.log("We'll start easy.")
	console.log("*********************************************")
	console.log("A: Mario Mario")
	console.log("B: Mario Zinno")
	console.log("C: Mario Miyamoto")
	console.log("D: Bob Hoskins")
	let userNintendoQ1 = readline.question("First Question! What is Mario's whole name?")
	console.log("*********************************************")
	if ((userNintendoQ1 == "Mario Mario") || (userNintendoQ1 == "mario mario") || (userNintendoQ1 == "A") || (userNintendoQ1 == "a")){
		console.log("You're right! Colour me impressed!");
		userPoints++
	} else {
		console.log("Sorry...that's wrong...");
		console.log("The correct answer was A: Mario Mario");
	}
	console.log("*********************************************")












}