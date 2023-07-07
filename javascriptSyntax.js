//Midterm - JavaScript Syntax



/*Question 1: Identify and correct the syntax errors in the following code:
var number = 10;
console.log (Number + 5);
*/

//we usually use let instead of var in this class
var number = 10;
console.log (number + 5);

/*Question 2: Write a JavaScript function called isEven that takes a number as an argument
and returns true if the number is even and false if it is odd.*/

function isEven (number){
    if (number % 2 == 0){
    return true;
    }else if (number % 2 !== 0){
    return false;
    }
}
/*Question 3: Write a JavaScript function called isPalindrome that takes a string as an
argument and returns true if it is a palindrome (reads the same forwards and backwards)
and false otherwise.
*/

function isPalindrome (string){
    let stringArray = [...string];
    let reversedStringArray = [...string];
    reversedStringArray.reverse();
    let reversedString = reversedStringArray.join('');
    
    if (string == reversedString){
        return true;
    }else if (string !== reversedString){
        return false;
    }  
}
