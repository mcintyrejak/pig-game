"use strict";

let currentPlayer = "p1";

const newGameBtn = document.querySelector(".new-game-btn");

// FOR ROLLS
const rollDieBtn = document.querySelector(".roll-die-btn");
const die = document.querySelector(".die");
const p1CurrentScoreEl = document.querySelector(".p1 .current-score");
const p2CurrentScoreEl = document.querySelector(".p2 .current-score");
const diceArray = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
let roll = 0;
let p1CurrentScore = 0;
let p2CurrentScore = 0;

const rollDie = () => {
  let dieNumber = getRandomNumber();
  die.innerText = diceArray[dieNumber];
  roll = dieNumber + 1;
  if (roll === 1 && currentPlayer === "p1") {
    currentPlayer = "p2";
    p1CurrentScore = 0;
  } else if (roll === 1 && currentPlayer === "p2") {
    currentPlayer = "p1";
    p2CurrentScore = 0;
  }
};

rollDieBtn.addEventListener("click", () => {
  rollDie();
  if (currentPlayer === "p1" && roll !== 1) {
    p1CurrentScore += roll;
    p1CurrentScoreEl.innerText = p1CurrentScore;
  } else if (currentPlayer === "p2" && roll !== 1) {
    p2CurrentScore += roll;
    p2CurrentScoreEl.innerText = p2CurrentScore;
  } else if ((currentPlayer = "p1" && roll === 1)) {
    p1CurrentScore = 0;
    p1CurrentScoreEl.innerText = 0;
    currentPlayer = "p2";
  } else if ((currentPlayer = "p2" && roll === 1)) {
    p2CurrentScore = 0;
    p2CurrentScoreEl.innerText = 0;
    currentPlayer = "p1";
  }
});

const getRandomNumber = () => Math.floor(Math.random() * 6);

//FOR HOLDS

const holdBtn = document.querySelector(".hold-btn");
const p1TotalScore = document.querySelector(".p1 .total-score");
const p2TotalScore = document.querySelector(".p2 .total-score");

holdBtn.addEventListener("click", () => {
  if (currentPlayer === "p1") {
    p1TotalScore.innerText = Number(p1TotalScore.innerText) + p1CurrentScore;
    p1CurrentScoreEl.innerText = 0;
    currentPlayer = "p2";
    p1CurrentScore = 0;
  } else {
    p2TotalScore.innerText = Number(p2TotalScore.innerText) + p2CurrentScore;
    p2CurrentScoreEl.innerText = 0;
    currentPlayer = "p1";
    p2CurrentScore = 0;
  }
});
