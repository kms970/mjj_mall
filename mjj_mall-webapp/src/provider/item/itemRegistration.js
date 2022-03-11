import React from 'react';
import {Divider, PageHeader, Input, Select} from "antd";

function ItemRegistration() {
  const { Option } = Select;
  const currenttime = new Date();
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="상품등록"
      />
      <Divider />
      <table>
        <tbody>
        {/* 상품명 */}
        <tr>
          <td>상품명(필수)</td>
          <td colSpan="4"><Input type="text"/></td>
        </tr>
        {/* 판매업체 */}
        <tr>
          <td>판매업체</td>
          <td colSpan="4"><Input type="text"/></td>
        </tr>
        {/* 카테고리 */}
        <tr>
          <td>카테고리</td>
          <td>
            <Select style={{ width: 120 }}>
              <Option value="">상품군 분류</Option>
              <Option value="브랜드쇼핑">브랜드패션</Option>
              <Option value="트렌드패션">트렌드패션</Option>
              <Option value="뷰티">뷰티</Option>
              <Option value="식품">식품</Option>
              <Option value="스포츠/레저/자동차">스포츠/레저/자동차</Option>
              <Option value="출산/육아">출산/육아</Option>
              <Option value="가구/인테리어">가구/인테리어</Option>
              <Option value="생활/건강">생활/건강</Option>
              <Option value="가전/디지털">가전/디지털</Option>
            </Select>
          </td>
          <td>
            <Select style={{ width: 120 }}>
              <Option value="">대분류 분류</Option>
              <Option value="가전">가전</Option>
              <Option value="디지털">디지털</Option>
            </Select>
          </td>
          <td>
            <Select style={{ width: 120 }}>
              <Option value="">중분류 분류</Option>
              <Option value="가전">가전1</Option>
              <Option value="가전2">가전2</Option>
              <Option value="가전3">가전3</Option>
            </Select>
          </td>
          <td>
            <Select style={{ width: 120 }}>
              <Option value="">소분류 분류</Option>
              <Option value="소가전1">소가전1</Option>
              <Option value="소가전2">소가전2</Option>
              <Option value="소가전3">소가전3</Option>
            </Select>
          </td>
        </tr>
        {/* 상품 이미지 */}
        <tr>
          <td>상품 이미지</td>
          <td colSpan="4">이미지 공간</td>
        </tr>
        {/* 상품 가격 */}
        <tr>
          <td>상품 가격</td>
          <td colSpan="4"><Input type="text"/></td>
        </tr>
        {/* 상품 등록일 */}
        <tr>
          <td>상품 등록일</td>
          <td colSpan="4"><Input type="text" defaultValue={currenttime}/></td>
        </tr>
        {/* 전화 번호 */}
        <tr>
          <td>전화번호</td>
          <td colSpan="4"><Input type="number"/></td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ItemRegistration;