//revealing module pattern
//Turn this object literal into a module that only exposes the render method

/*
 Modules return an object which contains the properties
 and methods to be used when the module is imported. 
 Revealed modules are also modules. 
 It just means that they are also providing access to some variable
 or property that would otherwise have been hidden.

*/

/*
let myModule = {
  data: [],
  render: () => {},
  add: () => {},
  remove: () => {},
};

myModule.render();
*/

// because there are all declared inside of a function
// they cease to exist after the function has finished running.
// if we want to be able to use them afterwards and use inside of myModule
// we have to return something from the function
let myModule = (function () {
  let _data = [];
  let _render = function () {
    // click listeners for _add and _remove
    console.log("1");
  };
  let _add = function () {
    _data.push(`adding data`);
    console.log("2");
  };
  let _remove = function () {
    _data.pop();
    console.log("3");
  };
  return {
    render: _render,
    // add: _add,
    // remove: _remove,
  };
})();
myModule.render();
myModule._data; // this will fail
myModule._add(); // this will fail
