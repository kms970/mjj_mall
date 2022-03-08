import React, { useEffect } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import {Divider, PageHeader, Form, Input, InputNumber, Button, Radio} from 'antd';
import {StyledHeaderDiv, StyledHeaderSpan, StyledContentH2, StyledJoinDetailTable} from './JoinStyle';
import config from '../../config/config';
import axios from 'axios';

function JoinConsumer() {
  const navigate = useNavigate(); //Router push를 위한 함수(redirect)
  let formRef = React.createRef(); //form 초기화를 위한 변수
  /**
   * form의 layout을 설정
   *
   * @type {{wrapperCol: {span: number}, labelCol: {span: number}}}
   *
   * @author jslee
   * @since 2022-03-04
   */
  const layout = {
    labelCol: {
      span: 10,
    },
    wrapperCol: {
      span: 4
    }
  };

  /**
   * 회원가입 validation
   *
   * @type {{number: {range: string}, types: {number: string, email: string}, required: string}}
   *
   * @author jslee
   * @since 2022-03-04
   */
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

  /**
   * 회원가입을 요청하는 function
   *
   * @param event 회원가입 정보
   *
   * @author jslee
   * @since 2022-03-04
   */
  const onFinish = (event) => {
    console.log("Join event(회원가입 작성 이벤트)", event);
    axios.post(config.serverUrl + config.serverPort + config.JoinCustomer,
      {
        memberId: event.user.memberId,
        memberPwd: event.user.memberPwd,
        memberPwdCheck: event.user.memberPwdCheck,
        memberEmail: event.user.memberEmail,
        memberName: event.user.memberName,
        memberAddress: event.user.memberAddress,
        memberBirth: event.user.memberBirth,
        memberPhoneNumber: event.user.memberPhoneNumber,
        memberSex: event.user.memberSex
      })
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

  /**
   * Form을 초기화 하는 function
   *
   * @author jslee
   * @since 2022-03-04
   */
  const resetForm = () => {
    console.log(formRef.toString());
    formRef.current.setFieldsValue({
      user: {
        memberId: undefined,
        memberPwd: undefined,
        memberPwdCheck: undefined,
        memberEmail: undefined,
        memberName: undefined,
        memberAddress: undefined,
        memberBirth: undefined,
        memberPhoneNumber: undefined,
        memberSex: undefined
      }
    });
    console.log("초기화 성공");
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
          <th><span style={{color:'red'}}>개인 </span>회원</th>
        </tr>
        </thead>
      </StyledJoinDetailTable>
      <Divider style={{margin: '18px 0px'}}/>


      <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} style={{width: "100%"}} ref={formRef}>
        <Form.Item
          name={['user', 'memberId']}
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
          name={['user', 'memberPwd']}
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
          name={['user', 'memberPwdCheck']}
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
          name={['user', 'memberEmail']}
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
          name={['user','memberName']}
          label="이름"
          rules={[
            {
              required: true
            },
          ]}
        >
          <Input/>
        </Form.Item>
        <Form.Item
          name={['user','memberAddress']}
          label="주소"
        >
          <Input/>
        </Form.Item>
        <Form.Item
          {...layout}
          name={['user','memberBirth']}
          label="생년월일"
          rules={[
            {
              type: 'number',
              min: 19000101
            },
          ]}
        >
          <InputNumber style={{width: "320px"}}/>
        </Form.Item>
        <Form.Item
          {...layout}
          name={['user','memberPhoneNumber']}
          label="휴대폰번호"
          rules={[
            {
              type: 'number'
            },
          ]}
        >
          <InputNumber style={{width: "320px"}}/>
        </Form.Item>
        <Form.Item
          name={['user','memberSex']}
          label="성별"
        >
          <Radio.Group>
            <Radio value = {"남자"}>남</Radio>
            <Radio value = {"여자"}>여</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 10 }}>
          <Link to="/"><Button type="primary" style={{margin: "3px"}}>취소</Button></Link>
          <Button type="primary" style={{margin: "3px"}} onClick={resetForm}>다시 작성</Button>
          <Button type="primary" htmlType="submit" style={{margin: "3px"}}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default JoinConsumer;