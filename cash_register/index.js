"use strict"

const denominations = {
    oneHundred: 100,
    twenty: 20,
    ten: 10,
    five: 5,
    one: 1,
    quarter: 0.25,
    dime: 0.1,
    nickel: 0.05,
    penny: 0.01
}

const denominationsInDrawer = {}
let counter = 0

for(const denomination in denominations) {
    const inputId = `input${denomination.charAt(0).toUpperCase()}${denomination.slice(1)}`
    console.log(inputId)
    document.getElementById(inputId).defaultValue = counter;
    denominationsInDrawer[denomination] = counter
    counter++
}

function handleDenominationChange(event, denomination) {
    console.log("event.target", event.target.value)
    const numericValue = Number(event.target.value) || 0
    console.log("numericValue", numericValue)
    if (/\d/.test(numericValue)) {
        denominationsInDrawer[denomination] = numericValue
    } else {
        const inputId = `input${denomination.charAt(0).toUpperCase()}${denomination.slice(1)}`
        document.getElementById(inputId).value = denominationsInDrawer[denomination]
    }
    console.log(denominationsInDrawer)
    console.log("entries of denomination", Object.entries(denominations))
}

function handleDenominationBlur(denomination) {
    const inputId = `input${denomination.charAt(0).toUpperCase()}${denomination.slice(1)}`
    document.getElementById(inputId).value = denominationsInDrawer[denomination]
}


function checkCashRegister () {

    const changeDueInAmountOfDenominations = {}
            
    const price = document.querySelector("#price").value
    const cash = document.querySelector("#cash").value
    

    // Calculating how much is the change 
    let changeDue = (cash * 100) - (price * 100);

    console.log(changeDue)

    //Calculating total cash in drawer
    function countAllCashInDrawer () {
        let sum = 0;
        Object.entries(denominations).map(denomination => sum += denomination[1] * 100 * denominationsInDrawer[denomination[0]]) 
        return sum;
    }

    // What will be displayed if there are not enough money in the drawer, or if the change is exatcly equal to the amount of money in the drawer
    if(countAllCashInDrawer() < changeDue) {
        return {status: "INSUFFICIENT_FUNDS", change: []}
    } else if(countAllCashInDrawer() === changeDue) {
        return {status: "CLOSED", change: denominationsInDrawer}; 
    } else {
        Object.entries(denominations).map(function(denominationItem) {
            const denominationValueInInteger = denominationItem[1] * 100
            if(changeDue >= denominationValueInInteger) {
                let changeInAmountOfDenomination = Math.trunc(changeDue/denominationValueInInteger)
                
                if(changeInAmountOfDenomination > denominationsInDrawer[denominationItem[0]]) {
                    changeInAmountOfDenomination = denominationsInDrawer[denominationItem[0]]
                }
                changeDueInAmountOfDenominations[denominationItem[0]] = changeInAmountOfDenomination
                changeDue -= changeInAmountOfDenomination * denominationValueInInteger
            } 
        })
        // when there is not enough money in the drawer to give change
        if (changeDue > 0) return {status: "INSUFFICIENT_FUNDS", change: {}}
        // when there is enough money in the drawer
        return {status: "OPEN", change: changeDueInAmountOfDenominations};
    }
}


function handleClick() {
    checkCashRegister()
    console.log(checkCashRegister())
}

