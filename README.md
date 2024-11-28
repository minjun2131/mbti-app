## 🛠️ MBTI 테스트

### ✅ 프로젝트 목표
- 회원가입 , 로그인 및 프로필 관리, 테스트 , 테스트 결과 기능 구현
- 인증 및 권한 관리를 이용한 사용자 조회
- Axios와 TanStack Query를 활용한 비동게 데이터 관리
- json server를 이용해 테스트 결과 관리

### ✅ 프로젝트 설정
- Vite
- react-router-dom
- tailwind css / styled components
- tanstack query
- sweetalert

### ✅ 구현 기능
- 회원가입 및 로그인
- 프로필 닉네임 수정
- MBTI 테스트
- MBTI 테스트 결과 조회
  - 사용자가 직접 테스트 결과 공개 / 비공개 설정 가능 및 결과 삭제
  - 다른 사용자들의 테스트 결과 확인 가능
 
### ✅ 프로젝트 후기

부족한 점 :
- useEffect 와 useState의 렌더링 방식을 다시 공부할 필요가 있음
  - 그 결과 로그인시 새로고침을 해야지 잘 작동하는 문제가 생김 
- Button을 컴포넌트로 나눠 조건부 스타일링하게 하지 못함
- tailwind로 props를 받는 과정 중 오류가 생겨 styled components 유지
  - 한가지의 css로만 적용하는게 통일성을 챙기지 못함
 
배운 점 : 
- tanstack query 와 axios instance와 interceptor를 사용해봄
  - 별개로 브라우저의 요청에 대해 생각하며 구현해야 한다고 느낌
- tailwind로 prop 전달을 직접 확인해봄
