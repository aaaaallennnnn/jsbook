let array = [3, 5, 7];

function sumOfSquares(arr){
  return arr.reduce((accumulator, value)=> accumulator += value * value);
}

console.log(sumOfSquares(array)); // => 83