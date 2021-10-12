let rlSync = require('readline-sync');
let num = parseInt(rlSync.question('Enter number to calculate factorial\n'));

function factorial(a) {
  for(let i = a-1; i > 0; i--){
    a*=i;
  }
  console.log('factorial is ' + a);
}

factorial(num);