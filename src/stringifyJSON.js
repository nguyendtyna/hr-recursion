// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  // check if input is a number type
  if (typeof obj === 'number') {
    return `${obj}`;
  }

  // check if input is null
  if (obj === null) {
    return `${obj}`;
  }

  // check if input is a boolean
  if (typeof obj === 'boolean') {
    return `${obj}`;
  }

  // check if input is a string
  if (typeof obj === 'string') {
    return `"${obj}"`;
  }
};
