import React, {useState, useRef} from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import styled from 'styled-components';
import {CheckOutlined} from '@ant-design/icons';
/**
 * StyledButton button의 style을 지정
 * @author jslee
 * @since 2022-02-26
 */
const StyledButton = styled(Button)`
    /* 색상 */
  background: #ffb2e1;

  &:hover {
    background: #ff9ad5;
  }

  &:active {
    background: #ff8ac6;
  }
`;

/**
 * 로그인 수행하는 클래스 functions
 *
 * @returns {JSX.Element} 로그인 HTML
 * @constructor 로그인 default 생성자 함수
 * @since 2022-02-24
 * @author jslee
 */
function Login() {
  /**
   * 회원 가입 페이지로 라우팅을 넘겨주는 함수
   *
   * @author jslee
   * @since 2022-02-25
   */
  const goToJoin = () => {

  }

  /**
   * 로그인을 요청하는 함수
   *
   * @author jslee
   * @since 2022-02-24
   */
  const loginRequest = (event) => {
    console.log("login event", event);
  }

  /**
   * @deprecated
   *
   * input값을 받으면 실시간으로 값을 매핑
   * @param e input 태그를 통해 입력 받은 값
   *
   * @since 2022-02-24
   */
  const onChange = e => {
    const {value, name} = e.target; // 우선 e.target에서 name과 value 추출

    // setInputs({
    //   ...inputs, // 기존의 input 객체를 복사
    //   [name]:value //name 키를 가진 값을 value로 설정
    // })
  }

  return (
    <div>
      <Form
        name="basic"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 8,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={loginRequest}
        autoComplete="off"
      >
        <Form.Item
          label="ID"
          name="memberId"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="memberPwd"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 4,
            span: 8,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 4,
            span: 8,
          }}
        >
          <StyledButton type="primary" htmlType="submit">
            <CheckOutlined />
            Submit
          </StyledButton>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login;