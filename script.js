// Input and convert button
let inputEl = document.querySelector('#unit-input')
let btnEl = document.querySelector('#convert-button')

let input = inputEl.value //store the input

// length values
let meters
let feet

// volume values
let litres
let gallons

//mass values
let kilos
let pounds

// length functions
function lengths(input) {
    meters = Math.round(input * 0.3048 * 1000) / 1000
    feet = Math.round(input * 3.28084 * 1000) / 1000
}

function volumes(input) {
    litres = Math.round(input * 4.54609 * 1000) / 1000
    gallons = Math.round(input * 0.2641722 * 1000) / 1000
}

function masses(input) {
    kilos = Math.round(input * 0.453592 * 1000) / 1000
    pounds = Math.round(input * 2.20462 * 1000) / 1000
}