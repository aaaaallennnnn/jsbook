let rlSync = require("readline-sync");
let first = parseFloat(rlSync.question("Enter the first number\n"));
let second = parseFloat(rlSync.question("Enter the second number\n"));
console.log(`${first} * ${second} = ${first * second}`);