/*
    Author: Saheb Sidhu
    This is the JS for Intro to Web Development Project.
*/

// variables

const apiUrl = "https://api.punkapi.com/v2/beers/random";
const button = document.getElementById("beerButton");
const rightPanel = document.getElementById("panel-right");

// show data after pressing the button
button.addEventListener('click', getBeer);

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
        beerDiv.style.height = "90px";
        beerDiv.style.width = "70%";
        beerDiv.style.float = "left";
        const headName = document.createElement("h1");
        const tagLine = document.createElement("h3");
        const paraDesc = document.createElement("p");
        const beerImgDiv = document.createElement("div");
        beerImgDiv.style.float = "right";
        beerImgDiv.style.marginRight = "70px";
        beerImgDiv.style.marginTop = "50px";
        const image = document.createElement('img');
        image.style.height = "400px";
        image.style.width = "200px";
        const foodPair = document.createElement("p");
        foodPair.textContent = "Try it with: ";
        const nameElement = item.name;
        const descElement = item.description;
        const tagLineElement = item.tagline;
        const foodPairElement = item.food_pairing;
        image.src = item.image_url;
        tagLine.append(tagLineElement);
        foodPair.append(foodPairElement);
        headName.append(nameElement);
        paraDesc.append(descElement);
        beerDiv.append(headName);
        beerDiv.append(tagLine);
        beerDiv.append(paraDesc);
        beerDiv.append(foodPair);
        beerImgDiv.append(image);
        rightPanel.append(beerDiv);
        rightPanel.append(beerImgDiv);
        rightPanel.style.color = "white";
    }
   });
}
