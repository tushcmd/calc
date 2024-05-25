let expression = "";

function addToDisplay(value) {
  const display = document.getElementById("display");
  expression += value;
  display.value = expression;
}

function clearDisplay() {
  const display = document.querySelector("#display");
  expression = "";
  display.value = "";
}

function calculate() {
  const display = document.querySelector("#display");
  try {
    expression = eval(expression);
    display.value = expression;
  } catch (error) {
    alert("Invalid expression");
  }
}
