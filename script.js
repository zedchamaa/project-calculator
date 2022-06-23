// Store the first display round value

let displayValueOne = 0;

// Create the functions that populate the display screen when a number button is clicked

const calculation = document.querySelector(".calculation");

const buttonZero = document.getElementById("zero");
buttonZero.addEventListener("click", populateDisplayZero);

function populateDisplayZero() {
  displayValueOne = calculation.innerText += 0;
  displayValueOne = parseFloat(displayValueOne);
  updateNum1();
  return displayValueOne;
}

const buttonOne = document.getElementById("one");
buttonOne.addEventListener("click", populateDisplayOne);

function populateDisplayOne() {
  displayValueOne = calculation.innerText += 1;
  displayValueOne = parseFloat(displayValueOne);
  updateNum1();
  return displayValueOne;
}

const buttonTwo = document.getElementById("two");
buttonTwo.addEventListener("click", populateDisplayTwo);

function populateDisplayTwo() {
  displayValueOne = calculation.innerText += 2;
  displayValueOne = parseFloat(displayValueOne);
  updateNum1();
  return displayValueOne;
}

const buttonThree = document.getElementById("three");
buttonThree.addEventListener("click", populateDisplayThree);

function populateDisplayThree() {
  displayValueOne = calculation.innerText += 3;
  displayValueOne = parseFloat(displayValueOne);
  updateNum1();
  return displayValueOne;
}

const buttonFour = document.getElementById("four");
buttonFour.addEventListener("click", populateDisplayFour);

function populateDisplayFour() {
  displayValueOne = calculation.innerText += 4;
  displayValueOne = parseFloat(displayValueOne);
  updateNum1();
  return displayValueOne;
}

const buttonFive = document.getElementById("five");
buttonFive.addEventListener("click", populateDisplayFive);

function populateDisplayFive() {
  displayValueOne = calculation.innerText += 5;
  displayValueOne = parseFloat(displayValueOne);
  updateNum1();
  return displayValueOne;
}

const buttonSix = document.getElementById("six");
buttonSix.addEventListener("click", populateDisplaySix);

function populateDisplaySix() {
  displayValueOne = calculation.innerText += 6;
  displayValueOne = parseFloat(displayValueOne);
  updateNum1();
  return displayValueOne;
}

const buttonSeven = document.getElementById("seven");
buttonSeven.addEventListener("click", populateDisplaySeven);

function populateDisplaySeven() {
  displayValueOne = calculation.innerText += 7;
  displayValueOne = parseFloat(displayValueOne);
  updateNum1();
  return displayValueOne;
}

const buttonEight = document.getElementById("eight");
buttonEight.addEventListener("click", populateDisplayEight);

function populateDisplayEight() {
  displayValueOne = calculation.innerText += 8;
  displayValueOne = parseFloat(displayValueOne);
  updateNum1();
  return displayValueOne;
}

const buttonNine = document.getElementById("nine");
buttonNine.addEventListener("click", populateDisplayNine);

function populateDisplayNine() {
  displayValueOne = calculation.innerText += 9;
  displayValueOne = parseFloat(displayValueOne);
  updateNum1();
  return displayValueOne;
}

const buttonDot = document.getElementById("dot");
buttonDot.addEventListener("click", populateDisplayDot);

function populateDisplayDot() {
  displayValueOne = calculation.innerText += ".";
  displayValueOne = parseFloat(displayValueOne);
  updateNum1();
  return displayValueOne;
}

function updateNum1() {
  num1 = displayValueOne;
  console.log("This is num1 ", num1);
}

// Create functions that store the operator selection

let operator;

function storeAdditionOperator() {
  operator = "plus";
  return operator;
}

function storeSubtractionOperator() {
  operator = "minus";
  return operator;
}

function storeMultiplicationOperator() {
  operator = "multiply";
  return operator;
}

function storeDivisionOperator() {
  operator = "divide";
  return operator;
}

// Store the second display round value 

let displayValueTwo = 0;

// Create the functions that populate the display screen when a number button is clicked

buttonZero.addEventListener("click", populateDisplayZero);

function populateDisplayZero() {
  displayValueTwo = calculation.innerText += 0;
  displayValueTwo = parseFloat(displayValueTwo);
  updateNum2();
  return displayValueTwo;
}

buttonOne.addEventListener("click", populateDisplayOne);

function populateDisplayOne() {
  displayValueTwo = calculation.innerText += 1;
  displayValueTwo = parseFloat(displayValueTwo);
  updateNum2();
  return displayValueTwo;
}

buttonTwo.addEventListener("click", populateDisplayTwo);

function populateDisplayTwo() {
  displayValueTwo = calculation.innerText += 2;
  displayValueTwo = parseFloat(displayValueTwo);
  updateNum2();
  return displayValueTwo;
}

buttonThree.addEventListener("click", populateDisplayThree);

function populateDisplayThree() {
  displayValueTwo = calculation.innerText += 3;
  displayValueTwo = parseFloat(displayValueTwo);
  updateNum2();
  return displayValueTwo;
}

buttonFour.addEventListener("click", populateDisplayFour);

function populateDisplayFour() {
  displayValueTwo = calculation.innerText += 4;
  displayValueTwo = parseFloat(displayValueTwo);
  updateNum2();
  return displayValueTwo;
}

buttonFive.addEventListener("click", populateDisplayFive);

function populateDisplayFive() {
  displayValueTwo = calculation.innerText += 5;
  displayValueTwo = parseFloat(displayValueTwo);
  updateNum2();
  return displayValueTwo;
}

buttonSix.addEventListener("click", populateDisplaySix);

function populateDisplaySix() {
  displayValueTwo = calculation.innerText += 6;
  displayValueTwo = parseFloat(displayValueTwo);
  updateNum2();
  return displayValueTwo;
}

buttonSeven.addEventListener("click", populateDisplaySeven);

function populateDisplaySeven() {
  displayValueTwo = calculation.innerText += 7;
  displayValueTwo = parseFloat(displayValueTwo);
  updateNum2();
  return displayValueTwo;
}

buttonEight.addEventListener("click", populateDisplayEight);

function populateDisplayEight() {
  displayValueTwo = calculation.innerText += 8;
  displayValueTwo = parseFloat(displayValueTwo);
  updateNum2();
  return displayValueTwo;
}

buttonNine.addEventListener("click", populateDisplayNine);

function populateDisplayNine() {
  displayValueTwo = calculation.innerText += 9;
  displayValueTwo = parseFloat(displayValueTwo);
  updateNum2();
  return displayValueTwo;
}

buttonDot.addEventListener("click", populateDisplayDot);

function populateDisplayDot() {
  displayValueTwo = calculation.innerText += ".";
  displayValueTwo = parseFloat(displayValueTwo);
  updateNum2();
  return displayValueTwo;
}

function updateNum2() {
  num2 = displayValueTwo;
  console.log("This is num2 ", num2);
}

// Create a function that takes an operator and 2 numbers

function operate(num1, operator, num2) {
  if (operator === "plus") {
    add(num1, num2);
  }
  else if (operator === "minus") {
    subtract(num1, num2);
  }
  else if (operator === "multiply") {
    multiply(num1, num2);
  }
  else if (operator === "divide") {
    divide(num1, num2);
  }
}

// Create a function that adds two numbers

function add(num1, num2) {
  let total = 0;
  total = num1 + num2;
  return total;
}

// Create a function that subtracts two numbers

function subtract(num1, num2) {
  let total = 0;
  total = num1 - num2;
  return total;
}

// Create a function that multiplies two numbers

function multiply(num1, num2) {
  let total = 0;
  total = num1 * num2;
  return total;
}

// Create a function that divides two numbers

function divide(num1, num2) {
  let total = 0;
  total = num1 / num2;
  return total;
}