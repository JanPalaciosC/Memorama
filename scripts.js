
//Generate the cards on html code
function cardPrototype(dataFramework, src) {
    let container = document.createElement("div");
    let imgBack = document.createElement("img");
    let imgFront = document.createElement("img");
    // Contenedor
    container.setAttribute("class", "memory-card");
    container.setAttribute("data-framework", dataFramework);
    //Back
    imgBack.setAttribute("src", "reverso_1.png");
    imgBack.setAttribute("class", "back-face");
    //Front
    imgFront.setAttribute("src", src);
    imgFront.setAttribute("class", "front-face");
    //Insert
    container.appendChild(imgFront);
    container.appendChild(imgBack);
    return container;
}

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
// Game init
const cardContainer = document.getElementById("card-container");
var cardList = [ //EasyCards
    {
        name: "boro",
        img: "Boro.png"
    },
    {
        name: "boro",
        img: "Boro.png"
    },
    {
        name: "silicio",
        img: "Silicio.png"
    },
    {
        name: "silicio",
        img: "Silicio.png"
    },
    {
        name: "aluminio",
        img: "Aluminio.png"
    },
    {
        name: "aluminio",
        img: "Aluminio.png"
    },
    {
        name: "neon",
        img: "Neon.png"
    },
    {
        name: "neon",
        img: "Neon.png"
    },
    {
        name: "argon",
        img: "Argon.png"
    },
    {
        name: "argon",
        img: "Argon.png"
    },
    {
        name: "litio",
        img: "Litio.png"
    },
    {
        name: "litio",
        img: "Litio.png"
    },
];

var cardListRookie = [ //RookieCards
    {
        name: "boro",
        img: "Boro.png"
    },
    {
        name: "boro",
        img: "Boro.png"
    },
    {
        name: "silicio",
        img: "Silicio.png"
    },
    {
        name: "silicio",
        img: "Silicio.png"
    },
    {
        name: "aluminio",
        img: "Aluminio.png"
    },
    {
        name: "aluminio",
        img: "Aluminio.png"
    },
    {
        name: "neon",
        img: "Neon.png"
    },
    {
        name: "neon",
        img: "Neon.png"
    },

]; 

var cardListNormal = [ //NormalCards
    {
        name: "boro",
        img: "Boro.png"
    },
    {
        name: "boro",
        img: "Boro.png"
    },
    {
        name: "silicio",
        img: "Silicio.png"
    },
    {
        name: "silicio",
        img: "Silicio.png"
    },
    {
        name: "aluminio",
        img: "Aluminio.png"
    },
    {
        name: "aluminio",
        img: "Aluminio.png"
    },
    {
        name: "neon",
        img: "Neon.png"
    },
    {
        name: "neon",
        img: "Neon.png"
    },
    {
        name: "argon",
        img: "Argon.png"
    },
    {
        name: "argon",
        img: "Argon.png"
    },
    {
        name: "litio",
        img: "Litio.png"
    },
    {
        name: "litio",
        img: "Litio.png"
    },
    {
        name: "hierro",
        img: "Hierro.png"

    },
    {
        name: "hierro",
        img: "Hierro.png"

    },
    {
        name: "fosforo",
        img: "Fosforo.png"
    },
    {
        name: "fosforo",
        img: "Fosforo.png"
    },
    {
        name: "sodio",
        img: "Sodio.png"
    },
    {
        name: "sodio",
        img: "Sodio.png"
    },
    {
        name: "potasio",
        img: "Potasio.png"
    },
    {
        name: "potasio",
        img: "Potasio.png"
    },
];

/*

//Recibe el parametro de la dificultad
var currentURL = new URL(window.location.href);
var dato = currentURL.searchParams.get("level");
    switch(dato){
        case '1':
            console.log("el dato 1 llego");
            cardListRookie = shuffle(cardListRookie);
            cardListRookie.forEach(card => {
            cardContainer.appendChild(cardPrototype(card.name, card.img));
            });
            setInterval("timer1()",1000);
            break;
        case '2':
            console.log("el dato 2 llego");
            cardList = shuffle(cardList);
            cardList.forEach(card => {
            cardContainer.appendChild(cardPrototype(card.name, card.img));
            });
            break;
        case '3':
            console.log("el dato 3 llego");
            cardListNormal = shuffle(cardListNormal);
            cardListNormal.forEach(card => {
            cardContainer.appendChild(cardPrototype(card.name, card.img));
            });
            break;

        default:
            console.log("no llegaron cartas");
    }

*/

cardListNormal = shuffle(cardListNormal);
cardListNormal.forEach(card => {
    cardContainer.appendChild(cardPrototype(card.name, card.img));
})

//Atributtes
const cards = document.querySelectorAll('.memory-card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;
var i = Math.round(Math.random()*5)
var tm = 60;


//Sounds 
var soundCorrect = new Audio();
soundCorrect.src = "correct-ding.mp3";
var soundIncorrect = new Audio();
soundIncorrect.src = "correct-cbt-sound.mp3";


///////////////////////////////

//Functions and Methods
function flipCard(){
    if(lockBoard) return; //Don't let de user flip more of 3 cards at same time!!

    if(this === firstCard) return;

    this.classList.add('flip');
    if(!hasFlippedCard){
        //First Click!
    
        hasFlippedCard = true;
        firstCard = this;
        console.log({hasFlippedCard,firstCard});
        
        return;
    }
    // Second Click!!
    hasFlippedCard =false;
    secondCard = this;

    console.log({hasFlippedCard,secondCard});
    
    checkFormatch();
    
}


function checkFormatch(){

    /*let isMatch = firstCard.dataset.framework === 
    secondCard.dataset.framework;

    isMatch ? disableCards() : unFlipcards() ; 

    */

    //Option for check, for any trouble!
    if(firstCard.dataset.framework ===  secondCard.dataset.framework) {
        // It's a Match 
        disableCards();
        playAudioC();

    } else {
        // Not a Match
        unFlipcards();
        playAudioI();  
    }

}

//Make de Cards lose de effect, which means, the user accert on the match
function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    firstCard.removeEventListener('click', flipCard);
    resetBoard();
}

//Denied the Flip when both cards are no equal and returns to the original form
function unFlipcards(){
    lockBoard = true;

    setTimeout(()=>{

        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        lockBoard = false;
    },1000);

}

function resetBoard(){
    [ hasFlippedCard, lockBoard] = [false,false];
    [ firstCard, secondCard] = [null,null];
}

//Give to the cards a random position
(function shuffle(){
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random()*12)
        card.style.order = randomPos;
    });
})();

//Manage the audio on the match 
function playAudioC(){
    soundCorrect.play();
}

function playAudioI(){
    soundIncorrect.play();
}

function timer1(){
    document.form1.time1.value=tm;
    if(tm<=0){clearInterval();window.location.href='ot raweb.htm'}
    else{tm--}
}

cards.forEach(card => card.addEventListener('click',flipCard))