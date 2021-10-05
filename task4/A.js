const MS = 2000;

function delay(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}
function logHi() {
  console.log("Hi");
}
delay(MS).then(logHi);
