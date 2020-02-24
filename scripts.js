

//Atributtes
const cards = document.querySelectorAll('.memory-card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;
var i = Math.round(Math.random()*5)
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

    if(firstCard.dataset.framework === 
        secondCard.dataset.framework){
            // It's a Match 
            disableCards();
            playAudioC();
          
           
        
    }else{
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

////Manage the audio on the match 
function playAudioC(){
    soundCorrect.play();
}

function playAudioI(){
    soundIncorrect.play();
}





cards.forEach(card => card.addEventListener('click',flipCard))