import React from "react";
import tw from "twin.macro";
import { BestContent } from "../components/elements/StyledContent";
import { BrowserView, MobileView } from "react-device-detect";
import StyledTitle from "../components/elements/StyledTitle";
import Pagination from "../components/elements/pagination";

const Row = tw.div`
    flex justify-center items-center space-x-[5px] mb-[5rem]
    lg:space-x-[10px] lg:mb-[40px]
`;
const Input = tw.input`
    placeholder:text-[.6875rem] placeholder:text-[#d3d3d3] pb-[.3125rem] w-full
`;

const shop = () => {
    return (
        <>
            <BrowserView>
                <div className="w-2/3 mx-auto">
                    <StyledTitle title="NEW" subtitle="BYSUCO" />

                    {/* 상품목록 */}
                    <div className="w-full ml-[50px]">
                        <div className="flex justify-between items-center text-[.625rem]">
                            <div>
                                총 <span className="text-[#006655]">58</span>개
                            </div>
                            <div>
                                <span>후기갯수많은순</span>
                            </div>
                        </div>
                        <div className="space-y-[80px]">
                            <BestContent />
                            <Pagination />
                        </div>
                    </div>
                </div>
            </BrowserView>
            <MobileView>
                <div>
                    <div className="h-[60px] flex items-center text-[14px] font-bold">
                        {/* fullselectbox */}
                        <div />
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
                    <div className="px-[20px]" />
                    {/* 여기에 로딩중 표시 넣어야함 */}
                </div>
            </MobileView>
        </>
    );
};

export default shop;
