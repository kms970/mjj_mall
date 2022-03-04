import React from 'react';
import {Link} from 'react-router-dom';
import {Divider, PageHeader} from 'antd';
import {StyledContentDiv, StyledHeaderDiv, StyledHeaderSpan, StyledTable} from './join/JoinStyle';


function Join() {
  return (
    <div style={{width:"100%"}}>
      <PageHeader
        className="site-page-header"
        title="회원가입"
        style={{display: 'inline-block'}}
      />
      <StyledHeaderDiv>
        <StyledHeaderSpan><b>1. 회원가입</b></StyledHeaderSpan>
        <StyledHeaderSpan>2. 정보입력</StyledHeaderSpan>
        <StyledHeaderSpan>3. 가입완료</StyledHeaderSpan>
      </StyledHeaderDiv>
      <Divider style={{margin: 0}}/>

      <StyledContentDiv>
        <div style={{border: '1px solid #444444'}}>
          안녕하세요, 간결하고 알찬 쇼핑몰, MJJ MALL 입니다.
          <div><button>MJJ MALL 간편 회원가입</button></div>
          <div><span>이미지 부분</span></div>
        </div>
        <div style={{marginTop:"35px"}}>
          <StyledTable>
            <thead>
              <tr>
                <th><span style={{color:'red'}}>개인</span>회원</th>
                <th><span style={{color:'red'}}>기업</span>회원</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><Link to="/join/consumer"><button>가입하기</button></Link></td>
                <td><Link to="/join/provider"><button>가입하기</button></Link></td>
              </tr>
            </tbody>
          </StyledTable>
        </div>
      </StyledContentDiv>

    </div>
  );
}
export default Join;