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

