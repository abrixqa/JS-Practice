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





//Find the Square Root
function squareRoot(x) {
    return +((x ** .5).toFixed(5))
}




//Discover the original price
function discoverOriginalPrice(discountedPrice, salePercentage){
    return Number((discountedPrice / (1 - (salePercentage / 100))).toFixed(2))
}




//Area of a Square
function squareArea(A){
    return +Math.pow(2 * A / Math.PI, 2).toFixed(2);
}




//Arithmetic average
function average(a, b){
    return (( a + b )/2).toFixed(2);
}




//Geometric mean
function geometricMean(a, b){
    return Math.sqrt(a*b).toFixed(2);
}




//Area of a circle
function circleArea(r){
    return Math.round(Math.PI * Math.pow(r, 2));
}





//Area of a ring bounded by two circles
function ringArea(r1, r2){
    return Math.floor(Math.PI * Math.pow(r1, 2) - Math.PI * Math.pow(r2, 2));
}





// The hypotenuse of a right triangle is always the side opposite the right angle. It is the longest side in a right triangle
function hypotenuse(a, b){
    let c = Math.pow(a, 2) + Math.pow(b, 2);
    return Math.ceil(Math.sqrt(c));
}





// Find the area of a circle if the circumference is known.
// circle_Area(16) should return 20
function circle_Area(circleLength){
    let r = circleLength/(Math.PI * 2);
    return Math.round(Math.PI * Math.pow(r, 2));
}




// Write a function that will return the second letter in the string, but doesn't count the spaces in the string as the first letter.
// Write code without using methods.
function getSecondLetter(str) {
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if ( str[i] !== ' ') {
            count++;
        }
        if (count === 2){
            return str[i];
        }
    }
}
console.log(getSecondLetter(' florida'));

//or

function getSecondNonSpaceSymbol(str){
    let i = 0;
    while ( i < str.length && str[i] === ' ')
       i++;
    return i + 1 < str.length ? str[i+1] : undefined;
}

function convertToCelsius (fahrenheit) {
    var celsius = (fahrenheit - 32) * (5/9)
    if (celsius < 0)
        return (celsius + " is freezing temperature")
    else
        return (celsius + " is above freezing temperature")
}
console.log(convertToCelsius(50))

