import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import NavDropdown from "./navDropdown";
import { BrowserView, MobileView } from "react-device-detect";

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
            {/* 모바일 Nav*/}
            <MobileView>
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
            </MobileView>
            {/* PC Nav */}
        </>
    );
};

export default nav;
