//reference: https://beizix.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-Function-%EC%9D%98-%EB%B9%84%EB%B0%80-prototype-%EA%B3%BC-new

/*function

자바스크립트에서 모든 객체는 자신만의 고유한 프로토타입 객체를 갖습니다.
이 프로토타입이 외부 객체와 연결되면, 연결된 외부 객체의 속성을 자신의 프로토타입으로 흡수합니다. 
이 과정에서 자연스럽게 상속이 발생합니다. 
자바스크립트에서 함수 Function 가 중요한 이유는 
사용자가 정의할 수 있는 
프로토타입 속성 prototype property 을 제공하는 유일한 객체이기 때문입니다.
*/
function f() {}
var obj = {};
var array = [];

f.prototype; // Object {constructor: ƒ}constructor: ƒ f()arguments: nullcaller: nulllength: 0name: "f"prototype: {constructor: ƒ}__proto__: ƒ ()[[FunctionLocation]]: VM133:1[[Scopes]]: Scopes[1]__proto__: Object
obj.prototype; // undefined
array.prototype; // undefined

f.prototype = {
  constructor: function f() {},
  __proto__: Object,
};

/*
    _proto_ 는 현재 프로토타입에 연결된 부모 객체를 나타낸다.


    파이어폭스, 사파리, 크롬은 이 속성을 __proto__ 라는 이름으로 노출하므로 개발자가 사용할 수 있지만,
    다른 브라우저는 스크립트로 이 속성에 접근할 수 없습니다.

    위의 경우 __proto__는 <=> Object.prototype 과 연결되어 있음을 나타냅니다. 

    Object.prototype 을 상속받은 f 함수는 
    부모가 정의한 toString 과 hasOwnProperty 같은 메서드를 사용할 수 있습니다. 
*/

f.toString();
f.hasOwnProperty("name");

/*
f 를 호출용 함수로만 사용한다면, 
프로토타입 객체는 그다지 유용하지 않습니다. 
new 연산자를 앞에 붙이고 함수를 호출할 때, 
프로토타입 객체는 중요한 역할을 수행합니다
*/

var result = f(); // undefined
var result = new f(); // Object

/*
f 는 텅 빈 함수이기에 반환값도 없지만, 
new 연산자와 함께 호출하면 호출된 함수의 프로토타입을 근간으로 하는 신규 객체가 반환됩니다. 
result 는 다음 구조를 갖습니다. 
*/
result = {
  __proto__: {
    constructor: function f() {},
    __proto__: Object,
  },
};

// ================ Difference ================
function rectangle(w, h) {
  this.width = w;
  this.height = h;
}

rectangle.prototype.get_area = function () {
  return this.width * this.height;
};

var rect1 = new rectangle(10, 25);
var rect2 = new rectangle(30, 20);

// ================ Difference ================
function rectangle(w, h) {
  let width = w;
  let height = h;
  this.get_area = function () {
    return width * height;
  };
}

// rectangle.prototype.get_area = function () {
//   return this.width * this.height;
// };

var rect1 = new rectangle(10, 25);
var rect2 = new rectangle(30, 20);

/*
아쉬운 점은 get_area 를 프로토타입 맴버로 등록하지 못해, 
신규 객체별로 접근 메서드를 가지고 있다는 점입니다. 
프로토타입에 등록되어 공용 메서드로 사용할 수 있는 이점은 여기서 사라집니다. 
이럴 경우 별도의 부모 객체를 정의해서 공용 메서드나 상수 들을 위치시키고
이를 상속받는 방식으로 보완할 수 있습니다. 

*/
