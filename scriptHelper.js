// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const divDestination= document.getElementById("missionTarget")
   
    // Here is the HTML formatting for our mission target div.
   divDestination.innerHTML=`
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name:${name} </li>
                    <li>Diameter:${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons:${moons} </li>
                </ol>
                <img src="${imageUrl}">`

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

    div.querySelector("#pilotStatus").innerHTML = `Pilot ${pilot.value} is ready for launch`;
    div.querySelector("#copilotStatus").innerHTML = `Pilot ${copilot.value} is ready for launch`;

    let issueDetected=false

    if (fuelLevel.value<10000){
        list.style.visibility = "visible";
        launchHeading.style.color = "red";
        launchHeading.innerHTML= "Shuttle not ready for launch";
        fuelId.innerHTML="Fuel level too low for launch";
        issueDetected=true
    }

    if (cargoMass.value>10000){
        div.style.visibility = "visible"
        launchHeading.style.color = "red";
        launchHeading.innerHTML= "Shuttle not ready for launch"
        cargoId.innerHTML="Cargo Mass too high for launch"
        issueDetected= true
    
    } if (issueDetected===false){
        launchHeading.style.color = "green";
        launchHeading.innerHTML= "Shuttle is ready for launch"
    }
}



async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        response.json()
        });

    return planetsReturned;
}

// function pickPlanet(planets) {
//    for(let i=0; i<6; i++){
//     let maxValue=6  
//     let planetIndex= Math.floor(Math.random()*maxValue);
//       return planets[planetIndex];
//    } 
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
