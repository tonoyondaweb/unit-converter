// Input and convert button
const inputEl = document.querySelector('#unit-input')
const btnEl = document.querySelector('#convert-btn')

let input

// length values
let meters
let feet

// volume values
let litres
let gallons

//mass values
let kilos
let pounds

//length functions
function lengths(input) {
    meters = Math.round(input * 0.3048 * 1000) / 1000
    feet = Math.round(input * 3.28084 * 1000) / 1000
}

function volumes(input) {
    litres = Math.round(input * 3.78541 * 1000) / 1000
    gallons = Math.round(input * 0.2641722 * 1000) / 1000
}

function masses(input) {
    kilos = Math.round(input * 0.453592 * 1000) / 1000
    pounds = Math.round(input * 2.20462 * 1000) / 1000
}

//render function
function render() {
    const lenEl = document.querySelector('#length')
    const volEl = document.querySelector('#volume')
    const masEl = document.querySelector('#mass')

    lenEl.textContent = `${input} meters = ${feet} feet | ${input} feet = ${meters} meters`
    volEl.textContent = `${input} litres = ${gallons} gallons | ${input} gallons = ${litres} litres`
    masEl.textContent = `${input} kilos = ${pounds} pounds | ${input} pounds = ${kilos} kilos`
}

//button trigger
btnEl.addEventListener('click', () => {
    input = parseInt(inputEl.value) //store the input

    if(!input)
        return null

    lengths(input)
    volumes(input)
    masses(input)

    render()
})