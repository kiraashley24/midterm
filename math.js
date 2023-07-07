//Midterm - Math

/*Question 1: Generate a random number between 1 and 100 (inclusive) using the
Math.random() function and round it to the nearest integer. Store the result in a
variable called randomNumber.*/

let randomNumber = Math.round(Math.random() * 101);

/*Question 2: Write a JavaScript function called calculateFactorial that takes a
number as an argument and returns its factorial.*/

function calculateFactorial(number){
    let factor = 1;
    if (number < 0){
        console.log("invalid number");
    }else if (number == 0){
        factor = 1;
    }else{
        for (i = 1; number >= i; i++){
            factor *= i; 
            }
    }  
    return factor;
    }


/*Question 3: Write a JavaScript function called calculatePower that takes two
numbers, base and exponent, as arguments and returns the result of base raised to
the power of exponent.*/

function calculatePower (base, exponent){
    if (exponent ==0){
        return 1;
    }else{
        return base * calculatePower(base, exponent - 1);
    }
    
}
