/*
this 가 만들어지는 경우는 일반적으로 다음과 같다.

1) 일반 함수에서의 this

2) 중첩 함수에서의 this

3) 이벤트에서의 this

4) 메서드에서의 this

5) 메서드 내부의 중첩함수에서의 this

*/

// 일반 함수에서의 this 는 무조건 window 를 가리킨다.
// window.data == this.data 형식과 동일하다.

// ============== var ==============
var data = 10;

function outer() {
  data = 30;
  this.data = 20;
  //   data = 30;

  console.log("1. data1 = " + data); // 20
  console.log("2. this.data = " + this.data); // 20
  console.log("3. window.data = " + window.data); // 20
}

outer();

// ============== let ==============
let data1 = 10;

function outer() {
  this.data = 20;

  data1 = 30; // let

  console.log("1. data1 = " + data1); // 30
  console.log("2. this.data = " + this.data); // 20
  console.log("3. window.data = " + window.data); // 20
}

outer();

// =========== 일반 중첩함수에서 this ==========
// 중첩 함수에서의 this 는 window 를 가르킨다.

let closureData = 10;
function outer() {
  // 중첩함수
  function inner() {
    this.data = 20;
    closureData = 30;

    console.log("1. data = " + closureData); // 30
    console.log("2. this.data = " + this.data); // 20
    console.log("3. window.data = " + window.data); // 20
  }
  inner();
}
outer();

// ========== 이벤트 리스너에서 this ==========

// 이벤트에서의 this 는 이벤트를 발생한 객체를 가리킵니다.

$(document).ready(function () {
  // 이벤트 리스너 등록
  $("#myButton").click(function () {
    this.data = 20;
    data3 = 30;
    this.style.color = "#000";

    console.log("1. data3 = " + data3); // 30
    console.log("2. this.data = " + this.data); // 20 (이벤트 핸들러의 객체)
    console.log("3. window.data = " + window.data); // 30
  });
});

// =============== 메서드에서 this ===============
// 메서드 내에서의 this 는 메서드를 호출한 객체를 가리킨다.

let data = 10;
function MyClass() {
  this.data = 20;
  data = 30;

  console.log("1. data = " + data);
  console.log("3. window.data = " + window.data);
  console.log("2. this.data = " + this.data);
}

// 인스턴스 생성
let my1 = new MyClass();

// this 는 메소드를 호출한 객체를 나타낸다.
// 여기선 my1 이 인스턴스
// 일반 함수 호출할 경우
MyClass(); // 30, 20, 20

// =============== 메서드 내부의 중첩함수에서 this ===============
/*
메서드 내부의 중첩함수에서의 this 는 window 를 가리킵니다
그리고 메서드 내부의 중첩함수에서 this 를 보존하는 방법은 아래와 같습니다.
*/

let data = 10;

function MyClass() {
  this.data = 50; // 내부 함수내에서 this 를 보존하는 방법

  console.log("this.data = ", this.data); // 50
  console.log("window.data = ", window.data); // 50

  let objThis = this;
  objThis.data = 100;

  console.log("this", this);
  console.log("this.data = ", this.data); // 100
  console.log("window.data = ", window.data); // 100

  function inner() {
    this.data = 20; // window.data 와 같음.

    data = 30;
    console.log("this", this);
    console.log("1. data = " + data); // 30;
    console.log("2. this.data = " + this.data); // 20
    console.log("3. window.data = " + window.data); // 20
    console.log("4. objThis = " + objThis.data); // 20
  }
  inner();
}

// 인스턴스 생성
let my1 = new MyClass();
MyClass();
my1; // MyClass {data: 100}
