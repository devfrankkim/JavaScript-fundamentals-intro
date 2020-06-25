// count

console.count("frank"); // frank: 1
console.count("frank"); // frank: 2
console.count("andrea"); // andrea: 1
console.count("andrea"); // andrea: 2
console.count("frank"); // frank: 3
console.count("andrea"); // andrea: 3

// time, timeEnd
// Useful to check the timing for codes

console.time("timer");
for (var i = 0; i < 1000000; i++) z = 5;
console.timeEnd("timer"); // timer: 13.7880859375ms

console.log(console);
