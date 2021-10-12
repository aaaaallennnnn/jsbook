let myProtoObj = {
  foo: 1,
  bar: 2,
};

let newObj = Object.create(myProtoObj);

newObj.qux = 3;

//no, snippet 1 would show qux and snippet 2 would show qux, foo, bar