let rlSync = require('readline-sync');

function numberRange(test){
  if(test < 0) console.log(`${test} is less than 0`);
  else if(test < 51) console.log(`${test} is between 0 and 50`);
  else if (test < 101) console.log(`${test} is between 51 and 100`);
  else console.log(`${test} is greater than 100`);
}

numberRange(rlSync.question('Test number\n'));