## Step 8-2 브라우저의 동작



### [CoverNAT](http://www.covernat.net/)사이트 분석



 #### 1. HTML안에 js,css의 위치는 어디에 위치했는가? 왜 그랬을까?

- js와 css의 파일 위치는 HEAD태그에 위치해 있다.
- 일반적으로 js파일은 HTML을 파싱할 때 블록킹을 예방하기 위해 body태그의 마지막에 놓는다. 하지만 이 사이트는 정확한 이유는 모르겠지만 css와 js파일을 HEAD태그에 모아놓음으로써 관리상의 편리함을 도모한 것 같다.

#### 2. 화면을 표시하기 위해 어떤 파일들이 다운로드 되는가?

- 먼저 HTM파일이 다운로드 되고 HTML파일을 읽어내려가면서 필요한 CSS파일, JS파일, 이미지파일을 순차적으로 다운로드한다.

#### 3.특정 자원의 Request Headers 와 Response Headers의 내용을 분석.(네트워크 탭 활용)

- Genral headers?

  General 헤더는 요청 및 응답 메시지 모두에서 사용되지만 컨텐츠 자체에는 적용되지 않는 HTTP 헤더입니다.

  **General**

  - **Request URL:** [http://www.covernat.net/](http://www.covernat.net/)
  - **Request Method:** GET
  - **Status Code:** 200 OK
  - **Remote Address:** 1.234.4.223:80
  - **Referrer Policy:** origin

  Request URL에서 알 수 있는 정보

  프로토콜 : http (hyper text transfer protocol)

  도메인 : [www.covernat.net](http://www.covernat.net) → DNS에서 IP로 매칭해서 서버의 위치를 알 수 있다.

  Method GET : 정보를 받아온다.

  Status code : 200. 성공적인 요청이라는 의미!

  **Response Headers**

  - **Cache-Control:** no-store, no-cache, must-revalidate, post-check=0, pre-check=0
    - 요청과 응답 내의 캐싱 매커니즘을 위한 디렉티브를 정하기 위해 사용된다. → ?
  - **Connection:** Keep-Alive
    - 현재의 전송이 완료된 후 네트워크 접속을 유지할지 말지 제어한다.
  - **Content-Type:** text/html; charset=UTF-8
    - 리소스의 media type을 나타내기 위해 사용된다!
  - **Date:** Thu, 23 May 2019 05:37:21 GMT
    - HTTP메세지를 생성한 날짜
  - **Expires:** Thu, 19 Nov 1981 08:52:00 GMT
    - 리소스의 유효 날짜를 전달하는 필드
  - **Pragma:** no-cache
    - 후방 호환성을 위해 정의되어 있는 필드

  **Request Headers**

  - **Host:** [www.covernat.net](http://www.covernat.net)
    - 같은 IP로 복수의 도메인이 적용되어 있어도 구별할 수 가능하게 하는 필수 헤더 필드
  - **Referer:** https://www.google.com/
    - 리퀘스트가 발생한 본래 리소스의 URI를 전달
  - **User-Agent:** Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36
    - 요청을 생성한 브라우저에게 유저 에이전트(환경)을 전달하기 위한 필드

#### 4. 화면에 보여지기 시작하는 시간은 언제인가?

- 구글 개발자 도구 performance tap에서 FP이벤트가 발생한 시점부터 사용자의 화면에 페이지가 보이기 시작한다. 그리고 이는 DOM tree가 완성되기 전에 화면이 보여지기 시작한다는 것을 의미한다.

  

#### 5. DOMContentLoaded라는 이벤트는 언제 발생하는가? load랑은 어떤 차이점이 있는가?

- DOMContentLoaded 이벤트는 첫 HTML 문서가 로드되고 파싱 완료됐을때 발생한다. 이때 stylesheets, images 그리고 subframes이 로딩되는 것은 기다리지 않고 이벤트가 발생한다. Load 이벤트는 웹페이지를 구성하는 모든 리소스가 로드된후 발생하는 이벤트이다. 그러므로 HTML문서만 로드 및 파싱된 후 발생하는 DOMContentLoaded이벤트가 load이벤트보다 빨리 발생한다. 

  

#### 6. HTML 파일 응답 받은 이후부터, 모니터화면에 보이기까지의 과정을 설명하고, 이를 암기한다.

- 파일 응답을 받은 이후 브라우저에서 HTML을 파싱해서 DOM tree를 만든다. 이 과정 중에 Script를 만나면 HTML 파싱을 멈추고 script를 실행한다.
  - HTML 파싱이 완료되면 DOMContentLoaded 이벤트가 발생한다.
  - 요청한 CSS가 있으면 응답받은 CSS를 참고하여 CSSOM tree를 만든다.
  - DOM tree와 CSSOM tree를 Render Tree로 만들고 화면에 보여줄 요소들을 그린다!







