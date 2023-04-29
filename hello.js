let length = 0
const antonyInput = "{a, b, c}";
const setOfLetters = antonyInput.slice(1, -1).split(", "); // to remove off curly brace and convert string into arrays
console.log(setOfLetters)
if(setOfLetters[0]=== '' || setOfLetters[0]=== ' ' && setOfLetters.length==1){
length = 0
} else {
    const distinctLetters = new Set(setOfLetters); // Set doesn't allow duplicate entries
    length = distinctLetters.size; // length of set
}
console.log(length)