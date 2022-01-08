"use strict"

function titleCase(str) {

    str = "I'm a little tea pot"

    let fullLowerCase = str.toLowerCase()
    console.log(fullLowerCase)

    let splitedSentence = fullLowerCase.split(" ")
    //console.log(splitedSentence)

    let firstLetterUpperCase = 0
    let allUpperCase 

    for(let i = 0; i < splitedSentence.length; i++) {
        if(splitedSentence[i]) {
            firstLetterUpperCase = splitedSentence[i].charAt(0).toUpperCase() + splitedSentence[i].slice(1)

        }
           console.log(firstLetterUpperCase)
    }

}

titleCase()

// module.exports = {titleCase}