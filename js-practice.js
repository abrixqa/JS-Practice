// The opposite of a number
function opposite(num){
    return -num;
}

// Difference of squares
function differenceOfSquares(num1, num2){
    return num1 ** 2 - num2 ** 2;
}

//Area and perimeter of a triangle
function triangle(a, b, c){
    return [a + b + c, ((a + b + c) /2 * ((a + b + c) /2 - a) * ((a + b + c) /2 -  b) * ((a + b + c) /2 - c)) ** 0.5 ];
}

//Time in seconds
function time(hour, minutes, seconds){
    return hour * 60 ** 2 + minutes * 60 + seconds;
}

//Reverse sentence
function revString(str) {
    // Create a variable to hold the reversed string
    let reversed = '';
    // Iterate through the input string, backwards
    for (let i = str.length - 1; i >= 0; i--) {
        // Check if the current character is a letter or not
        if (str[i].match(/[a-z]/i)) {
            // If it's a letter, add it to the reversed string
            reversed += str[i];
        } else {
            // If it's not a letter, add the original character to the reversed string
            reversed += str[i];
        }
    }
    // Iterate through the input string
    for (let i = 0; i < str.length; i++) {
        // Check if the current character is uppercase or lowercase
        if (str[i] === str[i].toUpperCase()) {
            // If it's uppercase, make the corresponding character in the reversed string uppercase
            reversed = reversed.slice(0, i) + reversed[i].toUpperCase() + reversed.slice(i + 1);
        } else {
            // If it's lowercase, make the corresponding character in the reversed string lowercase
            reversed = reversed.slice(0, i) + reversed[i].toLowerCase() + reversed.slice(i + 1);
        }
    }
    return reversed;
}
console.log(revString('hello World!'));// 'olleh Drlow!'
console.log(revString('Start for Free')); //"Trats rof Eerf"



