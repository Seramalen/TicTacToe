/*
Name: Review Activity
Course Code: SODV1201
Class: Software Development Diploma program.
Author: Adalin Zimmermann
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Question 1: create a simple tic tac toe game
*/
//Here we create the interval id variable holder for the interval timer for the win animation
//This will be used later in the reset button to turn off the animation
let winAnimId;

//Player 1 is x, player 2 is o
var player = 1;

//The color that the win animation is set to, default 0 on startup
let red = 255;
let green = 0;
let blue = 0;

//Normally I'd have used jQuery to do this event handling but the assignment requires just js
document.getElementById("b1").addEventListener("click", click);
document.getElementById("b2").addEventListener("click", click);
document.getElementById("b3").addEventListener("click", click);
document.getElementById("b4").addEventListener("click", click);
document.getElementById("b5").addEventListener("click", click);
document.getElementById("b6").addEventListener("click", click);
document.getElementById("b7").addEventListener("click", click);
document.getElementById("b8").addEventListener("click", click);
document.getElementById("b9").addEventListener("click", click);
document.getElementById("but").addEventListener("click", reset);

//Something happens to the buttons when text is placed in them and the simplest fix I saw was to simply always have text in the buttons
document.getElementById("b1").textContent="\u2060";
document.getElementById("b2").textContent="\u2060";
document.getElementById("b3").textContent="\u2060";
document.getElementById("b4").textContent="\u2060";
document.getElementById("b5").textContent="\u2060";
document.getElementById("b6").textContent="\u2060";
document.getElementById("b7").textContent="\u2060";
document.getElementById("b8").textContent="\u2060";
document.getElementById("b9").textContent="\u2060";



function click() {
    //We determine which player is placing their token
    if(player == 1){
        //And then we determine if theyre placing in a valid location. If not, print an error and let them choose again
    if(this.textContent!="x"&& this.textContent!="o"){
    this.textContent="x"
    } else {
        document.getElementById("ins").textContent="You must pick a valid space!"
        return;
    }
    document.getElementById("print").textContent="Player 2, your turn!";
} else {
    if(this.textContent!="x"&& this.textContent!="o"){
        this.textContent="o"
        } else {
            document.getElementById("ins").textContent="You must pick a valid space!"
            return;
        }
        document.getElementById("print").textContent="Player 1, your turn!";
}
document.getElementById("ins").textContent="Choose a space to place your piece!";
checkWin();

if(player == 1) {
    player = 2;
} else  {
    player=1;
}
}

//Here we determine if any player has won, and then change the current playing player
//This will also determine if there is a draw
//Eventually, this will call the win function and complete the game
function checkWin() {
    var grid = document.getElementsByClassName("grid");
    if(grid.item(0).textContent===grid.item(3).textContent && grid.item(0).textContent===grid.item(6).textContent &&  grid.item(0).textContent!="\u2060") {
        win();
    }
    if(grid.item(1).textContent===grid.item(4).textContent && grid.item(1).textContent===grid.item(7).textContent &&  grid.item(1).textContent!="\u2060") {
        win();
    }
    if(grid.item(2).textContent===grid.item(5).textContent && grid.item(2).textContent===grid.item(8).textContent &&  grid.item(2).textContent!="\u2060") {
        win();
    }
    if(grid.item(0).textContent===grid.item(1).textContent && grid.item(0).textContent===grid.item(2).textContent &&  grid.item(0).textContent!="\u2060") {
        win();
    }
    if(grid.item(3).textContent===grid.item(4).textContent && grid.item(3).textContent===grid.item(5).textContent &&  grid.item(3).textContent!="\u2060") {
        win();
    }
    if(grid.item(6).textContent===grid.item(7).textContent && grid.item(6).textContent===grid.item(8).textContent &&  grid.item(6).textContent!="\u2060") {
        win();
    }
    if(grid.item(0).textContent===grid.item(4).textContent && grid.item(0).textContent===grid.item(8).textContent &&  grid.item(0).textContent!="\u2060") {
        win();
    }
    if(grid.item(2).textContent===grid.item(4).textContent && grid.item(2).textContent===grid.item(6).textContent &&  grid.item(2).textContent!="\u2060") {
        win();
    }
    //Here we iterate through all the buttons and determine if all are filled. Since we already tested all win conditions,
    //If we find that all tokens have been placed the result must be a draw
    let count = 0;
    for (let index = 0; index < grid.length; index++) {
        const element = grid.item(index);
        if (element.textContent !="\u2060") {
            count++;
        }        
    }
    console.log(count);
    if(count == 9) {
        document.getElementById("print").textContent="It's a draw!";
        document.body.style.backgroundColor ="gray";
    } else {
        count = 0;
    }
}

//Here we determine who won and run the animation for winning
function win() {
    if(player == 1) {
        document.getElementById("print").textContent="Player 1 wins!";
    } else {
        document.getElementById("print").textContent="Player 2 wins!";
    }
    winAnimId = setInterval(winAnimation, 5);    
}

//This animation changes the rgb values to create a rainbow effect.
//For some reason this animation works backwards, red-blue-green-red
//rather than like the rainbow, but the effect still works!
function winAnimation() {
    if(red == 255 && green < 255 && blue == 0) {
        green++;
    }
    if(red <= 255 && green == 255 && blue == 0) {
        red--;
    }
    if(red == 0 && green == 255 && blue < 255) {
        blue++;
    }
    if(red == 0 && green <=255 && blue == 255) {
        green--;
    }
    if(red <=255 && green ==0 && blue == 255) {
        red++;
    }
    if(red == 255 && green == 0 && blue <=255) {
        blue--;
    }
    document.body.style.backgroundColor = 'rgb(' + red + ',' + blue + ',' + green + ')';
}

function reset() {
    //Here we clear all x's and 0's
    document.getElementById("b1").textContent="\u2060";
    document.getElementById("b2").textContent="\u2060"; 
    document.getElementById("b3").textContent="\u2060"; 
    document.getElementById("b4").textContent="\u2060"; 
    document.getElementById("b5").textContent="\u2060"; 
    document.getElementById("b6").textContent="\u2060"; 
    document.getElementById("b7").textContent="\u2060"; 
    document.getElementById("b8").textContent="\u2060"; 
    document.getElementById("b9").textContent="\u2060";
    //Reset all text
    document.getElementById("ins").textContent="Choose a space to place your x!";
    document.getElementById("print").textContent="Player 1, your turn!";
    document.getElementById("ins").textContent="Choose a space to place your piece!";
    player = 1;
    //and here we clear the interval id so we don't run into issues later
    if(!winAnimId) {

    } else {
        clearInterval(winAnimId);
        winAnimId = null;
    }
    //And then reset the colors back to their defaults
    document.body.style.backgroundColor = "white";
    red=255;
    green=0;
    blue=0;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

