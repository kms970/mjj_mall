import React, {useState} from 'react';
import {Modal, Button, Form, Input} from 'antd';

function SearchingId(props) {
  const {visible} = props;
  const [isModalVisible, setIsModalVisible] = useState(visible);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div style={{display: "inline-block"}}>
      <Modal title="아이디 찾기" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form
          name="idFind"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span:8
          }}
          autoComplete="off"
        >
          {/* ID 찾기 이름 */}
          <Form.Item
            label="이름"
            name="memberName"
            rules={[
              {
                required: true,
                message: 'please input your memberName'
              }
            ]}
          >
            <Input/>
          </Form.Item>

        {/*  */}
        </Form>
      </Modal>
      <a onClick={showModal}>아이디 찾기</a>
    </div>
  )
}
export default SearchingId;