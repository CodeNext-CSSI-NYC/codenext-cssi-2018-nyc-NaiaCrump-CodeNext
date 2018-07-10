// Author: Naia Crump

let readline = require("readline-sync");
console.log("*****************************************************************")

console.log("bLeep blOop! i'm a CHanGE macHINe!")
let userMoney = readline.question("Please enter your amount of cents, and I'll give you back change:  ")

console.log(userMoney + " cents makes:")

let quarters = Math.floor(userMoney / 25);
let remandier = Math.floor(userMoney % 25);

console.log("Quarters: " + quarters);

let dimes = Math.floor(remandier / 10);
let remandierDime = Math.floor(remandier % 10);

console.log("Dimes: " + dimes)

let nickles = Math.floor(remandierDime / 5);
let remandierNick = Math.floor(remandierDime % 5); 

console.log("Nickles: " + nickles)


let pennies = Math.floor(remandierNick / 1);

console.log("Pennies: " + pennies)


console.log("tHanKS for UsINg BleEp BloOp!")
console.log("*****************************************************************")