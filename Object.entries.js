// Object entries()

const object1 = {
  a: { value: 1 },
  b: { value: 2 },
  c: { value: 3 }
};

for (let [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// expected output:
// "a: somestring"
// "b: 42"
// order is not guaranteed

let obj = {
  key1: "value1",
  key2: "value2",
  key3: "value3"
};

Object.entries(obj).forEach(entry => {
  let key = entry[0];
  let value = entry[1];

  console.log(key, value);
  console.log(entry[0]);
  console.log(entry[1]);
});

/*
    0: (2) ["key1", "value1"]
    1: (2) ["key2", "value2"]
    2: (2) ["key3", "value3"]
*/
