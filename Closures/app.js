var addTo = function (passed) {
  var inner = 2;
  return passed + inner;
};

console.log(addTo(3)); // 5

// ====== solution ======
// Don't have to pass values in function directly

var passed = 3;

var addTo = function () {
  var inner = 2;
  return passed + inner;
};

console.log(addTo()); // 5
