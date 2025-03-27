
    function toggleMobileNav() {
      const mobileNav = document.getElementById('mobileNav');
      mobileNav.style.display = mobileNav.style.display === 'block' ? 'none' : 'block';
    }

    
    var sectionContainer = document.getElementById('dyanamicsection-1');

    function renderSections1() {
        return sections.map(section => {
            return `
                <div class="section1">
                    <h2>${section.title}</h2>
                    <p class="paragraph">${section.description}</p>
                    <div class="videoh">
                        <div class="video">
                            <iframe width="560" height="315" src="${section.videoUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    sectionContainer.innerHTML = renderSections1();

    var reviewContainer = document.getElementById('dyanamicsection-2');

    function renderReview() {
        return reviews.map(review => {
            return `
            <div class="section2">
                <div class="review-content">
                    <div class="personimg">
                        <img src="${review.image}" alt="person image" />
                    </div>
                    <div>
                        <p>${review.title}</p>
                        <img src="${review.heartImage}" alt="heart image"/>
                        <p>${review.name}</p>
                    </div>
                </div>  
            </div>
            `;
        }).join('');
    }

    reviewContainer.innerHTML = renderReview();
    var monatise = document.getElementById('dyanamicsection-3')
    function renderMonatise(){
        var tpl = `
        <div class="mainmonatise">
            <div class="mainn">
            <div class="mainnn">
               <h3>Monatise your spare room</h3> 
               <p>Earn extra income renting out your spare room to international students, tourists and professionals.</p>
               <button> List your property here</button>
            </div>
            <div class="monatiseimg"></div>
            </div>
        </div>
        
        `
        monatise.innerHTML = tpl;
    }
renderMonatise();


function rendertruevalue() {
    return truevalues.map(truevalue => {
        return `
            <div class="valuecontain">
                <div class="containvalue">
                    <div class="con"><img src="${truevalue.img}" alt="Image" />
                          <h3>${truevalue.heading}</h3>
                          </div>
                    
                         <p>${truevalue.para}</p>
                
                </div> 
            </div>`;
    }).join('');  
}

var truevalueSection = document.getElementById('dyanamicsection-4');
truevalueSection.innerHTML = rendertruevalue();
    


function renderInspirationSection() {
        return inspireMeData.cartItems.map(item => {
            return `
               
                    <div class="containvalue">
                        <div class="conn">
                            <img src="${item.imgUrl}" alt="Image" />
                            <h3>${item.title}</h3>
                        </div>
                    </div>
                `;
        }).join('');
    }

    var truevalueSection = document.getElementById('dyanamicsection-5');
    truevalueSection.innerHTML = `
        <h1>${inspireMeData.sectionTitle}</h1>
        <p>${inspireMeData.sectionDescription}</p>
        <div class="cart-items-container">
            ${renderInspirationSection()}
        </div>
    `;


function renderHomestay() {
    var homestayData = ourPicksData;
    
    var sectionTitleHTML = `<h1>${homestayData.sectionTitle}</h1>`;
    
    var homestayCardsHTML = `<div class="homestay-cards-container">` + 
        homestayData.homestays.map(homestay => {
            return `
           
                <div class="homestay-card">
                    <div class="homestay-image">
                        <img src="${homestay.imgUrl}" alt="${homestay.name}" />
                    </div>
                    <div class="homestay-details">
                        <h3>${homestay.name}</h3>
                        <p class=location>${homestay.location}</p>
                        <button class="price"> Book For Now${homestay.currency} ${homestay.price} </button>
                    </div>
                </div>
      
            `;
        }).join('') + `</div>`;
    
    return sectionTitleHTML + homestayCardsHTML;
}

document.getElementById('homestayContainer').innerHTML = renderHomestay();

function optionsRender(){
    let tpl = ``;
    for (let key in data.cities) {
        let city = data.cities[key];
        tpl += `<option value="${key}" ${key === "1" ? "selected" : ""}>${city.name}</option>`;
    }
    document.querySelector("#placeToGO").innerHTML = tpl;
}
optionsRender();

document.querySelector("#myButton").addEventListener("click", function(event) {
    event.preventDefault();     
    console.log("Button clicked...");
    var selectedCity = document.querySelector("#placeToGO").value; 
    addheadersection();
    modifyHeroComponent(); 
    pageMain(selectedCity); 
});



