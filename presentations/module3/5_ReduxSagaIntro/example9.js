async function* asyncGenerator() {
  yield await fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json());

  yield await fetch('https://jsonplaceholder.typicode.com/todos/2').then(res => res.json());

  yield await fetch('https://jsonplaceholder.typicode.com/todos/3').then(res => res.json());
}

(async () => {
  for await (let data of asyncGenerator()) {
    console.log('Received:', data);
  }
})();