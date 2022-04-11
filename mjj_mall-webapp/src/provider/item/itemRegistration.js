import React,{ useState, useEffect } from 'react';
import {Divider, PageHeader, Input, Select, Button, Form } from "antd";


/*
function ItemRegistration() {
  const { Option } = Select;
  const currenttime = new Date();
  currenttime.setHours(currenttime.getHours() + 9);
  let currentTimeFormat = currenttime.toISOString().replace('T'," ").substring(0, 19);

  /!**
   * 상품 등록 페이지에서 받을 상품 정보
   *!/
  const [product, setproduct] = useState({
    productName: '',
    productCompany: '',
    category: '',
    productMainImage: '',
    productImage: '',
    productPrice: '',
    productRegistrationDate: currentTimeFormat,
    productNumber: 0
  });


  /!**
   * input 값을 받는 functions
   * @param e input 값
   * @returns {Promise<void>} 동기를 맞추기 위해서 사용
   * @author jslee
   * @since 2022-03-12
   *!/
  const onChangeFunction = async(e) => {
    const {value, name} = e.target;

    await setproduct({
      ...product,
      [name]: value
    })
  }

  /!**
   * 카테고리 소분류를 선택했을 때, function
   * @param e 선택한 소분류 카테고리
   * @author jslee
   * @since 2022-03-12
   *!/
  const categotySelect = (e) => {
    const {value, name} = e.target;

  }

  /!**
   * 등록을 요청하는 functions
   * @author jslee
   * @since 2022-03-12
   *!/
  const onsubmitFunction = () => {
    console.log("등록", product);
  }

  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="상품등록"
      />
      <Divider />
      <table>
        <tbody>
        {/!* 상품명 *!/}
        <tr>
          <td>상품명(필수)</td>
          <td colSpan="4"><Input type="text" name="productName" onChange={onChangeFunction}/></td>
        </tr>
        {/!* 판매업체 *!/}
        <tr>
          <td>판매업체</td>
          <td colSpan="4"><Input type="text" name="productCompany" onChange={onChangeFunction}/></td>
        </tr>
        {/!* 카테고리 *!/}
        <tr>
          <td>카테고리</td>
          <td>
            <Select style={{ width: 120 }} defaultValue="">
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
            <Select style={{ width: 120 }} defaultValue="">
              <Option value="">대분류 분류</Option>
              <Option value="가전">가전</Option>
              <Option value="디지털">디지털</Option>
            </Select>
          </td>
          <td>
            <Select style={{ width: 120 }} defaultValue="">
              <Option value="">중분류 분류</Option>
              <Option value="가전">가전1</Option>
              <Option value="가전2">가전2</Option>
              <Option value="가전3">가전3</Option>
            </Select>
          </td>
          <td>
            <Select style={{ width: 120 }} defaultValue="">
              <Option value="">소분류 분류</Option>
              <Option value="소가전1">소가전1</Option>
              <Option value="소가전2">소가전2</Option>
              <Option value="소가전3">소가전3</Option>
            </Select>
          </td>
        </tr>
        {/!* 상품 이미지 *!/}
        <tr>
          <td>상품 이미지</td>
          <td colSpan="4">이미지 공간</td>
        </tr>
        {/!* 상품 가격 *!/}
        <tr>
          <td>상품 가격</td>
          <td colSpan="4"><Input type="text" onChange={onChangeFunction} name="productPrice"/></td>
        </tr>
        {/!* 상품 등록일 *!/}
        <tr>
          <td>상품 등록일</td>
          <td colSpan="4"><Input type="text" defaultValue={currentTimeFormat} onChange={onChangeFunction} name="productRegistrationDate"/></td>
        </tr>
        {/!* 전화 번호 *!/}
        <tr>
          <td>전화번호</td>
          <td colSpan="4"><Input type="number" onChange={onChangeFunction} name="productNumber"/></td>
        </tr>
        </tbody>
      </table>
      <Button onClick={onsubmitFunction}>등록하기</Button>
    </div>
  )
}*/

function ItemRegistration() {
  const { Option } = Select;
  const [form] = Form.useForm();
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 16,
      },
      sm: {
        span: 4,
      },
    },
    wrapperCol: {
      xs: {
        span: 16,
      },
      sm: {
        span: 8,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  /**
   * 상품 등록 버튼을 클릭시 동작할 functions
   *
   * @param values 상품 등록을 위해서 등록한 value
   * @author jslee
   * @since 2022-03-30
   */
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  }

  const categoryJson = [
    { name: "가전/디지털", category:'electronicsNDigital', index: 1, parentIndex: null},
    { name: "가전", category:'electronics', index: 101, parentIndex: 1},
    { name: "디지털", category:'digital', index: 102, parentIndex: 1},
    { name: "컴퓨터", category:'computer', index: 103, parentIndex: 1},
    { name: "TV", category:'tv', index: 10101, parentIndex: 101},
    { name: "냉장고", category:'refrigerator', index: 10102, parentIndex: 101},
    { name: "세탁기/건조기", category:'washingNDryingMachine', index: 10103, parentIndex: 101},
    { name: "휴대폰", category:'phone', index: 10201, parentIndex: 102},
    { name: "노트북", category:'notebook', index: 10301, parentIndex: 103},
    { name: "데스크톱", category:'desktop', index: 10302, parentIndex: 103},
    { name: "모니터", category:'monitor', index: 10303, parentIndex: 103},
  ]
  const [middleCategory, setMiddleCategory] = useState([]);

  useEffect(()=>{
    console.log("eeee");
    console.log("eeeeeeeeeeee filterValue", middleCategory);
  },[middleCategory]);

  const changeMajorCategory = async(event) => {
    console.log("event", event);
    let valueCategory = await categoryJson.filter(it => it.parentIndex == event);
    console.log("valueCate",valueCategory);

    setMiddleCategory(valueCategory);
    console.log("filterValue", middleCategory);
  }

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{width: 170}}>
        <Option value="1">+1(USA)</Option>
        <Option value="82">+82(south of Korea)</Option>
      </Select>
    </Form.Item>
  )

  return (
    <div style={{width: '100%'}}>
      <PageHeader
        className="site-page-header"
        title="상품등록"
      />
      <Divider />
      <Form
        {...formItemLayout}
        form={form}
        name="product"
        onFinish={onFinish}
        initialValues={{
          prefix: '82',
        }}
        scrollToFirstError
      >
        <Form.Item
          name="productName"
          label="상품명"
          rules={[
            {
              required: true,
              message: 'Please input product Name',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="productNumber"
          label="전화번호"
          rules={[
            {
              required: true,
              message: 'Please input your phone number!',
            },
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{
              width: '100%',
            }}
          />
        </Form.Item>

        <Form.Item
          name="productPrice"
          label="상품가격"
          rules={[
            {
              type:'number',
              required: true,
              message: 'Please input your product Price!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="productCompany"
          label="판매업체"
          rules={[
            {
              required: true,
              message: 'Please input product Company',
            },
          ]}
        >
          <Input />
        </Form.Item>

				{/* 카테고리 */}
				<Form.Item name="" label="대분류">
					<Select onChange={changeMajorCategory}>
						<Option value="">대분류</Option>
            <Option value="1">가전/디지털</Option>
					</Select>
				</Form.Item>

        <Form.Item name="" label="중분류">
          <Select>
              {middleCategory.map(res=><Option value={res.index}>{res.name}</Option>)}
          </Select>
				</Form.Item>
      

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            상품 등록
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}


export default ItemRegistration;