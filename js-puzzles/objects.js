"use strict";

//What is dot notation?
// var car = {};
// car.miles = 50;
// car.tires = 'Firestone;';

// What is object literal notation?
let cars = [
  {
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
  },
  {
    'make': {
      'year': [2017,2018,2019],
      'trim': 'sport',
      'name': 'Chevy'
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
  }
];

//How would we print '2017 Toyota Titan' to the console, if the console log is outside of the object?
for(var i = 0; i < cars.length; i++) {
  console.log(cars[i].make.year[0] + " " + cars[i].make.name + " " + cars[i].model.name);
}

cars.forEach(function(el, index) {
  console.log(el.make.year[0] + " " + el.make.name + " " + el.model.name);
});

//How would we print the same thing to the console, if the console log is *inside* of the object?


//How do we make a function that creates a car object?

//Where are we sending the objects once they are created?
//How do we send those objects to the magical storage place?
//which properties are there?
//Are we adding to the beginning or the end? How do we do that?


function createCar(make, model, color) {
  cars.push({
    make: make,
    model: model,
    color: color
  })
}

createCar('Subaru', 'Outback', 'White');
createCar('Nissan', '350z', 'Blue');

console.log(cars);

var circle = {
  radius: 3,
  getArea: function() {
    return Math.PI * (this.radius * this.radius);
  },
  getDiameter: function() {
    return this.radius * 2;
  },
  getCircumference: function() {
    return this.getDiameter() * Math.PI;
  }
};

//What would this output be? Why?
console.log(circle);

//What about this output?
console.log(circle.getCircumference());

//Could we write the area of the circle like this? Why or why not?
var circle2 = {
  radius: 3,
  area: this.radius * 2 //Think about what the 'this' keyword means on *this specific line*
};

//What would this output be? Why?
console.log(circle2.area);

//How would we log the area of the circle to the console?

//What does the 'this' keyword signify? When can we use it? When *can't* we use it?