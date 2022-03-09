import React from 'react';
import {Link} from 'react-router-dom';
import {PageHeader} from "antd";
/**
 *
 * @returns {JSX.Element}
 */
function dashboard() {
  return (
    <div>

      <h1>대시보드</h1>

      <div><span style={{margin:"3px"}}><Link to="/login">로그인</Link></span><span style={{margin:"3px"}}><Link to="/join">회원가입</Link></span></div>


    </div>
  )
}

export default dashboard;