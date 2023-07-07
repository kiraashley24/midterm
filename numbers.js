//Midterm - Numbers

/*Question 1: Calculate the square root of a given number and store the result in a
variable called result.*/

//Example of given number goes between parenthesis

let result = Math.sqrt();


/*Question 2: Write a JavaScript function called isPrime that takes a number as an
argument and returns true if it is a prime number and false otherwise.*/

function isPrime(number){
    if (number <= 1){
        return false;
    }else if (number == 2){
        return true;
    }else if (number > 2){
        for (let i = 2; i <= number; i++){
            if (number % i == 0){
                return false;
            }
            else if (number % i !== 0){
                return true;
            }
        }
    }
}

/*Question 3: Write a JavaScript function called generateRandomNumber that takes
two numbers, min, and max, as arguments and returns a random number between
min and max*/

function generateRandomNumber(min, max){
    let number = Math.random(min) * max;
    return number;
}
