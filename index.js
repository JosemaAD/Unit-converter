// Elements of DOM
const numEl = document.getElementById('num-el')
const converter = document.getElementById('converter')
const lengthResults = document.getElementById('length-results')
const volumeResults = document.getElementById('volume-results')
const massResults = document.getElementById('mass-results')
const reset = document.getElementById('reset')

function calculate(){ //Take as parameters 1: Both values already calculated, 2: input to print & 3:names of values
    lengthResults.textContent = `${numEl.value} meters = ${(numEl.value*3.281).toFixed(3)} feet | ${numEl.value} feet = ${(numEl.value/3.281).toFixed(3)} meters`
    volumeResults.textContent = `${numEl.value} liters = ${(numEl.value*0.264).toFixed(3)} gallons | ${numEl.value} gallons = ${(numEl.value/0.264).toFixed(3)} liters`
    massResults.textContent = `${numEl.value} kilos = ${(numEl.value*2.204).toFixed(3)} pounds | ${numEl.value} pounds = ${(numEl.value/2.204).toFixed(3)} kilos`
}

// Clean Data
function cleanData(){
    lengthResults.textContent = ''
    massResults.textContent = ''
    volumeResults.textContent = ''
    numEl.value = ''
}

converter.addEventListener("click", function(){
    if (numEl.value != ''){
        calculate()
    }
})

reset.addEventListener("click", function(){
    cleanData()
})

console.time('calculate')
    
calculate()  // <---- The function you're measuring time for 
    
console.timeEnd('calculate')