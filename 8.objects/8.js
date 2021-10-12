let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

/*
function copyObj(obj, arr = Object.keys(obj)){
  let newO = {};
  for(let key in obj){
    if(arr.includes(key)) newO[key] = obj[key];
  }
  return newO;
}
*/

//less operations, also forgot Object.assign
function copyObj(obj, arr){
  let newObj = {};
  if(arr){
    arr.forEach(key =>{
      newObj[key] = obj[key];
    });
    return newObj;
  }
  else{
      return Object.assign(newObj, obj);
  }
}

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }