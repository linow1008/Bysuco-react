import React from "react";
import tw from "twin.macro";
import { ShopContent } from "../components/elements/StyledContent";

const Row = tw.div`
    flex justify-center items-center space-x-[5px] mb-[80px]
`;

const shop = () => {
    return (
        <div>
            <div className="h-[60px] border-b border-[#F6F6F6] flex items-center pl-[20px] text-[14px] font-bold">
                {/* 셀렉트박스 넣어야함 */}
                <span>전체보기</span>
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
            <div className="px-[20px]">
                <Row>
                    <ShopContent />
                    <ShopContent />
                </Row>
                <Row>
                    <ShopContent />
                    <ShopContent />
                </Row>
                <Row>
                    <ShopContent />
                    <ShopContent />
                </Row>
                <Row>
                    <ShopContent />
                    <ShopContent />
                </Row>
            </div>
        </div>
    );
};

export default shop;
