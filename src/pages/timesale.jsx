import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import StyledTitle from "../components/elements/StyledTitle";
import Pagination from "../components/elements/pagination.jsx";
import { TimeSaleContent } from "../components/elements/StyledContent.jsx";
import { ButtonBox } from "../components/elements/StyledButton";

const timesale = () => {
    return (
        <>
            <BrowserView>
                <div className="mx-auto w-2/3">
                    <StyledTitle title="타임세일" subtitle="TIME SALE" />
                    <ButtonBox />
                    <TimeSaleContent />
                    <Pagination />
                </div>
            </BrowserView>
            <MobileView>
                <div>
                    <StyledTitle title="타임세일" subtitle="TIME SALE" />
                    <ButtonBox />
                    <TimeSaleContent />
                    <Pagination />
                </div>
            </MobileView>
        </>
    );
};

export default timesale;
