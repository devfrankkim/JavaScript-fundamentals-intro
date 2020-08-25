// ======= return 공개 메서드에서 비공개 객체, 메서드를 부른다. =======
// ==== 이렇게 일반적으로 싱글톤 패턴에서는 이미 객체가 생성됐는지 여부를 알려주는 instantiaed 와 같은 내부 변수가 필요하다.
// ==== 그리고 싱글톤 패턴에서는 내부 변수에 접근할 수 있는 객체를 반환하는 클로저를 이용해야 한다. ====

let Singleton = (function () {
  // 비공개 변수, 메서드 정의
  let instantiaed;

  function init() {
    // 싱글톤 객체 정의
    return {
      // 공개 메서드 정의
      publicMethod: function () {
        return "Singleton Pattern!!!";
      },
      // 공개 프로퍼티 정의
      publicProp: "public single value",
    };
  }

  // 공개 메서드인 getInstance() 를 정의한 객체.
  // 렉시컬 특성으로 인해 비공개 변수, 메서드에 접근 가능(클로저)!!!!!!!
  return {
    getInstance: function () {
      //   console.log(instantiaed);
      if (!instantiaed) {
        instantiaed = init();
      }
      return instantiaed;
    },
  };
})();

Singleton; // {getInstance: ƒ}

// 싱글톤 객체 생성하여 publicMethod 호출 가능해짐
let first = Singleton.getInstance();
first; // {publicProp: "public single value", publicMethod: ƒ}
first.publicMethod(); // Singleton Pattern!!!

let second = Singleton.getInstance();
second.publicMethod();
console.log(second.publicMethod()); // Singleton Pattern!!!
console.log(first === second); // true !!!!!!!!!!!!!!

// ================= example 2 ===================

(function () {
  // 비공개 멤버
  let name = "My name is Frank Kim"; // 공개될 부분을 구현한다.

  // let,var,const 를 사용하지 않았다는 데 주의
  myObj = {
    // 특권(privileged) 메서드
    getName: function () {
      return name;
    },
  };
})();

myObj.getName(); // 'My name is Frank Kim'

// ================= example 3 ===================

let myObj = (function () {
  // 비공개 멤버
  let name = "My name is Frank Kim"; // 공개될 부분을 구현한다.

  return {
    getName: function () {
      return name;
    },
  };
})();

myObj.getName(); // 'My name is Frank Kim'
