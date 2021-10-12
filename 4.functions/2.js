let rlSync = require("readline-sync");

function ask(words) {
  return rlSync.question(words);
}
let fName = ask("What's your first name?\n");
let lName = ask("What's your last name?\n")
console.log(`Hello, ${fName} ${lName}!`);