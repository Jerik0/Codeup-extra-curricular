"use strict";

//TODO write a function called compareNumbers that will take in two numbers and return the difference between them
const compareNumbers = (a, b) => {
  return a - b;
};

//TODO write a function called findCircumference that will take in a diameter and return the circumference

const findCircumference = d => {
  return parseFloat((d * Math.PI).toFixed(2));
};

//TODO write a function called factorsOf that returns the factors of a number.
const factorsOf = num => {
  let factsArr = [num]; //we insert the given number here, because the number is always a factor of itself.
  for(let i = num; i>0; i--) { //loop backwards from num to 0
    for(let j = 0; j<num; j++) { //for every number in the parent loop, loop from 0 to num
      if((j*i) === num && (factsArr.indexOf(i) === -1) && (factsArr.indexOf(j) === -1)) { //if the two numbers coincide to make num, and they don't exist in the array, add them to the array.
        // console.log(`j is ${j}, and i is ${i}, together they total ${j*i}`);
        factsArr.push(j);
        factsArr.push(i);
      }
    }
  }
  factsArr.push(1); //add 1 to the array, because it is always included in the factors.
  return factsArr.sort(compareNumbers);
};

const commonDivisors = (a, b) => {
  let common = [];
  factorsOf(a).forEach(function(el) {
    factorsOf(b).forEach(function(el2) {
      if(el === el2) {
        common.push(el);
      }
    });
  });
  return common;
};

const trinomial = (a, b) => {
  let factors = [];
  let compare = [];
  commonDivisors(a, b).forEach((el, index) => {
    compare.push(el + commonDivisors(a, b)[index+1]);
  });
};

console.log(commonDivisors(55, 110));

