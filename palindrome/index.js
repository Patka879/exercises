"use strict"

let displayedResult = document.getElementById("yesorno")
let result 
function handleChange(e) {
     result = e.target.value ? palindromeCheck(e.target.value) : ""
}



function palindromeCheck (value) {
    if (value === value.split("").reverse().join("")) {
      return "Yes! It's a palindrome"
    } else {
      return "No, it's not a palindrome"
    }
  }

  function handleClick() {
      displayedResult.innerText = result ? result : "Please enter a sentence"
  }