/*
let rlSync = require("readline-sync");
let name = rlSync.question("What's your name?");
console.log(`Hello, ${name}!`);
*/

let rlSync = require("readline-sync");
let fName = rlSync.question("What's your first name?\n");
let lName = rlSync.question("What's your last name?\n")
console.log(`Hello, ${fName} ${lName}!`);