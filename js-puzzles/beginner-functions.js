'use strict';

// Q: What is the purpose of having a return statement inside of a function?

// Q: What is the difference between an argument and a parameter?

//What is the difference between global variables and local variables? Which one do we prefer and why?

//What is the function body?

//Consider this following function. Is 'str' usable by other functions? Why or why not?
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

//IS someFunction() using the variable called string?

//Can someOtherFunction() use the variable interiorString?

//Can someOtherFunction() use the variable called string?

//IS someOtherFunction() using the variable called string?

//What would happen if we console.logged someFunction()?
//================================================

//TODO create a function called isBoolean that will take in a parameter and return a boolean telling whether or not the parameter itself is a boolean
// function isBoolean(userEntry) {
//
// }

// What is the purpose of 'calling' functions?

// How do we call functions; What specifically is it that calls it?
