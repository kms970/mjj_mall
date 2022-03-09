import React from 'react';
import {PageHeader} from "antd";
import {StyledHeaderDiv, StyledHeaderSpan} from "./JoinStyle";
import {Link} from 'react-router-dom';
function JoinComplete() {
  return (
    <div style={{width: "100%"}}>
      <PageHeader
        className="site-page-header"
        title="회원가입"
        style={{display: 'inline-block'}}
      />
      <StyledHeaderDiv>
        <StyledHeaderSpan>1. 회원가입</StyledHeaderSpan>
        <StyledHeaderSpan>2. 정보입력</StyledHeaderSpan>
        <StyledHeaderSpan><b>3. 가입완료</b></StyledHeaderSpan>
      </StyledHeaderDiv>

      <div>
        <div>저희 MJJ MALL을 이용해 주셔서 감사합니다.
          회원 가입이 완료 되었습니다.
        </div>
        <Link to="/"><button>MJJ MALL로 이동하기</button></Link>
        <div><span>이미지</span></div>
      </div>
    </div>
  )
}
export default JoinComplete;