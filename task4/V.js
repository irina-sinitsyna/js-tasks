const getRandomNumber = (minValue, maxValue) => {
  return Math.random() * (maxValue - minValue) + minValue;
};

const promise = new Promise((resolve, reject) => {
  let time = getRandomNumber(1, 3000);
  if (time <= 2000) {
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
