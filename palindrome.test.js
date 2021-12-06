"use strict"

const { expect } = require("@jest/globals")
const {palindromeCheck} = require("./palindrome")

test("palindrome check handles regular palindrome", function() {
  expect(palindromeCheck("racecar")).toEqual("This is a palindrome") 
})

test("palindrome check handles uppercase palindrome", function() {
  expect(palindromeCheck("Racecar")).toEqual("This is a palindrome") 
})

test("palindrome check handles non-palindrome", function() {
  expect(palindromeCheck("Mateusz")).toEqual("This is not a palindrome") 
})

test("palindrome check handles non-alpahnumeric characters", function() {
  expect(palindromeCheck(" race*c/a r")).toEqual("This is a palindrome") 
  expect(palindromeCheck("_eye")).toEqual("This is a palindrome") 
  expect(palindromeCheck("0_0 (: /-\ :) 0-0")).toEqual("This is a palindrome") 
})


