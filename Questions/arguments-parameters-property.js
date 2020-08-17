let functionProperty = function (a, b, c, d, e) {
  console.log(functionProperty.length); // 5
  console.log(arguments);
  console.log(arguments.callee.length); // 5
  if (arguments.length === functionProperty.length) {
    console.log(" we have a match ");
  } else {
    console.log(" no match ");
  }
};

// determine if the function received the number of params it expected
functionProperty(1); // no match
functionProperty(1, 2); // no match
functionProperty(1, 2, 3); // no match
functionProperty(1, 2, 3, 4); // no match
functionProperty(1, 2, 3, "params", ""); // we have a match

// ======== There's always length property for the function ========

// length is the property of the function that tells you how many things have been defined in "parameters"

// arguments is the array like structure of all the elements that have been passed and
// all the parameters that have been passed in to the function
// arguments.callee.length
