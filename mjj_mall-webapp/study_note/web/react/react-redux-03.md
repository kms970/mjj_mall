# 리액트 + 리덕스 강의 3


## source 코드 설명
```
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/style/style.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css">
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAq06l5RUVfib62IYRQacLc-KAy0XIWAVs"></script>
  </head>
  <body>
    <div class="container"></div>
  </body>
  <script src="/bundle.js"></script>
</html>
```

`bundle.js` 파일은 전체 어플리케이션의 컴파일된 자바스크립트 파일입니다. <br>
actions, components, reducers등 폴더 내의 js 파일을 Webpack과 babel은 하나의 파일로 합쳐서`bundle.js`파일 하나로 이용할 수 있게 만드는 것<br>

## react란?
react는 자바스크립트 라이브러리이다.<br>
웹브라우저에 보여지는 HTML을 만드는 라이브러리이다.

react로 코드를 작성하게 되면, 우리는 `컴포넌트(Component)` 혹은 `뷰(View)`를 각각 만들게 된다. `컴포넌트`는 소스코드의 일부이며 이코드는 HTML을 생성한다.

`컴포넌트`는 HTML을 만드는 자바스크립트 함수의 모음집이다.

<br>

## 설명
`const`는 ES6나 ES2016에서 나오는 표현 중 하나이다.
`const`로 선언한 변수는 최종값을 갖는다. 선언 이후로 변하지 않는다. <br>
그래서 우리는 `변수`라고 부르지 않고, `상수`라고 부른다.

`상수`는 선언 이후에 재할당 되지 않는다.

`변수` 변하는 값
`상수` 변하지 않는 값

```
const App = function() {
  return <div>HI!</div>;
}
```
여기서 javascript내의 HTML으로 보이는 것들은 `JSX`라고 불리는 것이다.
`JSX`는 부분적인 템플릿 혹은 변형된 자바스크립트로 자바스크립트 내에 HTML처럼 보이는 소스코드를 사용할 수 있게 도와준다.









