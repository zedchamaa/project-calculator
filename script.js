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

// Store the display value

let displayValue = 0;

// Create the functions that populate the display when a number button is clicked

const calculation = document.querySelector(".calculation");

const buttonZero = document.getElementById("zero");
buttonZero.addEventListener("click", populateDisplayZero);

function populateDisplayZero() {
  calculation.innerText += 0;
}

const buttonOne = document.getElementById("one");
buttonOne.addEventListener("click", populateDisplayOne);

function populateDisplayOne() {
  calculation.innerText += 1;
}

const buttonTwo = document.getElementById("two");
buttonTwo.addEventListener("click", populateDisplayTwo);

function populateDisplayTwo() {
  calculation.innerText += 2;
}

const buttonThree = document.getElementById("three");
buttonThree.addEventListener("click", populateDisplayThree);

function populateDisplayThree() {
  calculation.innerText += 3;
}

const buttonFour = document.getElementById("four");
buttonFour.addEventListener("click", populateDisplayFour);

function populateDisplayFour() {
  calculation.innerText += 4;
}

const buttonFive = document.getElementById("five");
buttonFive.addEventListener("click", populateDisplayFive);

function populateDisplayFive() {
  calculation.innerText += 5;
}

const buttonSix = document.getElementById("six");
buttonSix.addEventListener("click", populateDisplaySix);

function populateDisplaySix() {
  calculation.innerText += 6;
}

const buttonSeven = document.getElementById("seven");
buttonSeven.addEventListener("click", populateDisplaySeven);

function populateDisplaySeven() {
  calculation.innerText += 7;
}

const buttonEight = document.getElementById("eight");
buttonEight.addEventListener("click", populateDisplayEight);

function populateDisplayEight() {
  calculation.innerText += 8;
}

const buttonNine = document.getElementById("nine");
buttonNine.addEventListener("click", populateDisplayNine);

function populateDisplayNine() {
  calculation.innerText += 9;
}