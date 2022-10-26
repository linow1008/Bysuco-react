import React from "react";
import tw from "twin.macro";
import logo from "../assets/logo.PNG";
import Global from "../assets/global.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Header = tw.div`
    w-[60%] mx-auto flex items-center justify-between h-[5.625rem]
`;
const Searchinput = tw.div`
    w-[32.5rem] h-[2.5rem] flex justify-center items-center border-b-[2px] border-black
`;
const IconBox = tw.div`
    flex justify-center items-center space-x-[1.5625rem]
`;

const header = () => {
    return (
        <Header>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <Searchinput>
                <input type="text" placeholder="검색어를 입력해주세요" className="w-[100%] placeholder:text-sm" />
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
                <div className="ml-[20px]">
                    <a href="#">
                        <FontAwesomeIcon icon={faUser} size="lg" />
                    </a>
                </div>
                <div>
                    <a href="#">
                        <FontAwesomeIcon icon={faCartShopping} size="lg" />
                    </a>
                </div>
            </IconBox>
        </Header>
    );
};

export default header;
