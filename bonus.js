const init = 0;

const createCounter = (init) => {
  console.log("\n");

  const initialValue = init;
  let usedValue = init;

  return {
    increment: () => {
      usedValue += 1;
      console.log(usedValue);
      return usedValue;
    },
    reset: () => {
      usedValue = initialValue;
      console.log(usedValue);
      return usedValue;
    },
    decrement: () => {
      usedValue -= 1;
      console.log(usedValue);
      return usedValue;
    },
  };
};

const counter = createCounter(init);
counter.increment();
counter.increment();
counter.decrement();
counter.reset();
counter.reset();
