// mutable data types -> all objects by defalt are mutable in JavaScript
// immutable data types-> primitive types(ex can't change the spelling ), frozen objects (i.e object.freeze())

// ============== const ==============
// "let" can change the value
// "const" locks the pointer so you can't change the value

// Mutable (you can change the values) data type
// Favor immutable (you can NOT change the values) data type Always

// 1. security 2. thread safety 3. reduce human mistakes

// 어플리케이션이 실행되면, 한가지의 프로세스가 할당이 되고,
// 그 프로세스 안에서는 다양한 스레드가 동시에 돌아가면서 어플리케이션이 효율적으로 빠르게 돌아가는걸 도와준다.
// 다양한 스레드들이 동시에 변수에 접근해서 값을 변경할 수 있는데,
// 동시에 값을 변경한다는 것은 dangerous

//  mutable -> let & immutable -> const

const lockedUp = "frank";
// 🔓 pointer->  'frank'
