// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if (testInput===""){
        return "Empty"
    } 
    if(isNaN(testInput)) {
        return "Not a Number"
    }
    else {
        return "Is a Number"
    }
}
// function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
   
    if (validateInput(pilot.value)==="Is a Number" ||
    validateInput(copilot.value)==="Is a Number" ||
    validateInput(fuelLevel.value)==="Not a Number" ||
    validateInput(cargoMass.value)==="Not a Number"){
        alert("Make sure to enter valid information for each field");
    }
    
   
   
    const div = document.getElementById("faultyItems");
    const fuelId = document.getElementById("fuelStatus");
    const cargoId = document.getElementById("cargoStatus");
    const launchHeading= document.getElementById("launchStatus")
    
    div.innerHTML = `
        <ol>
            <li id="pilotStatus" data-testid="pilotStatus">${pilot.value} is ready for Launch</li>
            <li id="copilotStatus" data-testid="copilotStatus">${copilot.value} is ready for Launch</li>
            <li id="fuelStatus" data-testid="fuelStatus">Fuel level high enough for launch</li>
            <li id="cargoStatus" data-testid="cargoStatus">Cargo mass low enough for launch</li>
        </ol>
    `;
    
    if (fuelLevel.value<10000){
        list.style.visibilty = "visible";
        launchHeading.style.color = "red";
        launchHeading.innerHTML= "Shuttle not ready for launch";
        fuelId.innerHTML="Fuel level too low for launch";
    }

    else if (cargoMass.value>10000){
        div.style.visibilty = "visible"
        launchHeading.style.color = "red";
        launchHeading.innerHTML= "Shuttle not ready for launch"
        cargoId.innerHTML="Cargo Mass too high for launch"
    
    } else {
        launchHeading.style.color = "green";
        launchHeading.innerHTML= "Shuttle is ready for launch"
    }
}














async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
