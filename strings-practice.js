//Naia Crump


//Practice 1 
//******************************************************************************************
function puttingStringsTogether(word1, word2){
	return word1 + word2 + word2 + word1
}

console.log(puttingStringsTogether("Hi", "Bye"))
//******************************************************************************************

//Practice 2
//******************************************************************************************
function comboString(word1, word2){
	if (word1.length > word2.length){
		return word2 + word1 + word2 
	} else if (word2.length > word1.length) {
		return word1 + word2 + word1
	}
}

console.log(comboString("apple", "app"))
console.log(comboString("dad", " "))
//******************************************************************************************

//Practice 3
//******************************************************************************************

function lastTwoSwitcheroo(word){
	if (word.length > 2){
		return ( word.substring(0, word.length - 2) + (word.charAt(word.length - 1)) + (word.charAt(word.length - 2)))
	} else if (word.length <= 2){
		return word
	}
}

console.log(lastTwoSwitcheroo("Enchanter"))
console.log(lastTwoSwitcheroo("Animal"))
console.log(lastTwoSwitcheroo("an"))
console.log(lastTwoSwitcheroo("my"))
//******************************************************************************************