// Math (ceil, floor, random, min, max)
// Standard built-in objects - always available

const number = 1.99999;
const result = Math.floor(number); // 1
const resultfloor = Math.floor(4.9123); // 4
const resultCeil = Math.ceil(8.11111); // 9
const resultSqrt = Math.sqrt(25); // 5

const resultPI = Math.PI;
const resultMin = Math.min(1, 3, 5, 7, 9); // 1
const resultMax = Math.max(1, 3, 5, 7, 9); // 9

const resultRandom = Math.random(); // never going to be 1  => 0 ~ 0.99999xxxxxxxx

const resultRandom10 = Math.random() * 10; // 0 ~ 9.99999xxxx
const floorRandom = Math.floor(Math.random() * 10); // 0 ~ 9

const floorRandomSolution1 = Math.ceil(Math.random() * 10); // 1 ~ 10
const floorRandomSolution2 = Math.floor(Math.random() * 10) + 1; // 1 ~ 10
