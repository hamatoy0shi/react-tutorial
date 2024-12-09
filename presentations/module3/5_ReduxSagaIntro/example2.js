const asyncIterable = {
  [Symbol.asyncIterator]() {
    let i = 0;
    return {
      async next() {
        if (i < 3) {
          await new Promise(resolve => setTimeout(resolve, 2000)); // Имитация асинхронной операции
          return { value: i++, done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
};

(async () => {
  for await (let value of asyncIterable) {
    console.log(value); // Выводит 0, 1, 2 с задержкой в 1 секунду между выводами
  }
})();