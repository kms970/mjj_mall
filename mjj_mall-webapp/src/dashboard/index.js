import React from 'react';
import {Link} from 'react-router-dom';
/**
 *
 * @returns {JSX.Element}
 */
function dashboard() {


  return (
    <div>
      <h1>대시보드</h1>
      <a><Link to="/login">로그인</Link></a>
    </div>
  )
}

export default dashboard;