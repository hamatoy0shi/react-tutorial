async function fetchData() {
  const data1 = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json());
  console.log('Data 1:', data1);

  const data2 = await fetch('https://jsonplaceholder.typicode.com/todos/2').then(res => res.json());
  console.log('Data 2:', data2);

  const data3 = await fetch('https://jsonplaceholder.typicode.com/todos/3').then(res => res.json());
  console.log('Data 3:', data3);
}

fetchData();