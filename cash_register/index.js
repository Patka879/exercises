"use strict"

let cashToReturn = document.getElementById("cash-to-return")

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
    document.getElementById(inputId).defaultValue = counter;
    denominationsInDrawer[denomination] = counter
    counter++
}

function handleDenominationChange(event, denomination) {
    const numericValue = Number(event.target.value) || 0
    if (/\d/.test(numericValue)) {
        denominationsInDrawer[denomination] = numericValue
    } else {
        const inputId = `input${denomination.charAt(0).toUpperCase()}${denomination.slice(1)}`
        document.getElementById(inputId).value = denominationsInDrawer[denomination]
    }
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

    //Calculating total cash in drawer
    function countAllCashInDrawer () {
        let sum = 0;
        Object.entries(denominations).map(denomination => sum += denomination[1] * 100 * denominationsInDrawer[denomination[0]]) 
        return sum;
    }

    // What will be displayed if there are not enough money in the drawer, or if the change is exatcly equal to the amount of money in the drawer
    if(countAllCashInDrawer() < changeDue) {
        cashToReturn.innerText = "Insuficient funds"
        cashToReturn.style.color = 'red'
                
    } else {
        Object.entries(denominations).map(function(denominationItem){
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

            let denom = Object.entries(changeDueInAmountOfDenominations) 
            var table = document.getElementById("table"); 
            var tbody = document.createElement("tbody");
            
            table.appendChild(tbody);
            denom.forEach(function(items) {
            var row = document.createElement("tr");
            items.forEach(function(item) {
                var cell = document.createElement("td");
                cell.textContent = item;
                row.appendChild(cell);
            });
            tbody.appendChild(row);
            });

        document.getElementById("cash-to-return").innerHTML = ""
    }
}


function handleClick() {
    document.getElementById("table").innerHTML = ""
    checkCashRegister()
}

function handleReset() {

    let price = document.getElementById("price")
    price.value = price.defaultValue
    let cash = document.getElementById("cash")
    cash.value = cash.defaultValue
    cashToReturn.innerHTML = "Please enter the data."
    cashToReturn.style.color = '#333' 
    document.getElementById("table").innerHTML = ""  
}



