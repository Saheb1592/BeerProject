/*
    Author: Saheb Sidhu
    This is the JS for Intro to Web Development Project.
*/
/*
// variables

const apiUrl = "https://api.punkapi.com/v2/beers/random";
const button = document.getElementById("button");
const rightPanel = document.getElementById("panel-right");

// show data after pressing the button
document.getElementById("button").addEventListener('click', getBeer);

// fetch the data
async function getBeer (){
   return fetch(apiUrl)
   .then(response => response.json())
   .then(data => {
    // to clear existing data in div
    rightPanel.innerHTML = '';
    // for loop to display on the page
    for(const item of data) {
        const beerDiv = document.createElement("div");
        beerDiv.style.height = "40px";
        const headName = document.createElement("h3");
        const paraDesc = document.createElement("p");
        const image = document.createElement('img');
        image.style.height = "400px";
        image.style.width = "200px";
        const nameElement = item.name;
        const descElement = item.description;
        image.src = item.image_url;
        headName.append(nameElement);
        paraDesc.append(descElement);
        beerDiv.append(headName);
        beerDiv.append(paraDesc)
        beerDiv.append(image);
        rightPanel.append(beerDiv);
        rightPanel.style.color = "white";
    }
   });
}
*/

// variables and api key
import apiKey from "./apikey.js";
const rightPanel = document.getElementById("panel-right");
const button = document.getElementById("button");
const apiUrl = "https://api.spoonacular.com/mealplanner/generate";

// How the fetched data should load
button.addEventListener("click", getMealPlan);

//fetch data
async function getMealPlan() {
    return fetch(apiUrl, {
        method: "GET",
        headers:{
            "Content-Type": "application/json",
            "x-api-key": apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        rightPanel.innerHTML = "" 
        for (const item of data) {
            
        }
    })
}