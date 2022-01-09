"use strict"

function titleCase(str) {
    let fullLowerCase = str.toLowerCase()
    let splitedSentence = fullLowerCase.split(" ")
    
    for(let i = 0; i < splitedSentence.length; i++) {
        if(splitedSentence[i]) {
            splitedSentence[i] = splitedSentence[i].charAt(0).toUpperCase() + splitedSentence[i].slice(1)

        }
    }
    
    return splitedSentence.join(" ")
}

// comment 

module.exports = {titleCase}