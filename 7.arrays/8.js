let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array){
  return array.reduce((prev, curr)=>{
    let len = curr.length;
    if(len%2) prev.push(len);
    return prev;
  }, []);
}
console.log(oddLengths(arr)); // => [1, 5, 3]