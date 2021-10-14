"use strict"

function add(addArray) {
    let result = 0

    for (let i = 0; i < addArray.length; i++) {
        result = result + addArray[i];
    }

    return result
};

function subtract(subArray) {
    let result;

    for (let i = 0; i < subArray.length; i = i + 1) {
        if (i === 0) {
            result = subArray[0];
        } else {
        result = result - subArray[i];
        }

    }

    return result;
};

function multiply(multiplyArray) {
    let result;

    for (let i = 0; i < multiplyArray.length; i++) {
        if (i === 0) {
            result = multiplyArray[0];
         } else {
            result = result * multiplyArray[i];
        }

    }

    return result;
};

function divide(divideArray) {
    let result;

    for (let i = 0; i < divideArray.length; i++) {
        if (i === 0) {
            result = divideArray[0]; 
        } else {
            result = result / divideArray[i];
        }

    } 
    return result;
};

console.log(add([6, 7, 8, 3]));

console.log(subtract([25, 2, 6, 6]));

console.log(multiply([1, 6, 5 ,2]));

console.log(divide([120, 2, 3, 5]));



