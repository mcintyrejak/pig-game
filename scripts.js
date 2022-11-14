"use strict";

const rollDieBtn = document.querySelector(".roll-die-btn");
const holdBtn = document.querySelector(".hold-btn");
const newGameBtn = document.querySelector(".new-game-btn");

let currentPlayer = "Player 2";

// For rolls
const die = document.querySelector(".die");
const p1CurrentScoreEl = document.querySelector(".p1 .current-score");
const p2CurrentScoreEl = document.querySelector(".p2 .current-score");
const diceArray = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
let roll = 0;
let p1CurrentScore = 0;
let p2CurrentScore = 0;

if (currentPlayer === "Player 1") {
  rollDieBtn.addEventListener("click", () => {
    let dieNumber = getRandomNumber();
    die.innerText = diceArray[dieNumber];
    roll = dieNumber + 1;
    p1CurrentScore += roll;
    p1CurrentScoreEl.innerText = p1CurrentScore;
  });
} else if (currentPlayer === "Player 2") {
  rollDieBtn.addEventListener("click", () => {
    let dieNumber = getRandomNumber();
    die.innerText = diceArray[dieNumber];
    roll = dieNumber + 1;
    p2CurrentScore += roll;
    p2CurrentScoreEl.innerText = p2CurrentScore;
  });
}

const getRandomNumber = () => Math.floor(Math.random() * 6);
