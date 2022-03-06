import styled from 'styled-components';
import {PageHeader} from 'antd';

/**
 * Join(회원가입)페이지에서 PageHeader의 style을 저정
 * @author jslee
 * @since 2022-02-27
 */
export const StyledPageHeader = styled(PageHeader)`
  font-size: 12px;
  display: inline-block;
  text-align: right;
  //margin-right: auto;
`;

/**
 * Join(회원가입)페이지에서 div태그의 style을 지정
 * @author jslee
 * @since 2022-02-27
 */
export const StyledHeaderDiv = styled.div`
  display: inline-block;
  //margin: auto;
  float: right;
  text-align: center;
  padding: 16px 24px;
  margin: 4px 0;
`;

/**
 * Join(회원가입)페이지에서 span태그의 style을 지정
 * @author jslee
 * @since 2022-02-27
 */
export const StyledHeaderSpan = styled.span`
  width: 300px;
  margin-right: 35px;
  font-size: 16px;
`;

/**
 * Join페이지 table 스타일 지정
 * @author jslee
 * @since 2022-02-27
 */
export const StyledTable = styled.table`
  width: 70%;
  //border-top: 1px solid #444444;
  border-collapse: collapse;
  margin-left: auto;
  margin-right: auto;

  th, td {
    border-left: 1px solid #444444;
    border-right: 1px solid #444444;
    padding: 10px;
    
  }
  th:first-child, td:first-child {
    border-left: 1px solid #444444;
  }
`;

/* 향후 property를 넘겨줘서, 스타일의 재사용성과 옵셔널한 동작 구현 */
/**
 * Join페이지 content(내용) div태그 스타일 지정
 * @author jslee
 * @since 2022-02-27
 */
export const StyledContentDiv = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;



export const StyledContentH2 = styled.h2`
  margin-top: 0.2%;
  margin-left: 10px;
  margin-bottom: 2%;
  font-size: 18px;
  color: gray;
  opacity: 0.5;
`;


export const StyledJoinDetailTable = styled.table`
  width: 20%;
  //border-top: 1px solid #444444;
  border-collapse: collapse;
  font-size: 20px;
  //margin-left: auto;
  //margin-right: auto;

  th, td {
    border-left: 1px solid #444444;
    //border-right: 1px solid #444444;
    padding: 1px;
    
  }
  th:first-child, td:first-child {
    //border-left: 1px solid #444444;
    border-left: none;
  }
`;