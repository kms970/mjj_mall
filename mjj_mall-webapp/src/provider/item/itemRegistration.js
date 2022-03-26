import React,{ useState } from 'react';
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
   * 카테고리
   * @type {{midCategory: {브랜드여성: string[], 가전: string[], 전체: string[], 디지털: string[], 트렌드여성: string[]}, smallCategory: {TV: string[], 냉장고: string[], 전체: string[]}, majorCategory: {"가전/디지털": string[], 전체: string[], 트렌드패션: string[], 브랜드패션: string[]}, categoryGrp: string[]}}
   */
  /*const categoryData = {
    "categoryGrp": ["브랜드패션", "트렌드패션", "뷰티", "식품", "가전/디지털"],
    "majorCategory": {
      "전체":["전체"],
      "브랜드패션": ["브랜드여성", "브랜드남성", "브랜드키즈", "브랜드공용"],
      "트렌드패션": ["트렌드여성", "트렌드남성", "트렌드키즈", "트렌드공용"],
      "가전/디지털": ["가전", "컴퓨터", "디지털"]
    },
    "midCategory": {
      "전체":["전체"],
      "브랜드여성": ["브랜드/여성/상의","브랜드/여성/하의","브랜드/여성/셔츠","브랜드/여성/원피스","브랜드/여성/속옷"],
      "트렌드여성": ["트렌드/여성/상의","트렌드/여성/하의","트렌드/여성/셔츠","트렌드/여성/원피스","트렌드/여성/속옷"],
      "가전": ["TV","냉장고","세탁기/건조기","주방가전","생활가전", "렌탈/가입상품"],
      "디지털": ["휴대폰","휴대폰 악세서리","스마트기기","카메라/주변기기","태블릿","게임"]
    },
    "smallCategory":{
      "전체":["전체"],
      "TV": ["106cm 이하(~42인치)","107~137cm(43인치~54인치)","TV 주변기기"],
      "냉장고":["4도어","양문형"]
    }
  }



  const [categoryGroup, setCategoryGroup] = useState(categoryData['categoryGrp']);
  const [categoryGrpSelect,setCategoryGrpSelect]= useState(categoryData['categoryGrp'][0]);
  const [MajorCategorySelect,setMajorCategorySelect]= useState(categoryData['majorCategory']['전체'][0]);
  const [majorCategoty, setMajorCategory] = useState(categoryData['majorCategory']['브랜드패션'])
  const [middleCategoty, setMiddleCategory] = useState(categoryData['midCategory']['브랜드여성'])*/
/*  const majorCategoryHandler = (value) => {
    if(categoryData['majorCategory'][value]==null||categoryData['majorCategory'][value]==undefined){

    }else {
      console.log("value", value);
      setMajorCategory(categoryData['majorCategory'][value]);
      setCategoryGrpSelect(value);
    }
  }
  
  const middleCategoryHandler = (value) => {
    if(categoryData['midCategory'][value]==null||categoryData['midCategory'][value] == undefined) {

    } else {
      console.log("value", value);
      setMiddleCategory(categoryData['midCategory'][value]);
      setMajorCategorySelect(value);
    }
  }*/

  const categoryData = {
    'CategoryGrp': ['대분류 1', '대분류 2', '대분류 3'],

  }

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
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

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            상품 등록
          </Button>
        </Form.Item>

        {/*
          생각을 좀 해봐야 할 것 같음
          카테고리
        */}
        {/*<Select defaultValue={categoryGrpSelect} style={{ width: 150 }} onChange={majorCategoryHandler}>
          {categoryGroup.map(categoryGrp => (
            <Option key={categoryGrp}>{categoryGrp}</Option>
          ))}
        </Select>
        <Select style={{ width: 150 }} value={MajorCategorySelect} onChange={middleCategoryHandler}>
          {majorCategoty.map(majorCtgry => (
            <Option key={majorCtgry}>{majorCtgry}</Option>
          ))}
        </Select>
        <Select style={{ width: 200 }} value={middleCategoty[0]}>
          {middleCategoty.map(midCtgry => (
            <Option key={midCtgry}>{midCtgry}</Option>
          ))}
        </Select>*/}



      </Form>
    </div>
  )
}


export default ItemRegistration;