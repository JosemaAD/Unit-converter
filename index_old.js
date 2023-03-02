// Elements of DOM
const numEl = document.getElementById('num-el')
const converter = document.getElementById('converter')
const lengthResults = document.getElementById('length-results')
const volumeResults = document.getElementById('volume-results')
const massResults = document.getElementById('mass-results')
const reset = document.getElementById('reset')
const units = [ 
    {
        datatypes: ['meters','feets'],
        equivalent: 3.281,
        input: lengthResults
    },
    {
        datatypes: ['liters', 'gallons'],
        equivalent: 0.264,
        input: volumeResults
    },
    {
        datatypes: ['kilos', 'pounds'],
        equivalent: 2.204,
        input: massResults
    }
]

// Calculate results
function operateChange(change){
    let unitOne = numEl.value * change
    let unitTow = numEl.value / change
    let units  = []
    units.push(unitOne, unitTow)
    return units //Returns an array with both values already calculated
}

// Print on DOM
function printUnits(valuesOnBothUnits, inputResults, datatypes){ //Take as parameters 1: Both values already calculated, 2: input to print & 3:names of values
    for (let i = 0; i < valuesOnBothUnits.length; i++){
        if(i == 0){
            inputResults.textContent += `${numEl.value} ${datatypes[i]} = ${valuesOnBothUnits[i]} ${datatypes[i+1]} | `
        }else if(i == 1){
            inputResults.textContent += `${numEl.value} ${datatypes[i]} = ${valuesOnBothUnits[i]} ${datatypes[i-1]} `
        }
    }
}

function execute(arr){
    for ( let i = 0 ; i < arr.length ; i++ ) {
        let datatypes = arr[i].datatypes // Names of values
        const equivalent = arr[i].equivalent // Equivalent of change or constant
        let units = operateChange(equivalent) // Calculate the values and save them in a variable
        
        let unitsCalculated = []
        unitsCalculated.push(units[0].toFixed(3), units[1].toFixed(3)) //Store  the values rounded in a new variable

        printUnits(unitsCalculated, arr[i].input, datatypes) 
    }
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
        execute(units)
    }
})

reset.addEventListener("click", function(){
    cleanData()
})

