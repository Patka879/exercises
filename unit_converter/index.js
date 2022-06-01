"use strict"

let length = document.getElementById("length-conversion")
console.log("length", length)
let volume = document.getElementById("volume-conversion")
let mass = document.getElementById("mass-conversion")

function handleChange(event) {

    let metersToFeet = (event.target.value * 3.280).toFixed(3)
    let feetToMeters = (event.target.value * 0.305).toFixed(3)

    length.innerText = event.target.value !== 1 ? 
    ` ${event.target.value} meters = ${metersToFeet} feet | ${event.target.value} feet = ${feetToMeters === 1 ? feetToMeters + ' meter' : feetToMeters + ' meters'}` :
    ` ${event.target.value} meter = ${metersToFeet} feet | ${event.target.value} feet = ${feetToMeters === 1 ? feetToMeters + ' meter' : feetToMeters + 'meters'}`

    let litersToGallons = (event.target.value * 0.264).toFixed(3)
    let gallonsToLiters = (event.target.value * 3.785).toFixed(3)

    volume.innerText = event.target.value !== 1 ? 
    ` ${event.target.value} liters = ${litersToGallons === 1 ? litersToGallons + ' gallon' : litersToGallons + ' gallons'}  | ${event.target.value === 1 ? event.target.value + ' gallon' : event.target.value+  ' gallons'}  = ${gallonsToLiters === 1 ? gallonsToLiters + ' liter' : gallonsToLiters + ' liters'}` :
    ` ${event.target.value} liter = ${litersToGallons === 1 ? litersToGallons + ' gallon' : litersToGallons + ' gallons'} | ${event.target.value === 1 ? event.target.value + ' gallon' : event.target.value + ' gallons'} = ${gallonsToLiters === 1 ? gallonsToLiters + ' liter' : gallonsToLiters + ' liters'}`

    let kilogramsToPounds = (event.target.value * 2.205).toFixed(3)
    let poundsToKilograms = (event.target.value * 0.453).toFixed(3)

    mass.innerText = event.target.value !== 1 ? 
    ` ${event.target.value} kilograms = ${kilogramsToPounds === 1 ? kilogramsToPounds + ' pound' : kilogramsToPounds + ' pounds'}  | ${event.target.value === 1 ? event.target.value + ' pound' : event.target.value+  ' pounds'}  = ${poundsToKilograms === 1 ? poundsToKilograms + ' kilogram' : poundsToKilograms + ' kilograms'}` :
    ` ${event.target.value} kilogram = ${kilogramsToPounds === 1 ? kilogramsToPounds + ' pound' : kilogramsToPounds + ' pounds'} | ${event.target.value === 1 ? event.target.value + ' pound' : event.target.value + ' punds'} = ${poundsToKilograms === 1 ? poundsToKilograms + ' kilogram' : poundsToKilograms + ' kilograms'}`
   
}

