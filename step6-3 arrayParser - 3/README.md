## step6-3 TIL

  1. Object 타입 ( { key: value} ) 도 지원한다.

  2. 배열안에 object, object안에 배열이 자유롭게 포함될 수 있다.

  3. 지금까지의 코드를 리팩토링한다.

  4. 중복된 코드역시 함수로 분리해서 일반화한다.

  5. 객체형태의 class로 만든다.

  6. 객체화가 안되어 있다면, ES6 Classes로 구현한다.


## More to learn
  1. 예외처리에 대한 고민! tokenizer에서 얼마나 많은 경우의 예외처리를 적절하게 하고 에러메세지를 발생시킬지 고민이다.
  2. 맨바닥에 처음부터 다시 짜보기


## 회고
- step 6-2에서 lexer는 array로 변환된 데이터가 나오게 했는데 6-3에서는 좀 더 lexer가 본래의 역할을 수행하도록 type별로 분류된 토큰을 나타내는 객체로 분류되게 했다. 이때 객체의 key value를 예외적으로 다뤄 value token객체에 key token이 property로 포함되게 하여 parser에서 중첩을 다룰 때 array와 object를 다름없이 다룰 수 있도록 했다. 하지만 아직도 기능구현에 급급하다. 나중에 시간날때 다시 짜보자!!