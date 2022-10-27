// div는 한개만 만들고 , 이름전달하면 그 이름으로 써지고, active 클래스 전달받으면 색바뀌기
// width,height,class

import styled, { css } from "styled-components"; //css 추가

const StyledButton = styled.button`
    background-color: red;
    // color: white;
    font-size: 20px;
    padding: 0.25em 6em;
    border: solid 2px pink;
    cursor: pointer;
    border-radius: 5px;
    margin-bottom: 10px;
    ${(props) =>
        props.primary && //primary 가 존재할 경우
        css`
            background-color: white;
            color: black;
        `}
`;

export default StyledButton;
