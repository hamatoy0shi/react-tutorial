function* foo() {
  yield "a";
  yield "b";
}

function* bar() {
  yield "x";
  foo();
  yield "y";
}

for (let i of bar()){
  console.log(i);
}