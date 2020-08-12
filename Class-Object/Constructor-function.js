// ========== Constructor function ==========
// What if we just have a template to pass datas?
// [template]

let person5 = new Person("wes", 10);

function Person(name, age) {
  // 1. Create an Object 'this' -> this= {}
  // 2. Insert the Properties - (name, age)
  // 3. Return this

  // (1) this = {};
  // (2) this -> {name: 'name', age: 'age'}

  this.name = name;
  this.age = age;

  // (3) return this
}
