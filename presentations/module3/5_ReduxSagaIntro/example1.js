export const createSimpleIterator = (from, to) => ({
  from,
  to,
  [Symbol.iterator]: () => ({
    next: () => {
      return from <= to ? { done: false, value: from++ } : { done: true };
    },
  }),
});

for(let i of createSimpleIterator(1, 5)){
  console.log(i);
}