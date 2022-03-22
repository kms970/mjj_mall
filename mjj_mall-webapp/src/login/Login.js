import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Button, Checkbox, Divider, Form, Input, PageHeader} from 'antd';
import styled from 'styled-components';
import {CheckOutlined} from '@ant-design/icons';
import axios from 'axios';
import config from '../config/config';
import cryptoFunction, {base64DecodingFunc, cryptotoSha512} from '../common/crypto';
import {saveStorageAuth, saveStorageJWTToken} from "../common/sessions";
import SearchingId from "./searchingId";
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

  const [visible, setvisible] = useState(false);
  /**
   * 로그인을 요청하는 함수
   *
   * @param event 로그인 요청 데이터(ID, Password)
   * @author jslee
   * @since 2022-02-24
   */
  const loginRequest = (event) => {
    console.log("login event", event);
    let encodingPwd = cryptotoSha512(event.memberPwd)

    axios.post(config.serverUrl + config.serverPort+ config.Login, {
      memberId: event.memberId,
      memberPwd: encodingPwd
    })
      .then(res =>{
        console.log("response", res);
        if(res.data.accessToken !==undefined || res.data.accessToken !== null) {
          saveStorageJWTToken(res.data.accessToken);
          let decodingToken = base64DecodingFunc(res.data.accessToken);
          console.log("decodingToken: ", decodingToken);
          saveStorageAuth(decodingToken.iss);
        }
        alert("로그인 성공!");
      })
      .catch(error => {
        if(error == undefined || error.response == undefined || error.response.data == undefined) alert("로그인 실패: " + error);
        else if(error.response.data.customError !== undefined || error.response.data.customError !== null) alert("로그인 실패: " + error.response.data.customError);
        else alert("로그인 실패: " + error);
      }
    )
  }

  return (
    <div>
      <PageHeader
        className="site-page-header"
        // onBack={() => null} //이후 이전 화면으로 돌아가기 위한 버튼
        title="MJJ MALL"
        subTitle="간결하고 알찬 쇼핑몰, MJJ MALL 입니다."
      />
      <Divider style={{margin: 0}} />

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
          <span><Checkbox>Remember me</Checkbox></span>
          <span><SearchingId visible={visible}></SearchingId> | <>비밀번호 찾기</></span>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 4,
            span: 8,
          }}
        >
          <span>
            <StyledButton type="primary" htmlType="submit">
              <CheckOutlined />
              Submit
            </StyledButton>
          </span>

          <span><Link to="/join">아직 회원이 아니신가요?</Link></span> {/* 회원 가입 화면으로 이동하는 태그 */}
        </Form.Item>

      </Form>
    </div>
  )
}

export default Login;