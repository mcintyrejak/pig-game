"use strict";

let currentPlayer = "p1";

const newGameBtn = document.querySelector(".new-game-btn");

//FOR PLAYER HIGHLIGHT
const p1PanelEl = document.querySelector(".p1");
const p2PanelEl = document.querySelector(".p2");
const changePlayer = () => {
  if (currentPlayer === "p1") {
    p1PanelEl.classList.add("p-active");
    p2PanelEl.classList.remove("p-active");
  } else {
    p2PanelEl.classList.add("p-active");
    p1PanelEl.classList.remove("p-active");
  }
};

changePlayer();

// FOR ROLLS
const rollDieBtn = document.querySelector(".roll-die-btn");
const die = document.querySelector(".die");
const p1CurrentScoreEl = document.querySelector(".p1 .current-score");
const p2CurrentScoreEl = document.querySelector(".p2 .current-score");
const diceArray = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
let roll = 0;
let p1CurrentScore = 0;
let p2CurrentScore = 0;
const p1TotalScore = document.querySelector(".p1 .total-score");
const p2TotalScore = document.querySelector(".p2 .total-score");

const rollDie = () => {
  let dieNumber = getRandomNumber();
  die.innerText = diceArray[dieNumber];
  roll = dieNumber + 1;
};

rollDieBtn.addEventListener("click", () => {
  rollDie();
  if (currentPlayer === "p1" && roll !== 1) {
    p1CurrentScore += roll;
    p1CurrentScoreEl.innerText = p1CurrentScore;
  } else if (currentPlayer === "p2" && roll !== 1) {
    p2CurrentScore += roll;
    p2CurrentScoreEl.innerText = p2CurrentScore;
  } else if (currentPlayer === "p1" && roll === 1) {
    p1CurrentScore = 0;
    p1CurrentScoreEl.innerText = 0;
    currentPlayer = "p2";
  } else if (currentPlayer === "p2" && roll === 1) {
    p2CurrentScore = 0;
    p2CurrentScoreEl.innerText = 0;
    currentPlayer = "p1";
  }
  changePlayer();
});

const getRandomNumber = () => Math.floor(Math.random() * 6);

//FOR WINNER

//FOR HOLDS
const holdBtn = document.querySelector(".hold-btn");
let p1HeldScore = 0;
let p2HeldScore = 0;

holdBtn.addEventListener("click", () => {
  if (currentPlayer === "p1") {
    p1HeldScore = Number(p1TotalScore.innerText) + p1CurrentScore;
    p1TotalScore.innerText = p1HeldScore;
    p1CurrentScoreEl.innerText = 0;
    currentPlayer = "p2";
    p1CurrentScore = 0;
  } else {
    p2HeldScore = Number(p2TotalScore.innerText) + p2CurrentScore;
    p2TotalScore.innerText = p2HeldScore;
    p2CurrentScoreEl.innerText = 0;
    currentPlayer = "p1";
    p2CurrentScore = 0;
  }
  changePlayer();
  declareWinner();
});

const declareWinner = () => {
  if (p1HeldScore >= 100) {
    console.log(`P1 wins`);
  } else if (p2HeldScore >= 100) {
    console.log(`P2 wins`);
  }
};
