import React from "react";
import tw from "twin.macro";

const Contents = tw.div`
  flex flex-col justify-center items-center
`;
const Img = tw.img`
    w-[600px]
    h-[300px]
`;

const StyledContent = (..._) => {
    return (
        <Contents>
            <div>
                <Img src="images/alt-image.jpg" alt="alt-image" />
            </div>
            <div className="flex flex-col items-center space-y-3 mt-5">
                <div className="font-bold">
                    <span>타임세일A</span>
                </div>
                <div className="text-[14px]">
                    <span>두줄 노출 가능 최대 60자까지 입력 가능합니다. 내용을 입력해주세요!</span>
                </div>
            </div>
        </Contents>
    );
};

export default StyledContent;
