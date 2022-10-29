import React from "react";
import tw from "twin.macro";
import StyledContent from "./elements/StyledContent";

const ContentWrap = tw.div`
  flex mx-auto w-[80%] space-x-8 justify-center
`;

const timesale = () => {
    return (
        <ContentWrap>
            <StyledContent />
            <StyledContent />
        </ContentWrap>
    );
};

export default timesale;
