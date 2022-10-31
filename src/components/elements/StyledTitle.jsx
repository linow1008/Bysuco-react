import React from "react";
import tw from "twin.macro";

const TitleBox = tw.div`
    flex flex-col justify-center items-center
    w-full h-[9.375rem] space-y-[.3125rem]
`;
const Subtitle = tw.div`
    text-[1.125rem] underline text-[#80A298]
`;
const Title = tw.div`
    text-[1.375rem] font-bold tracking-tighter
`;

const StyledTitle = (props) => {
    const { title, subtitle } = props;
    return (
        <TitleBox>
            <Subtitle>{subtitle}</Subtitle>
            <Title>{title}</Title>
        </TitleBox>
    );
};

export default StyledTitle;
