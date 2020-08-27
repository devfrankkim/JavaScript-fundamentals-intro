/**
 * Create an example of a JavaScript Singleton.
 * After the first object is created, it will return additional
 * references to itself
 */

let obj = (function () {
  let objInstance; //private variable
  function create() {
    //private function to create methods and properties
    let _isRunning = false;
    let start = () => {
      {
        _isRunning = true;
      }
    };
    let stop = () => {
      {
        _isRunning = false;
      }
    };
    let currentState = () => {
      {
        return _isRunning;
      }
    };
    return { start: start, stop: stop, currentState: currentState };
  }

  return {
    getInstance: () => {
      if (!objInstance) {
        objInstance = create();
      }
      console.log(objInstance); // {start: ƒ, stop: ƒ, currentState: ƒ}
      return objInstance;
    },
  };
})();

let obj1 = obj.getInstance();
let obj2 = obj.getInstance();

obj1 === obj2; // true

obj1.currentState(); // false
obj2.start();
obj1.currentState(); // true
obj2.currentState(); // true
