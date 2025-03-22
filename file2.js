function addheadersection() {
    document.querySelector('header').classList.add('secondary');
    document.querySelector('.stickynav').style.display = "none";
    document.querySelector('.hero').classList.add('secondhero');
    document.querySelector('.hero').style.backgroundImage = "none";
    document.querySelector('.hero .heading').style.display = "none"; 
    const mainContent = document.querySelector('main');
    mainContent.innerHTML = ''; 
    





    var rajasthanData = {
        sectionTitle: "Rooms to Rent and Homestays in Jaipur, Rajasthan, India",
        sectionDescription: "We have found 81 homestays in Jaipur, Rajasthan, India for your stay. Renting a room with Homestay in Jaipur, Rajasthan, India offers host family accommodation, ideal for all types of travel including tourists, students, gap year, interns or city break weekenders.",
        cartItems: [
            {
                backgroundimgUrl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIwZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS80ODcyODg_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--dcd46168aa00354b004f1112379670f1d6951e51&style=medium",
                imgurl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSImZ2lkOi8vaHN0L0F2YXRhci83MTYxNT9leHBpcmVzX2luBjsAVEkiDHB1cnBvc2UGOwBUSSIMZGVmYXVsdAY7AFRJIg9leHBpcmVzX2F0BjsAVDA%3D--bc61c0f0fdd6fe9160799cb949e340b9749651e7&style=small",
                title: "Kalpana Yoga Homestay",
                address: "KALPANA IN AJMER ROAD,JAIPUR",
                images: "https://www.homestay.com/assets/small-review-score-img-0b2a7a69f06c0d32cd00047fc4dd9f2535d9d80cc4832b725f7d4cb0580e33d7.svg",
                reviews: "19 Reviews",
                distance: "Distance from centre of Jaipur: 1.9km",
                price: "1,933",
            },
            {
                backgroundimgUrl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIwZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS81Njk4MTY_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--0a8cb4845d11f214fd233005690435507d3c6592&style=medium",
                imgurl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSInZ2lkOi8vaHN0L0F2YXRhci8xNDc1MzI_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--1759bfa24813d05388cb5b139ab6edefa6ab74f8&style=small",
                title: "Homestay Near Jaipur airport",
                address: "MANISHA IN INTERNATIONAL AIRPORT,JAIPUR",
                images: "https://www.homestay.com/assets/small-review-score-img-0b2a7a69f06c0d32cd00047fc4dd9f2535d9d80cc4832b725f7d4cb0580e33d7.svg",
                reviews: "9 Reviews",
                distance: "Distance from centre of Jaipur: 9.2km",
                price: "1,400",
            },
            {
                backgroundimgUrl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIwZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS84NzAwNTc_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--3ee8cd47968b18e0e2892f1e360a78cf3658eb96&style=medium",
                imgurl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSInZ2lkOi8vaHN0L0F2YXRhci8yMDI0NDg_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--e9f56b53b826a8156a295b7e47bf58b6a47b6342&style=small",
                title: "Palm Villa",
                address: "HIMANSHU IN BAPU NAGAR,JAIPUR",
                images: "https://www.homestay.com/assets/small-review-score-img-0b2a7a69f06c0d32cd00047fc4dd9f2535d9d80cc4832b725f7d4cb0580e33d7.svg",
                reviews: "3 Reviews",
                distance: "Distance from center of Jaipur:2.6km",
                price: "700",
            },
            {
                backgroundimgUrl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIwZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS85NDI2NTg_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--23d568c1b4147f5dc0e661b62d8ae9a3a7996245&style=medium",
                imgurl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSInZ2lkOi8vaHN0L0F2YXRhci8yMjExNTQ_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--e7bd5f061e4fde6e8f2e9370624789e935fbc085&style=small",
                title: "Neetu's Home Stay",
                address: "MAHENDRA IN BANIPARK,JAIPUR",
                images: "https://www.homestay.com/assets/small-review-score-img-0b2a7a69f06c0d32cd00047fc4dd9f2535d9d80cc4832b725f7d4cb0580e33d7.svg",
                reviews: "2 Reviews",
                distance: "Distance form center of Jaipur: 3.3km",
                price: "1,026",
            },
            {
                backgroundimgUrl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIxZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xMTgxODk5P2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--1f1b89f69222e0f059ab1fc295d1f9353841eae9&style=medium",
                imgurl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSInZ2lkOi8vaHN0L0F2YXRhci8yNDk0MzI_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--ce2079715b36d8b45bea95d6e23a076ba27a5994&style=small",
                title: "Bunglow80",
                address: "SHALINI IN TILAK NAGAR,JAIPUR",
                images: "https://www.homestay.com/assets/small-review-score-img-0b2a7a69f06c0d32cd00047fc4dd9f2535d9d80cc4832b725f7d4cb0580e33d7.svg",
                reviews: "1 Review",
                distance: "Distance from center of Jaipur: 4.1km",
                price: "999",
            },
    
    
            {
                backgroundimgUrl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIwZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xOTgwNzE_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--8189f4b77e4ca3961ed1e5fb6598e483abc38a05&style=listing",
                imgurl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSI-Z2lkOi8vaHN0L1Byb3BlcnR5Q29udGFjdFByb2ZpbGVQaWN0dXJlLzIwMTExNj9leHBpcmVzX2luBjsAVEkiDHB1cnBvc2UGOwBUSSIMZGVmYXVsdAY7AFRJIg9leHBpcmVzX2F0BjsAVDA%3D--c2178b587e04ac2016dd2711ee045e5c2a970cb5&style=thumb",
                title: "Happy Caring hosts Jaipur",
                address: "SHARMILS IN VAISHALI NAGAR, JAIPUR",
                images: "https://www.homestay.com/assets/small-review-score-img-0b2a7a69f06c0d32cd00047fc4dd9f2535d9d80cc4832b725f7d4cb0580e33d7.svg",
                reviews: "0 Reviews",
                distance: "Distance from centre of Jaipur: 5.0km",
                price: "2,000",
            },
            {
                backgroundimgUrl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIxZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xMTYyMDMxP2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--38c3b692cc7a65454b72bdcbf749f267cc46c23c&style=listing",
                imgurl: "http://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSInZ2lkOi8vaHN0L0F2YXRhci8yOTI4OTE_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--3d075ed0613ec1533b1ea3576e93c61c65da4677&style=small",
                title: "Come for your best time in Jaipur",
                address: "ADARSH IN JAGATPURA,JAIPUR",
                images: "https://www.homestay.com/assets/small-review-score-img-0b2a7a69f06c0d32cd00047fc4dd9f2535d9d80cc4832b725f7d4cb0580e33d7.svg",
                reviews: "0 Reviews",
                distance: "Distance from centre of Jaipur: 9.14.7km",
                price: "500",
            },
            {
                backgroundimgUrl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIwZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS82MTU1Mjk_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--dec42531b4a81c899885be6691c883c7c3e5fb09&style=listing",
                imgurl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSInZ2lkOi8vaHN0L0F2YXRhci8xMjM5Nzg_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--4d87db9aa1d90de1912f58ef1643700617db115f&style=small",
                title: "K.D House",
                address: "KULDEEP IN KALWAR ROAD, JHOTWARA,JAIPUR",
                images: "https://www.homestay.com/assets/small-review-score-img-0b2a7a69f06c0d32cd00047fc4dd9f2535d9d80cc4832b725f7d4cb0580e33d7.svg",
                reviews: "0 Reviews",
                distance: "Distance from center of Jaipur: 7.0km",
                price: "720",
            },
            {
                backgroundimgUrl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIwZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS82MTQxNDA_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--5de77af9edec5233d3631a5f3522fc0ba1126cff&style=listing",
                imgurl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSInZ2lkOi8vaHN0L0F2YXRhci8yMjExNTQ_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--e7bd5f061e4fde6e8f2e9370624789e935fbc085&style=small",
                title: "Shanti villa",
                address: "DR. RANU IN PARK FACING OPP NRI COLONY, JAIPUR",
                images: "https://www.homestay.com/assets/small-review-score-img-0b2a7a69f06c0d32cd00047fc4dd9f2535d9d80cc4832b725f7d4cb0580e33d7.svg",
                reviews: "0 Reviews",
                distance: "Distance form center of Jaipur: 4.2km",
                price: "1,333",
            },
            {
                backgroundimgUrl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIxZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xMjQzNjEzP2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--b5e2d5122d65915459e5af9fc2348c1e61fa808a&style=listing",
                imgurl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSInZ2lkOi8vaHN0L0F2YXRhci8yOTM0NjA_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--80083a40ec6a0da7fe14c9c49a6b28cf4d253ea9&style=small",
                title: "Pushpanjali-the boutique stay",
                address: "MAMTA IN AJMER ROAD,JAIPUR",
                images: "https://www.homestay.com/assets/small-review-score-img-0b2a7a69f06c0d32cd00047fc4dd9f2535d9d80cc4832b725f7d4cb0580e33d7.svg",
                reviews: "0 Review",
                distance: "Distance from center of Jaipur: 4.2km",
                price: "2000",
            },
    
            {
                backgroundimgUrl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIxZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xMDk2NjE1P2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--a83d2ef67e2c631ab77b2ca2fc743bc02313b58f&style=medium",
                imgurl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSInZ2lkOi8vaHN0L0F2YXRhci8yNTc1Njk_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--6f7c1317bc82e4a50b394a8fcfa35babdb84ca3e&style=small",
                title: "Lovely room in a historic bungalow!",
                address: "Hari in C-Scheme, Jaipur",
                images: "https://www.homestay.com/assets/small-review-score-img-0b2a7a69f06c0d32cd00047fc4dd9f2535d9d80cc4832b725f7d4cb0580e33d7.svg",
                reviews: "19 Reviews",
                distance: "Distance from centre of Jaipur: 1.9km",
                price: "1,000",
            },
            {
                backgroundimgUrl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIxZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xMzg5ODk3P2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--5486a174563a99d8df7f0d638caa1cad0ec9a451&style=medium",
                imgurl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSInZ2lkOi8vaHN0L0F2YXRhci8zNDMwNDI_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--e2a03e0d9d650e509fad03c8e11ee52c24b75ef2&style=small",
                title: "Town of old forts and temples ",
                address: "Manoj in Amer, Jaipur",
                images: "https://www.homestay.com/assets/small-review-score-img-0b2a7a69f06c0d32cd00047fc4dd9f2535d9d80cc4832b725f7d4cb0580e33d7.svg",
                reviews: "9 Reviews",
                distance: "Distance from centre of Jaipur: 12.4km",
                price: "700",
            },
            {
                backgroundimgUrl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIxZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xMzMyMDczP2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--93040b9aa32485b9c571589f473dbdc9f0196410&style=medium",
                imgurl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSInZ2lkOi8vaHN0L0F2YXRhci8zMTc4NTk_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--108815849a65d55bcf84a6433d21caef6da8c2fb&style=small",
                title: "Spacious 2-BHK with Big Terrace",
                address: "UTKARSH in Near Dev nagar, Jaipur",
                images: "https://www.homestay.com/assets/small-review-score-img-0b2a7a69f06c0d32cd00047fc4dd9f2535d9d80cc4832b725f7d4cb0580e33d7.svg",
                reviews: "3 Reviews",
                distance: "Distance from center of Jaipur:4.2km",
                price: "600",
            },
            {
                backgroundimgUrl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIxZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xMzE0MDIxP2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--1e6df641236ad2f0f1be2f0941c4ad088999f3dd&style=medium",
                imgurl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSInZ2lkOi8vaHN0L0F2YXRhci8zMTEwMjM_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--3c1ed69e5d1b3a41334a405769deaa73a180aad6&style=small",
                title: "Homestay at home",
                address: "TEENA IN BANI PARK,JAIPUR",
                images: "https://www.homestay.com/assets/small-review-score-img-0b2a7a69f06c0d32cd00047fc4dd9f2535d9d80cc4832b725f7d4cb0580e33d7.svg",
                reviews: "2 Reviews",
                distance: "Distance form center of Jaipur: 3.3km",
                price: "833",
            },
            {
                backgroundimgUrl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIxZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xMTk1MjkzP2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--6ba0ebbfde0bd632eca994cb7f2327135907bd01&style=medium",
                imgurl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSInZ2lkOi8vaHN0L0F2YXRhci8yODIwMjI_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--8c3c423b29c5fa1257d6762398ee17e5224d0d18&style=small",
                title: "Srishti Homestay",
                address: "HARSHVARDHAN IN VAISHALI NAGAR,JAIPUR",
                images: "https://www.homestay.com/assets/small-review-score-img-0b2a7a69f06c0d32cd00047fc4dd9f2535d9d80cc4832b725f7d4cb0580e33d7.svg",
                reviews: "1 Review",
                distance: "Distance from center of Jaipur: 5.4km",
                price: "1000",
            },
    
    
        ]
    };
    const newContent = `
    <div id="cont">
    <div id="mapp">A map appear here</div>
<div class="ccnt">
       <div class="conttnt">
        <h2>${rajasthanData.sectionTitle}</h2>
        <p>${rajasthanData.sectionDescription}</p>
    </div>
    <div class="Carts">
        ${rajasthanData.cartItems.map(item => `
          <div class="cartes">
        <div class="cart-items" style="background-image: url(${item.backgroundimgUrl}) ;">
        <img src="${item.imgurl}">
        </div>
            <div class="title-containers">
                <h3 class="name">${item.title}</h3>
               <h4 class="address">${item.address}</h4>

               <div class="review">
               <img src="${item.images}">
               <p>${item.reviews}</p>
               </div>
                <p class="distance">${item.distance}<p>
                <p class="price">₹${item.price} PER NIGHT</p>
            </div>
            </div>
        `).join('')}
    </div>
    <div>
</div>
    `;
    
    mainContent.innerHTML = newContent;
    
    console.log("Main content updated!");
    
  
}
