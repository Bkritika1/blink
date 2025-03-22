var ourPicksData = {
    sectionTitle: 'Homestays We Love',
    homestays: [
        {
            name: 'Deboragh',
            location: 'Nottingham, United Kingdom',
            price: '1,875',
            currency: '₹',
            imgUrl: 'https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIxZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xMjgwMTA1P2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--761c7cdc3a6858ce0e4b79b5658b680c49decf8b&style=medium'
        },
        {
            name: 'Mari',
            location: 'Barcelona, Spain',
            price: '3,304',
            currency: '₹',
            imgUrl: 'https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIwZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8yOTg0NjQ_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--0cce744b5d968b9ce3065bb3cf5c0445d55ce813&style=medium'
        },
        {
            name: 'Sisy',
            location: 'Barcelona, Spain',
            price: '5,395',
            currency: '₹',
            imgUrl: 'https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIxZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xMjkwNTU1P2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--86022a26977ba816ca9e33f2d46f8fb67e9df34a&style=medium'
        },
        {
            name: 'Tokyo Host Tomoko',
            location: 'Tokyo, Japan',
            price: '2,383',
            currency: '₹',
            imgUrl: 'https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIwZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS81NTE2NTI_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--ea0d91b58c6057902197958b0bb6d6b4d7f881d1&style=medium'
        },
        {
            name: 'Joy',
            location: 'Melbourne, Australia',
            price: '3,021',
            currency: '₹',
            imgUrl: 'https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIvZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS84NzY3Nz9leHBpcmVzX2luBjsAVEkiDHB1cnBvc2UGOwBUSSIMZGVmYXVsdAY7AFRJIg9leHBpcmVzX2F0BjsAVDA%3D--2cec0abbaa0fc576380382dd67f1f7f02447420e&style=medium'
        },
        {
            name: 'Asuncion',
            location: 'ALCORCON, Spain',
            price: '1,526',
            currency: '₹',
            imgUrl: 'https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIwZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS81MTIxMjU_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--60c0bd52720ff807407f4b5ebac41a0dbad71911&style=medium'
        }
    ]
};

var inspireMeData = {
    sectionTitle: "Homestay Inspiration",
    sectionDescription: "Be inspired by our unique mix of homestays around the world. We work with hosts that specialise in student stays, but also plenty that offer short term city breaks and even some that are totally off the beaten track letting you discover the beach, rainforest, countryside and mountains.",
    cartItems: [
        {
            imgUrl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIxZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xMzg5MDMxP2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--d186e6909c5047db5eec1cd60eb223947ad18f7e&style=medium",
            title: "Fancy a City Break?"
        },
        {
            imgUrl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIxZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xMzg5MDMyP2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--db91429d6d57b079d776a90e1af20d5793177605&style=medium",
            title: "Calling all Students"
        },
        {
            imgUrl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIxZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xMzg5MDI5P2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--f2d54a82eae10bcb8a2fb709499edb85a3dedc4e&style=medium",
            title: "Heading on an Adventure?"
        }
    ]
};

var truevalues = [
    { img: "images/trueee.jpg", heading: "True value", para: "We don't just offer great prices and good long term accommodation deals, we provide true value for money by giving you a priceless authentic experience." },
    { img: "https://cdn-icons-png.flaticon.com/128/9202/9202681.png", heading: "Real Homes", para: "We will always offer rooms in real homes with local hosts. Our accommodation is different because you stay with locals and become part of the local community." },
    { img: "/images/sustainable.jpeg", heading: "Sustainable tourism", para: "We promote sustainable local tourism by ensuring you're spending stays within local communities, minimising your environmental impact." }

];



var sections = [
    {
        title: "Don't just visit, live it!",
        description: "Homestay.com connects host families with students and independent travellers looking for accommodation. The Homestay community offers you the opportunity to live with a local and to truly discover your destination. We offer a wide selection of rooms for both long and short term accommodation that offer great value for money, leaving you with more to spend enjoying your trip. HAPPENING RIGHT NOW",
        videoUrl: "https://www.youtube.com/embed/B0uYcxvPf1A"
    }
];

var reviews = [
    {
        image: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSInZ2lkOi8vaHN0L0F2YXRhci8zNDcyMjc_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--7f94f943f9383d6bdb611597196969bf3a854375&style=small",
        title:  "Wir hatten eine sehr schönen, wenn auch recht kurzen Aufenthalt in Dublin bei Tomislav....",
        heartImage:  "https://www.homestay.com/assets/small-review-score-img-0b2a7a69f06c0d32cd00047fc4dd9f2535d9d80cc4832b725f7d4cb0580e33d7.svg",
        name: "Read Anja's review, Dublin ›"
    },
    {
        image :"https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSInZ2lkOi8vaHN0L0F2YXRhci8zMTMyOTU_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--7d4ec0b67eac48968b9cfffbf07be89cefeb5337&style=small",
        title: "Isabel and her family are the best hosts I could have asked for and the nicest people. ...",
        heartImage: "https://www.homestay.com/assets/small-review-score-img-0b2a7a69f06c0d32cd00047fc4dd9f2535d9d80cc4832b725f7d4cb0580e33d7.svg",
        name: "Read Charlie's review, Sevilla  ›"
    },
    {
        image: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSInZ2lkOi8vaHN0L0F2YXRhci8zODE5NDY_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--c4fdf668551e9a14764880631ce14c108d489c62&style=small",
        title: "I will start by saying that this was one of the most wonderful stays I've had with some...",
        heartImage:"https://www.homestay.com/assets/small-review-score-img-0b2a7a69f06c0d32cd00047fc4dd9f2535d9d80cc4832b725f7d4cb0580e33d7.svg",
        name: "Read John's review, égliseneuve Près Billom  ›"
    }
];


var truevalues = [
    {img:""},
    {heading:"True value"},
    {para: "We don't just offer great prices and good long term accommodation deals, we provide true value for money by giving you a priceless authentic experience."},
    {img:""},
    {heading:"True value"},
    {para: "We don't just offer great prices and good long term accommodation deals, we provide true value for money by giving you a priceless authentic experience."}
]