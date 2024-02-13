const editPlayer1Btn = document.getElementById("edit-player1");
const editPlayer2Btn = document.getElementById("edit-player2");

const playerConfigOverlay = document.getElementById("config-overlay");
const backdrop = document.getElementById("backdrop");

const cancelConfigBtn = document.getElementById("cancel-config");

const formElement = document.querySelector("form");
const errorOutputElement = document.getElementById("config-errors");
let editedPlayer=0;
let activePlayer =0;
const players=[
    {
        name:"",
        symbol:"X"
    },
    {
        name:"",
        symbol:"O"
    }
];
const startNewGameBtn = document.getElementById("start-game-btn");
const gameAreaElement = document.getElementById("active-game");

const gameFieldElements = document.querySelectorAll("#gameboard li");
const activePlayerNameElement = document.getElementById("active-player-name");

const gameData = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];
let currentRound =1;
const gameOverElement = document.getElementById("game-over");
let gameIsOver = false;

editPlayer1Btn.addEventListener("click",openPlayerConfig);
editPlayer2Btn.addEventListener("click",openPlayerConfig);

cancelConfigBtn.addEventListener("click",closePlayerConfig);
backdrop.addEventListener("click",closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);
startNewGameBtn.addEventListener("click", startNewGame);

for(const gameFieldElement of gameFieldElements){
    gameFieldElement.addEventListener("click", selectGameField);
}