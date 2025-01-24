const display = document.getElementById("display");

function addcalculator(input) {
  display.value += input;
}

function calculate() {
  display.value = eval(display.value);
}

function clearcalculator() {
  display.value = "";
}

function spacecalculator() {
  display.value = display.value.substring(0, display.value.length - 1);
}

function negative() {
  display.value = display.value.Math.sign(display.value);
}

