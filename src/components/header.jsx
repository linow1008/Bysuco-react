import React from "react";
import tw from "twin.macro";
import Global from "../assets/global.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Header = tw.div`
    lg:flex lg:w-[80%] lg:mx-auto lg:items-center lg:justify-between lg:h-[5.625rem]
`;

const Logo = tw.div`
    
`;
const Searchinput = tw.div`
    lg:flex lg:w-[32.5rem] lg:h-[2.5rem] lg:justify-center lg:items-center lg:border-b-[2px] lg:border-black
`;
const IconBox = tw.div`
    lg:flex lg:justify-center lg:items-center lg:space-x-[1.5625rem]
`;

const header = () => {
    return (
        <Header>
            <Logo>
                <img src="images/logo.png" alt="logo" />
            </Logo>
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
                <div>
                    <a href="#" className="ml-[10px]">
                        <FontAwesomeIcon icon={faUser} size="lg" />
                    </a>
                </div>
                <div>
                    <a href="#" className="ml-[10px]">
                        <FontAwesomeIcon icon={faCartShopping} size="lg" />
                    </a>
                </div>
            </IconBox>
        </Header>
    );
};

export default header;
