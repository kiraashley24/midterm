//Midterm - Boolean

/*Question 1: Write a condition that checks whether a variable isRaining is true and
a variable isSunny is false. Store the result in a variable called shouldStayInside.*/

let isRaining;
let isSunny;
let shouldStayInside;

if (isRaining == true && isSunny != true){
    shouldStayInside = true;
}else{ 
    shouldStayInside = false;
}
//could create if, else ifs, and else when checking every variation, but this just checks if isRaining is true and isSunny is false.


/*Question 2: Write a JavaScript function called hasPermission that takes two
boolean parameters, isUserLoggedIn and isAdmin, and returns true if the user has
permission and false otherwise.*/

function hasPermission (isUserLoggedIn, isAdmin){
    if (isUserLoggedIn == true && isAdmin == true){
        return true;
    }else{
        return false;
    }
}
/*Question 3: Write a JavaScript function called hasUniqueCharacters that takes a
string as an argument and returns true if all characters in the string are unique and
false otherwise.*/

function hasUniqueCharacters (str){
    let strArray = [...str];

    for (i = 0; i <= strArray.length; i++){
        
        for(a = i + 1; a < strArray.length; a++){
            if (strArray[i] == strArray[a]){ 
                return false; 
            }
            }
        }return true;   
}
