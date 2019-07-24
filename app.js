

var currentScore1, currentScore2, card, cardValue;
cardDOM =  document.querySelector('.card');
cardDOM2 =  document.querySelector('.player2');
cardValue = [1,2,3,4,5,6,7,8,9,10,11,12,13];

player1Score = document.getElementById("current-0");
player2Score = document.getElementById("current-1");
currentScore1 = 0;
currentScore2 = 0;
var num = 'Img/card-' + card + '-';

init();

document.querySelector(".btn-deal").addEventListener("click", function() {
  function card1() {
    card = Math.floor(Math.random() * 52) + 1;
    if (card >= 1 && card <= 4) {
      cardDOM.src = "Img/card-" + card + "-" + cardValue[1] + ".png";
    } else if (card >= 5 && card <= 8) {
      cardDOM.src = "Img/card-" + card + "-" + cardValue[2] + ".png";
    } else if (card >= 9 && card <= 12) {
      cardDOM.src = "Img/card-" + card + "-" + cardValue[3] + ".png";
    } else if (card >= 13 && card <= 16) {
      cardDOM.src = "Img/card-" + card + "-" + cardValue[4] + ".png";
    } else if (card >= 17 && card <= 20) {
      cardDOM.src = "Img/card-" + card + "-" + cardValue[5] + ".png";
    } else if (card >= 21 && card <= 24) {
      cardDOM.src = "Img/card-" + card + "-" + cardValue[6] + ".png";
    } else if (card >= 25 && card <= 28) {
      cardDOM.src = "Img/card-" + card + "-" + cardValue[7] + ".png";
    } else if (card >= 29 && card <= 32) {
      cardDOM.src = "Img/card-" + card + "-" + cardValue[8] + ".png";
    } else if (card >= 33 && card <= 36) {
      cardDOM.src = "Img/card-" + card + "-" + cardValue[9] + ".png";
    } else if (card >= 37 && card <= 40) {
      cardDOM.src = "Img/card-" + card + "-" + cardValue[0] + ".png";
    } else if (card >= 41 && card <= 44) {
      cardDOM.src = "Img/card-" + card + "-" + cardValue[10] + ".png";
    } else if (card >= 45 && card <= 48) {
      cardDOM.src = "Img/card-" + card + "-" + cardValue[12] + ".png";
    } else {
      cardDOM.src = "Img/card-" + card + "-" + cardValue[11] + ".png";
    }
  }
  card1();
  
  function card2() {
    card = Math.floor(Math.random() * 52) + 1; 
    if (card >= 1 && card <= 4) {
      cardDOM2.src = "Img/card-" + card + "-" + cardValue[1] + ".png";
    } else if (card >= 5 && card <= 8) {
      cardDOM2.src = "Img/card-" + card + "-" + cardValue[2] + ".png";
    } else if (card >= 9 && card <= 12) {
      cardDOM2.src = "Img/card-" + card + "-" + cardValue[3] + ".png";
    } else if (card >= 13 && card <= 16) {
      cardDOM2.src = "Img/card-" + card + "-" + cardValue[4] + ".png";
    } else if (card >= 17 && card <= 20) {
      cardDOM2.src = "Img/card-" + card + "-" + cardValue[5] + ".png";
    } else if (card >= 21 && card <= 24) {
      cardDOM2.src = "Img/card-" + card + "-" + cardValue[6] + ".png";
    } else if (card >= 25 && card <= 28) {
      cardDOM2.src = "Img/card-" + card + "-" + cardValue[7] + ".png";
    } else if (card >= 29 && card <= 32) {
      cardDOM2.src = "Img/card-" + card + "-" + cardValue[8] + ".png";
    } else if (card >= 33 && card <= 36) {
      cardDOM2.src = "Img/card-" + card + "-" + cardValue[9] + ".png";
    } else if (card >= 37 && card <= 40) {
      cardDOM2.src = "Img/card-" + card + "-" + cardValue[0] + ".png";
    } else if (card >= 41 && card <= 44) {
      cardDOM2.src = "Img/card-" + card + "-" + cardValue[10] + ".png";
    } else if (card >= 45 && card <= 48) {
      cardDOM2.src = "Img/card-" + card + "-" + cardValue[12] + ".png";
    } else {
      cardDOM2.src = "Img/card-" + card + "-" + cardValue[11] + ".png";
    }
  }
  card2();
  winner();
});

   // Determine a Winner:
function winner() {
//If the cardValue index from cardDOM.src matches the cardValue index from cardDOM2.src then it is a tie: toggle tie class: then new game(i.e. New Deal)
                    var convertToArray = cardDOM.src.split('-').join('.').split('.');
                  
                    var x = parseInt(convertToArray[5]);

                    var convertToArray1 = cardDOM2.src.split('-').join('.').split('.');

                    var y = parseInt(convertToArray1[5]);

                        if(x === y){
//no winner and nothing changes
                             
                          console.log("tie"); 
                        } else if ( x > y) {
                               currentScore1++;
                               player1Score.textContent = currentScore1;
                               console.log("Player 1 is the winner"); 
                           } else if (x < y){
                               currentScore2++;
                               player2Score.textContent = currentScore2;
                               console.log("Player 2 is the winner"); 
                           }
//Display winner to specific player!
                            endGame();
                            
                        }
                        
                  
    
    

function endGame() {
  if (currentScore1 === 25) {
    //display winner of the game!
    document.querySelector("#name-0").textContent = "Winner!!!!";
    document.querySelector(".player-0-panel").classList.add("winner");
     document.querySelector(".btn-deal").disabled = true; 
  } else if (currentScore2 === 25) {
    document.querySelector("#name-1").textContent = "Winner!!!!";
    document.querySelector(".player-1-panel").classList.add("winner");
    document.querySelector(".btn-deal").disabled = true; 
  }
}

document.querySelector(".btn-new").addEventListener("click", function() {
  currentScore1 = 0;
  currentScore2 = 0;

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".btn-deal").disabled = false;
});

function init() {
  currentScore1 = 0;
  currentScore2 = 0;

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".btn-deal").disabled = false;
}







    












