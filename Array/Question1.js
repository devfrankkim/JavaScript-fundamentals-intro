// Q1. make a string out of an array

// toString(),  join()
/*
* Adds all the elements of an array *separated by the specified separator* string.
* @param separator A string used to separate one element of an array from the next in the resulting String.
* If omitted, the array elements are separated with a comma.

join(separator?: string): string;

  */

{
  let fruits = ["apple", "banana", "orange"];
  let result = fruits.join();
  let resultSeperator = fruits.join(", and |");
  console.log(result); // apple,banana,orange
  console.log(resultSeperator); // apple, and |banana, and |orange
}

// Q2. make an array out of a string
{
  let fruits = "apple, banana, orange";
  let fruitArray = fruits.split(); // (1) ["apple, banana, orange"]
  fruits.split(","); // (3) ["apple", " banana", " orange"]
  fruits.split(""); //  (21) ["a", "p", "p", "l", "e", ",", " ", "b", "a", "n", "a", "n", "a", ",", " ", "o", "r", "a", "n", "g", "e"]
  fruits.split(",", 2); // (2) ["apple", " banana"]
  fruits.split(",", 1); // () ["apple"]
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  //  reverse(): T[];

  let array = [1, 2, 3, 4, 5];
  array.reverse();
}

// Q4. make new array without the first two elements
{
  // Deep Copy
  // splice(start: number, deleteCount?: number): T[];
  // How many elements do you want to delete?
  // Return the deleted elements

  let array = [1, 2, 3, 4, 5];
  let answer2 = array.splice(0); // []
  let answer = array.splice(2); // (3) [3, 4, 5]
  let answer1 = array.splice(0, 2); // (2) [1, 2]

  // Shallow Copy
  // slice(start?: number, end?: number): T[];
  //  This is "exclusive" of the element at the index 'end'.
  let array1 = [1, 2, 3, 4, 5];
  let newArray = array1.slice(0, 2); // (2) [1, 2]
  let newArray1 = array1.slice(2); // (3) [3, 4, 5]
  let newArray1Same = array1.slice(2, 5); // (3) [3, 4, 5]
}

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

// Q5. find a student with the score 90
//    * Returns the value of the first element in the array where predicate is true, and undefined
// * otherwise.
{
  let studentsFind = students.find((element) => element.score === 90);
}

// Q6. make an array of enrolled students
{
  let enrolledStudents = students.filter((element) => element.enrolled);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  let scores = students.map((element) => element.score);
}

// Q8. check if there is a student with the score lower than 50
{
  // some(callbackfn: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
  // every(callbackfn: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;

  let resultSome = students.some((student) => student.score < 50); // true
  let resultEvery = students.every((student) => student.score < 60); // false
  !students.every((student) => student.score < 60); // true
}

// Q9. compute students' average score
{
  // reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
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
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  let resultJoin = students.map((student) => student.score).join(); // "45,80,90,66,88"
  let resultToString = students.map((student) => student.score).toString(); // "45,80,90,66,88"
  let resultFilterSortJoin = students
    .map((student) => student.score)
    .filter((value) => value > 50)
    .sort((a, b) => a - b)
    .join();
  // "66,80,88,90"
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
}
