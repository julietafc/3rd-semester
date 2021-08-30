"use strict";

const name = "Julieta Laura Fernandez";

// finding the index
console.log(name.substring(0, name.indexOf(" "[0])));

// finding the lastname
console.log(name.substring(14));

// finding the middlename
console.log(name.substring(name.indexOf(" ") + 1, name.lastIndexOf(" ")));
