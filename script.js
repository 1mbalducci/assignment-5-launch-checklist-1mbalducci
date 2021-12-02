// Write your JavaScript code here!

const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let form = document.querySelector("form");
      form.addEventListener("submit", function(event) {
         let pilotNameInput = document.querySelector("pilotName");
         let copilotNameInput = document.querySelector("copilotName");
         let fuelLevelInput = document.querySelector("fuelLevel");
         let cargoMassInput = document.querySelector("cargoMass");
         console.log(pilotNameInput);
         if (pilotNameInput.value == "" || copilotNameInput.value == "" || fuelLevelInput.value == "" || cargoMassInput.value == "" ) {
            console.log("peanuts!")
            // alert("All fields are required!");
            event.preventDefault();}
         else {
            formSubmission(document,pilotNameInput,copilotNameInput,fuelLevelInput, cargoMassInput);
         }
      });
   })
   
});