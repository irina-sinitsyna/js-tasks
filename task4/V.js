const getRandomNumber = (minValue, maxValue) => {
  return Math.random() * (maxValue - minValue) + minValue;
};

const promise = new Promise((resolve, reject) => {
  const MAX_EXECUTION_TIME = 2000;
  const time = getRandomNumber(1, 3000);
  if (time <= MAX_EXECUTION_TIME) {
    resolve("It works! Execution time did not exceed 2 seconds");
  } else {
    reject("Unfortunately, execution time exceeded 2 seconds");
  }
});

promise.then((value) => {
  console.log(value);
});

promise.catch((reason) => {
  console.error(reason);
});
