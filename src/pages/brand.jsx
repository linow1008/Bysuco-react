import React from "react";
import tw from "twin.macro";
import { ShopContent } from "../components/elements/StyledContent";

const Row = tw.div`
    flex justify-center items-center space-x-[5px] mb-[80px]
`;
const Banner = tw.div`
    flex flex-col justify-end pl-[20px] pb-[20px] text-[13px]
    background-image[url('images/alt-image.jpg')]
    w-full h-[170px]
`;

const shop = () => {
    return (
        <div>
            <Banner>
                <div className="text-[#4F95E8] font-bold text-[18px] mb-[10px]">
                    <span>여름 향수도 역시 바이슈코에서!</span>
                </div>
                <div className="text-[#71A7E7]">
                    <span>#여름향수 #상쾌한 #시트러스 #오션 #바이슈코</span>
                </div>
            </Banner>
            <div className="h-[60px] flex items-center pl-[20px] text-[14px] font-bold">
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
