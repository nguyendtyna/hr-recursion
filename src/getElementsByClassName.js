// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // console.log(document);

  // define a result array to contain child elements of given class name
  let elements = [];

  // define inner function to check the class name
  var checkClassName = function(bodyElement) {
    // check if the body element has a class and if the class equals className
    if (bodyElement.classList && bodyElement.classList.contains(className)) {
      // add the body element to results
      elements.push(bodyElement);
    }

    // check if the body element has a child node
    if (bodyElement.childNodes) {
      // create alias for child nodes
      let children = bodyElement.childNodes;
      // iterate through each child node to check the class name
      children.forEach(function(element) {
        // call checkClassName recursively on each child node
        checkClassName(element);
      });
    }
  };

  // invoke inner function
  checkClassName(document.body);
  // return result array
  return elements;
};

/*
(MDN) Document Body Element
- the HTML body element represents the content of an HTML document
- document.body property represents the body node of the current document
- document.body returns the body element
- <element>.classList returns a collection of class attributes of the element
- <element>.childNodes returns a collection of child nodes of the given element
*/

// Assignment Complete