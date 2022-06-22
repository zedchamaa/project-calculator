// Create a function that adds two numbers

function add(num1, num2) {
  let total = 0;
  total = num1 + num2;
  // return total;
  console.log(total);
}

// Create a function that subtracts two numbers

function subtract(num1, num2) {
  let total = 0;
  total = num1 - num2;
  // return total;
  console.log(total);
}

// Create a function that multiplies two numbers

function multiply(num1, num2) {
  let total = 0;
  total = num1 * num2;
  // return total;
  console.log(total);
}

// Create a function that divides two numbers

function divide(num1, num2) {
  let total = 0;
  total = num1 / num2;
  // return total;
  console.log(total);
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



operate(100, "divide", 50);