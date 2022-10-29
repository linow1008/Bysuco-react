import React from "react";
import tw from "twin.macro";
import NavDropdown from "./navDropdown";
import NavSubmenu from "./navSubmenu";

const Nav = tw.div`
    flex justify-between items-center w-[80%] mx-auto h-[3.125rem] text-[.875rem] text-white
`;

const nav = () => {
    return (
        <div className="bg-myGreen w-full">
            <Nav>
                <NavSubmenu />
                <NavDropdown />
            </Nav>
        </div>
    );
};

export default nav;
