import React from "react";
import tw from "twin.macro";
import { BrowserView, MobileView } from "react-device-detect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

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
        <>
            <BrowserView>
                <Header>
                    <Logo>
                        <img src="images/logo.png" alt="logo" />
                    </Logo>
                    <Searchinput>
                        <input
                            type="text"
                            placeholder="검색어를 입력해주세요"
                            className="w-[100%] placeholder:text-xs"
                        />
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
            </BrowserView>
            <MobileView>
                {/* 모바일헤더 */}
                <div className="py-2 px-5">
                    <div className="mx-auto flex justify-between items-center">
                        <div className="relative w-11/12">
                            <input
                                type="text"
                                placeholder="바이슈코 타임세일!"
                                className="w-full bg-[#F5F5F5] rounded-[1.25rem] h-[2.5rem] pl-[40px]"
                            />
                            <div className="absolute top-2 left-4">
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-400" />
                            </div>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faCartShopping} />
                        </div>
                    </div>
                </div>
                {/* PC헤더 */}
                <div />
            </MobileView>
        </>
    );
};

export default header;
