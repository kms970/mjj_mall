import React from 'react';
import {Divider, PageHeader, Form, Input, InputNumber, Button, Radio} from 'antd';
import {StyledHeaderDiv, StyledHeaderSpan, StyledContentH2, StyledJoinDetailTable} from './JoinStyle';

function JoinProvider() {
  const layout = {
    labelCol: {
      span: 10,
    },
    wrapperCol: {
      span: 4
    }
  };

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be greater than ${min}',
    },
  };

  const onFinish = (event) => {
    console.log("Join event(회원가입 작성 이벤트)", event);
  }

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
          <th><span style={{color:'red'}}>업체 </span>회원</th>
        </tr>
        </thead>
      </StyledJoinDetailTable>
      <Divider style={{margin: '18px 0px'}}/>


      <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} style={{width: "100%"}}>
        <Form.Item
          name={['provider', 'id']}
          label="아이디"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['provider', 'password']}
          label="비밀번호"
          rules={[
            {
              required: true
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name={['provider', 'passwordvaild']}
          label="비밀번호 확인"
          rules={[
            {
              required: true
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name={['provider', 'email']}
          label="이메일"
          rules={[
            {
              type: 'email',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['provider','name']}
          label="상호명"
        >
          <Input/>
        </Form.Item>
        <Form.Item
          {...layout}
          name={['provider','businessNumber']}
          label="사업자등록번호"
          rules={[
            {
              type: 'number'
            },
          ]}
        >
          <InputNumber style={{width: "320px"}}/>
        </Form.Item>
        <Form.Item
          {...layout}
          name={['provider','phone']}
          label="휴대폰번호"
          rules={[
            {
              type: 'number'
            },
          ]}
        >
          <InputNumber style={{width: "320px"}}/>
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 10 }}>
          <Button type="primary" style={{margin: "3px"}}>취소</Button>
          <Button type="primary" style={{margin: "3px"}}>다시 작성</Button>
          <Button type="primary" htmlType="submit" style={{margin: "3px"}}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default JoinProvider;