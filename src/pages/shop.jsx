import React from "react";
import tw from "twin.macro";
import { NewContent, ShopContent } from "../components/elements/StyledContent";
import { BrowserView, MobileView } from "react-device-detect";
import StyledTitle from "../components/elements/StyledTitle";
import Pagination from "../components/elements/pagination";
import CustomButton from "../components/elements/StyledButton";

const Row = tw.div`
    flex justify-center items-center space-x-[5px] mb-[5rem]
    lg:space-x-[10px] lg:mb-[40px]
`;
const Input = tw.input`
    placeholder:text-[.6875rem] placeholder:text-[#d3d3d3] pb-[.3125rem] w-full
`;

const shop = () => {
    return (
        <MobileView>
            <div>
                <div className="h-[60px] flex items-center text-[14px] font-bold border-b pl-[20px]">
                    {/* fullselectbox */}
                    <div>전체보기</div>
                </div>
                <div className="flex justify-between items-center w-full h-[70px] text-[12px] px-[20px]">
                    <div>
                        총 <span className="text-[#82AE9F] font-bold">58</span>개
                    </div>
                    <div>
                        {/* 셀렉트박스 넣어야함 */}
                        <span>후기갯수많은순</span>
                    </div>
                </div>
                <div className="flex justify-center mb-[200px]">
                    <ShopContent />
                </div>
                {/* 여기에 로딩중 표시 넣어야함 */}
            </div>
        </MobileView>
    );
};

export default shop;
