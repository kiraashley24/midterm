//Midterm - Loops and Iterations


/*Question 1: Write a while loop that prints the numbers from 1 to 20.*/

let i = 1;
while (i <= 20){
    console.log(i);
    i++;
}

/*Question 2: Write a JavaScript function called calculateSum that takes a positive
integer n as an argument and returns the sum of all numbers from 1 to n.*/

function calculateSum(n){
    let sum = 0;
    n = Math.round(n);

    if (n > 0){
        for (i = 1; i <= n; i++){
            sum += i;
        }
        return sum;
    }else{
        console.log("not a positive integer");
    }
}

/*Question 3: Write a JavaScript function called calculateFactorialIterative that
takes a positive integer n as an argument and calculates its factorial using a loop
instead of recursion.
*/

function calculateFactorialIterative (n){
    let factor;
    let number = Math.round(n);

    if (number <= 0){
        console.log("not a positive number");
    }else{
        for (i = 1; number >= i; i++){
            factor *= i; 
            }
    }  
    return factor;
}

