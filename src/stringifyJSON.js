// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  // check if input is a number, boolean or null
  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    return `${obj}`;
  }

  // check if input is a string
  if (typeof obj === 'string') {
    return `"${obj}"`;
  }
};
