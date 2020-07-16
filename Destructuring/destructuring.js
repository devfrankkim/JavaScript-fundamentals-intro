let oldFamily = {
  status: {
    name: "frank",
    age: 20,
  },
  getFamily: function () {
    this.status.age--;
    return this.status.age;
  },
};

oldFamily.getFamily(); // 19

// ====== Destructuring + new syntax ======

let newFamily = {
  status: {
    name: "frank",
    age: 20,
  },
  getFamily() {
    this.status.age--;
    return this.status.age;
  },
};

const {
  getFamily,
  status: { age },
} = newFamily;

var A = { name: "frank" };
var B = { name: "andrea" };

var { name: nameA } = A;
var { name: nameB } = B;

console.log(nameA);
// frank
console.log(nameB);
// andrea
