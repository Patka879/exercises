"use strict"

const { expect } = require("@jest/globals")
const { titleCase } = require("./capitalized") 

test("capitalizing first letter of every word", function() {
    expect(titleCase("I'm a little tea pot")).toEqual("I'm A Little Tea Pot")
    expect(titleCase("sHoRt AnD sToUt")).toEqual("Short And Stout")
    expect(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")).toEqual("Here Is My Handle Here Is My Spout")

})