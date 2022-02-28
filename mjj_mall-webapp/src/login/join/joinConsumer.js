import React from 'react';
import {Divider, PageHeader} from 'antd';
import {StyledHeaderDiv, StyledHeaderSpan, StyledContentH2, StyledJoinDetailTable} from './JoinStyle';


function JoinConsumer() {

  return (
    <div style={{width: "100%"}}>
      <PageHeader
        className="site-page-header"
        title="회원가입"
        style={{display: 'inline-block'}}
      />
      <StyledHeaderDiv>
        <StyledHeaderSpan>1. 회원가입</StyledHeaderSpan>
        <StyledHeaderSpan><b>2. 정보입력</b></StyledHeaderSpan>
        <StyledHeaderSpan>3. 가입완료</StyledHeaderSpan>
      </StyledHeaderDiv>
      <Divider style={{margin: 0}}/>
      <StyledContentH2>타인의 정보를 도용하여 가입하는 경우 3년 이하의 징역 또는 1천만원
      이하의 벌금에 처하게 됩니다.</StyledContentH2>
      <StyledJoinDetailTable>
        <thead>
        <tr>
          <th>회원정보</th>
          <th><span style={{color:'red'}}>개인 </span>회원</th>
        </tr>
        </thead>
      </StyledJoinDetailTable>
      <Divider style={{margin: '18px 0px'}}/>
        회원 가입 입력 폼


    </div>
  )
}

export default JoinConsumer;