function isBoolean(input) {
  return typeof input === 'boolean';
}

function isNumeric(input) {
  if(!isBoolean(input) && input !== null) {
    return !isNaN(input);
  } else {
    return false;
  }
}

function isString(input) {
  return typeof input === 'string';
}

function isArray(input) {
  return input instanceof Array;
}

function isNegative(input) {
  return isNumeric(input) ? input < 0 : false;
}

function isPositive(input) {
  return isNumeric(input) ? input > 0 : false;
}

function increment(input) {
  return isNumeric(input) ? input+=1 : false;
}

function square(input) {
  return isNumeric(input) ? input * input : false;
}

function getHighestNumber(a,b,c) {
  let larger;
  if(isNumeric(a) && isNumeric(b) && isNumeric(c)) {

    if(a > b) {
      larger = a;
    } else {
      larger = b;
    }

    if(larger > c) {
      return larger;
    } else return c;

  } else return false;
}