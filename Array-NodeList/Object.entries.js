/*
    The Object.entries() method returns an array of a given object's own enumerable 
    string-keyed property [key, value] pairs, 
    in the same order as that provided by a for...in loop. 
    
    The only important difference is that 
    for...in loop enumerates properties in the prototype chain as well
*/

var obj = {
  name: "frank",
  rank: "CEO",
  age: 10,
};

Object.entries(obj).forEach((entry) => {
  console.log(entry);
  var [key, value] = entry;
  console.log(key, value);
});

/*
(2) ["name", "frank"] 
name frank
(2) ["rank", "CEO"]
rank CEO
(2) ["age", 10]
age 10
*/
