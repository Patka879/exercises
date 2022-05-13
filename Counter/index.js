'use strict'

let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {
    count = count + 1
    countEl.innerText = count
}

function save() {
    let countedPax = " " + count + " - "
    saveEl.textContent += countedPax
    countEl.innerText = 0
    count = 0
}