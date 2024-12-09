function* fetchDataGenerator() {
  const data1 = yield fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json());
  console.log('Data 1:', data1);

  const data2 = yield fetch('https://jsonplaceholder.typicode.com/todos/2').then(res => res.json());
  console.log('Data 2:', data2);

  const data3 = yield fetch('https://jsonplaceholder.typicode.com/todos/3').then(res => res.json());
  console.log('Data 3:', data3);
}

function run(generator) {
  const iterator = generator();

  function handle(result) {
    if (result.done) return;

    result.value.then(res => {
      handle(iterator.next(res));
    });
  }

  handle(iterator.next());
}

run(fetchDataGenerator);