const readline = require("readline-sync");
const sport = readline.question("Do you like basketball or football: ");
if(sport == "basketball") {
    let kindOfTeam = readline.question("Do you like teams that are good or bad? ");
    if(kindOfTeam == "good") {
        console.log("You should watch the Celtics.");
    } else {
        console.log("You should watch the Knicks.");
    }
} else {
    let result = readline.question("Do you like teams that win or lose? ");
    if(result == "win" || result == "wins") {
        console.log("You should watch the Patriots.");
    } else {
        console.log("You should watch the Jets.");
    }
}