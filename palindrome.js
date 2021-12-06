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
  const lowerCaseValue = value.replace(/[\W_]+/g,"").toLowerCase()
  if (lowerCaseValue === lowerCaseValue.split("").reverse().join("")) {
    return "This is a palindrome"
  } else {
    return "This is not a palindrome"
  }
}

module.exports = {palindromeCheck}