import { PageHeader, Button, Input, Select, Divider } from "antd";
import React, {useState} from "react";
import {Link, Outlet} from "react-router-dom";
import { MenuUnfoldOutlined, MenuFoldOutlined, SearchOutlined  } from "@ant-design/icons";
import MenuFunction from "./Menu";

function Header() {

  const [MenuVisble, setMenuVisble] = useState(false);
  const [searchType, setSearchType] = useState("");
  const [searchInputData, setSearchInputData] = useState("");
  const { Option } = Select;

  /**
   * Header에 메뉴를 보이고, 안보이고 하게 만드는 토글
   * @author jslee
   * @since 2022-03-09
   */
  const visbleToggle = () => {
    setMenuVisble(!MenuVisble);
  }

  /**
   * header에 입력 값을 받는 부분
   * @param e 입력값
   * @since 2022-03-09
   * @author jslee
   */
  const setSearchInputDataFunction = (e) => {
    setSearchInputData(e.target.value);
  }

  /**
   * 검색을 눌렀을 때, 검색을 실행하는 부분
   *
   * @author jslee
   * @since 2022-03-09
   */
  const submitSearchData = () => {
    console.log("검색 타입: ", searchType, ", 검색 내용: ", searchInputData);
  }


  return (
    <div>

      <div>
        <Button onClick={visbleToggle} style={{display: "inline-block"}}>
          {React.createElement(MenuVisble ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
        <PageHeader
          className="site-page-header"
          title="MJJ MALL"
          subTitle="행복한 쇼핑"
          style={{display: 'inline-block'}}
        />
        <div style={{display: "inline-block"}}>
          <span>
            <Select defaultValue={searchType} style={{ width: 120 }} onChange={setSearchType}>
              <Option value="">통합검색</Option>
              <Option value="쇼킹딜">쇼킹딜</Option>
              <Option value="가격비교">가격비교</Option>
              <Option value="아마존">아마존</Option>
              <Option value="오늘발송">오늘발송</Option>
            </Select>
          </span>
          <span><Input style={{width: 360}} onChange={setSearchInputDataFunction}/></span>
          <span><Button onClick={submitSearchData}><SearchOutlined /></Button></span>
        </div>
      </div>
      <Divider />
      <div style={{float:"right"}}>
        <span style={{margin:"3px"}}>
          <Link to="/login">로그인</Link>
        </span>
        <span style={{margin:"3px"}}>
          <Link to="/join">회원가입</Link>
        </span>
      </div>
      {
        MenuVisble ? <MenuFunction/> : <></>
      }
      <Outlet />
    </div>
  )
}
export default Header;