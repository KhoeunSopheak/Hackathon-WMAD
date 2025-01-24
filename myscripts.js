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
  display.value = -1 * display.value;
}

function cube() {
  display.value = display.value * display.value * display.value;
}

function cube2() {
  display.value = display.value * 2;
}

function sqrt() {
  display.value = Math.sqrt(display.value);
}

function sqrt3() {
  display.value = Math.cbrt(display.value);
}
