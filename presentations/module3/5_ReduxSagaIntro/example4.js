function* genFunc() {
  yield "a";
  yield "b";
}

const getAB = {
  [Symbol.iterator]() {
    let a = 'a';
    let b = 'b';
    let i = 0;

    return {
      next() {
        if (i === 0) {
          i++;
          return { value: a, done: false };
        }
        if (i === 1) {
          i++;
          return { value: b, done: false };
        }
        return { done: true }; // Корректное завершение итерации
      }
    }
  }
}

for(let i of genFunc()) {
  console.log(i);
}

for(let i of getAB) {
  console.log(i);
}

for(let i of ['a', 'b']) {
  console.log(i);
}