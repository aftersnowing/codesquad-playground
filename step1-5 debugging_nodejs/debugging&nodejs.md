## 컴파일과 인터프리터

- ### 컴파일

  원시코드를 기계어로 번역하는 것을 컴파일러라고 한다. 컴파일러는 고급 명령어들을 직접 기계어로 번역한다. 컴파일된 프로그램들은 일반적으로 인터프리터를 이용해 실행시키는 것보다 더 빠르게 실행된다.(프로그램 속도) 그러나 컴파일 과정은 만약 원시 프로그램의 크기가 크다면, 상당한 시간이 걸릴 수 있다.

- ### 인터프리터

  인터프리터는 프로그래밍 언어의 소스 코드를 바로 실행하는 컴퓨터 프로그램 또는 환경을 말한다. 인터프리터는 고급 언어로 작성된 원시코드 명령어들을 한번에 한 줄씩 읽어들여서 실행하는 프로그램이다. 인터프리터는 고급 명령어들을 중간 형태로 번역한 다음, 그것을 실행한다. 인터프리터의 장점은 기계어 멍령어들이 만들어지는 컴파일 단계를 거칠 필요가 없이 고급 프로그램을 즉시 실행시킬 수 있다. 그래서 인터프리터는 종종 프로그램의 개발단계에서 사용되는데, 한번에 적은 양의 코드를 추가하고 그것을 빠르게 테스트할 수 있기 때문이다.

  

## 통합 개발 환경 IDE

**통합 개발 환경**(Integrated Development Environment, IDE)은 [코딩](https://ko.wikipedia.org/wiki/%EC%BD%94%EB%94%A9), [디버그](https://ko.wikipedia.org/wiki/%EB%94%94%EB%B2%84%EA%B7%B8), [컴파일](https://ko.wikipedia.org/wiki/%EC%BB%B4%ED%8C%8C%EC%9D%BC), [배포](https://ko.wikipedia.org/wiki/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EB%B0%B0%ED%8F%AC) 등 프로그램 개발에 관련된 모든 작업을 하나의 프로그램 안에서 처리하는 환경을 제공하는 소프트웨어이다. 종래의 소프트웨어 개발에서는 [컴파일러](https://ko.wikipedia.org/wiki/%EC%BB%B4%ED%8C%8C%EC%9D%BC%EB%9F%AC), [텍스트 편집기](https://ko.wikipedia.org/wiki/%ED%85%8D%EC%8A%A4%ED%8A%B8_%ED%8E%B8%EC%A7%91%EA%B8%B0), [디버거](https://ko.wikipedia.org/wiki/%EB%94%94%EB%B2%84%EA%B1%B0) 등을 따로 사용했다. 이러한 프로그램들을 하나로 묶어 대화형 인터페이스를 제공한 것이 통합 개발 환경이다. 최근의 통합 개발 환경(IDE)은 [그래픽 사용자 인터페이스](https://ko.wikipedia.org/wiki/%EA%B7%B8%EB%9E%98%ED%94%BD_%EC%82%AC%EC%9A%A9%EC%9E%90_%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4)(GUI) 응용 프로그램 개발용 [고속 개발 도구](https://ko.wikipedia.org/wiki/%EA%B3%A0%EC%86%8D_%EA%B0%9C%EB%B0%9C_%EB%8F%84%EA%B5%AC)가 많다.



 ## Node.JS Modular programming

- ### Module이란

  프로그래밍에서 모듈이라함은 외부에 영향을 받지 않는 독립된, 재사용 가능한 코드들의 묶음이다. 이는 OOP의 Encapsulation과 동일한 개념이다. 모듈로 API를 묶어줌으로 변수나 함수들의 name space를 보장해주고, 모듈화를 통한 기능적인 코딩이 가능해진다.

  NodeJS에서 모듈은 1차적으로 파일로 구분됩니다. 즉, 코드가 작성된 파일이 같은지 다른지에 따라 모듈이 나눠지게 됩니다. 예를 들면, app.js에서 작성한 코드와 some.js에서 작성한 코드는 서로 다른 모듈에 존재하는 것으로 인식된다.

  

- ### require()

  NodeJS에서는 require 메서드를 통해 외부 모듈을 가져올 수 있다. require 메서드는 node가 local object에 추가한 메서드로서 다음과 같이 파라미터로 추가할 모듈의 파일 경로값을 받는다

  ~~~javascript
  require('파일경로')
  ~~~

  require 메서드를 실험해보기 위해 app.js라는 빈 파일을 만든다. 그리고 같은 경로 위치에 some.js라는 파일을 만들고, 아래처럼 some.js에 console.log를 넣어준다.

  ~~~javascript
  //some.js
  console.log('Greetings from some.js!');
  ~~~

  이 상태에서 커맨드창에서 node app.js를 실행시키면 당연히 some.js의 코드가 인식되지 않는다. app.js와 some.js는 같은 폴더 안에 있지만, 서로 별개의 파일이자 별개의 모듈이기 때문이다. some.js에 작성된 코드를 가져오기 위해서는 아래처럼 app.js에 require 메서드를 작성해주어야 한다. 이때, some.js가 app.js와 같은 폴더에 있다면 경로값의 시작은 ./이 된다. 만일 ./를 해주지 않는다면 NodeJS 자체 라이브러리에서 모듈을 찾게 된다.

  ~~~javascript
  // app.js
  require('./some.js');
  ~~~

  이제 다시 커맨드창에서 node app.js를 실행하면 이번에는 some.js에서 작성한 console.log가 실행 되어 아래처럼 콘솔창에 메세지가 표시된다.

  ~~~javascript
  Greetings from some.js!
  ~~~

  위의 예에서는 some.js의 global에서 바로 console.log()를 실행했다. 이번에는 아래처럼 console.log()를 greet 함수 넣어본다.

  ~~~javascript
  //some.js
  var greet = function() {
    console.log('Greetings from some.js!');
  };
  ~~~

  이제 app.js에서 some.js에 있는 greet 메서드를 greet()을 통해 호출하면 에러가 발생한다. some.js에 정의된 greet 메서드를 app.js에서 호줄할 수 없다. 이는 모듈 본연의 기능으로서 모듈 안의 API를 보호하는 것이다.

  ~~~javascript
  //app.js
  require('./some.js');
  greet(); // 에러발생
  ~~~

  이처럼 require을 통해 어떤 모듈을 가져와도 해다 모듈의 API에 접근할 권한이 바로 생기지 않는다. 밖으로 내보낼 API들 module.exports의 object에 정의하는 절차를 거쳐야 한다.

  

- ### module.exports

  위 예시의 some.js에서 정의한 greet 메서드를 app.js에서 호출하려면, 먼저 some.js에 아래처럼 module.exportsdp greet 메서드를 대입해줘야 한다 module.export는 node가 만들어낸 property인데 빈 object가 대입되어 있다. 아래처럼 greet 메서드를 대입하게 되면 function object(greet 메서드)가 빈 object를 덮어쓰게 된다.

  ~~~javascript
  //some.js
  var greet = function() {
    console.log('Greeting from some.js!');
  };
  
  //module.exports에 외부에 공유할 API 대입하기
  module.exports = greet
  ~~~

  이제 아래처럼 app.js에서 require 메서드를 변수 greetFromSomeJS에 대입해준다. Require 메서드는 some.js의 module.exports를 리턴하기 때문에 greetFromSomeJS는 곧 module.exports가 되고, greet 메서드가 됩니다. app.js에서 greet 메서드에 접근하는 연결고리가 만들어지게 된 셈이다. app.js에 greetFromSomeJS()를 입력해준다.

  ~~~javascript
  //app.js
  var greetFromSomeJS = require('./some.js');
  greetFromSomeJS();
  ~~~

  이제 다시 app.js를 실행시키면, some.js의 greet 메서드가 app.js에서 greetFromSomeJS()를 통해 호출됩니다.

  ~~~javascript
  Greetings from some.js!
  ~~~



- ### experts 객체

  ~~~javascript
  // circle.js
  const { PI } = Math;
  exports.area = (r) => PI * r * r;
  exports.circumference = (r) => 2 * PI *r;
  ~~~

  circle 모듈에서 area와 circumference를 exports의 객체 메소드로 정의한다.

  변수 PI는 circle 모듈에서만 유효한 private 변수가 되고, area와 circumference는 외부에 공개된다.

  ~~~javascript
  //app.js
  const circle = require('./circle.js');
  
  console.log('지름이 5인 원의 면적: ${circle.area(4)}');
  ~~~

  이때 circle 모듈은 객체로 반환된다. 따라서 circle.area, circle.circumference와 같은 형식으로 공개된 circle 모듈을 참조한다.

  

## Debugging

- ### break points

  debugging을 하기위해 점검하고 싶은 지점에서 코드를 멈추게 하는 기능이다. VS code에서는 마우스를 올리면 빨간점이 떠오르고 클릭하면 빨간점이 활성화 되면서 break point를 사용할 수 있게 된다.

- ### watch

  Debugging중 variable window에는 코드가 실행되고 있는 블록과 연관된 값만 표시가 되는데 블록과 연관은 없지만 알고 싶은 값이 있으면 watch window에 등록하여서 값을 관찰할 수 있다.

- ### call stack

  코드를 읽고 실행시키기 위해 각각의 작업이 순서대로 쌓여서 실행되고 있는 프로세스이다 

- ### step over / step into / step out

  - step over : 함수가 있어도 무시를 한후 다음 라인으로 이동한다.
  - step into : 콜스택 내부의 함수 안으로 들어가 진행상황을 볼 수 있다.
  - step out : step into를 한후 빠져나올 수 있다.

  

  