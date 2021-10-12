/*
function zero_negZero(num){
  if(1/num === -Infinity) return true;
  return false;
}
*/

//much more elegant
function isNegativeZero(value) {
  return 1 / value === -Infinity;
}

console.log(zero_negZero(0));
console.log(zero_negZero(1));
console.log(zero_negZero(-1));
console.log(zero_negZero(-0));