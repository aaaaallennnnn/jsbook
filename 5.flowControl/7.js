let rlSync = require('readline-sync');

let caps = (phrase) => {
  if (phrase.length < 10) return phrase;
  return phrase.toUpperCase();
}

console.log(caps(rlSync.question("Input phrase\n")));