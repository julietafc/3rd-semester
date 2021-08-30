"use strict";

const name = "Albus Percival Wulfric Brian Dumbledore";
const names = ["Albus", "Percival", "Wulfric", "Brian", "Dumbledore"];

// .length
const total = name.length;
console.log(`The total amount of characters is ${total}`);

// .search("")
if (name.search("-") != -1) {
  console.log(`contains`);
} else {
  console.log(`does not contains`);
}

// .includes()
const includes = name.includes("Brian");
if (includes != -1) {
  console.log(`includes`);
} else {
  console.log(`does not include`);
}

console.log(name.includes("Sarasa"));

// .indexOf()
const index = name.indexOf("W");
console.log(`The index of "W" from the beginning is ${index}`);

// .lastIndexOf()
const last = name.lastIndexOf("a");
const first = name.indexOf("A");
console.log(`The index of "a" from the end is ${last}`);
console.log(`The index of the first "A" is ${first}`);
const lastname = name.lastIndexOf("Dumbledore");

// .localeCompare()
const compare = "Alerup".localeCompare("Aalborg");

if (compare != -1) {
  console.log(`before`);
} else {
  console.log(`after`);
}

// .padEnd(5)
const fill = name.padEnd(45, "-");
console.log(`${fill}`);

//.padStart()
const start = name.padStart(45, "0");
console.log(`${start}`);

// masked number
const last4Letter = name.slice(-4);
const maskedName = last4Letter.padStart(name.length, "*");
console.log(maskedName);

// .repeat()
const repeat = name.repeat(4);
console.log(repeat);

// .replaceAll()
const replace = name.replaceAll(" ", "  ");
console.log(replace);

// .slice()
const ch = name.slice(-10);
console.log(ch);

// .substring()
const sub = name.substring(name.length - 10);
console.log(sub);

// .split()
const split = name.split("");
const word = name.split(" ");
console.log(split);
console.log(word[3]);

const middle = name.split(" ");
console.log(word[1]);

// .startsWith()
const starts = name.startsWith("al");
console.log(`${starts}`);

// .toUpperCase() .toLowerCase()
const lower = name.toLowerCase();
console.log(lower.substring(lower.toUpperCase(0, 1)));
