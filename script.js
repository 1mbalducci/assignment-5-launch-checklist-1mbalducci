// Write your JavaScript code here!

// const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {
   console.log("peanuts0");
   let form = document.querySelector("form");
      form.addEventListener("submit", event => {
		  event.preventDefault();
         let pilotNameInput = document.querySelector("input[name=pilotName]");
         let copilotNameInput = document.querySelector("input[name=copilotName]");
         let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
         let cargoMassInput = document.querySelector("input[name=cargoMass]");
         let list= document.getElementById("faultyItems")
         console.log("peanuts1");
		
         if (validateInput(pilotNameInput.value) === "Empty") {
            alert("All fields are required!");
         } 
         if (validateInput(copilotNameInput.value) === "Empty" ){
         alert("All fields are required!");
         }
         if (validateInput(fuelLevelInput.value) === "Empty" ){
         alert("All fields are required!");
         }
         if (validateInput(cargoMassInput.value) === "Empty" ) {
            alert("All fields are required!");
        } else {
            formSubmission(document,list, pilotNameInput,copilotNameInput,fuelLevelInput, cargoMassInput);
		
         }
		
      })
});


   // let listedPlanets;
   // // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   // let listedPlanetsResponse;
   // listedPlanetsResponse.then(function (result) {
   //     listedPlanets = result;
   //     console.log(listedPlanets);
   // }).then(function () {
   //     console.log(listedPlanets);
   //     // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
 
   // })  
// })