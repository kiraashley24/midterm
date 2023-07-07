//Midterm - Functions


/*Question 1: Write a JavaScript function called reverseString that takes a string as
an argument and returns the reversed version of the string.*/

function reverseString(str){
    let reversedStrArray = [...str];
    reversedStrArray.reverse();
    let reversedStr = reversedStrArray.join('');
    return reversedStr;
}

/*Question 2: Write a JavaScript function called calculateBMI that takes a person's
weight (in kilograms) and height (in meters) as arguments and returns their body
mass index (BMI).*/

function calculateBMI(kg, meters){
    let weight = kg;
    let height = meters;
    let bmi = weight / (height * height);
    return bmi;

}

/*Question 3: Write a JavaScript function called capitalizeWords that takes a
sentence as an argument and returns the sentence with each word capitalized.*/

function capitalizeWords (str){
    let strArray = str.split(" ");
    let eachWord = strArray.map((word) => word.toUpperCase());
    let newString = eachWord.join(' ');
    return newString; 
    }
