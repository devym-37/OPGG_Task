import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family:-apple-system, 'Helvetica Neue', Helvetica, "Malgun Gothic", "Apple SD Gothic Neo", AppleGothic, Dotum, Arial, Tahoma, sans-serif;
        font-size:12px;
        background-color:#eaeaea;
    }   
`;

export default globalStyles;
