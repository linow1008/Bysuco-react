import React from "react";
import Header from "../components/layout/header.jsx";
import Nav from "../components/layout/nav.jsx";
import Footer from "../components/layout/footer.jsx";
import { BrowserView, MobileView } from "react-device-detect";
import { RappleTabs } from "../components/elements/StyledButton.jsx";
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
                <StyledTitle title="래플이벤트" subtitle="RAPPLE EVENT" />
                <RappleTabs />
                <Pagination />
            </MobileView>
        </>
    );
};

export default timesale;
