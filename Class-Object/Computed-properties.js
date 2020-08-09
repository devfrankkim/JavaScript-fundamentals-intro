// ========== Computed properties ==========
// key should be always String
// computed properties -> decided in Runtime

console.log(frank.name); // frank
console.log(frank["name"]); // frank

frank["hasJob"] = true;
console.log(frank.hasJob); // true

function printValue(obj, value) {
  console.log(obj.value); // "Direct from object"
  console.log(obj[value]); // frank -> for getting dynamic values
}
printValue(objFrank, "name");

function objectBracket(key, value) {
  console.log(key.value);
  console.log(key[value]);
  let obj = {};
  obj[key] = value;
  return obj;
}

function objES6(key, value) {
  return {
    [key]: value,
  };
}
objectBracket("frank", 30); //  {frank: 30}
objES6("frank", 30); // {frank: 30}
