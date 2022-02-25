import React, {useState, useRef} from 'react';

function Login() {

  const [inputs, setInputs] = useState({
    name: '',
    password: ''
  });

  const nameInput = useRef();

  const {name, password} = inputs; // 비구조화 할당을 통해 값을 추출

  /**
   * 로그인을 요청하는 함수
   * @author jslee
   */
  const loginRequest = () => {
    console.log("login value: ", inputs);
  }

  /**
   * input값을 받으면 실시간으로 값을 매핑
   * @param e input 태그를 통해 입력 받은 값
   */
  const onChange = e => {
    const {value, name} = e.target; // 우선 e.target에서 name과 value 추출

    setInputs({
      ...inputs, // 기존의 input 객체를 복사
      [name]:value //name 키를 가진 값을 value로 설정
    })
  }

  return (
    <div>
      <input type="text" name="name" placeholder="ID 입력" onChange={onChange} value={name} ref={nameInput}/>
      <input type="password" name="password" placeholder="ID 입력" onChange={onChange} value={password} />
      <button onClick={loginRequest}>로그인</button>
    </div>
  )
}

/**
 * 로그인 요청을 받는 default
 * @type {{memberPwd: string, memberName: string}}
 * @author jslee
 */
Login.defaultProps = {
  memberName: '',
  memberPwd: ''
}

export default Login;