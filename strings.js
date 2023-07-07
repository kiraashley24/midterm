//Midterm - Strings


/*Question 1: Given the string "Hello, World!", write code to convert it to
uppercase and store the result in a variable called uppercaseString.*/

thisString = "Hello, World!";
uppercaseString = thisString.toUpperCase();

/*Question 2: Write a JavaScript function called countVowels that takes a string as
an argument and returns the number of vowels present in the string.*/

function vowels (str){
    let lowerStr = str.toLowerCase();
    let lowerArray = [...lowerStr];
    let vowelCount = 0;

    for(i = 0; i <= lowerArray.length; i++){
        switch (lowerArray[i]){
            case 'a': 
            vowelCount += 1;
            break;
            case 'e': 
            vowelCount += 1;
            break;
            case 'i': 
            vowelCount += 1;
            break;
            case 'o': 
            vowelCount += 1;
            break;
            case 'u': 
            vowelCount += 1;
            break;
            default:
                break;
        }
        
    }console.log(vowelCount);
}

/*Question 3: Write a JavaScript function called truncateString that takes a string
and a number maxLength as arguments and returns a truncated version of the
string if it exceeds maxLength, appending an ellipsis ("...") at the end.*/

function truncateString (str, maxLength){
    if (str.length <= maxLength){
        return str;
    }else {
        let strSlc = str.slice(0, maxLength);
        let truncStr = strSlc + "...";
        return truncStr;
    }
}
