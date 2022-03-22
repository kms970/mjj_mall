import React, {useState} from 'react';
import { Modal, Button } from 'antd';

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
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <a onClick={showModal}>아이디 찾기</a>
    </div>
  )
}
export default SearchingId;