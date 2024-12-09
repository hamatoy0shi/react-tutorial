function* doubleConnection() {
  const a = yield '1'
  console.log(a)
  const b = yield '3'
  console.log(b)
}

const generator = doubleConnection();

console.log(generator.next('2').value);
console.log(generator.next('4').value);