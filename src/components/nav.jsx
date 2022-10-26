import React from "react";
import tw from "twin.macro";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = tw.div`
    flex justify-between items-center w-[80%] mx-auto h-[40px] text-[.875rem] text-white
`;
const Menu = tw.div`
    flex justify-center items-center w-[70%]
`;
const Menuli = tw.div`
    w-[11%] flex justify-start items-center
`;
const Recentlyproduct = tw.div`
    flex justify-center items-center
`;

const nav = () => {
    return (
        <div className="bg-[#016344] w-full">
            <Nav>
                <Menu>
                    <Menuli>CATEGORY</Menuli>
                    <Menuli>BRAND</Menuli>
                    <Menuli>타임세일</Menuli>
                    <Menuli>래플이벤트</Menuli>
                    <Menuli>NEW</Menuli>
                    <Menuli>BEST</Menuli>
                    <Menuli>EVENT</Menuli>
                    <Menuli>COMMUNITY</Menuli>
                    <Menuli>ByYou</Menuli>
                </Menu>
                <Recentlyproduct>
                    <div>
                        <img src="images/imgage.PNG" alt="image" />
                    </div>
                    <div>
                        <span className="mx-[.625rem]">최근본상품</span>
                        <FontAwesomeIcon icon={faAngleDown} />
                    </div>
                </Recentlyproduct>
            </Nav>
        </div>
    );
};

export default nav;
