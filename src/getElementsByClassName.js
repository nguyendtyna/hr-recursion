// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // console.log(document);

  // define a result array to contain child elements of given class name

  // define inner function to check the class name
  var checkClassName = function() {
    // check if the body element has a class
    // check if the class is equal to className
      // add the body element to results

    // check if the body element has a child node
      // iterate through each child node to check the class name
        // call checkClassName recursively on current child node
  };

  // invoke inner function
  // return result array
};

/*
(MDN) Document Body Element
- the HTML body element represents the content of an HTML document
- document.body property represents the body node of the current document
- document.body returns the body element
*/