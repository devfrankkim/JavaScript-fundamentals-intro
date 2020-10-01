// ========== problems =========
var contact = {
  firstName: "frank",
  printName: function () {
    // console.log(firstName);  // firstName is not defined
    console.log(contact.firstName);
  },
};

contact.printName(); // frank

var newContact = contact;
contact = null;
newContact.printName(); // Cannot read property 'firstName' of null

// ============= What if there's super keyword to point to any variables? ===========

var contact = {
  firstName: "frank",
  printName: function () {
    console.log(this.firstName);
  },
};
contact.printName(); // frank

var one = contact;
var two = contact;
var anyKeyword = contact;

contact = null;

one.printName(); // frank
two.printName(); // frank
anyKeyword.printName(); // frank

// =========   who's invoking the function?   ========
var contact = {
  firstName: "frank",
  printName: function () {
    console.log(this.firstName);
  },
};
function add(x, y, callback) {
  console.log(x + y);
  callback();
}
add(1, 2, contact.printName); // 3, undefined
