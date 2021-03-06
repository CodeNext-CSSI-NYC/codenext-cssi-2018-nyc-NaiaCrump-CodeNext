// 1. Create an object called myObj with the following key-value pairs:
// a -> 23
// b -> 12
// c -> 3

let myObj = {
	a: 23,
	b: 12,
	c: 3, 
};
// After you create this object, add the key value pair d -> 14 to the object
// Print out the object to make sure it looks like you expect
myObj.d = 14;
console.log(myObj);

// Change the value associated with the key b from 12 to 19
myObj.b = 19;
console.log(myObj);

// Create an array called myObjKeys that contains the keys from this object using Object.keys()
// Print it out to make sure it looks right
let myObjKeys = [Object.keys(myObj)];
console.log(myObjKeys);

// Create an array called myObjValues that contains the values from this object using Object.values()
// Print it out to make sure it looks right
let myObjValues = [Object.values(myObj)];
console.log(myObjValues);

// Print out the value associated with the key "a" using both styles of accessing object values.
// Make sure you know how to use both of them.
console.log(myObj.a);
Object.values(myObj);
console.log("*****************");



// 2. Create an object that contains any key-value pairs you want.
let practiceObj = {
	name: "Sail",
	artist: "AWOLNATION", 
	length: "4:19", 
};

// Print it out, make sure it looks right.
console.log(practiceObj);
// Delete one of the key-value pairs.
delete practiceObj.length;
console.log(practiceObj);
// Add a new one.
practiceObj.genre = "Alternative";
console.log(practiceObj);
// Change the value associated with one of the existing keys.
// Print it out again. Does it look as you expected?
// practiceObj.name = "Sails?"
// console.log(practiceObj)
// Store one of the values from the object into a variable called myVal.
myVal = practiceObj.genre;
console.log(myVal);
// Print out another value from the object.
console.log(practiceObj.name);
// The purpose of the previous two things is to make sure you know both ways to
// access values in objects using keys. Make sure you can do both.

console.log("***************");

// 3. Write a function that takes a string as input and returns an object
// whose key-value pairs are counts of the number of times each letter appears.

function letterCount(str) {

let letterCounter = {};

for (a = 0; a < str.length; a++ ){
	let letter = str[a];
	if (letterCounter.hasOwnProperty(letter)) {
		letterCounter[letter]++   
	} else {
		letterCounter[letter] = 1;  
	}
}

return letterCounter

}

console.log(letterCount("supercalifragilisticexpialidocious"));
// For example, letterCount("mississippi") would return something like:
// {
//   m: 1,
//   i: 4,
//   s: 4,
//   p: 2
// }
// Hint: Loop through str. For each letter, check if it already exists in obj as a property.
// You can check to see if a certain key already exists in an object using
// obj.hasOwnProperty(key). It returns true or false depending on whether it exists.
// If it doesn't, you should set the value to 1. If it does, hmmmmm, what should you do?



// 4. Write a function that takes a string as input and returns a different string
// that contains each letter in the original string exactly once.
function eachLetterOnce(str) {

	let isLetterThereObj = {};

	for (b = 0; b < str.length; b++){
		let letter = str[b];
		isLetterThereObj[letter] = true;
		 
	}

}


// So eachLetterOnce("mississippi") would return "misp" (letters may be in another order).
// Hint: Use an object to keep track of what letters appear in the word. You can
// set obj[letter] = true for each letter you come across.
// At the end, get the keys of that object (which is an array) and use join
// (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
// to create a string.



// 5. Write a function that takes one parameter, an object, and prints out a line
// like the followng for every key-value pair in the object:
// "The key ___ has a value of ___"
function printKeysAndValues(obj) {

}
// Hint: You will need to get the array of keys, and use a for loop to go through all of the keys.
// Hint2: Inside the for loop, you will need to use the index to access the key,
// and then you will need to use the key to access the corresponding value.