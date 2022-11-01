import React from "react";
import styled from "styled-components";
import { BrowserView, MobileView } from "react-device-detect";
import tw from "twin.macro";
import NavDropdown from "./navDropdown";
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
            {/* 모바일 Nav*/}
            <MobileView>
                <MoNav className="space-x-[20px] pt-3 px-5">
                    <div>
                        <Link to="/">HOME</Link>
                    </div>
                    <div>
                        <Link to="/shop">SHOP</Link>
                    </div>
                    <div>
                        <Link to="/brand">BRAND</Link>
                    </div>
                    <div>
                        <Link to="/timesale">타임세일</Link>
                    </div>
                    <div>
                        <Link to="/rapple">래플이벤트</Link>
                    </div>
                    <div>
                        <Link to="/new">NEW</Link>
                    </div>
                    <div>
                        <Link to="/best">BEST</Link>
                    </div>
                    <div>
                        <Link to="/event">EVENT</Link>
                    </div>
                    <div>
                        <Link to="community">COMMUNITY</Link>
                    </div>
                    <div>
                        <Link to="byyou">ByYou</Link>
                    </div>
                </MoNav>
                {/* PC Nav */}
            </MobileView>
        </>
    );
};

export default nav;
