let rlSync = require('readline-sync');

function evenOrOdd(input){
  if(input%2) console.log('odd');
  else console.log('even');
}

evenOrOdd(rlSync.question("Input a number\n"));