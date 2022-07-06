// Clear all values displayed on the screen
function clearScreen() {
  document.getElementById("result").value = "";
}

// Display values on the screen based on what was clicked
function display(value) {
  document.getElementById("result").value += value;
}