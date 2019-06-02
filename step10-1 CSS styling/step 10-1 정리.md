## HTML에 의미있는 태그의 사용

- 콘텐츠에 어울리는 태그를 사용했는가?
- W3C validation
- Linting(HTML, CSS)

## (생각보다 어려운)CSS

"44 years ago we put a man on the moon, yet we still can't vertically centre things in CSS."

"개발자님아, 1px 잘못 된 거 같아요..."

CSS...

- CSS의 목적은 디자인 있다 **표현과 배치**
- 검색을 하자, 다만 최신내용의 답변이라면, CSS의 최신기능이 좋다.
- 검색을 통하지만 모르곴진 않는다.
- CSS에도 **borwser compatibility**가 있다. (camiuse.com등)
- css - selector!
  - .item + .item
  - element, class

## layout 기본 팁

- block과 inline의 배치에 대한 이해
- 배치의 기본은 margin, float, position(absolute, relative)
- Box-model
  - Padding, margin-border 뿐 아니라, box-shadow, box-sizing 활용
- 실제 서비스를 위한 layout 구성은 flex-box를 활용.
- 가운데 정렬(수평, 수직)을 연습하기.

## layout 고급 팁

- Fluid layout!, Responsive web !
- % (margin과 transform의 의미가 다르다)
- calc 를 활용하면서 width 맞추기.
  - Width : calc((100%/4) - 1em);
- Containing block
- Block formatting context
- stacking context

## 유캔두잇! 유캔두잇!

- Pre-precessor 를 활용한다.
- 언제나 디버깅!
- 좋은 웹사이트를 훑어보자.
- 포기하지 말기. 비논리가 아니고 아주 복잡한 논리다.

## 학습목표

### 1. 스스로 캐스캐이딩에 대해서 이해하고 설명할 수 있어야 함

- 캐스캐이딩은 다른 source에서 유래한 프로퍼티와 밸류를 합치는

  알고리즘

- 캐스캐이딩은 스타일이 하나의 스타일시트에서 다른 스타일시트로 떨어질 수 있다는 말 이는 하나의 HTML문서에 복수의 스타일 시트가 사용될 수 있다는 말

### poiema

요소는 하나 이상의 CSS 선언에 영향을 받을 수 있다. 이떄 충돌을 피하기 위해 CSS 적용 우선순위가 필요한데 이를 캐스캐이딩이라고 한다.

- 세가지 규칙
  - 중요도
    => CSS가 어디에 선언 되었는지
  - 명시도
    => 대상을 명확하게 특정할 수 있는지(구체적)
  - 선언순서
    => 선언된 순서에 따라

### 2. 스스로 상속에 대해서 이해하고 설명할 수 있어야 함

- 상속이란 상위(부모, 조상)요소에 적용된 프로퍼티를 하위(자식,자손)요소가 물려 받는 것을 의미한다. 상속 기능이 없다면 각 요소의 Rule set에 프로퍼티를 매번 각가 지정해야 한다. 하지만 모든 프로퍼티가 상속되는 것은 아니다. **프로퍼티 중에는 상속이 되는 것과 되지 않는 것이 있다.**

- 만약 모든 엘레먼트에 적용해야 되는 디자인이 있을 때 하나하나 지정하기 보다는 상속을 이용해 상위요소에 그냥 적용해버리면 하위 엘레먼트들이 모두 디자인에 적용을 받는다. 이는 생산성을 향상시킨다.

- 상속은 상속이 되는 것과 상속이 되지 않는 것으로 나뉘어져 있고 이는 table에 나와있다. 또한, 상속이 되지 않는 경우(상속받지 않는 요소 또는 상속되지 않는 프로퍼티)도 **inherit** 키워드를 사용하여 명시적으로 상속받게 할 수 있다.

### 3. 다양한 스타일을 어디서 찾고 어떻게 적용하면 될지 알아야 함.

- w3school
- MDN
- CSS tricks
- 클론해보기

### 4. CSS Selector 문법을 이해하고 있어야 함.

- CSS selector는 CSS rules을 적용할 엘레멘트를 정의한다.

### Simple selectors

- Type selector
  => 지정된 태그명을 가지는 요소를 선택한다.
- Class selector
  => class 어트리뷰트 값을 지정하여 일치하는 요소를 선택한다. class 어트리뷰트 값은 중복될 수 있다.
- ID selector
  => id 어트리뷰트 값을 지정하여 일치하는 요소를 선택한다. id 어트리뷰트 값은 중복될 수 없는 유일한 값이다.
- Universal selector
  => HTML 문서 내의 모든 요소를 선택한다. html 요소를 포함한 모든 요소가 선택된다. (head 요소도 포함된다)
- Attribute selector
  => 지정된 어트리뷰트를 갖는 모든 요소를 선택한다.

### Combinators

- Adjacent sibling combinator
- General sibling combinator
- Child combinator
- Descendant combinator
- Column combinator
