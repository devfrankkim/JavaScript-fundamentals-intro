for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    // true
    continue;
  }
  // false
  console.log(i); // 0, 2, 4, 6, 8, 10
}

for (let i = 0; i < 11; i++) {
  if (i % 2 === 0) {
    console.log(i); // 0, 2, 4, 6, 8, 10
  }
}

for (let i = 0; i < 11; i++) {
  if (i > 7) {
    // true
    break;
  }
  // false
  console.log(i); // 0, 1, 2, 3, 4, 5, 6, 7
}
