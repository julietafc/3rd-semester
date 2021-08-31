"use strict";

let winner = "computer";
let userChoice;
let computerChoice;
let gameWord;

const choices = ["rock", "paper", "scissors"];

start();

function start() {
  console.log("start");
  document.querySelector(".rock").addEventListener("click", getPlayerChoice);
  document.querySelector(".paper").addEventListener("click", getPlayerChoice);
  document.querySelector(".scissors").addEventListener("click", getPlayerChoice);
}

function getPlayerChoice() {
  console.log("getPlayerChoice");
  userChoice = this.classList.value;
  console.log(userChoice);
  makeRandomComputerChoice();
}

function makeRandomComputerChoice() {
  console.log("makeRandomComputerChoice");

  let randomNumber = Math.floor(Math.random() * 3);
  computerChoice = choices[randomNumber];
  gameWord = userChoice + computerChoice;
  console.log("computerChoice " + computerChoice);
  showAnimations();
}

function showAnimations() {
  console.log("showAnimations");
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player2").classList.add("shake");
  document.querySelector("#player1").addEventListener("animationend", removeShake);
  document.querySelector("#player2").addEventListener("animationend", removeShake);
}

function removeShake() {
  document.querySelector("#player1").classList.remove("shake");
  document.querySelector("#player1").classList.add(userChoice);
  document.querySelector("#player2").classList.remove("shake");
  document.querySelector("#player2").classList.add(computerChoice);
  console.log("userChoice");
  determineWinner();
}

function determineWinner() {
  console.log("determineWinner");
  if (computerChoice === userChoice) {
    showDraw();
    return;
  }

  if (gameWord === "rockscissors") {
    showWin();
  } else if (gameWord === "paperrock") {
    showWin();
  } else if (gameWord === "scissorspaper") {
    showWin();
  } else {
    showLose();
  }
}

function showWin() {
  console.log("showWin");
  document.querySelector("#win").classList.remove("hidden");
}

function showLose() {
  console.log("showLose");
  document.querySelector("#lose").classList.remove("hidden");
}

function showDraw() {
  console.log("showDraw");
  document.querySelector("#draw").classList.remove("hidden");
}
