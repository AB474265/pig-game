var main = document.querySelector("main");
var home = document.querySelector(".home");
var nameList = document.querySelector(".pName");
var diceDOM = document.querySelector(".dice");
var btn_hold00 = document.getElementById("hold00");
var btn_roll00 = document.getElementById("roll00");
var btn_hold11 = document.getElementById("hold11");
var btn_roll11 = document.getElementById("roll11");
var nameOfPlayer1;
var nameOfPlayer1;
var currentPlayer = 0;
var currentScore = 0;
var roundscore = 0;
var score = [0,0];
var goalPoint;
var activeGaming = true;

main.style.display = "none";
nameList.style.display = "none";
btn_hold00.style.display = "none";
btn_roll00.style.display = "none";

function multiPlayer(){
    home.style.display = "none";
    nameList.style.display = "block";
}

function next(){
    //Store player name in a variable
    nameOfPlayer1 = document.querySelector("#name1").value;
    nameOfPlayer2 = document.querySelector("#name2").value;
    goalPoint = document.querySelector("#goal").value;
    
    //Hide Player input page
    nameList.style.display = "none";
    
    //Display game board
    main.style.display = "flex";
    
    //display player name in game board
    document.getElementById("name--0").innerHTML = nameOfPlayer1;
    document.getElementById("name--1").innerHTML = nameOfPlayer2;

    //Hide dice at initial stage
    diceDOM.style.display = "none";
    
}


/*Roll the dice*/

function rolling(){
    if(activeGaming){
        
    //Select random number
    var dice = Math.floor((Math.random()*6)+1);

    //Show in dice
    diceDOM.style.display = "block";
    var diceImage = "image/dice-" + dice + ".png";
    diceDOM.setAttribute("src", diceImage);

    //Show in current section
    if(dice !== 1){
        currentScore += dice;
        document.getElementById("current--" + currentPlayer).innerHTML = currentScore;
    } else{
        nextPlayer();
    }
    }
}

function holding(){
    if(activeGaming){
            //store variable in an array
    score[currentPlayer] += currentScore;
    currentScore=0;

    //Display score
    document.getElementById("score--" + currentPlayer).innerText = score[currentPlayer];

    //Observe score
    if(score[currentPlayer] >= goalPoint){
        
        //Hide dice
        diceDOM.style.display = "none";
        
        //Hide "current" word from box
        var x = document.getElementsByClassName("current-label");
        x[0].style.display = "none";
        x[1].style.display = "none";

        //Display winner, remove active class and add winner class
        document.getElementById("current--" + currentPlayer).innerHTML= "WINNER";
        document.querySelector(".player--" + currentPlayer).classList.remove('player--active');
        document.querySelector(".player--" + currentPlayer).classList.add('player--winner');
        
        //Display loser, remove active class
        currentPlayer === 0? currentPlayer = 1 : currentPlayer = 0;
        document.querySelector(".player--" + currentPlayer).classList.remove('player--active');
        document.querySelector("#current--" + currentPlayer).innerHTML = "LOSER";

        //Declare state variable
        activeGaming = false;

    } else{
           //Turn to next player
           nextPlayer();
    }
    }

}

document.querySelector(".btn--hold").addEventListener("click", holding);

function nextPlayer(){
    currentPlayer === 0? currentPlayer = 1 : currentPlayer = 0;
    currentScore = 0;
    document.getElementById("current--" + currentPlayer).innerHTML = currentScore;

    document.getElementById("current--0").innerText = 0;
    document.getElementById("current--1").innerText = 0;

    document.querySelector(".player--0").classList.toggle('player--active');
    document.querySelector(".player--1").classList.toggle('player--active');
    
    //Hide dice 
    diceDOM.style.display = "none";
}

/* Activate AB
......................................
..................Challenge AB and get your prize............................
...............................if you can......................
*/

function sinPlayer(){
    var goal = 100;
    home.style.display = "none";
    main.style.display = "flex";
    btn_hold11.style.display = "none";
    btn_roll11.style.display = "none";
    btn_hold00.style.display = "block";
    btn_roll00.style.display = "block";

    function activateAB(){
        var chance = Math.floor((Math.random()*10)+1);
        for(var i=0; i<=chance; i++){
            var dice = Math.floor((Math.random()*6)+1);
            if(dice !== 1){
                (function(){
                    diceDOM.style.display = "block";
                    var diceImage = "image/dice-" + dice + ".png";
                    diceDOM.setAttribute("src", diceImage);
                    currentScore += dice;
                    document.getElementById("current--1").innerHTML = currentScore;
                    
                })();
            }else{
            
                document.querySelector(".player--1").classList.remove('player--active');
                document.querySelector(".player--0").classList.add('player--active');
                
                //Hide dice 
                diceDOM.style.display = "none";

                //Break the loop
                break;
            }
            
        }
         //store variable in an array
         score[1] += currentScore;
         currentScore=0;

        //Display score
         document.getElementById("score--1").innerText = score[1];

        //Observe score
         if(score[1] >= goal){
        
        //Hide dice
         diceDOM.style.display = "none";
        
        //Hide "current" word from box
         var x = document.getElementsByClassName("current-label");
         x[0].style.display = "none";
         x[1].style.display = "none";

        //Display winner, remove active class and add winner class
         document.getElementById("current--1").innerHTML= "WINNER";
         document.querySelector(".player--1").classList.remove('player--active');
         document.querySelector(".player--1").classList.add('player--winner');
        
        //Display loser, remove active class
         document.querySelector(".player--0").classList.remove('player--active');
         document.querySelector("#current--0").innerHTML = "LOSER";
        //Hide dice
         diceDOM.style.display = "none";

         activeGaming = false;

        } else{
         document.getElementById("current--0").innerText = 0;
         document.getElementById("current--1").innerText = 0;

         document.querySelector(".player--1").classList.remove('player--active');
         document.querySelector(".player--0").classList.add('player--active');

         //Hide dice 
         diceDOM.style.display = "none";

        }
    }

    function rollYou(){
        if(activeGaming){
                        //Select random number
                        var dice = Math.floor((Math.random()*6)+1);

                        //Show in dice
                         diceDOM.style.display = "block";
                         var diceImage = "image/dice-" + dice + ".png";
                         diceDOM.setAttribute("src", diceImage);
            
                        //Show in current section
                         if(dice !== 1){
                         currentScore += dice;
                         document.getElementById("current--0").innerHTML = currentScore;
                         } else{
                            currentScore = 0;
                            document.getElementById("current--0").innerHTML = currentScore;
                        
                            document.getElementById("current--0").innerText = 0;
                            document.getElementById("current--1").innerText = 0;
                        
                            document.querySelector(".player--0").classList.remove('player--active');
                            document.querySelector(".player--1").classList.add('player--active');
                            
                            //Hide dice 
                            diceDOM.style.display = "none";
            
                            activateAB();
                         }
        }
    }
    document.getElementById("roll00").addEventListener("click",rollYou);

    function holdYou(){
        if(activeGaming){
                    //store variable in an array
         score[0] += currentScore;
         currentScore=0;

        //Display score
         document.getElementById("score--0").innerText = score[0];

        //Observe score
        if(score[0] >= goal){
        
        //Hide dice
         diceDOM.style.display = "none";
        
        //Hide "current" word from box
         var x = document.getElementsByClassName("current-label");
         x[0].style.display = "none";
         x[1].style.display = "none";

        //Display winner, remove active class and add winner class
         document.getElementById("current--0").innerHTML= "WINNER";
         document.querySelector(".player--0").classList.remove('player--active');
         document.querySelector(".player--0").classList.add('player--winner');
        
        //Display loser, remove active class
         document.querySelector(".player--1").classList.remove('player--active');
         document.querySelector("#current--1").innerHTML = "LOSER";

        //Declare state variable
         activeGaming = false;


        } else{
            document.querySelector(".player--0").classList.remove('player--active');
            document.querySelector(".player--1").classList.add('player--active');
            activateAB();
        }
        }
    }

    document.getElementById("hold00").addEventListener("click",holdYou);


}