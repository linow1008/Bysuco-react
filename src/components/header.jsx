import React from "react";
import tw from "twin.macro";
import Global from "../assets/global.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Header = tw.div`
    w-[80%] mx-auto flex items-center justify-between h-[5.625rem]
`;

const Logo = tw.div`
    
`;
const Searchinput = tw.div`
    w-[32.5rem] h-[2.5rem] flex justify-center items-center border-b-[2px] border-black
`;
const IconBox = tw.div`
    flex justify-center items-center space-x-[1.5625rem] text-[12px]

`;

const header = () => {
    return (
        <Header>
            <Logo>
                <img src="images/logo.png" alt="logo" />
            </Logo>
            <Searchinput>
                <input type="text" placeholder="검색어를 입력해주세요" className="w-[100%] placeholder:text-xs" />
            </Searchinput>
            <IconBox>
                <div>
                    <a href="#">LOGIN</a>
                </div>
                <div>
                    <span>|</span>
                </div>
                <div>
                    <a href="#">JOIN</a>
                </div>
                <div>
                    <a href="#" className="ml-[10px]">
                        <FontAwesomeIcon icon={faUser} size="xl" />
                    </a>
                </div>
                <div>
                    <a href="#">
                        <FontAwesomeIcon icon={faCartShopping} size="xl" />
                    </a>
                </div>
            </IconBox>
        </Header>
    );
};

export default header;
