//Midterm - Operators

/*Question 1: Given the variables a = 10 and b = 3, what is the value of the
following expression: a % b?*/

//ANSWER: 1

/*a = 10;
b = 3;
console.log(a % b);*/

/*Question 2: Write a JavaScript function called isInRange that takes a number as
an argument and returns true if it falls within a specific range (e.g., between 10
and 20) and false otherwise.*/

function isInRange(number){
    if (number >=10 && number <= 20)
        return true;
    else
        return false;
}

/*Question 3: Given the variables a = 5, b = 3, and c = 2, what is the value of the
following expression: a > b || c < b && a === c?
*/

//ANSWER: true

/*
c = 2;
console.log(a > b || c < b && a === c);*/