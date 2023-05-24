//cards array
const cards=[
    {
        id: 0,
        image: "./images/cards/aircraft.png",
        title: "flight booking",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem."
    },
    {
        id: 1,
        image: "./images/cards/pool.png",
        title: "hotel & resort booking",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem."
    },
    {
        id: 2,
        image: "./images/cards/beach.png",
        title: "family trip planner",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem."
    },
    {
        id: 3,
        image: "./images/cards/cruise.png",
        title: "cruise tour",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem."
    },
    {
        id: 4,
        image: "./images/cards/camp.png",
        title: "fire camp",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem."
    },
    {
        id: 5,
        image: "./images/cards/office.png",
        title: "corporate holidays",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem."
    }
]

const serviceCards = document.querySelector('.service-cards');
//cards rendering loop
cards.forEach(card => {
    let cardDiv = document.createElement('div')
    cardDiv.classList.add('card')
    cardDiv.setAttribute('data-id', card.id);
    cardDiv.setAttribute('data-image', card.image); 
    cardDiv.setAttribute('data-title', card.title);
    cardDiv.setAttribute('data-text', card.text);

    let img = document.createElement('img');
    img.src = card.image;
    img.classList.add('card-img')
    cardDiv.appendChild(img);

    let title = document.createElement('h1');
    title.textContent = card.title;
    title.classList.add('card-title')
    cardDiv.appendChild(title);

    let text = document.createElement('p');
    text.textContent = card.text;
    text.classList.add('card-text')
    cardDiv.appendChild(text);

    serviceCards.appendChild(cardDiv);
});


const cardDivs = document.querySelectorAll('.card');
const modal = document.querySelector('.modal-window');
const modalContent = document.querySelector('.modal-content')
const close = document.querySelector('.close');

//modal window openning
let showCard = function(){
    let cardId = this.getAttribute('data-id'); 
    let cardImage = this.getAttribute('data-image'); 
    let cardTitle = this.getAttribute('data-title'); 
    let cardText= this.getAttribute('data-text');
    
    modal.style.display = "block";
    modalContent.innerHTML = `<span class="close">&times;</span>
                            <img src="${cardImage}" class="modal-img">
                            <h1>${cardTitle}</h1><p>${cardText}</p>`;

    //modal window closing
    const close = document.querySelector('.close');
    close.addEventListener('click', function() {
        modal.style.display = "none";
    });
};

//applying click event on each card
cardDivs.forEach(card => {
    card.addEventListener("click",showCard);
});

//applying click event outside of the modal-content
window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
}
};


//video playing in video-section

const playerOverlay = document.querySelector('.player-overlay');
const player = document.querySelector('.frame');
const playButton = document.querySelector('.play-button');

playButton.addEventListener('click', function(){
    playerOverlay.style.display = "none";
    player.src += "?autoplay=1";
    console.log("clicked play");
})


//generate offers

const offersArr=[
    {
        id:0,
        img:"./images/offers/santorini.png",
        overlay: "hooneymoon",
        price: "$299/person",
        name: "blue beauty <span>of</span> greece",
        days: "5 days / 6 night"
    },
    {
        id:1,
        img:"./images/offers/phuket.png",
        overlay: "holiday",
        price: "$178/person",
        name: "nature <span>of</span> phuket",
        days: "3 days / 4 night"
    },
    {
        id:2,
        img:"./images/offers/paris.png",
        overlay: "holiday",
        price: "$1111/person",
        name: "world tour <span>of</span> paris",
        days: "7 days / 8 night"
    }
]


const offerCards = document.querySelector(".offer-cards");

offersArr.forEach(card => {
    let offerCard = document.createElement("div");
    offerCard.classList.add("offerCard");
    offerCard.setAttribute('data-id', card.id);
    offerCard.setAttribute('data-image', card.img); 
    offerCard.setAttribute('data-price', card.price);
    offerCard.setAttribute('data-name', card.name);
    offerCard.setAttribute('data-days', card.days);
    offerCard.setAttribute('data-overlay', card.overlay);

    let overlay = document.createElement('div');
    overlay.classList.add("offerCard-overlay");
    overlay.textContent = card.overlay;
    offerCard.appendChild(overlay);

    let image = document.createElement('img');
    image.classList.add("offerCard-img");
    image.src = card.img;
    offerCard.appendChild(image);

    let price = document.createElement('p');
    price.classList.add("offer-price");
    price.textContent = card.price;
    offerCard.appendChild(price);

    let tourName = document.createElement('h1');
    tourName.classList.add("tour-name");
    tourName.innerHTML = card.name;
    offerCard.appendChild(tourName);

    let tourDays = document.createElement('p');
    tourDays.classList.add("tour-days");
    tourDays.textContent = card.days;
    offerCard.appendChild(tourDays);

    offerCards.appendChild(offerCard);
});


//offer modal window
const offerCard = document.querySelectorAll('.offerCard');
const offerModal = document.querySelector('.offer-modal');
const offerModalContent = document.querySelector('.offer-modal-content');
const closeModal = document.querySelector('.close-modal');

let showOfferModal = function(){
    let cardId = this.getAttribute('data-id'); 
    let cardImage = this.getAttribute('data-image'); 
    let cardName = this.getAttribute('data-name'); 
    let cardPrice= this.getAttribute('data-price');
    let cardDays= this.getAttribute('data-days');
    
    offerModal.style.display = "block";
    offerModalContent.innerHTML = `<span class="close-modal">&times;</span>
                            <img src="${cardImage}" class="modal-img">
                            <h1>${cardName}</h1><p>${cardPrice}</p><p>${cardDays}</p>`;

    //modal window closing
    const closeOfModal = document.querySelector('.close-modal');
    closeOfModal.addEventListener('click', function() {
        offerModal.style.display = "none";
    });
}

offerCard.forEach(card => {
    card.addEventListener("click", showOfferModal);
})

window.onclick = function(event) {
    if (event.target == offerModal) {
    offerModal.style.display = "none";
}
};


//burger bar:
function toggleNav() {
    var nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}