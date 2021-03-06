// 11. XO Create a function that takes a string,
// checks if it has the same number of ’x’s and ’o’s
// and returns either true or false.
// Notes:
// Return a boolean value (true or false).
// The string can contain any character.
// When neither an x nor an o is in the string, return true.
// Examples:
// isEqualNumXandO(“ooxx”) ➞ true
// isEqualNumXandO(“xooxx”) ➞ false
// isEqualNumXandO(“ooxXm”) ➞ true (case insensitive)
// isEqualNumXandO(“zpzpzpp”) ➞ true (returns true if no x and o)
// isEqualNumXandO(“zzoo”) ➞ false

const isEqualNumXandO = (str) =>{
    let newStr = str.toLowerCase();
    let counterX = 0;
    let counterO = 0;
    for(let i = 0;i<newStr.length; i++){
        if (newStr[i] == "o"){
            counterO++;
        }
        if (newStr[i] == "x"){
            counterX++;
        }
    }
    if (counterX == counterO){
        return true;
    }else {
    return false;
    }
}

console.log(isEqualNumXandO("ooxx")); // ➞ true
console.log(isEqualNumXandO("xooxx")); // ➞ false
console.log(isEqualNumXandO("ooxXm")); // ➞ true (case insensitive)
console.log(isEqualNumXandO("zpzpzpp")); // ➞ true (returns true if no x and o)
console.log(isEqualNumXandO("zzoo")); // false


// €22.35 + 10% tip
// €26.67 + 15% tip
// €35.92 + 20% tip
// Calculate the three bills including tips: 
// €22.35 + 10% tip €26.67 + 15% tip €35.92 + 20% tip

// happy coding muscle

// let bill = 0;
// let tip = 0;

const bill = (bilOne, billTwo, billThree) => {
    const tenP = 1.1;
    const fifteenP = 1.15;
    const twentyenP = 1.20;

}
