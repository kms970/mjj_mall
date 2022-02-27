import React, { useState } from 'react';
import { PageHeader, Divider } from 'antd';
import styled from 'styled-components';

const StyledPageHeader = styled(PageHeader)`
  font-size: 12px;
  display: inline-block;
  text-align: center;
  //margin-right: auto;
`;

function Join() {

  /**
   * 회원가입을 요청하는 function
   *
   * @since 2022-02-24
   * @author jslee
   */
  const join = () => {

  }

  /**
   *
   */
  const vaildCheck = () => {

  }

  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="MJJ MALL"
        subTitle="간결하고 알찬 쇼핑몰, MJJ MALL 입니다."
        style={{display: 'inline-block', marginRight:'100px'}}
      />
      <Divider style={{margin: 0}}/>
      여기는 회원가입 페이지 입니다.

    </div>
  );
}


Join.defaultProps = {
  memberName: '',
  memberId: '',
  memberPwd: '',
  memberAddress: '',
  memberPhoneNumber: '',
  memberBirth: ''
}

export default Join;