"use strict"

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  const numberLine = line * 1;
  if (typeof numberLine === "number" && !Number.isNaN(numberLine)) {
    console.log(recurrencyFactorial(numberLine));
  } else {
    console.log('Please insert number')
  }
});


// Alternative, reversed loop factorial

function reverseLoopFactorial(factorialNumber) {
  let result = factorialNumber || 1;
  for (let i = factorialNumber - 1; i > 0; i--) {
    result = result * i;
  }
  return result;  
} 


function factorial(factorialNumber) {
  let result = 1;
  for (let i = 2; i <= factorialNumber; i++) {
    result = result * i;
  }

  return result;
}

// Reccurency factorial

function recurrencyFactorial(factorialNumber) {
  if (factorialNumber > 1) {
    return factorialNumber * recurrencyFactorial(factorialNumber - 1);
  } else {
    return 1;
  }
}