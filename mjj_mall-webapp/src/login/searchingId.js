import React, {useState} from 'react';
import {Modal, Button, Form, Input, InputNumber} from 'antd';
import axios from 'axios';
import config from '../config/config';

function SearchingId(props) {
  const {visible} = props;
  const [checkId, setCheckId] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(visible);
  const [isMemeberId, setMemberId] = useState('');

  const layout = {
    labelCol: {
      span: 10,
    },
    wrapperCol: {
      span: 4
    }
  };

  /**
   *
   */
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = (event) => {
    console.log("아이디 찾기: ", event);
    axios.post(config.serverUrl + config.serverPort + config.FindId,{
      memberEmail: event.memberEmail,
      memberBirth: event.memberBirth
    })
      .then(res=> {
        console.log("res", res);
        if(res.data.resultId) {
          setMemberId(res.data.resultId);
          setCheckId(true);
        }
      })
      .catch(error=> {
        console.error(error);
      })


    // setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setCheckId(false);
    setMemberId('');
  };


  return (
    <div style={{display: "inline-block"}}>
      <Modal
        title="아이디 찾기"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        destroyOnClose={true}
      >
        <Form
          name="idFind"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span:8
          }}
          autoComplete="off"
          onFinish={handleOk}
        >
          {/* ID 찾기 이름 */}
          <Form.Item
            label="이메일"
            name="memberEmail"
            rules={[
              {
                required: true,
                message: 'please input your memberEmail'
              }
            ]}
          >
            <Input/>
          </Form.Item>
          {/* ID 찾기 생년월일 */}
          <Form.Item
            label="생년월일"
            name="memberBirth"
            rules={[
              {
                required: true,
                message:'please input yout memberBirth'
              },
              {
                type:'number'
              }
            ]}
          >
            <InputNumber style={{width: '200px'}}/>
          </Form.Item>
          {checkId ? <div style={{width:'400px', border:'1px solid'}}><span >찾으신 아이디: </span><span >{isMemeberId}</span></div>:null}
          <Form.Item>
            <Button htmlType="submit" type="primary">아이디 찾기</Button>
            <Button onClick={handleCancel}>닫기</Button>
          </Form.Item>
        </Form>
      </Modal>
      <a onClick={showModal}>아이디 찾기</a>
    </div>
  )
}
export default SearchingId;