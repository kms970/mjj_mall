/*
1. Company 부분 구현

2. Login 이후 Token validation 체크(middleware)
 2-1 Token validation 체크 할 API 하나 뚫어주기

//3. saveRefreshToken 수정(완)
4. 상품 관리 구현(DB 데이터 관리)
5. Company ID, PWD 찾는부분 인자값 정하기
6. 디자인 패턴 공부
7. 현재 개발된 모듈들 주석 달아주기
8. ORM 공부
9. 현재 개발된 부분 리팩토링 가능성 체크
 9-1 company 와 user 부분을 클래스와 prototype을 이용하여 합치기 가능할거 같음(이부분은 구조화 조금 더 필요)
 9-2 services부분도 동일(현재까지 구현된 부분임[findid, signin, signup])
 9-3 service부분에서 생성자 구분시 model 부분 합치기 가능할거같음
 9-4 DB 구조 변경(모듈도 함께 리팩토링 될 가능성이 큼)
 9-5 prototype 생성자 구조 생각 해봅시다(정현)
     - 여기에 댓글 달아줘
     - 생성자가 필요 없는 구조면 단순 prototype도 괜찮을듯(민석)
     - 댓글 있나요 없네요
  - 참조 사이트 : https://edykim.com/ko/post/summary-of-six-rules-for-designing-a-mongodb-schema/



  TS 공부중
   - 참조 사이트 : https://www.samsungsds.com/kr/insights/TypeScript.html

   ORM, Mocha 공부
   제어반전, 의존성 주입 공부
   http2.0 의 탄생 배경 + 원리 공부  https://americanopeople.tistory.com/115

   ====================Docker & 쿠버네티스 공부중===================
   = 무엇을 바꿀수있을까.........................................................................
   = 오늘 공부 방식중 특이점 발견
     - 클래스 형식으로 다리 하나 만들면 서로 다른 파일에서 같은 변수 공유 가능함
     - get set 이용해서 전역변수 바꾸는 식(별로 권장되진 않지만 이부분이 특이해서 공유해봄)
     - 현재 java로 어플 중....
     - js 에는 딱히 디자인 패턴이 필요 없지만 그래도 하나로 통일해야할듯
     - module이나 prototype으로
     - nodejs, spring 차이 및 장단점 공부(다시)
     1. Docker & 쿠버네티스 공부 하는 김에 jenkins도 같이 공부 하면 좋을 듯
      1-1. jenkins 장점: 빌드 및 배포 자동화 단점: 초기 세팅이 어려움
      

      node js 사용 기업 : 토스, 직방, 당근
      필요 기술 : typescript, graphQL, noSQL+RDBMS, ,쿠버네티스, docker 등등
*/                                  
