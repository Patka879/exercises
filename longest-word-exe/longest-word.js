"use strict"


function findLongestWordLength(str) {

    let splitedString = str.split(" ")

    let longestWord = 0
  
    for(let i=0; i < splitedString.length; i++) {
      if(splitedString[i].length > longestWord) {
        longestWord = splitedString[i].length
      }
    }
    
    return longestWord;

  }



module.exports = {findLongestWordLength}