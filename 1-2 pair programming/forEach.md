## forEach method



### Syntax

~~~javascript
arr.ForEach(function callback(currentValue [, index [, array]]) {//your iterator}[, thisArg]);
~~~



### 설명

forEach()는 주어진 callback을 배열에 있는 각 요소에 대해 오름차순으로 한 번씩 실행합니다. 삭제했거나 초기화하지 않은 인덱스 속성에 대해서는 실행하지 않습니다. (예: 희소 배열)

callback은 다음 세 인수와 함께 호출됩니다.

\- 요소 값

\- 요소 인덱스

\- 순회 중인 배열

thisArg 매개변수를 forEach()에 제공한 경우 callback을 호출할 때 전달해 this의 값으로 쓰입니다. 전달하지 않으면 undefined를 사용하며, 최종 this 값은 함수의 this를 결정하는 평소 규칙을 따릅니다.

forEach()로 처리할 요소의 범위는 최초 callback 호출 전에 설정됩니다. forEach() 호출을 시작한 뒤 배열에 추가한 요소는 callback이 방문하지 않습니다. 배열의 기존 요소값이 바뀐 경우, callback에 전달하는 값은 forEach()가 요소를 방문한 시점의 값을 사용합니다. 방문하기 전에 삭제한 요소는 방문하지 않습니다.

forEach()는 각 배열 요소에 대해 한 번씩 callback 함수를 실행합니다. map()과 reduce()와는 달리 undefined를 반환하기 때문에 메서드 체인의 중간에 사용할 수 없습니다. 대표적인 사용처는 메서드 체인 끝에서 부작용side effect을 실행하는 겁니다.

forEach()는 배열을 변형하지 않습니다. 그러나 callback이 변형할 수는 있습니다.



### 예제

#### 1. for 반복문을 forEach로 바꾸기

~~~javascript
    const items = ['item1', 'item2', 'item3'];
    const copy = [];

    // 이전
    for (let i=0; i<items.length; i++) {
    copy.push(items[i]);
    }

    // 이후
    items.forEach(function(item){
    copy.push(item);
    });
~~~



#### 2. 배열 콘텐츠 출력

~~~javascript
function logArrayElements(element, index, array) {
      console.log('a[' + index + '] = ' + element);
    }
    
    // 인덱스 2는 배열의 그 위치에 항목이 없기에
    // 건너뜀을 주의하세요.
    [2, 5, , 9].forEach(logArrayElements);
    // 기록:
    // a[0] = 2
    // a[1] = 5
    // a[3] = 9
~~~



### 출처

- forEach MDN 문서 (https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)