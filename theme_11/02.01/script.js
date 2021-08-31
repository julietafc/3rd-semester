"use strict";

window.addEventListener("load", start);

let inputBox = document.getElementById("input");
const output = document.getElementById("output");
let selection = document.getElementById("select").value;

let result;
// let output;

function start() {
  console.log("start");
  document.getElementById("generate").addEventListener("click", stringMethod);
}

function stringMethod() {
  console.log("stringMethod");

  selection = document.getElementById("select").value;
  inputBox = document.getElementById("input").value;

  if (selection === "firstUpper") {
    console.log("firstUpper");
    result = inputBox.value;
    showOutput();
  }

  if (selection === "firstName") {
    console.log("firstName");
    result = inputBox.split(" ")[0];
    showOutput();
  }

  if (selection === "length") {
    console.log("length");
    result = inputBox.length;
    showOutput();
  }

  if (selection === "middleName") {
    console.log("middleName");
    result = inputBox.value;
    showOutput();
  }

  if (selection === "filename") {
    console.log("filename");
    if (inputBox.endsWith(".jpg") != -1) {
      result = "contains .jpg";
    } else if (inputBox.endsWith(".png") != -1) {
      result = "contains .png";
    } else if (inputBox.endsWith("") != -1) {
      result = "this input does not contains files";
    }
    showOutput();
  }

  if (selection === "password") {
    console.log("password");
    result = inputBox.padStart(input.length, "*");
    showOutput();
  }

  if (selection === "3cap") {
    console.log("3cap");
    result = inputBox.value;
    showOutput();
  }

  if (selection === "cap") {
    console.log("cap");
    result = inputBox.value;
    showOutput();
  }
}

function showOutput() {
  output.value = result;
  //   document.querySelector("#output").value = result;
}

// let splitArr = str.split("-");
// console log(splitArr)
