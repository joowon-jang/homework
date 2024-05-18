# Apple 홈페이지 클론

**`CSS Grid`** 를 사용하여 **반응형 레이아웃**을 구현한다.

- 중단점(breakpoint)은 **`1024px`** 로 지정한다.
  (Small Screen - 1024px 이하 / Large Screen - 1024px 이상)
- **`theme.css`** 파일에 제공 된 값(색상, 텍스트 크기, 여백 등)을 사용한다.
- **`5월 18일 오후 11시 59분`** 까지 제출한다.

## 구현 결과

### Small Screen

![apple_mobile](https://github.com/joowon-jang/homework/assets/72129693/bcbeea3a-59e2-4310-9bd6-4a35788113a5)

### 1024px(width) 기준 @media 적용

![apple_media](https://github.com/joowon-jang/homework/assets/72129693/cd0474ac-0e75-4dcc-9e70-b4977537a6c6)

### Large Screen

![apple_desktop](https://github.com/joowon-jang/homework/assets/72129693/cb910f18-1f2c-4b0d-b2bc-23857e45b840)

## HTML

### 카드 컴포넌트 마크업

```html
<article class="card card-black" aria-labelledby="card-title">
  <h2 class="card-title" id="card-title">ipad Pro</h2>
  <h3 class="card-subtitle">놀라우리만치 얇다.<br />엄청나게 강력하다.</h3>
  <p class="card-additional-text">출시일 추후 공개</p>
  <div class="button-wrapper">
    <a role="button" href="/" class="button button-blue button-left">
      더 알아보기
    </a>
    <a role="button" href="/" class="button button-blue button-right">
      가격 보기
    </a>
  </div>
</article>
```

### 구조 설계

- 하나의 카드는 **위에서 아래로** 내려가면서 **[제목, 부제목, 출시일 정보, 버튼 그룹]**순으로 나열되고 있으므로 위와 같은 구조로 마크업 후 CSS에서 flexbox를 통해 가운데 정렬.

### 접근성

- 각각의 카드는 동일한 디자인이면서 다른 내용을 담고있다. 신문 기사같은 형태를 띠고 있기에 `<article>`시맨틱 태그를 사용.

- article은 각각 apple 제품에 대한 정보를 담고있기 때문에, 카드 제목에 `<h2>`요소로 제품 이름을 명시하고, `<article>`요소에 aria-labelledby 속성을 통해 어떤 제품에 대한 article인지 명시해줌.

- 제품에 대한 설명은 `<h3>`요소를 통해 부제목의 의미로 사용.

- button 컴포넌트를 `<a>`요소로 마크업.

  1. 처음에는 `<button>`요소로 마크업 했었지만, **클릭 했을 때** 상세 정보 or 가격 정보 **페이지로 이동**할텐데 "`<button>`안에 `<a>` 요소를 넣어도 되나?" 고민.
  2. **"접근성 측면에서 올바른가?"** 고민하다가, 유튜브 'AOA11y 채널'의 영상을 참고하여 **`<a role="button">`으로** 마크업함.<br/>
     (참고 유튜브 영상: https://www.youtube.com/watch?v=dhsr2LGTA-s)
  3. 아래의 이미지는 `<button>`요소와 `<a>`요소로 마크업 했을 때의 우클릭 차이.<br /><br/>
     **`<button>`요소로 마크업**<br/>
     <img width="300" alt="apple_button마크업" src="https://github.com/joowon-jang/homework/assets/72129693/465eb947-238b-40eb-97dc-9e6cb3f3c61d"><br/><br/>
     **`<a>`요소로 마크업**<br/>
     <img width="300" alt="apple_a마크업" src="https://github.com/joowon-jang/homework/assets/72129693/01ec062d-ff2e-4cda-ad2e-b3761ab08572">

## CSS

### 컴포넌트화

**카드 컴포넌트** 구현 및 그 안에서 **버튼 컴포넌트** 분리

- #### 카드 컴포넌트

  - **flexbox로 구현**
  - card 클래스: 카드 컴포넌트의 공통 스타일.
  - card-black, card-whit 클래스: 카드 배경에 따른 두가지 타입의 스타일.

- #### 버튼 컴포넌트

  - button 클래스: 버튼 컴포넌트의 공통 스타일.
  - button-blue, button-black 클래스: 버튼 컴포넌트의 두가지 색상 타입의 스타일.
  - button-left, button-right 클래스: 버튼의 background-color, border-color 등의 스타일 차이에 따른 두가지 타입.

### 레이아웃

- #### Grid 및 반응형

  - **모바일(Small Screen) 퍼스트** 구현 후 **@media 규칙**을 통해 **데스크탑(Large Screen) 환경**의 **필요한 부분만** 스타일 재정의.

  - grid를 사용하여 세로로 1열로 배치하고, 데스크탑 환경에서 배치(2열) 및 background-image 변경.

## etc

### 질문

- 아래의 css코드에서 &:hover 부분이 &.button-left와 &.button-right 보다 위쪽에 위치하면 &:hover의 스타일이 적용이 안됩니다. button-left와 button-right의 hover에 대한 스타일은 지정한 적이 없는데 왜 안되는 건가요?

  ```css
  /* button-blue */
  .button-blue {
    /* blue + left */
    &.button-left {
      color: var(--white);
      background-color: var(--button-blue);
      border-color: var(--button-blue);
    }
    /* blue + right */
    &.button-right {
      color: var(--button-blue);
      background-color: transparent;
      border-color: var(--button-blue);
    }

    /* blue hovered */
    &:hover {
      background-color: var(--button-blue-hover);
      border-color: var(--button-blue-hover);
      color: var(--white);
    }
  }
  ```

  한시간동안 찾아봐도 모르겠습니다ㅠㅠ

### 이번 과제에서 알게 된 사실 + 느낀점 !

- 한 클래스에서 정의한 변수는 해당 클래스가 적용된 요소와 그 요소의 자식 요소, 그리고 (해당 클래스가 적용된 요소의) 다른 클래스에서도 사용할 수 있다.<br/>

  ```html
  <!-- ex) 아래와 같은 요소에서 .button 선택자를 통해 선언한 변수는 .button-black, .button-left 에서도 사용가능! -->
  <a class=".button .button-black .button-left"></a>
  ```

  > 다른 css파일에서 .button의 style을 import해도 .button-black, .button-left에서 .button의 변수를 사용할 수 있기 때문에 컴포넌트 분리의 개념이 더 확실하게 다가왔다.

- 접근성 측면에서 `<button>`요소와 `<a>`요소를 고민하면서 **"별 차이 없는 같은데?"**라고 생각했었지만, 브라우저에서 직접 나타나는 차이점(우클릭)을 봤을 때, 장애를 가진 사용자 외에도 사용할 때에 **"이렇게 직접적이고 직관적인 차이가 있었구나.."** 하면서 깨달음(?)이 있었다.
  > 접근성을 고려하지 않는 것은 **틀린 것이 아니라 아쉬운 부분**이기 때문에 정답을 찾을 수도 없고 계속 고민이 되어서, 이번 과제에서 **"어떻게 하면 접근성을 더 더 높일 수 있을까"** 고민하는 시간이 가장 즐거웠다!!!
