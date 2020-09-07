let a = {
  getContext: function () {
    setTimeout(function () {
      console.log(this);
    }, 100);
  },
};
a.getContext(); // Window

a = {
  getContext: function () {
    setTimeout(() => {
      console.log(this);
    }, 100);
  },
};

a.getContext(); // {getContext: ƒ}

function Friend(name, age) {
  this.name = name;
  this.age = age;
  this.getContext = this;
}

let frank = new Friend("frank", 30);
frank.getContext; // Friend {name: "frank", age: 30, getContext: Friend}

function getMenu() {
  return this;
}
let devMenu = { menu: "BBQ" };
let hrMenu = { menu: "salad" };
let managerMenu = { menu: "fasting" };

let forDev = getMenu();
forDev; // Window

// bind RETURNS a function
forDev = getMenu.bind(devMenu);
forDev(); // {menu: "BBQ"}

let forHR = getMenu.call(hrMenu);
forHR; // {menu: "salad"}

let forManager = getMenu.apply(managerMenu);
forManager; // {menu: "fasting"}

/*
The Basics: Call vs Apply
The difference between call() and apply() is that 
call() passes all arguments after the first one on to the invoked function, 
while apply() takes an array as its second argument and passes the members of that array as arguments. 
The following have the same effect.

someFunc.call(thisArg, 1, 2, 3) VS someFunc.apply(thisArg, [1, 2, 3])
someFunc.apply(null, array);
someFunc( …array) //same result as the previous example

call() and apply() invoke the function immediately 
where bind() returns a function that we can pass around or store as needed.
When invoked, the bound function will always execute in the context provided as the this argument.
*/
