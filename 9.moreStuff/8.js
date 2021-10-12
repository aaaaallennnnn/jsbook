function isNotANumber(val){
  //return val != val;
  //should use strict comparison
  return val !== val;
}

console.log(isNotANumber(NaN));