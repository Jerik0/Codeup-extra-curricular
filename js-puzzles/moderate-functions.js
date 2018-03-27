'use strict';

(function() {
//===========================================================
//TODO write a helper function called isEven that will determine if a number is even or not
  const isEven = (num) => {
    return parseInt(num) % 2 === 0;
  };

//===========================================================
//TODO write a helper function called reverse that takes in a string and returns the reverse of it
  const reverse = (str) => {
    let newString = [];
    for(let i = str.length-1; i>=0; i--) {
      newString.push(str[i]);
    }
    return newString.join('');
  };

//===========================================================
//TODO write a function called spaceString that takes in a string and returns a spaced version of the string
//TODO e.g. putting in 'string' would return 's t r i n g'
  const spaceString = (str) => {
    let newString = [];
    for(let i=0; i<str.length; i++) {
      newString.push(str[i]);
    }
    return newString.join(' ');
  };

//===========================================================
//TODO write a function called isPalindrome that takes in a string and returns a boolean whether or not that string is a palindrome

  const isPalindrome = (str) => {
    if(isEven(str.length)) {
      return str.substring(0, str.length/2).toLowerCase() === reverse(str.substring(str.length/2)).toLowerCase();
    } else {
      return str.substring(0, str.length/2).toLowerCase() === reverse(str.substring((str.length/2) + 1)).toLowerCase();
    }
  };

//===========================================================
//TODO write a function called cutString that takes in a string and an index, and returns that string minus any characters starting at index specified

  const cutString = (str, i) => {
    return str.substring(0,i);
  };

//===========================================================
//TODO create a function called isHex that will take in a string and return whether or not the input is a valid hex number (hint: look up regular expressions)

  const isHex = (str) => {
    if((str.charAt(0) === '#') && (str.length === 7 || str.length === 4)) {
      return ((str.match(/[a-f]/i) || str.match(/[0-9]/)) && !str.match(/[g-z]/i));
    }
    else return false;
  };

//===========================================================
//TODO write a function called fib that takes one number, and produces the fibonacci sum at that position in the fibonacci sequence. e.g. fib(8) ===> 13

  const fib = (num) => {
    if (num < 1) {
      return 1;
    }
    return fib(num - 1) + fib(num - 2);
  };

  // for(let i = 0; i < 15; i++) {
  //   console.log(fib(i));
  // }

//===========================================================
//TODO write a function called power that takes in two numbers, one is the base and the other is the power. It will return the result of the number at the specified power. e.g. power(2,4) ===> 16
  const power = (number, exponent) => {
    if (exponent === 0) return 1;
    if (exponent === 1) return number;
    return number * power(number, exponent - 1);
  };

//===========================================================
//TODO write a function called pyramid that creates a pyramid of numbers from 1 to 10.

  const pyramid = () => {
    for(let i = 0; i < 10; i++) {
      for(let j = 0; j < i; j++) {
        console.log(i);
      }
    }
  };

//===========================================================
//TODO write a function called isValidPass that will take in a password and return whether or not it is a valid password. It must be at least 8 characters, contain a special character(!@#$%^&*), at least one capital letter, and at least one number.

  const isValidPass = (str) => {
    if(str.length > 7 && str.match(/[A-Z]/)) {
      return str.match(/[a-z]/gi) !== null && str.match(/[0-9]/) !== null && str.match(/[!@#$%^&*()-_]/) !== null;
    } else return false;
  };
})();