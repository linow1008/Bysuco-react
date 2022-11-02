import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// 모바일
const StyledContent = (props) => {
    const { title, subtitle } = props;
    return (
        <div>
            <div />
        </div>
    );
};
const ContentWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.875rem;
`;
const TimeContentWrapCover = tw.div`
flex flex-col justify-center items-center mb-[1.875rem] relative
after:content-['이미 종료된 타임세일입니다.'] after:absolute after:top-0 after:text-white after:text-[.875rem] after:font-bold
after:bg-black/30 after:w-full after:h-[10.625rem] after:flex after:justify-center after:items-center
`;
const RappleContentWrapCover = tw.div`
flex flex-col justify-center items-center mb-[1.875rem] relative
after:content-['이미 종료된 이벤트입니다.'] after:absolute after:top-0 after:text-white after:text-[.875rem] after:font-bold
after:bg-black/30 after:w-full after:h-[10.625rem] after:flex after:justify-center after:items-center
`;
const ImgWrap = tw.div`
  flex justify-center items-center overflow-hidden
  [> img]:w-[21.25rem] h-[10.625rem]  
`;
const Content = tw.div`
    flex flex-col justify-center items-center space-y-[.3125rem]
    [> div:first-child]:font-bold mt-[.625rem] mb-[.3125rem]
    [> div:last-child]:text-[.75rem]
`;
export function TimeContent(props) {
    const { title, subtitle } = props;
    return (
        <ContentWrap>
            <ImgWrap>
                <img src="images/alt-image.jpg" alt="alt-image.jpg" />
            </ImgWrap>
            <Content>
                <div>
                    <span>타임세일A</span>
                </div>
                <div>
                    <span>두줄 노출 가능 최대 60자까지 입력 가능합니다.</span>
                </div>
            </Content>
        </ContentWrap>
    );
}
export function TimeContentCover() {
    return (
        <TimeContentWrapCover>
            <ImgWrap>
                <img src="images/alt-image.jpg" alt="alt-image.jpg" />
            </ImgWrap>
            <Content>
                <div>
                    <span>타임세일A</span>
                </div>
                <div>
                    <span>두줄 노출 가능 최대 60자까지 입력 가능합니다.</span>
                </div>
            </Content>
        </TimeContentWrapCover>
    );
}
export function RappleContent() {
    return (
        <ContentWrap>
            <ImgWrap>
                <img src="images/alt-image.jpg" alt="alt-image.jpg" />
            </ImgWrap>
            <Content>
                <div>
                    <span>N월n일 래플이벤트</span>
                </div>
                <div>
                    <span>N일까지 응모하고 할인 받자</span>
                </div>
            </Content>
        </ContentWrap>
    );
}
export function RappleContentCover(props) {
    const { title, subtitle } = props;
    return (
        <RappleContentWrapCover>
            <ImgWrap>
                <img src="images/alt-image.jpg" alt="alt-image.jpg" />
            </ImgWrap>
            <Content>
                <div>
                    <span>N월n일 래플이벤트</span>
                </div>
                <div>
                    <span>N일까지 응모하고 할인 받자</span>
                </div>
            </Content>
        </RappleContentWrapCover>
    );
}
const AbIcon = tw.div`
    absolute top-[.625rem] right-[.625rem] bg-[#006655] w-[1.875rem] h-[1.875rem] rounded-[1.875rem]
    flex justify-center items-center
`;
export function ShopContent() {
    return (
        <div className="text-[.8125rem] tracking-tighter">
            <div className="relative">
                <img src="images/product-img.jpg" alt="product-img" />
                <AbIcon>
                    <FavoriteBorderIcon
                        fontSize="small"
                        sx={{
                            color: "#fff",
                        }}
                    />
                </AbIcon>
            </div>
            <div className="font-bold">
                <span>[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml</span>
            </div>
            <div className="my-[.625rem] font-bold">
                <span className="text-[#05AA74]">24%</span>
                <span className="ml-[.625rem] mr-[.3125rem]">169,900원</span>
                <span className="text-[.75rem]">($141.83)</span>
            </div>
            <div className="flex">
                <div className="w-[2.5rem] h-[1.375rem] border rounded-md mr-[.25rem]">{/* 미국국기 */}</div>
                <div className="w-[5rem] h-[1.375rem] text-white bg-[#F4B46B] text-[.625rem] rounded-md flex justify-center items-center">
                    <span>관부가세 포함</span>
                </div>
            </div>
        </div>
    );
}
export function BrandContent() {
    return (
        <div className="text-[.8125rem] tracking-tighter">
            <div className="relative">
                <img src="images/product-img.jpg" alt="product-img" />
                <AbIcon>
                    <FavoriteBorderIcon
                        fontSize="small"
                        sx={{
                            color: "#fff",
                        }}
                    />
                </AbIcon>
            </div>
            <div className="font-bold">
                <span>[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml</span>
            </div>
            <div className="my-[.625rem] font-bold">
                <span className="text-[#05AA74]">24%</span>
                <span className="ml-[.625rem] mr-[.3125rem]">169,900원</span>
                <span className="text-[.75rem]">($141.83)</span>
            </div>
            <div className="flex">
                <div className="w-[2.5rem] h-[1.375rem] border rounded-md mr-[.25rem]">{/* 미국국기 */}</div>
                <div className="w-[5rem] h-[1.375rem] text-white bg-[#F4B46B] text-[.625rem] rounded-md flex justify-center items-center">
                    <span>관부가세 포함</span>
                </div>
            </div>
        </div>
    );
}

export default StyledContent;
