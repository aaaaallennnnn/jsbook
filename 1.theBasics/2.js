/*
const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
r1.question("Enter a number: ", (number) => {
  let place = 1;
  while (number) {
    console.log(`digit ${place} is ${number%10}`);
    number = Math.floor(number / 10);
    place++;
  }
  r1.close();
});
*/

let number = 4936;
console.log('number is: ' + number);
let ones = number%10;
console.log('ones: ' + ones);
number = Math.floor(number/10);
let tens = number%10;
console.log('tens: ' + tens);
number = Math.floor(number/10);
let hundreds = number%10;
console.log('hundreds: ' + hundreds);
number = Math.floor(number/10);
let thousands = number%10;
console.log('thousands: ' + thousands);
return undefined;
