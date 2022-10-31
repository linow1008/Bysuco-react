import React from "react";
import tw from "twin.macro";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Nav = tw.div`
    lg:flex lg:justify-between lg:items-center lg:w-[80%] lg:mx-auto lg:h-[40px] lg:text-[.875rem] lg:text-white
`;
const Menu = tw.div`
    lg:flex lg:justify-start lg:items-center lg:w-[80%] space-x-8
`;
const Menuli = tw.div`
    md:text-[.675rem] lg:flex lg:w-[auto] justify-center items-center
`;
const Recentlyproduct = tw.div`
    lg:flex lg:justify-center lg:items-center
`;

const nav = () => {
    return (
        <div className="bg-myGreen w-full">
            <Nav>
                <Menu>
                    <Menuli>
                        <Link to="/">CATEGORY</Link>
                    </Menuli>
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
