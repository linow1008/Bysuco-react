import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import StyledTitle from "../components/elements/StyledTitle";
import Pagination from "../components/elements/pagination.jsx";
import { ButtonBox } from "../components/elements/StyledButton";
import { RappleContent } from "../components/elements/StyledContent.jsx";

const rapple = () => {
    return (
        <>
            <BrowserView>
                <div className="mx-auto w-2/3">
                    <StyledTitle title="래플 이벤트" subtitle="RAFFLE EVENT" />
                    <ButtonBox />
                    <RappleContent />
                    <Pagination />
                </div>
            </BrowserView>
            <MobileView>
                <div>
                    <StyledTitle title="래플 이벤트" subtitle="RAFFLE EVENT" />
                    <ButtonBox />
                    <RappleContent />
                    <Pagination />
                </div>
            </MobileView>
        </>
    );
};

export default rapple;
