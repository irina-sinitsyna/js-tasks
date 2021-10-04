const firstInput = document.getElementById("firstInput");
const secondInput = document.getElementById("secondInput");

function setInputValue(input, value) {
  input.value = value;
}

function copyValue(input1, input2, delay = 1000) {
  setTimeout(setInputValue, delay, input2, input1.value);
}

firstInput.addEventListener("keyup", () => {
  copyValue(firstInput, secondInput);
});

secondInput.addEventListener("keyup", () => {
  copyValue(secondInput, firstInput);
});
