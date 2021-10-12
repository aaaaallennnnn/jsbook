let rlSync = require('readline-sync');
let num = parseInt(rlSync.question('Enter number to calculate factorial\n'));

function factorial(a) {
  for(let i = a-1; i > 0; i--){
    a*=i;
  }
  console.log('factorial is ' + a);
}

//factorial(num);

function reFactorial(a){
  if(a === 1) return a;
  else{
    return a*= reFactorial(a-1);
  }
}

console.log(reFactorial(num));