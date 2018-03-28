const isTen = (num) => {
  return num === 10;
};

const double = (num) => {
  return num * 2;
};

const remove9s = (arr) => {
  arr.forEach(function(el, index) {
    if(el === 9) {
      arr.splice(index, 1);
    }
  });
  return arr;
};

const capitalizeName = (str) => {
    let frstNameLtr = str.charAt(0).toUpperCase();
  if(str.indexOf(' ') > -1) {
    let scndNameLtr = str.charAt(str.indexOf(' ') + 1).toUpperCase();
    let frstName = str.substring(1, str.indexOf(' ') + 1);
    let lastName = str.substring(str.indexOf(' ') + 2);
    return frstNameLtr + frstName + scndNameLtr + lastName;
  } else {
    let remChars = str.substring(1);
    return frstNameLtr + remChars;
  }
};

const capitalizeAllNames = (arr) => {
  arr.forEach(function(el) {
    capitalizeName(el);
  })
};

const countVowels = (str) => {
  let i = 0;
  for(let j = 0; j<str.length; j++) {
    if(str.charAt(j).match(/[aeiou]/i) !== null) {
      i++
    }
  }
  return i;
};

let sales = [
  {
    name: 'Bob',
    sales: 475
  },
  {
    name: 'George',
    sales: 320
  },
  {
    name: 'Louis',
    sales: 762
  },
];

const avgSales = (arr) => {
  let total = 0;
  arr.forEach(function(el) {
    total += el.sales;
  });
  return total / arr.length;
};

const analyzeWord = (str) => {
  return {word: str, numberOfLetters: str.length, numberOfVowels: countVowels(str)};
};

const analyzeAllWords = (arr) => {
  arr.forEach(function(el) {
    analyzeWord(el);
  });
};

let testArray = ['jon', 4, 'bob'];

let padArray = (arr, len, char) => {
  while(arr.length < len) {
    arr.push(char)
  }
  return arr
};

// let padArray = (a, l, c) => a.concat(new Array(a.length < l ? l - a.length : 0).fill(c));

console.log(padArray(testArray, 8, 'a'));
