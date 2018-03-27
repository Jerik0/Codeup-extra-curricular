"use strict";
(() => {
//===========================================================
//TODO write a function called capitalize that will take in a string and return a capitalized version of that string. If it's already capitalized then return the string with no changes.

  const capitalize = (str) => {
    let firstChar = str.charAt(0).toUpperCase();
    let otherChars = str.substring(1);
    return firstChar + otherChars;
  };

//===========================================================
//TODO write a function called cutStringOnce that takes in a string and an index which to cut from, and returns only the remaining part of the string from the beginning to the index which was given. e.g. 'string, 3' passed in would return 'str'

  const cutStringOnce = (str, i) => {
      return str.substring(0, i);
  };

//===========================================================
//TODO refactor the function to take in a string and *two* indices, the first one representing the starting point and the second representing the end point (that will not be included in the result). If two indices are given, it returns the string between the indices. If only one index is given, it returns the string from the beginning to that index.

  const cutString = (str, i, j) => {
    return j ? str.substring(i, j) : str.substring(0, i);
  };

//===========================================================
//TODO write a function called removeChar that will take in a string and a character to remove, and will return the string minus the character that was specified to remove. e.g. 'string, i' would return 'strng'

  const removeChar = (str, char) => {
    return str.split(char).join('');
  };

//===========================================================
//TODO write a function called containsVowels that will return true or false depending on if the string given contains vowels.

  const containsVowels = (str) => {
    return !!str.match(/[aeiou]/i);
  };
})();