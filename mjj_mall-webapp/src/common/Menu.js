import React from 'react';
import { Menu } from 'antd';

function MenuFunction() {
  const { SubMenu } = Menu;

  return (
    <div>
      <Menu
        style={{width: 256}}
        defaultSelectedKeys={['1']}
        mode="vertical"
      >
        <Menu.Item key="1" >브랜드패션</Menu.Item>
        <Menu.Item key="2" >트렌드패션</Menu.Item>
        <Menu.Item key="3" >뷰티</Menu.Item>
        <Menu.Item key="4" >식품</Menu.Item>
        <Menu.Item key="5" >스포츠/레저/자동차</Menu.Item>
        <Menu.Item key="6" >출산/육아</Menu.Item>
        <Menu.Item key="7" >가구/인테리어</Menu.Item>
        <SubMenu key="sub1" title="생활/건강">
          <Menu.Item key="8">화장품</Menu.Item>
        </SubMenu>

        <SubMenu key="sub2" title="가전/디지털">
          <Menu.Item key="9">김치냉장고</Menu.Item>
          <Menu.Item key="10">모니터</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  )
}
export default MenuFunction;