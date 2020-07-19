// ========== Getter and setters ==========

class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // this.age
  // getter를 정의하는 순간 -> 메모리에 올라가 있는 데이터를 this.age 읽어 오는 것이 아니다.
  // 바로 getter를 호출 하게 된다.
  get age() {
    return this._age;
  }

  // setter를 정의하는 순간 -> 값을 할당할 때, 바로 메모리에 값을 할당 하는 것이 아니라,
  // constructor에서 = age 를 호출 할때, 값을 할당 할 때,
  // 메모리에 값을 할당하는 것이 아니라,
  // SETTER를 호출한다.

  set age(value) {
    // if (value < 0) {
    //   throw Error("age can not be negative");
    // }
    this._age = value < 0 ? 0 : value;

    // 전달된 value를 this._age에 값을 할당할 때,
    // 메모리의 값을 없데이트 하는 것이 아니라,
    // -> Setter를 호출하게 된다.
    // 이것이 무한번 반복 되서 -> Maximum call stack size exceeded
  }
}

const user1 = new User("messi", "job", -10);
console.log(user1); // User {firstName: "messi", lastName: "job", _age: 0}
console.log(user1.age); // 0

// _age가 아니라, user1.age라고 값을 할당할 수 있는 것은
// 내부적으로 getter, setter를 이용하기 때문이다.
