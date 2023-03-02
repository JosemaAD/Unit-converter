
const numEl = document.getElementById('num-el')
const converter = document.getElementById('converter')
let lengthResults = document.getElementById('length-results')
let volumeResults = document.getElementById('volume-results')
let massResults = document.getElementById('mass-results')
let reset = document.getElementById('reset')

// Calculate results
function operateChange(change){
    let unitOne = numEl.value * change
    let unitTow = numEl.value / change
    let units  = []

    units.push(unitOne, unitTow)
    return units
}

// Print on DOM
function printUnits(valuesOnBothUnits, inputResults, datatypes){
    for (let i = 0; i < valuesOnBothUnits.length; i++){
        if(i == 0){
            inputResults.textContent += `${valuesOnBothUnits[i]} ${datatypes[i]} | `
        }else if(i == 1){
            inputResults.textContent += `${valuesOnBothUnits[i]} ${datatypes[i]} `
        }
    }
}

function execute(){
    let unitsCalculated = []
    let datatypes = ['feets', 'meters']
    const equivalent = 3.281
    let units = operateChange(equivalent)

    unitsCalculated.push(units[0].toFixed(3), units[1].toFixed(3))
    
    printUnits(unitsCalculated, lengthResults, datatypes)
}


function converLength(){
    let unitsCalculated = []
    let datatypes = ['feets', 'meters']
    const equivalent = 3.281
    let units = operateChange(equivalent)

    unitsCalculated.push(units[0].toFixed(3), units[1].toFixed(3))
    
    printUnits(unitsCalculated, lengthResults, datatypes)
}

function converVolume(){
    let unitsCalculated = []
    let datatypes = ['liters', 'gallons']
    const equivalent = 0.264
    let units = operateChange(equivalent)

    unitsCalculated.push(units[0].toFixed(3), units[1].toFixed(3))
    
    printUnits(unitsCalculated, volumeResults, datatypes)
}

function converMass(){
    let unitsCalculated = []
    let datatypes = ['kilos', 'pounds']
    const equivalent = 2.204
    let units = operateChange(equivalent)

    unitsCalculated.push(units[0].toFixed(3), units[1].toFixed(3))
    
    printUnits(unitsCalculated, massResults, datatypes)
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
        converLength()
        converMass()
        converVolume()
    }
})

reset.addEventListener("click", function(){
    cleanData()
})

