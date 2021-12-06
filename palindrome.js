"use strict"


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  if (line !== "" && line.length > 2) {
    console.log(palindromeCheck(line));
  } else {
    console.log('Please insert value that is at least 3 characters long')
  }
});

function palindromeCheck (value) {
  let splitString = value.split("");
  let reverseString = splitString.reverse();
  let joinString = reverseString.join("");

  if (joinString === value) {
    return "This is a palindrome"
  } else {
    return "This is not a palindrome"
  }
}
