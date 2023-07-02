/*
    Author: Saheb Sidhu
    This is the JS for Intro to Web Development Project.
*/

/*
    First feature
*/

// variables
const randomBeerApiUrl = "https://api.punkapi.com/v2/beers/random";
const button = document.getElementById("beerButton");
const rightPanel = document.getElementById("panel-right");

// show data after pressing the button
button.addEventListener('click', getBeer);

// fetch the data
async function getBeer (){
   return fetch(randomBeerApiUrl)
   .then(response => response.json())
   .then(beerData => {

    // to clear existing data in div
    rightPanel.innerHTML = '';

    // for loop to display on the page
    for(const item of beerData) {

        // create elements that display the data
        const beerDiv1 = document.createElement("div");
            beerDiv1.style.height = "90px";
            beerDiv1.style.width = "70%";
            beerDiv1.style.float = "left";
        const headName1 = document.createElement("h1");
        const tagLine1 = document.createElement("h3");
        const paraDesc1 = document.createElement("p");
        const beerImgDiv1 = document.createElement("div");
            beerImgDiv1.style.float = "right";
            beerImgDiv1.style.marginRight = "70px";
            beerImgDiv1.style.marginTop = "50px";
        const image1 = document.createElement('img');
            image1.style.height = "450px";
            image1.style.width = "200px";
        const foodPair1 = document.createElement("p");
            foodPair1.textContent = "Try it with: ";
            foodPair1.style.marginTop = "60px";
        
        // api data as variable
        const nameElement1 = item.name;
        const descElement1 = item.description;
        const tagLineElement1 = item.tagline;
        const foodPairElement1 = item.food_pairing;

        // append the elements to right panel
        image1.src = item.image_url;
        tagLine1.append(tagLineElement1);
        foodPair1.append(foodPairElement1);
        headName1.append(nameElement1);
        paraDesc1.append(descElement1);
        beerDiv1.append(headName1);
        beerDiv1.append(tagLine1);
        beerDiv1.append(paraDesc1);
        beerDiv1.append(foodPair1);
        beerImgDiv1.append(image1);
        rightPanel.append(beerDiv1);
        rightPanel.append(beerImgDiv1);
        rightPanel.style.color = "white";
    }
   });
}

/*
    Second feature
*/

// variables
const beerListApiUrl = "https://api.punkapi.com/v2/beers";
const beerList = document.getElementById("beerOption");
const defaultOption = document.createElement("option");
defaultOption.textContent = "Select one from 25!";
beerList.appendChild(defaultOption);

// data displayed as soon as page loads
window.addEventListener("load", () => {
    getBeerList();
    beerList.addEventListener("change", displaySelectedBeer);
});

// fetch the data
async function getBeerList (){
    return fetch(beerListApiUrl)
    .then(res => res.json())

    // display data in select list
    .then(beerListData => {
        for(const listItem of beerListData) {

            // create a list option for each data
            const beerOption = document.createElement("option");

            // api data as variable
            const beerNameElement = listItem.name;
            beerOption.setAttribute("beerImage", listItem.image_url);
            beerOption.setAttribute("beerTagLine", listItem.tagline);
            beerOption.setAttribute("beerDescription", listItem.description);

            // append api data with list option
            beerOption.append(beerNameElement);
            beerList.append(beerOption);
        }
    })
}

// display data of selected option
function displaySelectedBeer() {

    // variable that indicates selection of an option
    const selectedOption = beerList.options[beerList.selectedIndex];

    // to clear existing data
    rightPanel.innerHTML = " ";

    // variables where selected option information will be displayed
    const beerDiv2 = document.createElement("div");
        beerDiv2.style.height = "90px";
        beerDiv2.style.width = "70%";
        beerDiv2.style.float = "left";
    const headName2 = document.createElement("h1");
    const tagLine2 = document.createElement("h3");
    const paraDesc2 = document.createElement("p");
    const beerImgDiv2 = document.createElement("div");
        beerImgDiv2.style.float = "right";
        beerImgDiv2.style.marginRight = "70px";
        beerImgDiv2.style.marginTop = "50px";
    const image2 = document.createElement('img');
        image2.style.height = "400px";
        image2.style.width = "200px";


    // api data displayed on the created variables
    headName2.textContent = `${selectedOption.text}`;
    image2.src = selectedOption.getAttribute("beerImage");
    tagLine2.textContent = selectedOption.getAttribute("beerTagLine");
    paraDesc2.textContent = selectedOption.getAttribute("beerDescription");

    // Append the variables to right panel
    beerDiv2.append(headName2);
    beerDiv2.append(tagLine2);
    beerDiv2.append(paraDesc2);
    beerImgDiv2.append(image2);
    rightPanel.append(beerImgDiv2);
    rightPanel.append(beerDiv2);
    rightPanel.style.color = "white";
}

/*
    Third feature
*/

// variables
const divTagLiner = document.getElementById("tagLiner");

// page loads and then every 3 seconds the tagline changes
window.addEventListener("load", () => {
    setInterval(tagLiners, 3000);
});

// fetch api
async function tagLiners (){
    return fetch(randomBeerApiUrl)
    .then(res => res.json())

    // using tagliners as quotes
    .then(randomTagLiner => {
        divTagLiner.innerHTML = "";
        for(const quote of randomTagLiner) {
            const quoter = document.createElement("h3");
            const quoteElement = quote.tagline;

            // connecting js created element to css file
            quoter.classList.add("quoter");

            // appending the variables
            quoter.append(quoteElement);
            divTagLiner.append(quoter);
        }
    })
}