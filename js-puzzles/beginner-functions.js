'use strict';

// Q: What is the purpose of having a return statement inside of a function?

// Q: What is the difference between an argument and a parameter?

//What is the difference between global variables and local variables? Which one do we prefer and why?

//What is the function body?

//Take this following function for example. Is 'str' usable by other functions? Why or why not?
function myFunction(str, str2) {

}

myFunction(4, 5);

//Take this following code for example:
//================================================
var string = 'my string';

function someFunction(string) {
  var interiorString = 'my string also';
}

function someOtherFunction(string) {

}

//TODO - QUESTIONS ABOUT THIS CODE:
//Can someFunction() use the variable called string?

//Can someOtherFunction() use the variable interiorString?

//Can someOtherFunction() use the variable called string?

//IS someOtherFunction() using the variable called string?

//What would happen if we console.logged someFunction()?
//================================================

//TODO create a function called isBoolean that will take in a parameter and return whether or not the parameter is a boolean
// function isBoolean(userEntry) {
//
// }



//TODO create a function called isEven that will take in a parameter and return whether or not the parameter is an even number or not.