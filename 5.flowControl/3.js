function evenOrOdd(input){
  if(Number.isInteger(input)) {
    if(input%2) console.log('odd');
    else console.log('even');
  }
  else console.log('error: input is not integer');
}
