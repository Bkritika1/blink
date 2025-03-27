function pageMain(param) {
    var tpl = `
    <div class="cityContainer">
        <div class="mapContainer" id="mapContainer">
            map appears here....
        </div>
        <div class="citydatacontainer" id="citydatacontainer">
            data here
        </div>
    </div>
    `;
    document.querySelector('main').innerHTML = tpl;
    renderDataofCities(param);
}
 function addheadersection() {
    document.querySelector('header').classList.add('secondary');
    document.querySelector('.stickynav').style.display = "none";
    document.querySelector('.hero').classList.add('secondhero');
    document.querySelector('.hero').style.backgroundImage = "none";
    document.querySelector('.hero .heading').style.display = "none";
}



    

function renderDataofCities(param) {
    var value = param;
    var arrayofHomes = data.cityHomes[value];
    var numberofHomes = arrayofHomes.length;
    // console.log(arrayofHomes);
    // console.log(value);
    // console.log();
    console.log(data.homes["1"]);
    console.log("Reviews of first home: ", data.homes[arrayofHomes[0]].reviews);
    console.log("Distance of first home: ", data.homes[arrayofHomes[0]].distance);
    
    

    var tpl = `
    <div class="headingDiv">
        <div class="subheader">
            <div>List</div>
            <div>Map</div>
        </div>
        <h1>Rooms to Rent and Homestay in ${data.cities[value].name}, India</h1>
        <p>We have found ${numberofHomes} homestays in ${data.cities[value].name}, India for your stay. Renting a room in a homestay in ${data.cities[value].name} offers host family accommodation, ideal for all types of travel including tourists, students, gap year travelers, interns, or city break seekers.</p>
    </div>
    ${arrayofHomes.map((item) => {
        // console.log(item);
        
        return `
        
        <div class="cartesdiv">
            <div id ="backgroundimg" style="background-image: url(${data.homes[item].backgroundimgUrl})">
                <div><img src="${data.homes[item].imgurl}" alt="${data.homes[item].title}"></div>
            </div>
            <div id="carte" class="cartcontentdiv">
                <h3>${data.homes[item].title}</h3>
                <h4>${data.homes[item].address}</h4>
                <div><img src="${data.homes[item].images}" alt="reviews"><p>${data.homes[item].reviews}</p></div>
                <p>Distance from the center of ${data.cities[value].name}: ${data.homes[item].distance}</p>
                <p>From <span>${data.homes[item].price}</span> per night</p>
            </div>
        </div>
        `;
    }).join('')}`;

    document.getElementById('citydatacontainer').innerHTML = tpl;
    initMap(value);
}




function selectCity(city) {

    renderDataofCities(city);
}




function modifyHeroComponent() {
    let heroFormsection = document.querySelector(".hero form");
    let searchButton = heroFormsection.querySelector("button");

    // First button
    let newButton = document.createElement("button");
newButton.textContent = "sorting";
newButton.classList.add("newbuttons", "sortingButton");

let sortingDropdown = document.createElement("div");
sortingDropdown.classList.add("sortingDropdown");
sortingDropdown.style.display = "none"; 

// Sorting options
let reviewsOption = document.createElement("div");
reviewsOption.textContent = "By Reviews";
reviewsOption.classList.add("sortingOption");
reviewsOption.addEventListener("click", function() {
    sortHomes("reviews");
});

let distanceOption = document.createElement("div");
distanceOption.textContent = "By Distance";
distanceOption.classList.add("sortingOption");
distanceOption.addEventListener("click", function() {
    sortHomes("distance");
});

sortingDropdown.appendChild(reviewsOption);
sortingDropdown.appendChild(distanceOption);

newButton.appendChild(sortingDropdown);

heroFormsection.insertBefore(newButton, searchButton.nextSibling);

newButton.addEventListener("mouseenter", function() {
    sortingDropdown.style.display = "block";  
});

newButton.addEventListener("mouseleave", function() {
    sortingDropdown.style.display = "none";  
});

newButton.addEventListener("click", function(event) {
    event.preventDefault();  
    const isDropdownVisible = sortingDropdown.style.display === "block";
    sortingDropdown.style.display = isDropdownVisible ? "none" : "block"; 
});

document.addEventListener("click", function(event) {
    if (!newButton.contains(event.target)) {
        sortingDropdown.style.display = "none"; 
    }
});


}





    // Third button
    // let newButton3 = document.createElement("button");
    // newButton3.textContent = "filter";
    // newButton3.classList.add("newbuttons");
    // heroFormsection.insertBefore(newButton3, searchButton.nextSibling);




function sortHomes(sortBy) {
    let value = document.querySelector("#placeToGO").value;  
    let arrayofHomes = data.cityHomes[value]; 

    if (sortBy === "reviews") {
        arrayofHomes.sort((a, b) => {
            return data.homes[b].reviews - data.homes[a].reviews;  
        });
    } else if (sortBy === "distance") {
        arrayofHomes.sort((a, b) => {
            let distanceA = parseFloat(data.homes[a].distance.replace(' km', ''));
            let distanceB = parseFloat(data.homes[b].distance.replace(' km', ''));
            return distanceA - distanceB;  
        });
    }

    renderDataofCities(value);  
}






