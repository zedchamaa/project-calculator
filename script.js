// Clear all values displayed on the screen
function clearScreen() {
  document.getElementById("result").value = "";
}

// Display values on the screen based on what was clicked
function display(value) {
  document.getElementById("result").value += value;
}

// Calculate the result and display it on the screen
function calculate() {
  const screenValue = document.getElementById("result").value;
  const calculateResult = eval(screenValue);
  document.getElementById("result").value = calculateResult;
}