// 전역 스타일 설정
import { createGlobalStyle } from "styled-components";	

const GlobalStyle = createGlobalStyle`
/* Normalize */
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      //color: black;
      list-style: none;
      text-decoration: none;
      /* background: #222; */
    }
  a,img{display: block;}
  html, body{
    min-width: 200px;
    font-size: 10px; // 1rem = 10px;
    font-family: 'Poppins', 'Noto Sans KR' , 'sans-serif';   
  }
`;

export default GlobalStyle;