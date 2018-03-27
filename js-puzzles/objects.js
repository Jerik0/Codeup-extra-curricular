"use strict";

//What is dot notation?

//What is object literal notation?

let car = {
  'make': {
    'year': [2017,2018,2019],
    'trim': 'sport',
    'name': 'Toyota'
  },
  'model': {
    'type': 'pickup',
    'name': 'Titan'
  },
  'miles': 0,
  'speed': 0,
  'addYear': function(year) {
    this.year.push(year);
  },
};

//How would we print '2017 Toyota Titan' to the console?

//How do we make a function that creates a car object?