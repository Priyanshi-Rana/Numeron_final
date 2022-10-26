// Iteration 8: Making scoreboard functional
const scoreBoard = document.getElementById("score-board")
const playAgain = document.getElementById("play-again-button")
var ScoreNow = sessionStorage.getItem("scores")
scoreBoard.innerText = ScoreNow;


playAgain.onclick = reload;
function reload(){
    window.location.assign("index.html")
}
