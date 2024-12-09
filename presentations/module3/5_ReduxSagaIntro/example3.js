const fetchData = {
  [Symbol.asyncIterator]() {
    let i = 0;
    return {
      async next() {
        if (i < 3) {
          const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${i + 1}`);
          const data = await response.json();
          i++;
          return { value: data, done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
};

(async () => {
  for await (let todo of fetchData) {
    console.log(todo);
  }
})();