import React from "react";
import Header from "../components/layout/header.jsx";
import Nav from "../components/layout/nav.jsx";
import Footer from "../components/layout/footer.jsx";
import { BrowserView, MobileView } from "react-device-detect";
import { FullWidthTabs } from "../components/elements/StyledButton.jsx";
import StyledTitle from "../components/elements/StyledTitle";
import Pagination from "../components/elements/pagination.jsx";

const timesale = () => {
    return (
        <>
            <BrowserView>
                <div>
                    <div />
                </div>
            </BrowserView>
            <MobileView>
                <StyledTitle title="타임세일" subtitle="TIME SALE" />
                <FullWidthTabs />
                <Pagination />
            </MobileView>
        </>
    );
};

export default timesale;
