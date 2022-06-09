"use strict"

function camelCaseToHumanReadable(camelCaseString) {
    var words = camelCaseString.match(/[A-Za-z][a-z]*/g) || [];
    return words.join(" ");
}

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

function setInitialDrawerValues() {
    let counter = 0
    for(const denomination in denominations) {
        const inputId = `input${denomination.charAt(0).toUpperCase()}${denomination.slice(1)}`
        document.getElementById(inputId).value = counter;
        denominationsInDrawer[denomination] = counter
        counter++
    }
    console.log("set initial values")
    console.log("denom", denominationsInDrawer)
}

setInitialDrawerValues()

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

            const denom = Object.entries(changeDueInAmountOfDenominations) 
            const table = document.getElementById("table"); 
            const tbody = document.createElement("tbody");
            
            table.appendChild(tbody);
            denom.forEach(function(denomEntry) {
                const row = document.createElement("tr")
                const nameCell = document.createElement("td")
                nameCell.textContent = camelCaseToHumanReadable(denomEntry[0])
                row.appendChild(nameCell)
                const valueCell = document.createElement("td")
                valueCell.textContent = denomEntry[1];
                row.appendChild(valueCell)
                tbody.appendChild(row);
            });

        document.getElementById("cash-to-return").innerHTML = ""
    }
}


function handleClick(event) {
    event.preventDefault()
    document.getElementById("table").innerHTML = ""
    checkCashRegister()
}

function handleReset(event) {
    event.preventDefault()
    let price = document.getElementById("price")
    price.value = price.defaultValue
    let cash = document.getElementById("cash")
    cash.value = cash.defaultValue
    cashToReturn.innerHTML = "Please enter the data."
    cashToReturn.style.color = '#333' 
    document.getElementById("table").innerHTML = ""  
    setInitialDrawerValues()
}



