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
    let halfOne;
    let halfTwo;
    if(isEven(str.length)) {
      halfOne = str.substring(0, str.length/2);
      halfTwo = reverse(str.substring(str.length/2));
    } else {
      halfOne = str.substring(0, (str.length/2));
      halfTwo = reverse(str.substring((str.length/2) + 1));
    }
    return halfOne.toLowerCase() === halfTwo.toLowerCase();
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
      return ((str.match(/[a-f]/i) || str.match(/[0-9]/)) && !str.match(/[g-z]/));
    }
    else return false;
  };

//===========================================================
//TODO create a function called makePlural that will take in a string as a parameter and will make it plural if it is not already plural
  const makePlural = (str) => {
    switch(str) {
      case 'goose': {
        return 'geese';
      }
      case 'moose': {
        return 'moose';
      }
      case 'child': {
        return 'children';
      }
      case 'deer': {
        return 'deer';
      }
      case (str.charAt(str.length-1) === 's'): {
        return (str + 'es');
      }
      default: {
        return (str + 's');
      }
    }
  };

//===========================================================
})();