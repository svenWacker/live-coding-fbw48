// printing out
console.log("Sven ");
//
let x = 3;
let str = "Eisenberg ";
let old = true;
//
// § Nodemon index.js

// Typeof
console.log(typeof x);
console.log(typeof old);
console.log(typeof str);
// length

let something = 1231;
something = 4567;
console.log(something);
const fatherName = "Zain";
console.log(fatherName);
var global = "Hi I am global";
{
    let local = 22;
    global = "Hi";
}
console.log(global);

// function
function print(str) {
    console.log(str);
}
// function call
print("Sven");
print(22)
console.log(lastName);
var lastName ="Wacker";
console.log(lastName);
function sum(x, y) {
    let z = 0; 
    z = x + y;
    return z;
}

console.log(sum(2, 3));
let sumRe = sum(2, 44);
console.log(sumRe);

// option 1
console.log(5);
// option 2
let num = 5;
console.log(num);
// option 3
const a = 2;
const b = 3;
console.log(a + b);
//substring
let oString = "Hi my Name is Sven, I'm 45 years old.";
//console.log(string);
print(oString.length);
let str1 = oString.substring(5);
console.log(str1);
let str2 = oString.substring(6, 10);
console.log(str2);
// toUpperCase
let str3 = oString.toUpperCase();
console.log(str3);
// toLowerCase
let str4 = oString.toLowerCase();
console.log(str4);

let firstName = "sVeN";
// Sven
let firstChr = firstName[0].toUpperCase();
// console.log(firstChr);
let restChr = firstName.substring(1).toLowerCase();
// console.log(restChr);
let FinalFirstName = firstChr + restChr;
console.log(FinalFirstName);

let shortForm = 
    firstName[0].toUpperCase() + firstName.substring(1).toLowerCase();
console.log(shortForm);
// shortForm = S + ven

// comment one line
/* 

this ia many lines 
comment

*/
// camelCase
//let firstNameUser
//camelCase vs snake_case

//
let longStr = "Hi this is me, I am Sven, I live in Eisenberg";

// includes
let text = longStr.includes("hi");
let text2 = longStr.includes("@");
console.log(text);
console.log(text2);

//
let partOfStr = longStr.substring(4, 7);
console.log(partOfStr);
