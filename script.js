// Create a variable num1 to store the first set of numbers added to the calculator

let num1;

// Create functions that push the clicked numbers to the display screen

const displayScreenOne = document.querySelector(".calculation-one");

const numberZero = document.querySelector(".number-zero");
numberZero.addEventListener("click", addZero);

const numberOne = document.querySelector(".number-one");
numberOne.addEventListener("click", addOne);

const numberTwo = document.querySelector(".number-two");
numberTwo.addEventListener("click", addTwo);

const numberThree = document.querySelector(".number-three");
numberThree.addEventListener("click", addThree);

const numberFour = document.querySelector(".number-four");
numberFour.addEventListener("click", addFour);

const numberFive = document.querySelector(".number-five");
numberFive.addEventListener("click", addFive);

const numberSix = document.querySelector(".number-six");
numberSix.addEventListener("click", addSix);

const numberSeven = document.querySelector(".number-seven");
numberSeven.addEventListener("click", addSeven);

const numberEight = document.querySelector(".number-eight");
numberEight.addEventListener("click", addEight);

const numberNine = document.querySelector(".number-nine");
numberNine.addEventListener("click", addNine);

function addZero() {
  let num = 0;
  num1 = displayScreenOne.textContent += num;
  console.log("This is num1 " + num1);
  return num1;
}

function addOne() {
  let num = 1;
  num1 = displayScreenOne.textContent += num;
  console.log("This is num1 " + num1);
  return num1;
}

function addTwo() {
  let num = 2;
  num1 = displayScreenOne.textContent += num;
  console.log("This is num1 " + num1);
  return num1;
}

function addThree() {
  let num = 3;
  num1 = displayScreenOne.textContent += num;
  console.log("This is num1 " + num1);
  return num1;
}

function addFour() {
  let num = 4;
  num1 = displayScreenOne.textContent += num;
  console.log("This is num1 " + num1);
  return num1;
}

function addFive() {
  let num = 5;
  num1 = displayScreenOne.textContent += num;
  console.log("This is num1 " + num1);
  return num1;
}

function addSix() {
  let num = 6;
  num1 = displayScreenOne.textContent += num;
  console.log("This is num1 " + num1);
  return num1;
}

function addSeven() {
  let num = 7;
  num1 = displayScreenOne.textContent += num;
  console.log("This is num1 " + num1);
  return num1;
}

function addEight() {
  let num = 8;
  num1 = displayScreenOne.textContent += num;
  console.log("This is num1 " + num1);
  return num1;
}

function addNine() {
  let num = 9;
  num1 = displayScreenOne.textContent += num;
  console.log("This is num1 " + num1);
  return num1;
}

function addDecimalSymbol() {
  document.getElementById("decimal").onclick = "";
  let num = ".";
  num1 = displayScreenOne.textContent += num;
  num1 = parseFloat(num1);
  console.log("This is num1 " + num1);
  return num1;
  document.getElementById("decimal").onclick = "addDecimalSymbol()";
}

// Display the operator on the screen and store its value

let operator;

// Create functions that push the clicked operator to the display screen and also store it in the operator variable

function storePlusOperator() {
  document.getElementById("addition").onclick = "";
  let operator = "plus";
  console.log(operator);
  return operator;
  document.getElementById("addition").onclick = "storePlusOperator()";
}

function storeMinusOperator() {
  document.getElementById("subtraction").onclick = "";
  let operator = "minus";
  console.log(operator);
  return operator;
  document.getElementById("subtraction").onclick = "storeMinusOperator()";
}

function storeMultiplicationOperator() {
  document.getElementById("multiplication").onclick = "";
  let operator = "multiply";
  console.log(operator);
  return operator;
  document.getElementById("multiplication").onclick = "storeMultiplicationOperator()";
}

function storeDivisionOperator() {
  document.getElementById("division").onclick = "";
  let operator = "divide";
  console.log(operator);
  return operator;
  document.getElementById("division").onclick = "storeDivisionOperator()";
}

// Create a variable num2 to store the set set of numbers added to the calculator

let num2;

// Create functions that push the clicked numbers to the display screen

const displayScreenTwo = document.querySelector(".calculation-two");
numberZero.addEventListener("click", addZero);
numberOne.addEventListener("click", addOne);
numberTwo.addEventListener("click", addTwo);
numberThree.addEventListener("click", addThree);
numberFour.addEventListener("click", addFour);
numberFive.addEventListener("click", addFive);
numberSix.addEventListener("click", addSix);
numberSeven.addEventListener("click", addSeven);
numberEight.addEventListener("click", addEight);
numberNine.addEventListener("click", addNine);

function addZero() {
  let num = 0;
  num2 = displayScreenTwo.textContent += num;
  console.log("This is num2 " + num2);
  return num2;
}

function addOne() {
  let num = 1;
  num2 = displayScreenTwo.textContent += num;
  console.log("This is num2 " + num2);
  return num2;
}

function addTwo() {
  let num = 2;
  num2 = displayScreenTwo.textContent += num;
  console.log("This is num2 " + num2);
  return num2;
}

function addThree() {
  let num = 3;
  num2 = displayScreenTwo.textContent += num;
  console.log("This is num2 " + num2);
  return num2;
}

function addFour() {
  let num = 4;
  num2 = displayScreenTwo.textContent += num;
  console.log("This is num2 " + num2);
  return num2;
}

function addFive() {
  let num = 5;
  num2 = displayScreenTwo.textContent += num;
  console.log("This is num2 " + num2);
  return num2;
}

function addSix() {
  let num = 6;
  num2 = displayScreenTwo.textContent += num;
  console.log("This is num2 " + num2);
  return num2;
}

function addSeven() {
  let num = 7;
  num2 = displayScreenTwo.textContent += num;
  console.log("This is num2 " + num2);
  return num2;
}

function addEight() {
  let num = 8;
  num2 = displayScreenTwo.textContent += num;
  console.log("This is num2 " + num2);
  return num2;
}

function addNine() {
  let num = 9;
  num2 = displayScreenTwo.textContent += num;
  console.log("This is num2 " + num2);
  return num2;
}

function addDecimalSymbol() {
  document.getElementById("decimal").onclick = "";
  let num = ".";
  num2 = displayScreenTwo.textContent += num;
  num2 = parseFloat(num2);
  console.log("This is num2 " + num2);
  return num2;
  document.getElementById("decimal").onclick = "addDecimalSymbol()";
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