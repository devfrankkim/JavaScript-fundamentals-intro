/*
NodeLists and Arrays are two different things 
because NodeLists are actually not a JavaScript API, but a browser API.

Things like querySelectorAll() and getElementsByTagName() aren’t JavaScript methods
they’re browser APIs that let you access DOM elements.
You can then manipulate them with JavaScript.

The DOM is not a programming language
but without it, the JavaScript language wouldn't have any model
or notion of web pages, HTML documents,
XML documents, and their component parts (e.g. elements). 

Every element in a document
is part of the Document Object Model for that document, 
so they can all be accessed and manipulated 
using the DOM and a scripting language like JavaScript.

The page content is stored in the DOM
and may be accessed and manipulated via JavaScript,
so that we may write this approximative equation:

API = DOM + JavaScript

A nodeList is an array of elements
(like the kind that is returned by the method document.querySelectorAll().)
Items in a nodeList are accessed by index in either of two ways:
list.item(1)
list[1]

attributes 는 DOM 에서 elements 와 같은 nodes 이다.

NodeLists differ from Arrays in another meaningful way, too.

They are often (but not always) live lists, 
meaning that if elements are removed or added to the DOM,
the list updates automatically.

querySelector() and querySelectorAll() return a static list (one that doesn’t update),
They are often (but not always) live lists,
 meaning that if elements are removed or added to the DOM,
 the list updates automatically.

querySelector() and querySelectorAll() return a static list (one that doesn’t update), 

but properties like "".childNodes" are live lists that will change as you manipulate the DOM
(which can be a good or bad thing, depending on how you’re using it).


HTMLCollection의 항목은 name, id 속성으로도 접근이 가능하지만, name, id
NodeList의 항목은 인덱스 번호로만 접근이 가능하다. -index & #text
NodeList객체에만 Text Node가 포함될 수 있습니다.(XML의 경우 Attribute Node도 포함될 수 있습니다.)
https://imkh.dev/html-collection-node-list/

이러한 메소드 구현은 자바스크립트가 아닌 프로그래밍 언어에서 DOM을 구현할 때 유용하다고 한다.

HTMLCollection vs NodeList

=========== HTMLCollection ===========
namedItem()

<h1 class="red" name="kkk"></h1>

const reds = document.getElementsByClassName('red')

console.log(reds.namedItem('kkk')) // // <h1 class="red" name="kkk"></h1>
console.log(reds['kkk1'], reds.namedItem('kkk1')) // undefined null
 
=========== NodeList ===========

**** entries() ****

<div class="container">
  <div class="red"></div>
  <div class="red"></div>
  <span class="red"></div>
  <div class="red"></div>
  <h1 class="red" name="kkk"></h1>
</div>

const reds = document.querySelectorAll('.red')

for (const entry of reds.entries()) {
  console.log(entry)
}
// (2) [0, div.red]
// (2) [1, div.red]
// (2) [2, span.red]
// (2) [3, div.red]
// (2) [4, h1.red]

객체 내의 모든 원소들을 반복 가능한 iterator를 반환한다. 
반환되는 값은 키와 값이 쌍을 이루고 있는 배열이며 값은 Node 객체이다.

**** forEach() ****
const reds = document.querySelectorAll('.red')
reds.forEach(red => console.log(red.tagName))


**** keys(), values() ****

const reds = document.querySelectorAll('.red')

for (const values of reds.values()) {
  console.log(values)
}
// Node 객체...

for (const keys of reds.keys()) {
  console.log(keys)
}
// 0..1..2..3

========== NodeList와 HTMLCollection을 일반 배열로 사용하기 ==========

1. Array.from()

const reds = document.querySelectorAll('.red')
const redsArr = Array.from(reds)

redsArr.map(red => console.log(red))

브라우저 문제 때문에 폴리필을 사용해야 한다. 


2. Array.prototype.slice.call()

const reds = document.querySelectorAll('.red')
const redsArr = Array.prototype.slice.call(reds)

redsArr.map(red => console.log(red))

얕은 복사본을 만들어 배열로 반환하기 때문에 배열을 받을 수 있다.


The key way to think about NodeLists vs. Arrays:

NodeLists are a language-agnostic way to access DOM elements,
and Arrays are a JavaScript object you can use to contain collections of stuff.


They each have their own methods and properties,
 and you can convert a NodeList into an Array if you need to (but not the other way around).


*/
