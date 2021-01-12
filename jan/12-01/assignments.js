console.log("\n--------Exercise-1------\n");
// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

// Examples:

// isLEQZero(3) ➞ false
// isLEQZero(0) ➞ true
// isLEQZero(-4) ➞ true
// isLEQZero(10) ➞ false
let num1 = 0;
function isLEQZero(num1) {
console.log(num1 <=0 ? true : false);
}
isLEQZero(3);
isLEQZero(0);
isLEQZero(-4);
isLEQZero(10);

console.log("\n--------Exercise-2------\n");

//  Dog Years. Create a function which calculates how old a dog is in dog years. The function should accept one argument that is the dog's age in human years.
//PS:  calculate the dog's age in dog years based on the calculation of 1 human year = 7 dog years.

// Example:

// dogAge(4) ➞ "Your doggy is 28 years old in dog years!"
let num2 = 0;
let num3 = 0;
function dogAge(num2) {
    num3 = num2 * 7;
    console.log(`Your doggy is ${num3} years old in dog years!`);
}
dogAge(4);
dogAge(10);
dogAge(8);

console.log("\n--------Exercise-3------\n");

//  A Lifetime Supply...
// You just won a lifetime supply of your favorite snack! The snack company needs to calculate what that actually means and how much they need to give you over your "lifetime". Create a function to help you calculate that amount for yourself to make sure you get the right amount. The function should accept two arguments: person age and the amount he will eats per day. The function should calculate the amount that will be consumed for the rest of your life given a constant maximum age of 100.

// Examples:

// calcLifetimeSupply(25, 2) ➞ "The snack company should provide you with 54,788 units, until you are a ripe old age of 100. Happy snacking!"

// calcLifetimeSupply(40, 3) ➞ "The snack company should provide you with 65,745 units, until you are a ripe old age of 100. Happy snacking!"
let age = 0;
let snack = 0;
let snackSum = 0;
function calcLifetimeSupply(age, snack){
    snackSum = (100 + age) * snack * 365;
    snackSumInt = new Intl.NumberFormat('ja-JP').format(snackSum);
    console.log(`The snack company should provide you with ${snackSumInt} units,\nuntil you are a ripe old age of 100.\nHappy snacking!\n`);
}
calcLifetimeSupply(25, 2);
calcLifetimeSupply(40, 3);

console.log("\n--------Exercise-4------\n");
//  Number to Month Name
// Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string.
// For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.
//  here are the months array as a small help :)
//   let months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

// Examples:

// monthName(3) ➞ "March"
// monthName(12) ➞ "December"
// monthName(6) ➞ "June"
const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
function monthName(monthNum){
    //let i = monthNum - 1;
    //console.log(months[i]);
    console.log(months[monthNum-1]);
    
}
monthName(3);
monthName(12);
monthName(6);

console.log("\n--------Exercise-5------\n");
// Try to do it by yourself and don't look in yesterday solution. I trust you :)
// Count Occurrences.
// Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.

// Example:

// countOccurrences("this is a string", "i") ➞ 3
const countOccurrences = (str, chr)=>{
    let strIntoArr = str.split("");
    let count = 0;
    for(let i = 0;i<strIntoArr.length; i++){
        if (strIntoArr[i] == chr){
        count++;
        }
    }
    console.log(`${str}, ${count}`);
    //return count;
//console.log(countOccurrences);

};
// console.log(`${str}, ${chr}`);
countOccurrences("this is a string", "i");
countOccurrences("How many ooo's in this text do we have?", "o");

//console.log(countOccurrences("this is a string", "i"));


console.log("\n--------Exercise-6------\n");
/*  draw this shapes in your console
First shape
T
TT
TTT
TTTT*/
console.log("First shape");
let text = "";
for(let i = 1; i <=4;i++){
    text += "T" + "";
    for(let j =4; j>=i; j--){
    }
    console.log(text);
    }
/*Second shape
****
***
**
*
*/
console.log("Second shape");
text = '';
for (let i = 4; i >= 1; i--) {
  i < 4 ? text += '\n': null;
  for (let j = 1; j <= i; j++) {
    text += '*';
  }
}
console.log(text);
/*Third shape
1
12
123
1234
12345*/
console.log("Third shape");
text = "";
for(let i = 1; i <=5;i++){
    text += i + "";
    for(let j =1; j<=i; j++){
    }
    console.log(text);
}

/*Bounce: Forth shape
Be creative and show us your Artistic side
*/
console.log("Bounce: Forth shape");
function displayPyramid(n) { 
  for (let i = 0; i < n; i++) { 
    let str = '';
    // let str1 = '';
    // let str2 = '';
    for (let j = 1; j < n-i; j++) { 
      str = str + ' '; 
    } 
    for (let k = 1; k <= (2*i+1); k++) { 
      str = str + '*';
      // str1 = str1 + '*';
    // }
    // for (let k = n; k <= (2*i+1); k--) { 
    //     str2 = str2 + '*'; 
    } 
    console.log(str);
    // console.log(str1); 
    // console.log(str2); 
  } 
} 
displayPyramid(3);
displayPyramid(6);
displayPyramid(12);

console.log("\n--------Exercise-7------\n");
/* Finish the following function so it outputs looks like this:
1
12
123
1234
12345
*/
 
let num5 = "";  
function numbersCount(num5){ 
  for(let i = 1; i <=num5;i++){
      text += i + "";
      for(let j =1; j<=i; j++){
      }
      console.log(text);
    }
  }
numbersCount(5);

/*
numbersCount();
Bonus: create another function by doing some changes to the previous function in order to have the following outputs :
  12345
  1234
  123
  12
  1
let num5 = "";  
function numbersCount(num5){ 
  for(let i = 1; i <=num5;i++){
      text += i + "";
      for(let j =1; j<=i; j++){
      }
      console.log(text);
    }
  }
numbersCount(5);

console.log("--------Exercise-8------");
/* create a function should that checks if a store contains a specific product in it's inventory.
for example:
let storeArr= ["milk", "eggs", "cheese", "butter"];
// try includes might help :)
// Examples
inventoryCheck("cheese") returns true
inventoryCheck( "ham") returns false 
*/
console.log("\n--------Exercise-8------\n");
const inventoryCheck = food => {
    let storeArr= ["milk", "eggs", "cheese", "butter"];
    console.log(storeArr.includes(food));
  }
  inventoryCheck("cheese");
  inventoryCheck( "ham");


console.log("--------Exercise-9------");
// Extra work :)
// create a repo for this app. we are coming later to it :)
// Create a program that generate a random password with the length of 30 character, every time you call the function should give you a different password

// Examples you will have other passwords for sure

// passwordGen()  ➞ Y3mI9x7bvPY86T?oM§hIbgh!MLwA77N
// passwordGen()  ➞ Oy$tkBGoo5fg§mO4AdV&Kh8XXZR4d7K
// passwordGen()  ➞ v0ZwDrn@hfI€kOKWH§k6kqub6zfpuyP
// console.log("--------Exercise-10------");