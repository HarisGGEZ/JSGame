// Deklarerar varaibler
let player1Turn = true;
let tempScore = 0;
let p1Score = document.querySelector("#current-1");
let p1TotalScore = document.querySelector("#score-1");
let p1Total = 0;
let p2Total = 0;
let p2Score = document.querySelector("#current-2");
let p2TotalScore = document.querySelector("#score-2");
let rollDice = document.querySelector("#roll-dice");
let Hold = document.querySelector("#hold");
let rolledInfo = document.querySelector("#roll");
let turn = document.querySelector("#turn");
let reset = document.querySelector("#reset");
document.getElementById("player-1").style.border = "5px solid white"


// Funktion för att kasta tärningen, vilket väljer ett random nummer mellan 1 - 6.
function CastDie() {
    var num = Math.floor(Math.random() * 6) + 1;
    return num;
}



// Funktion för när "Roll Dice" knappen trycks. Kollar vilken spelares tur det är. Värdet tilldelas till current score.
rollDice.addEventListener("click", function () {
    let num = CastDie();
    rolledInfo.innerHTML = "You rolled a " + num;
    if (player1Turn) {

        tempScore += num;
        if (num != 1) {
            p1Score.innerHTML = "Current: " + tempScore;
        }
        else {
            player1Turn = false;
            changeBorder()
            turn.innerHTML = "Player 2";
            tempScore = 0;
            p1Score.innerHTML = "Current: " + tempScore;
            num = null;
        }
    }
    if (!player1Turn) {
        tempScore += num;
        if (num != 1) {
            p2Score.innerHTML = "Current: " + tempScore;
        }
        else {
            player1Turn = true;
            changeBorder()
            turn.innerHTML = "Player 1";
            tempScore = 0;
            p2Score.innerHTML = "Current: " + tempScore;
            num = null;
        }
    }
})


// Funktion för när "Hold" knappen trycks. Lägger till poängen till den totala poängen och kollar om den överstiger 50.
Hold.addEventListener("click", function () {
    if (player1Turn) {
        p1Total += tempScore;
        p1TotalScore.innerHTML = p1Total;
        if (p1Total >= 50) win("player1");
        tempScore = 0;
        p1Score.innerHTML = "Current: " + tempScore;
        player1Turn = false;
        turn.innerHTML = "Player 2";
        changeBorder()
        return;
    }
    if (!player1Turn) {
        p2Total += tempScore;
        p2TotalScore.innerHTML = p2Total;
        if (p2Total >= 50) win("player2");
        tempScore = 0;
        p2Score.innerHTML = "Current: " + tempScore;
        player1Turn = true;
        changeBorder()
        turn.innerHTML = "Player 1";
        return;
    }
})



// Funktion för att reseta spelet. Alla världen blir orginal värderna.
reset.addEventListener("click", function () {
    p1Score.innerHTML = "Current: 0";
    p2Score.innerHTML = "Current: 0"
    p1TotalScore.innerHTML = 0;
    p2TotalScore.innerHTML = 0;
    p1Total = 0;
    p2Total = 0;
    tempScore = 0;
    player1Turn = true;
    changeBorder()
    document.getElementById("player-1").style.backgroundColor = "rgb(37, 12, 12)";
    document.getElementById("player-2").style.backgroundColor = "rgb(37, 12, 12)";
    document.getElementById("player-1").style.color = "white";
    document.getElementById("player-2").style.color = "white";


})


// Funktion för att ändra border beroende på vems tur det är.
function changeBorder() {
    if (player1Turn) {
        document.getElementById("player-2").style.border = "2px solid white";
        document.getElementById("player-1").style.border = "5px solid white";
    }
    if (!player1Turn) {
        document.getElementById("player-2").style.border = "5px solid white";
        document.getElementById("player-1").style.border = "2px solid white";
    }

}

// Funktion som körs när någon vinner.
function win(player) {
    if (player = "player1" && player != "player2") {
        console.log("1")
        document.getElementById("player-1").style.backgroundColor = "white";
        document.getElementById("player-1").style.color = "black"
    }
    else if (player = "player2" && player != "player1") {
        console.log("2")
        document.getElementById("player-2").style.backgroundColor = "white";
        document.getElementById("player-2").style.color = "black";
    }
}




