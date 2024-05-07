# 과제1 - Avatars

- float를 사용하여 다음의 레이아웃을 구현해 본다.
<img src="https://file.notion.so/f/f/2c9b0f24-8e73-4514-b0c2-312f3d7d31f4/14c86214-1c78-448e-a2bd-0f6349fbf42e/Avatars_(1).png?id=add23401-8c8c-4835-ad66-4013ee8a8db8&table=block&spaceId=2c9b0f24-8e73-4514-b0c2-312f3d7d31f4&expirationTimestamp=1714910400000&signature=m8ATuGAZMlKPfcrMQg9B700qr1yRY3hfzZaJJlqqCpo&downloadName=Avatars+%281%29.png" />

- flex를 지원하는 환경에서는 다음과 같이 배치되도록 레이아웃을 구현해 본다.
<img src="https://file.notion.so/f/f/2c9b0f24-8e73-4514-b0c2-312f3d7d31f4/3077693f-ab5b-461c-add9-7db83c36d3bf/Avatars_(2).png?id=45b99218-3c58-46cd-83a8-391bdfdb67fc&table=block&spaceId=2c9b0f24-8e73-4514-b0c2-312f3d7d31f4&expirationTimestamp=1714910400000&signature=qWAWj59WCya22fmZSz9Jb5ZovMEOjEFD2OWJolWY340&downloadName=Avatars+%282%29.png">

<br />

## HTML 마크업

### 구조 설계

- avatar 이미지 오른쪽 하단에 상태 표시 영역이 겹쳐있음.
  1. **CSS의 position속성을 absolute로 설정**하여 구현할 수 있음.
  2. 이미지를 보여줄 img태그와 상태를 표시할 div태그를 묶어서 하나의 div(class="avatar-wrapper")에 넣어줌.

- float를 사용했을 때는 아래에 있던 4개의 avatar들이 flex 환경에서는 위에 있음.  

  1. **CSS의 order 속성**을 지정해서 구현할 수 있음.
  2. avatar-wrapper div를 4개씩 묶어서 div(class="avatar-container")에 넣어줌.

### 접근성 측면
- avatar의 **상태 정보를 전달**하기 위해 aria-label을 사용할 수 있음.
  1. 상태가 **on/off로 변한다면** aria-labelledby를 사용해서 해결할 수 있다고 생각함.
  2. aria-labelledby 속성은 **id 속성 값을 통해 연결**되기 때문에 상태 표시 div 안에 span 태그(class="status-span")를 사용해 on/off를 작성해줌. **(+ CSS 속성 display: none)**
  - 피드백 후 -> CSS 속성을 **visibility: hidden**으로 바꿈.

<br />

## CSS

### reset
- 정확한 레이아웃 구현을 위해 normalize.css 및 reset.css로 user agent style을 초기화.

### 컴포넌트화

- 각각의 avatar 이미지 및 상태표시 div의 크기를 한번에 관리하기 위해 :root에 이미지와 상태 표시 div의 **width, height를 변수로 만듬**.
  - 피드백 후 -> width, height가 같은 값이기 때문에 size라는 하나의 변수로 관리.

- avatar 이미지와 상태 표시 div의 width와 height를 변수로 만들었기 때문에, **값을 변경하는 상황을 염두**에 두고 border-radius 값은 px단위가 아닌 **50%로** 지정함.

<br />

## JavaScript

_과제에는 없었지만, avatar의 상태를 update하면서 **aria-labelledby로 전달한 상태 정보까지 어떻게 변경할 수 있을지** 확인해보고 싶었기 때문에 사전학습 지식과 검색을 통해 만들어 봤습니다._

### 상태 및 aria-label을 Toggle
1. querySelectorAll 속성을 사용해 **avatar-status 클래스를 가진 div들**을 선택.
2. 선택한 요소들에 **forEach** 속성을 사용해 각각을 선택 후 addEventListener 속성을 사용해 **click event 추가**.
3. 선택한 요소 내에서 **status-span class를 가진 요소**를 탐색.
4. if/else 문에서 status-on/off class를 바꿔줌 + statusSpan의 textContent를 on/off로 바꿔줌.
5. 상태와 aria-labelledby 값까지 **Toggle**됨.