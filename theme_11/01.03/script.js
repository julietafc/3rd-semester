"use strict";

window.addEventListener("load", start);

let firstNumber;
let secondNumber;
let result;

const round = ["1", "2", "3", "4", "5", "6", "7", "8"];

function start() {
  console.log("start");
  document.getElementById("calculate").addEventListener("click", showResult);
  document.getElementById("clear").addEventListener("click", clearResults);
}

function showResult() {
  console.log("showResult");

  let operator = document.getElementById("operator").value;

  firstNumber = document.getElementById("firstnumber").value;
  //read second number
  secondNumber = document.getElementById("secondnumber").value;

  if (operator == "add") {
    console.log("This is a sum");
    result = firstNumber + secondNumber;
    roundResult();
  } else if (operator == "sub") {
    console.log("This is a rest");
    result = firstNumber - secondNumber;
    roundResult();
  } else if (operator == "mul") {
    console.log("This is a multiplication");
    result = firstNumber * secondNumber;
    roundResult();
  } else {
    console.log("This is a divition");
    result = firstNumber / secondNumber;
    roundResult();
  }

  console.log(result); // round up number if needed

  // append result in list
}

function clearResults() {
  console.log("clearResults");
  document.getElementById("results").reset();
  start();
}
