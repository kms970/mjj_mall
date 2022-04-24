import React,{ useState, useEffect } from 'react';
import {Divider, PageHeader, Input, Select, Button, Form } from "antd";

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
  const [smallCategory, setSmallCategory] = useState([]);

  useEffect(()=>{
    console.log("eeeeeeeeeeee filterValue", middleCategory);
  },[middleCategory, smallCategory]);

  const changeMajorCategory = async(event) => {
    if(event != null || event != ""){
      console.log("event", event);
      let valueCategory = await categoryJson.filter(it => it.parentIndex == event);
      console.log("valueCate",valueCategory);
  
      setMiddleCategory(valueCategory);
    } else { 
    }
  }

  const changeMidCategory = async(event) => {
    if(event != null || event != ""){
      console.log("event", event);
      let valueCategory = await categoryJson.filter(it => it.parentIndex == event);
      console.log("valueCate",valueCategory);
  
      setSmallCategory(valueCategory);
    } else { }
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
				<Form.Item name="majorType" label="대분류">
					<Select onChange={changeMajorCategory}>
						<Option value="">대분류</Option>
            <Option value="1">가전/디지털</Option>
					</Select>
				</Form.Item>

        <Form.Item name="midType" label="중분류">
          <Select onChange={changeMidCategory}>
              {middleCategory.map(res=><Option value={res.index} key={res.name}>{res.name}</Option>)}
          </Select>
				</Form.Item>

        <Form.Item name="smType" label="소분류">
          <Select>
              {smallCategory.map(res=><Option value={res.index} key={res.name}>{res.name}</Option>)}
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