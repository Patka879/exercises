"use strict"

const { expect } = require("@jest/globals")
const { findLongestWordLength } = require("./longest-word")

test("finding the lenght of the longest word", function() {
    expect(findLongestWordLength("The quick brown fox jumped over the lazy dog")).toEqual(6)
    expect(findLongestWordLength("May the force be with you")).toEqual(5)
    expect(findLongestWordLength("Google do a barrel roll")).toEqual(6)
    expect(findLongestWordLength("What is the average airspeed velocity of an unladen swallow")).toEqual(8)
    expect(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")).toEqual(19)

})