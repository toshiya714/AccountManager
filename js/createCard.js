const cardArea = document.querySelector(".cardArea");

for (i = 0; i < 10; i++){
    const cardItem = document.createElement("div");
    const cardFront = document.createElement("div");
    const cardBack = document.createElement("div");

    cardItem.classList.add('card-item');
    cardItem.setAttribute('onclick', 'flagClass(this)');
    cardFront.classList.add('card-front');
    cardBack.classList.add('card-back');
    
    cardItem.appendChild(cardFront);
    cardItem.appendChild(cardBack);
    cardArea.appendChild(cardItem);
}