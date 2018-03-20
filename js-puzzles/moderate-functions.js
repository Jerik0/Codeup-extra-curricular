'use strict';

(function() {

//TODO write a function called spaceString that takes in a string and returns a spaced version of the string
//TODO e.g. putting in 'string' would return 's t r i n g'
  const spaceString = (str) => {

  };

//TODO write a function called isPalindrome that takes in a string and returns a boolean whether or not that string is a palindrome

//TODO write a function called cutString that takes in a string and an index, and returns that string minus any characters starting at index specified

//TODO create a function called isHexColor that will take in a string and return whether or not the input is a valid hex number (hint: look up regular expressions)

  const isHexColor = (str) => {
    if(str.charAt(0) === '#' && ((str.length === 7) || (str.length === 4))) {
      return ((str.match(/[a-f]/i) || str.match(/[0-9]/)) && !str.match(/[g-z]/));
    }
    else return false;
  };

  console.log(isHexColor('#f00'));
})();