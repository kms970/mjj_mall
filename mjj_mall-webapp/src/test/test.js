import axios from 'axios';
import React from 'react';
import { base64DecodingFunc } from '../common/crypto';
import { getStorageAuth, getStorageJWTToken } from '../common/sessions';
import config from '../config/config';

function TestFunction() {

  const buttonFunction = () => {
    let auth = getStorageAuth();
    let jwt_token = getStorageJWTToken();
    let decoding = base64DecodingFunc(jwt_token);

    console.log("auth:", auth);
    console.log("jwt_token:", jwt_token);
    axios.get(config.serverUrl + config.serverPort + config.Test, {
      headers: {
        Authorization: 'Bearer ' + jwt_token
      }
    })
    .then(res=>{
      console.log("res", res);
    })
    .catch(error => {
      console.error(error);
    })
  }

  return (
    <div>
      test 요청을 하기 위한 페이지
      <button onClick={buttonFunction}>테스트</button>
    </div>
  )
}

export default TestFunction;