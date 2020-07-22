// Q1. make a string out of an array
// String -> Array

let fruits = ["apple", "banana", "orange"];

let fruitsToString = fruits.toString();

console.log(fruitsToString); // "apple,banana,orange"

// Q2. make an array out of a string
// Array -> String
// * Split a string into substrings using the specified separator and return them as an array.

let fruits = "🍎, 🥝, 🍌, 🍒";
let fruitArray = fruits.split();
console.log(fruitArray); // ["🍎, 🥝, 🍌, 🍒"]

// Q3. make this array look like this: [5, 4, 3, 2, 1]

let array = [1, 2, 3, 4, 5];
let arrayReverse = array.reverse();

console.log(arrayReverse); // (5) [5, 4, 3, 2, 1]

// Q4. make new array without the first two elements
// splice returns the deleted elements

let array = [1, 2, 3, 4, 5];

let answer = array.splice(2);
console.log(answer); // (3) [3, 4, 5]

// Q5. find a student with the score 90

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
let students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

let studentsFind = students.find((element) => element.score === 90);

console.log(studentsFind); // // Student {name: "C", age: 30, enrolled: true, score: 90}

// Q6. make an array of enrolled students

let enrolledStudents = students.filter((element) => element.enrolled);

console.log(enrolledStudents);
/*
    0: Student {name: "A", age: 29, enrolled: true, score: 45}
    1: Student {name: "C", age: 30, enrolled: true, score: 90}
    2: Student {name: "E", age: 18, enrolled: true, score: 88}
*/

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]

let scores = students.map((element) => element.score);
console.log(scores); // (5) [45, 80, 90, 66, 88]

// Q8. check if there is a student with the score lower than 50

let filterdLowerThan50 = students.filter((element) => element.score < 50);
console.log(filterdLowerThan50); // 0: Student {name: "A", age: 29, enrolled: true, score: 45}

// Q9. compute students' average score
let scoreAverage =
  students
    .map((element) => element.score)
    .reduce((a, b) => {
      return a + b;
    }) / students.length;

console.log(scoreAverage);

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'

let scoresString = scores.toString();

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'

let scoreSort = scores.sort().toString();

let studentsReduce = students.reduce((a, b, index, array) => {
  //https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
  //index: 처리할 현재 요소의 인덱스. initialValue를 제공한 경우 0, 아니면 1부터 시작.
  // index: initialValue ? 1 : 0

  //   console.log("a,b", a, b);
  //   console.log("array[index]:", index);
  //  console.log('a:', a, "리듀스변수: ",  a.score, b.score, a.score + b.score);
  //   if (index === 0) {
  //     return b.score;
  //   } else

  if (index === array.length - 1) {
    // console.log("index:", index);
    // console.log("a:", a);
    // console.log("b:", b);
    // console.log("b.score:", b.score);
    // console.log("array:", array);
    return (a + b.score) / array.length;
  }
  return a + b.score;
}, 0);
console.log(studentsReduce);
