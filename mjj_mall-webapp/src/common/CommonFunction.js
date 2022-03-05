import axios from 'axios';
import { useNavigate } from 'react-router-dom';

/**
 * 모듈화 진행 중
 * @param url
 * @param data
 * @constructor
 * @since 2022-03-05
 * @author jslee
 */
function JoinRequest(url, data) {
  console.log(url, data);
  const navigate = useNavigate(); //Router push를 위한 함수(redirect)
  axios.post(url, data)
  .then(res => {
    console.log("회원가입", res);
    alert("회원가입 성공");
    navigate('/join/complete'); //회원가입을 성공하면 화면을 전환
  })
  .catch(error => {
    console.error(error);
    alert("회원가입 실패");
  })
}

export { JoinRequest };