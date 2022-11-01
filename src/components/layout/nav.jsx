import React from "react";
import styled from "styled-components";
import { BrowserView, MobileView } from "react-device-detect";
import tw from "twin.macro";
import NavDropdown from "./navDropdown";
<<<<<<< HEAD
import { BrowserView, MobileView } from "react-device-detect";
=======
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
>>>>>>> 123dbf473b16c484b32603aae11d3e85ca2c467d

const MoNav = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    color: #fff;
    background-color: #006344;
    white-space: nowrap;
    overflow-x: auto;
    font-size: 14px;
    ::-webkit-scrollbar {
        width: 150px;
    }
    ::-webkit-scrollbar-track {
    }
    div {
        display: inline-block;
    }
`;

const nav = () => {
    return (
        <>
<<<<<<< HEAD
            {/* 모바일 Nav*/}
            <MobileView>
=======
            <BrowserView>
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
                                {/* <FontAwesomeIcon icon={faAngleDown} /> */}
                            </div>
                        </Recentlyproduct>
                    </Nav>
                </div>
            </BrowserView>
            <MobileView>
                {/* 모바일 Nav*/}
>>>>>>> 123dbf473b16c484b32603aae11d3e85ca2c467d
                <MoNav className="space-x-[20px] pt-3 px-5">
                    <div>
                        <a href="#">HOME</a>
                    </div>
                    <div>
                        <a href="#">SHOP</a>
                    </div>
                    <div>
                        <a href="#">BRAND</a>
                    </div>
                    <div>
                        <a href="#">타임세일</a>
                    </div>
                    <div>
                        <a href="#">래플이벤트</a>
                    </div>
                    <div>
                        <a href="#">NEW</a>
                    </div>
                    <div>
                        <a href="#">BEST</a>
                    </div>
                    <div>
                        <a href="#">EVENT</a>
                    </div>
                    <div>
                        <a href="#">COMMUNITY</a>
                    </div>
                    <div>
                        <a href="#">ByYou</a>
                    </div>
                </MoNav>
<<<<<<< HEAD
            </MobileView>
            {/* PC Nav */}
=======
                {/* PC Nav */}
            </MobileView>
>>>>>>> 123dbf473b16c484b32603aae11d3e85ca2c467d
        </>
    );
};

export default nav;
