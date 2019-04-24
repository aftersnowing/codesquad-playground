## 객체지향이란? 

- 객체지향 프로그래밍(Object-Oriented Programming)은 좀 더 나은 프로그램을 만들기 위한 프로그래밍 패러다임으로 로직을 상태(state)와 행위(behave)로 이루어진 객체로 만드는 것이다.
- [객체지향 개발 5대 원리 : SOLID](<http://www.nextree.co.kr/p6960/>)



### class

- class는 최초의 상태(state)와 행위(behave)를 제공하면서 특정한 데이터구조의 객체를 만들어내는 설계도다. 클래스는 전부 혹은 일부를 그 클래스 특성으로부터 상속받는 서브클래스를 가질 수 있으며, 클래스는 각 서브클래스에 대해 수퍼클래스가 된다. 서브클래스는 자신만의 메소드와 변수를 정의 할 수도 있다. 이러한 클래스와 그 서브클래스 간의 구조를 '클래스 계층'이라 한다.



### 추상화

- 공통의 속성이나 기능을 묶어 이름을 붙이는 것

- 객체지향 프로그래밍을 잘하기 위해서는 좋은 객체를 만들어야 한다. 이것은 다른 말로는 설계를 잘해야한다는 것이다. 좋은 설계는 현실을 잘 반영해야한다. 그러나 현실은 복잡하다. 하지만 그 복잡함 전체가 필요한 것은 아니다. 그래서 고도의 추상화를 통해서 복잡한 현실을 세계를 반영하는 설계를 할 수 있다. 좋은 설계는 문법을 배우는 것보다 훨씬 어려운 일이다. 심지어 이것은 지식을 넘어서 지혜의 영역이다.



### 부품화

- 객체지향은 부품화의 정점이라고 할 수있다. 예를 들어 메소드는 부품화의 한가지 예시라고 할 수 있다. 메소드를 사용하면 코드의 양을 극적으로 줄일 수 있고, 메소드 별로 기능이 분류되어 있기 때문에 필요한 코드를 찾기도 쉽고 문제의 진단도 빨라진다. 그러나 프로그램이 커지면 많은 메소드들이 생겨나면서 메소드와 변수를 관리하는 것이 점점 어려운 일이 된다. 바로 이 지점에서 새로운 도약이 필요하게 되는데 그 중 하나가 바로 객체지향 프로그래밍이다. 이것의 핵심은 메소드와 그 메소드가 사용하는 변수들을 분류하고 그룹핑 하는 것이다. 그리고 바로 그렇게 그룹핑 한 대상이 객체(Obejct)다.



### 은닉화 , 캡슐화

- 부품화라고 하는 목표는 단순히 동일한 기능을 하는 메소드와 변수를 그룹핑한다고 달성되는 것은 아니다. 제대로된 부품이라면 그것이 어떻게 만들어졌는지 모르는 사람도 그 부품을 사용하는 방법만 알면 쓸 수 있어야 한다. 이러한 컨셉을 정보의 은닉화(Information Hiding), 또는 캡슐화(Encapsulation)라고 부른다. 자연스럽게 사용자에게는 그 부품을 사용하는 방법이 중요한 것이 된다.



## 자바스크립트의 객체지향

### Prototype-based programming

- 클래스가 존재하지 않는 객체지향 프로그래밍의 한가지 스타일
- class의 우선 정의 없이 객체의 생성이 가능하다

~~~javascript
var person = {};
person.name = 'egoing';
person.introduce = function () {
  return 'My name is ' + this.name;
}
document.write(person.introduce())
~~~



### 생성자(constructor)와 new

- 객체를 만드는 역할을 하는 함수다. 자바스크립트에서 함수는 재사용 가능한 로직의 묶음이 아니라 객체를 만드는 창조자라고 할 수 있다.

~~~javascript
function Person () {}
  var p = new Person();
  p.name = 'egoing';
  p.introduce = function () {
    return 'My name is ' + this.name;
  }
document.write(p.introduce());
~~~

함수를 호출할 때 new를 붙이면 새로운 객체를 만든 후에 이를 리턴한다. 위의 코드는 새로운 객체를 변수 p에 담았다.



~~~javascript
function Person () {
  var p1 = new Person();
  p1.name = 'egoing';
  p1.introduce = function() {
    return 'My name is ' + this.name;
  }
  document.write(p1.introduc()+'<br />');
  
  var p2 = new Person();
  p2.name = 'leezche';
  p2.introduce = function() {
    return 'My name is ' + this.name;
  }
document.write(p2.introduce());
~~~

여러 사람을 위한 객체를 만든다면 이렇게 코드를 작성해야 하지만 별로 개선된 점이 없다.



~~~javascript
function Person (name) {
  this.name = name;
  this.introduce = function  () {
    return 'My name is ' + this.name;
  }
}
var p1 = newPerson('egoing');
document.write(p1,indtroduce()+"<br />");

var p2 = new Person('leezche');
document.write(p2.introduce);
~~~

생성자 내에서 이 객체의 프로퍼티를 정의하고 있다. 이러한 작업을 초기화라고 한다. 이를 통해서 코드의 재사용성이 대폭 높아 졌다.



### 전역객체(Global object)

- 전역객체는 특수한 객체다. 모든 객체는 이 전역객체의 프로퍼티이다.

  ~~~javascript
  function func() {
    alert('Hello');
  }
  func();
  window.func()
  ~~~

  위의 함수는 모두 실행이 된다.

  모든 전역변수와 함수는 window 객체의 프로퍼티이다. 객체를 명시하지 않으면 암시적으로 window의 프로퍼티로 간주된다.



- 웹브라우저에서는 전역객체는 window이지만 node.js에서는 global이다.



### this

- this는 함수 내에서 함수 호출 맥락(context)를 의미한다. 맥락이라는 것은 상황에 따라서 달라진다는 의미인데 즉 함수를 어떻게 호출하느냐에 따라서 this가 가리키는 대상이 달라진다는 뜻이다.



#### 메소드의 호출

~~~javascript
function func() {
  if(window === this) {
    documnet.write("window === this");
  }
}
func();

결과
=>'window === this'
~~~

이때 func()는 window.func()과 같은 의미이므로  this는 함수가 소속된 객체를 가리킨다.



~~~javascript
var o = {
  func : function () {
    if (o === this) {
      document.write("o === this");
    }
  }
}
o.func();

결과
=>'o === this'
~~~

이때 this는 함수가 소속된 객체인 o를 가리킨다.



#### 생성자의 호출

~~~javascript
var funcThis = null;

function Func() {
  funcThis = this;
}
var o1 = Func();
if(funcThis === window){
  document.write('window<br />');
}

var o2 = new Func();
if(funcThis === 02){
  document.wirte('o2 <br />')
}

결과
=>'window'
=>'o2'
~~~

생성자는 빈 객체를 만든다. 그리고 이 객체내에서 this는 만들어진 객체를 가리킨다. 



~~~javascript
function Func(){
  document.write(o);
}
var o = new Func();

결과
=> undefined
~~~

단 생성자가 실행되기 전까지는 객체는 변수에 할당될 수 없다.



#### apply / call

~~~javascript
var o = {}
var p = {}
function func() {
    switch (this) {
        case o;
            document.write('o<br />');
            break;
        case p;
            document.write('p<br />');
            break;
        case window;
            document.write('window<br />');
            break;
    }
}
func();
func.apply(o);
func.apply(p);

결과
=>'window'
=>'o'
=>'p'
~~~

전통적인 객체지향에서 메소드는 객체에 강하게 소속되어 있다. 그래서 객체 - 주인(master), 메소드 - 노예(slave)라는 표현을 사용한다. 그러나 자바스크립트에서는 객체와 메소드(함수)의 관계는 대등하다. 그래서 함수가 어떻게 호출되느냐에 따라서 맥락적으로 함수가 어떤 객체에 속하게 되는지 정해진다.



### 상속(inheritance)

- 객체는 연관된 로직들로 이루어진 작은 프로그램이라고 할 수 있다. 상속은 기존 객체의 로직을 수정하고 변경해서 파생된 새로운 객체를 만들 수 있게 해준다.

  

~~~javascript
function Person (name) {
  this.name = name;
  this.introduce = function  () {
    return 'My name is ' + this.name;
  }
}
var p1 = newPerson('egoing');
document.write(p1,indtroduce()+"<br />");

결과
=>'My name is egoing'
~~~

위의 코드를 아래와 같이 바꿀 수 있다.



~~~javascript
function Person (name) {
  this.name = name;
}

Person.prototype.name = null;
Person.prototype.introduce = function () {
  return 'My name is ' + this.name;
}
var p1 = new Person('egoing');
document.write(p1.introduce()+"<br />");

결과
=>'My name is egoing'
~~~

결과는 위 코드와 동일하다. 왜냐하면 생성자 함수 Person이 직접 introduce메소드를 가지고 있지 않지만 생성자 함수 Person의 프로퍼티인 prototype 객체에 introduce메소드를 할당하였으므로 new Person으로 생성되는 p1객체의 프로퍼티인 prototype 객체에도 introduce메소드가 포함되어 있기 때문이다.



~~~javascript
function Person(name) {
    this.name = name;
}
Person.prototype.name = null;
Person.prototype.introduce = function () {
    return 'My name is '+ this.name;
}

function Programmer(name) {
    this.name = name;
}
Programmer.prototype = new Person();

var p1 = new Programmer('egoing');
document.write(p1.introduce() + '<br />');

결과
=> 'My name is egoing'
~~~

Person 생성자 함수 prototype객체에 introduce메서드를 할당했다. Programmer 생성자 함수의 prototype객체에 new Person으로 생성되는 객체를 할당했으므로 Programmer 생성자 함수 prototype객체의 prototype객체에 introduce메소드가 존재하게된다. 그러므로 new Programmer로 생성되는 p1객체의 prototype객체의 prototype객체에 introduce메소드가 있으므로 사용할 수 있게된다.



~~~javascript
function Person(name) {
    this.name = name;
}
Person.prototype.name = null;
Person.prototype.introduce = function () {
    return 'My name is '+ this.name;
}

function Programmer(name) {
    this.name = name;
}
Programmer.prototype = new Person();
Programmer.prototype.coding = function(){
  return 'hello world';
}

var p1 = new Programmer('egoing');
document.write(p1.introduce() + '<br />');
document.write(p1.coding() + '<br />');

결과
=> 'My name is egoing'
~~~

Programmer는 person의 기능을 가지고 있으면서 Person이 가지고 있지 않은 기능인 메소드 coding을 가지고 있다.



### prototype

- 함수는 객체다. 그러므로 사용될 함수도 객체다. 객체는 프로퍼티를 가질 수 있는데 prototype이라는 프로퍼티는 그 용도가 약속되어 있는 특수한 프로퍼티다. prototype에 저장된 속성들은 생성자를 통해서 객체가 만들어질 때 그 객체에 연결된다.

~~~javascript
function Ultra() { }
Ultra.prototype.ultraProp = true;

function Super() { }
Super.prototype = new Ultra();

function Sub() { }
Sub.prototype = new Super();

var o = new Sub();
console.log(o.ultraProp);

결과
=>true
~~~
생성자 함수 Sub를 통해서 만들어진 객체 o가 Ultra의 프로퍼티 ultraProp에 접근 가능한 것은 prototype 체인으로 Sub와 Ultra가 연결되어 있기 때문이다. 내부적으로는 아래와 같은 일이 일어난다.

1. 객체 o에서 ultraProp를 찾는다.
2. 없다면 Sub.prototype.ultraProp를 찾는다.
3. 없다면 Super.prototype.ultraProp를 찾는다.
4. 없다면 Ultra.prototype.ultraProp를 찾는다.

prototype은 객체와 객체를 연결하는 체인의 역할을 하는 것이다. 이러한 관계를 prototype chain이라고 한다.

> Super.prototype = Ultra.prototype으로 하면 안된다. 이렇게 하면 Super.prototype의 값을 변경하면 그것이 Ultra.prototype도 변경하기 때문이다. Super.prototype = new Ultra();는 Ultra.prototype의 원형으로 하는 객체가 생성되기 때문에 new Ultra()를 통해서 만들어진 객체에 변화가 생겨도 Ultra.prototype의 객체에는 영향을 주지 않는다.



~~~javascript
function A () {}

function B () {}

function C () {}

B.prototype.__proto__ = new A()
C.prototype.__proto__ = new B()

A.prototype.testA = function() {console.log("A")}
B.prototype.testB = function() {console.log("B")}
C.prototype.testC = function() {console.log("C")}

let c = new C();

c.testC()
c.testB()
c.testA()

결과
=>
C
B
A

~~~
B의 prototype object 와 C의 prototype object를 같이 상속시켜줄 수 있다. 즉 직전의 예제에서는 Super와 Sub의 prototype object는 체인에 연결되어 있지 않지만 위의 예제에서는 Object prototype object를 참조하는 __proto__를 상위 함수의 인스턴스와 연결해줌으로써 마치 전기회로가 직렬 연결되듯이 프로토체인이 형성된다.


### 표준 내장 객체(Standard Built-in Object)

- 표준 내장 객체는 자바스크립트가 기본적으로 가지고 있는 개체들을 의미한다. 자바스크립트는 아래와 같은 내장 갵체를 가지고 있다.
  - Object
  - Function
  - Array
  - String
  - Boolean
  - Number
  - Math
  - Date
  - RegExp

### 참조

- [생활코딩](<https://opentutorials.org/course/743/6553>)

- [BRILLIANT](<https://brilliant.org/wiki/classes-oop/>)

- [위키피디아]([https://ko.wikipedia.org/wiki/%ED%81%B4%EB%9E%98%EC%8A%A4_(%EC%BB%B4%ED%93%A8%ED%84%B0_%EA%B3%BC%ED%95%99)](https://ko.wikipedia.org/wiki/클래스_(컴퓨터_과학))











































