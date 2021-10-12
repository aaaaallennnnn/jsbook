let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(val){
  return(val.map(str=>str.length).filter(lenVal=>Boolean(lenVal%2)));
}


console.log(oddLengths(arr));