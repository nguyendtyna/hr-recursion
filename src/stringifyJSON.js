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

  // check if input is an array
  if (Array.isArray(obj)) {
    // if array is empty, return an empty array
    if (obj.length === 0) {
      return '[]';
    } else {
      // create a result array to contain stringed elements
      let stringified = [];
      // iterate through the array
      for (let i = 0; i < obj.length; i++) {
        // create an alias for the current element
        let item = obj[i];
        // recursively stringify each element and add to result array
        stringified.push(stringifyJSON(item));
      }

      // return result array of strings
      return `[${stringified}]`;
    }
  }

  // check if input is an object
  if (typeof obj === 'object') {
    // if object keys do not exist, return empty object
    if (Object.keys(obj).length === 0) {
      return '{}';
    }

    // create a result array to contain stringed elements
    let stringified = [];
    // iterate through the object keys
    for (let key in obj) {
      // create an alias for the current element
      let item = obj[key];
      // check for unstringifiable values
      if (typeof item === 'function' || item === undefined) {
        return '{}';
      } else {
        // recursively stringify each element and add key-value to result array
        stringified.push(`${stringifyJSON(key)}:${stringifyJSON(item)}`);
      }
    }
    // return result object of key-values as strings
    return `{${stringified}}`;
  }
};

// Assignment Complete