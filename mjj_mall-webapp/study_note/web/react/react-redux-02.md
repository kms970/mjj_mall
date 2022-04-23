# 리액트 + 리덕스 강의 2
## 툴링 및 보일러 플레이트 프로젝트를 통해 단순한 어플리케이션을 만드는 방법
![modern javascript tooling](../../assets/images/modern%20javascript%20tooling.jpg)

ES6, ES2016으로 작성된 javascript 파일은 브라우저에서 동작하지 않을 수 있음
그래서 먼저 툴링(tooling) 혹은 트랜스파일(transpile)하는 과정을 거침<br>

`* 트랜스파일: 코드를 같은 수준의 다른언어로 바꿔주는 과정` <br>


트랜스파일(transpile)을 하기 위해, 웹팩(webpack)이라 불리는 도구를 이용 예정<br>
바벨(babel) 혹은 바벨JS(babel.js)라고 불리는 라이브러리로 구성할 것<br>
웹팩과 바벨의 목적은 ES6 코드가 바로 브라우저에 실행하지 못하는 문제를 해결하기 위해, 이를 트랜스파일하여 브라우저에서 돌아가는 코드로 변형하는 것

웹팩, 바벨을 거친 후 이는 application.js, main.js, app.js 같은 하나의 파일로 나오게 된다.

결론: <br>
프로젝트에서 source코드를 작성 -> 트랜스 파일 -> 브라우저에서 동작