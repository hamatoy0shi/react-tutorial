function* processArray(arr) {
  let multiplier = 1;  // Начальный коэффициент умножения

  for (let i = 0; i < arr.length; i++) {
    // Возвращаем результат текущей обработки и принимаем новый коэффициент умножения
    multiplier = yield arr[i] * multiplier;
    if (multiplier === undefined) {
      multiplier = 1; // Если новый коэффициент не передан, оставляем текущий
    }
  }
}

const array = [10, 20, 30, 40];
const generator = processArray(array);

console.log(generator.next().value);
console.log(generator.next(2).value);
console.log(generator.next(0.5).value);
console.log(generator.next().value);