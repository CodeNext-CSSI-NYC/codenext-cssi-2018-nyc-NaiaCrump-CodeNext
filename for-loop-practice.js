//Naia Crump 

// 1a. Print out all of the numbers from 1 to 20 (using a loop).

for (let a = 1; a <= 20; a++){
	//console.log(a)	
}
/************************************************************************************************
************************************************************************************************/

// 1b. Print out all of the numbers from 20 to 1 (using a loop).

for (let b = 20; b >= 1; b--){
	//console.log(b)
}
/************************************************************************************************
************************************************************************************************/

// 2. Write a function that takes in a number and prints out all of the factors
// of that number. For example, for 23 it will print 1 and 23. For 24, it will
// print 1, 2, 3, 4, 6, 8, 12, 24. Recall that the factors of a number are all
// the numbers it is divisible by (from 1 up to itself).
// Make sure to test this with several numbers (including some huge ones for fun).

function getFactors(num1){
	for (let factor = 1; factor <= num1; factor++ )

	if (num1 % factor == 0){
		//console.log(factor)
	} 
}

//console.log(getFactors(10076))

/************************************************************************************************
************************************************************************************************/

// 3. Print out all of the odd numbers between 300 and 350 (using a loop).



for (let c = 300; c <= 350; c++){
	if (c % 2){
		//console.log(c) 
	}
	
}
/************************************************************************************************
************************************************************************************************/

// 4. Write a function that, given a string of any length,
// returns true if it contains at least one space.

function containsSpace(word) {
	for (d = 0; d < word.length; d++){
		isSpace = word.charAt(d);
		if (isSpace == " "){
			return true
		} 
	}
}



// // Some tests
//console.log(containsSpace("star wars") == true);
//console.log(containsSpace("     ") == true);
//console.log(containsSpace("apple") == false);
//console.log(containsSpace("") == false);
/************************************************************************************************
************************************************************************************************/

// // 5. Given a string of any length, return the total number of times "a" or "A" appears.

function countAs(word) {
	let howManyA = 0;
	for (let e = 0; e < word.length; e++){
		isA = word.charAt(e);
		if (isA == 'a' || isA == "A"){
			howManyA++;

		}
	}

	return howManyA;
}



// // Some tests
console.log(countAs("happy") == 1);
//console.log(countAs("lady gaga") == 3);
// console.log(countAs("") == 0);
/************************************************************************************************
************************************************************************************************/

// // 6. Write a function arithmeticSequence that takes in a starting number (start),
// // a difference (diff), and a number of terms (numTerms), and prints out the
// // first numTerms of the sequence. For example, if the inputs are
// // 3 (start), 4 (diff), and 6 (numTerms), then it should print out:
// // 3, 7, 11, 15, 19, 23
// // Because it starts at 3, each term goes up by 4, and there are 6 terms.

function arithmeticSequence(start, diff, numTerms){
	//console.log(start)
	for (let f = 0; f < numTerms; f++ ){
		//console.log(start += diff)
	}


}

//console.log(arithmeticSequence(3, 4, 6))
//console.log(arithmeticSequence(2, 9, 10))
//console.log(arithmeticSequence(11, 11, 11))

/************************************************************************************************
************************************************************************************************/

// // 7. Given a string of any length, return a new string that is a copy of that string in reverse.

function reverseString(word) {

	let newString = ""; 

	for (let g = word.length - 1; g >= 0; g--){
		newString += word[g]
	}

	return newString

}

// // Some tests
// console.log(reverseString("banana") == "ananab");
// console.log(reverseString("Was it a car or a cat I saw?") == "?was I tac a ro rac a ti saW");
// console.log(reverseString("doorag") == "garood");
// console.log(reverseString("a") == "a");
// console.log(reverseString("") == "");

/************************************************************************************************
************************************************************************************************/

// // Bonus - 8. Write a function isPrime that takes a number and checks if it is prime.
// // It should return either true or false.
// // Recall that a prime number is only divisible by itself and 1.

function isPrime(num) {

	if ((num / num == 1) && (num / 1 == num)){
		return true
	}
}



// // Here are some tests -- add more
// console.log(isPrime(89) == true);
// console.log(isPrime(91) == false);
// console.log(isPrime(29) == true);
// console.log(isPrime(24) == false);

