import React from "react";
import tw from "twin.macro";
import logo from "../assets/logo.PNG";

const Header = tw.div`
    w-[60%] mx-auto flex items-center justify-between h-[5.625rem]
`;
const Sinput = tw.div`
    w-[32.5rem] h-[2.5rem] border border-b border-black
`;
const IconBox = tw.div`
    flex justify-center items-center space-x-[1.25rem]
`;

const header = () => {
    return (
        <Header>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <Sinput>
                <input type="text" placeholder="검색어를 입력해주세요" />
            </Sinput>
            <IconBox>
                <div>
                    <span>LOGIN</span>
                </div>
                <div>
                    <span>|</span>
                </div>
                <div>
                    <span>JOIN</span>
                </div>
            </IconBox>
        </Header>
    );
};

export default header;
