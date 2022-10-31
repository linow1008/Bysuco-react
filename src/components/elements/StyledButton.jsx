import React from "react";
import { styled } from "twin.macro";
const StyledButton = styled.button`
    border: 1px solid;
    border-radius: 3px;
    margin: 15px;
    font-weight: 700;
    font-size: 12px;
    height: 30px;
    border-color: ${(props) => props.borderColor || "#d8d8d8"};
    color: ${(props) => props.color || "#d8d8d8"};
    width: ${(props) => props.width || "100px"};
`;

function button(props) {
    return <StyledButton color={props.color}>{props.name}</StyledButton>;
}

function tapButton3() {
    return (
        <TapRow>
            <Tap>전체</Tap>
        </TapRow>
    );
}

export default button;
export { tapButton3, tapButton4 };
