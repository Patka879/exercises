"use strict"

let displayedResult = document.getElementById("factorial")


function handleChange(e) {
    displayedResult.innerText = e.target.value ? countFactorial(e.target.value) : ""
}


function countFactorial(givenNumber) {
        let result = 1
        for (let i = 2; i <= givenNumber; i++) {
        result = result * i;
        }
        return result;
    }
   

