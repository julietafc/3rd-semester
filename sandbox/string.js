"use strict";

// const name = "Juli"
// const animal = "dog";
// const animalName = "Fede";

// console.log(`My name is ${name},
// I have a ${animal} called ${animalName}`);

// const len = name.length;
// console.log(`${name} is ${len} characters long`);

// const letter = name[0];
// console.log(`The first letter of ${name} is ${letter}`);

const name = "    Albus      Percival Wulfric Brian Dumbledore";
const total = name.length;
const index2 = name[2];
const index6 = name[6];
const firstName = name.substring(0, 5);
const lastName = name.substring(29);

//What is the total number of character, including spaces?
console.log(`Total number of characters is: ${total}`);

// What is the character at index 2?
console.log(`Character at index 2 is: ${index2}`);

// Which character is at index 6?
console.log(`Character at index 6 is: ${index6}`);

// What is the index of the first D in Dumbledore?

// What is the index of the last w in Dumbledore?

const str1 = "  The is     space here  \n    ";
const str2 = str1.trim();

console.log(str2);

// Albus
console.log(`first name is: _${firstName}_`);

// Dumbledore
console.log(`last name is: _${lastName}_`);

// shows last number of first name
console.log(name.split(" ")[0].length - 1);

// shows last letter of first name
console.log(name[name.split(" ")[0].length - 1]);

// get the last 10 characters of the whole name
console.log(name.substring(name.length - 10));

// Convert a german word like “Goethestraße” correctly to “GOETHESTRASSE”
const p = "Goethestraße";
console.log(p.replaceAll("ß", "ss").toUpperCase());

// Take white space at the beginning
console.log(name.trimStart());
