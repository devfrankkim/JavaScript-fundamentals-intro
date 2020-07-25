// ========== 4. Static ==========

// Object와 상관없이 클래스 자체에 연결 되어 있다.
// Static doesn't care about Objects.
// Static only has relationships with the Class directly

// 클래스 안에 있는, Fields & Methods 들은 새로운 오브젝트를 만들 때 마다,
// 그대로 복제되고, 값만 변경이 된다.

// 데이터에 상관없이 ->
// 클래스가 가지고 있는 고유의 값과, 데이터에 상관없이, 동일하게 반복적으로 사용되어지는 Method

class Article {
  static publisher = "Frank Kim is from Class because of static.";

  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);

console.log(article1.publisher); // 값이 지정되지 않았다.
console.log(article1.printPublisher); // 값이 지정되지 않았다.

// static은 object마다, 할당 되어지는 것이 아니라, 클래스 자체에 붙어 있다.

console.log(Article.publisher);
console.log(Article.printPublisher());

// TypeScript ->
//  Object에 상관없이, 들어오는 데이터에 상관없이 공통적으로 클래스에서 쓸 수 있는 것이라면,
//  static & static method 바로 사용하면 메모리 사용 줄일 수 있다.
