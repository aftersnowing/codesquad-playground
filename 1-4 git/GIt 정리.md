## Git 의 기본 요소

- ### 작업 디렉토리

  현재 내컴퓨터에서 작업하고 있는 장소 ex) VS code

- ### 스테이지

  스테이지에 있는 모든 내용을 묶어서 commit

-  ### 로컬 저장소

  commit을 하면 내 컴퓨터상의 master = HEAD 에 반영되어 저장되는 저장소

- ### 원격 저장소

  github등의 웹 클라우드 상에 저장하는 저장소

  

## Git 저장소 만드는 방법

- ### git init 명령어 사용

  이 명령은 .git이라는 하위 디렉토리를 만든다.

  `.git` 디렉토리에는 저장소에 필요한 뼈대 파일(Skeleton)이 들어 있 이 명령만으로는 아직 프로젝트의 어떤 파일도 관리하지는 않습니다.

  즉, 새로운 git 저장소가 만들어집니다.

  Git이 파일을 관리하게 하려면 저장소에 파일을 추가하고 커밋해야 합나다. `git add` 명령으로 파일을 추가하고 커밋합니다.

  출처: 

  https://webclub.tistory.com/317

- ### 기존 저장소를 clone 하기

  다른 프로젝트에 참여하거나(Contribute) Git 저장소를 복사하고 싶을 때 `git clone` 명령을 사용합니다. 

  이미 Subversion 같은 VCS에 익숙한 사용자에게는 `checkout`이 아니라 clone이라는 점이 도드라져 보일 것입니다. 

  Git이 Subversion과 다른 가장 큰 차이점은 서버에 있는 모든 데이터를 복사한다는 것이다. `git clone`을 실행하면 프로젝트 히스토리를 전부 받아옵니다. 

  실제로 서버의 디스크가 망가져도 클라이언트 저장소 중에서 아무거나 하나 가져다가 복구하면 됩니다.(서버에만 적용했던 설정은 복구하지 못하지만 모든 데이터는 복구된다)

  출처: 

  https://webclub.tistory.com/317



## Git 명령어

- ### git add

  wokrking directory의 변경사항들을 stage에 반영한다.(stage에 올린다)

  add 뒤에 변경된 파일 이름을 적을수도 있고 한칸 띄우고 .을 찍어 모두 묶어 한번에 stage에 올릴수도 있다.

- ### git commit

  Working directory의 변경사항이 stage에 반영되면 HEAD=master(로컬저장소)에 저장해줘야하는데 git commit을 이용해 로컬저장소에 stage의 변경사항을 반영해 줄 수 있다. 이로써 working directory = stage = HEAD는 동일하게 같은 version의 소스코드를 가지게 된다. 

- ### git push

  git commit을 하게 되면 기존 원격저장소와는 version이 달라지게 되기 마련이다. 이때 git push를 하면 기존 origin/master도 변경사항이 반영된 최신 version의 소스코드가 반영되고 working directory = stage = HEAD  = maser/origin 의 상태가 된다.

- ### git fetch

  원격 저장소에 저장된 커밋을 로컬 저장소로 불러온다.

- ### git pull

  원격 저장소에 저장된 커밋을 로컬 저장소로 불러온 다음 merge한다.

- ### git reset HEAD

  브랜치, HEAD, working directory를 지정된 만큼 앞으로 이전한다.

- ### git checkout

  Head를 해당 브랜치로 옮기고 working directory에 반영한다.

  stage의 내용도 함께 바꾼다.

- ### git rebase

  해당하는 브랜치 라인 전체를 새로운 커밋으로써 원하는 곳에 이어 붙인다.

  소스코드와 커밋을 깔끔하게 관리할 수 있는 장점이 있다.

  

## 













