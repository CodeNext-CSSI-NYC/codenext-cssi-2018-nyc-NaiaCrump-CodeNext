// Use a for loop to simulate flipping a coin 100 times.
var randomInt = require("random-int");

// Think carefully about how you could use Math.random() or random-int to do this.
// (There are several possible answers.)
// Keep track of how many of the flips are heads.
// Print out the total number of flips and the total number of heads at the end.
// How often is it exactly 50/100? Fun fact: this should only happen about 8% of the time.
let coinFlip; 
let heads = 0;
let tails = 0;

for (a = 0; a < 100; a++){
	coinFlip = randomInt(1, 2);
	if (coinFlip == 1){
		heads++ 
	} else {
		tails++
	}
}

console.log("You flipped a coin 100 times. Crazy, right? The results are:")
console.log("      ")
console.log("Heads was flipped " + heads + " times." );
console.log("Tails was flipped " + tails + " times.")

