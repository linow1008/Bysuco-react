import React from "react";
import tw from "twin.macro";
import NavDropdown from "./navDropdown";
import NavSubmenu from "./navSubmenu";

const Nav = tw.div`
    flex justify-between items-center w-[80%] mx-auto h-[3.125rem] text-[.875rem] text-white
`;
const Menu = tw.div`
    flex justify-center items-center w-[70%]
`;
const Menuli = tw.div`
    w-[11%] flex justify-center items-center relative text-[14px]
`;
const Bubble = tw.div`
    absolute top-0 w-[8px] h-[8px] rounded-[8px] bg-[#57FFCA]
`;

const nav = () => {
    return (
        <div className="bg-myGreen w-full">
            <Nav>
                {/* <Menu>
                    <Menuli>
                        <a href="#">CATEGORY</a>
                    </Menuli>
                    <Menuli>
                        <a href="#">BRAND</a>
                    </Menuli>
                    <Menuli>
                        <a href="#">타임세일</a>
                    </Menuli>
                    <Menuli>
                        <a href="#">래플이벤트</a>
                    </Menuli>
                    <Menuli>
                        <a href="#">NEW</a>
                        <Bubble className="right-[20px]" />
                    </Menuli>
                    <Menuli>
                        <a href="#">BEST</a>
                    </Menuli>
                    <Menuli>
                        <a href="#">EVENT</a>
                        <Bubble className="right-[15px]" />
                    </Menuli>
                    <Menuli>
                        <a href="#">COMMUNITY</a>
                    </Menuli>
                    <Menuli>
                        <a href="#">ByYou</a>
                        <Bubble className="right-[15px]" />
                    </Menuli>
                </Menu> */}
                <NavSubmenu />
                <NavDropdown />
            </Nav>
        </div>
    );
};

export default nav;
