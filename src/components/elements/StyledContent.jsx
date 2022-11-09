// 타임세일,래플이벤트 PC
// 타임세일,래플이벤트,이벤트 Mobile

import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { BrowserView, MobileView } from "react-device-detect";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

// 기본 스타일 정의
const ContentList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    letter-spacing: -0.05em;
`;
// 기본 상품 wrap
export default function BasicContent(props) {
    return (
        <ContentList>
            <div className="overflow-hidden">
                <img src="images/alt-image.jpg" alt="alt-image" className="w-[330px] h-[160px]" />
            </div>
            <div
                className={
                    "flex flex-col space-y-[5px] mt-[10px] " +
                    (props.align == "left" ? "text-left px-2" : "text-center")
                }
            >
                <div className="font-bold text-[14px]">
                    <span>{props.title}</span>
                </div>
                <div className="text-[11px]">
                    <span>{props.subtitle}</span>
                </div>
            </div>
        </ContentList>
    );
}
// EVENT wrap
function EventContentEl(props) {
    return (
        <ContentList>
            <div className="overflow-hidden">
                <img src="images/alt-image.jpg" alt="alt-image" className="w-[300px] h-[220px]" />
            </div>
            <div className="flex flex-col mt-[10px] justify-start w-full">
                <div className="font-bold text-[14px] mb-[10px]">
                    <span>{props.title}</span>
                </div>
                <div className="text-[11px]">
                    <p>{props.subtitle}</p>
                </div>
                <div className="text-[11px]">
                    <p>{props.subtitle2}</p>
                </div>
            </div>
        </ContentList>
    );
}

// 타임세일 이미지 & 상품정보
const Row = tw.div`
   flex justify-center items-center space-x-[1.25rem] mb-[40px]
`;
const RowMo = tw.div`
   flex flex-col justify-center items-center
   space-y-[40px] mb-[3.125rem]
`;

const TimeButton = tw.div`
    bg-[#006655] text-white font-bold flex justify-center items-center
    mt-[.9375rem] w-[12.5rem] h-[30px] text-[.875rem] space-x-[.3125rem]
`;
const TimeButtonMo = tw.div`
    bg-[#006655] text-white font-bold flex justify-center items-center
    w-full h-[2.5rem] space-x-[.625rem] rounded-[.1875rem] mt-[1.25rem]
`;

export function TimeSaleContent() {
    return (
        <>
            <BrowserView>
                <Row>
                    <Link className="flex flex-col justify-center items-center" to="detail">
                        <BasicContent
                            title="타임세일A"
                            subtitle="두줄 노출 가능 최대 60자까지 입력 가능합니다. 내용을 입력해주세요!"
                        />
                        <TimeButton>
                            <div>
                                <AccessTimeIcon fontSize="8" />
                            </div>
                            <div>
                                <span>12 : 34 : 56</span>
                            </div>
                        </TimeButton>
                    </Link>
                    <Link className="flex flex-col justify-center items-center" to="detail">
                        <BasicContent
                            title="타임세일A"
                            subtitle="두줄 노출 가능 최대 60자까지 입력 가능합니다. 내용을 입력해주세요!"
                        />
                        <TimeButton>
                            <div>
                                <AccessTimeIcon fontSize="8" />
                            </div>
                            <div>
                                <span>12 : 34 : 56</span>
                            </div>
                        </TimeButton>
                    </Link>
                </Row>
                <Row>
                    <Link className="flex flex-col justify-center items-center" to="detail">
                        <BasicContent
                            title="타임세일A"
                            subtitle="두줄 노출 가능 최대 60자까지 입력 가능합니다. 내용을 입력해주세요!"
                        />
                        <TimeButton>
                            <div>
                                <AccessTimeIcon fontSize="8" />
                            </div>
                            <div>
                                <span>12 : 34 : 56</span>
                            </div>
                        </TimeButton>
                    </Link>
                    <Link className="flex flex-col justify-center items-center" to="detail">
                        <BasicContent
                            title="타임세일A"
                            subtitle="두줄 노출 가능 최대 60자까지 입력 가능합니다. 내용을 입력해주세요!"
                        />
                        <TimeButton>
                            <div>
                                <AccessTimeIcon fontSize="8" />
                            </div>
                            <div>
                                <span>12 : 34 : 56</span>
                            </div>
                        </TimeButton>
                    </Link>
                </Row>
                <Row>
                    <Link className="flex flex-col justify-center items-center" to="detail">
                        <BasicContent
                            title="타임세일A"
                            subtitle="두줄 노출 가능 최대 60자까지 입력 가능합니다. 내용을 입력해주세요!"
                        />
                        <TimeButton>
                            <div>
                                <AccessTimeIcon fontSize="8" />
                            </div>
                            <div>
                                <span>12 : 34 : 56</span>
                            </div>
                        </TimeButton>
                    </Link>
                    <Link className="flex flex-col justify-center items-center" to="detail">
                        <BasicContent
                            title="타임세일A"
                            subtitle="두줄 노출 가능 최대 60자까지 입력 가능합니다. 내용을 입력해주세요!"
                        />
                        <TimeButton>
                            <div>
                                <AccessTimeIcon fontSize="8" />
                            </div>
                            <div>
                                <span>12 : 34 : 56</span>
                            </div>
                        </TimeButton>
                    </Link>
                </Row>
                <Row>
                    <Link className="flex flex-col justify-center items-center" to="detail">
                        <BasicContent
                            title="타임세일A"
                            subtitle="두줄 노출 가능 최대 60자까지 입력 가능합니다. 내용을 입력해주세요!"
                        />
                        <TimeButton>
                            <div>
                                <AccessTimeIcon fontSize="8" />
                            </div>
                            <div>
                                <span>12 : 34 : 56</span>
                            </div>
                        </TimeButton>
                    </Link>
                    <Link className="flex flex-col justify-center items-center" to="detail">
                        <BasicContent
                            title="타임세일A"
                            subtitle="두줄 노출 가능 최대 60자까지 입력 가능합니다. 내용을 입력해주세요!"
                        />
                        <TimeButton>
                            <div>
                                <AccessTimeIcon fontSize="8" />
                            </div>
                            <div>
                                <span>12 : 34 : 56</span>
                            </div>
                        </TimeButton>
                    </Link>
                </Row>
            </BrowserView>
            <MobileView>
                <RowMo>
                    <div className="flex flex-col justify-center items-center mt-[1.25rem]">
                        <BasicContent
                            title="타임세일A"
                            subtitle="두줄 노출 가능 최대 60자까지 입력 가능합니다. 내용을 입력해주세요!"
                        />
                        <TimeButtonMo>
                            <div>
                                <AccessTimeIcon fontSize="8" />
                            </div>
                            <div>
                                <span>12 : 34 : 56</span>
                            </div>
                        </TimeButtonMo>
                    </div>
                    <Link className="flex flex-col justify-center items-center" to="detail">
                        <BasicContent
                            title="타임세일A"
                            subtitle="두줄 노출 가능 최대 60자까지 입력 가능합니다. 내용을 입력해주세요!"
                        />
                        <TimeButtonMo>
                            <div>
                                <AccessTimeIcon fontSize="8" />
                            </div>
                            <div>
                                <span>12 : 34 : 56</span>
                            </div>
                        </TimeButtonMo>
                    </Link>
                    <Link className="flex flex-col justify-center items-center" to="detail">
                        <BasicContent
                            title="타임세일A"
                            subtitle="두줄 노출 가능 최대 60자까지 입력 가능합니다. 내용을 입력해주세요!"
                        />
                        <TimeButtonMo>
                            <div>
                                <AccessTimeIcon fontSize="8" />
                            </div>
                            <div>
                                <span>12 : 34 : 56</span>
                            </div>
                        </TimeButtonMo>
                    </Link>
                    <Link className="flex flex-col justify-center items-center" to="detail">
                        <BasicContent
                            title="타임세일A"
                            subtitle="두줄 노출 가능 최대 60자까지 입력 가능합니다. 내용을 입력해주세요!"
                        />
                        <TimeButtonMo>
                            <div>
                                <AccessTimeIcon fontSize="8" />
                            </div>
                            <div>
                                <span>12 : 34 : 56</span>
                            </div>
                        </TimeButtonMo>
                    </Link>
                    <Link className="flex flex-col justify-center items-center" to="detail">
                        <BasicContent
                            title="타임세일A"
                            subtitle="두줄 노출 가능 최대 60자까지 입력 가능합니다. 내용을 입력해주세요!"
                        />
                        <TimeButtonMo>
                            <div>
                                <AccessTimeIcon fontSize="8" />
                            </div>
                            <div>
                                <span>12 : 34 : 56</span>
                            </div>
                        </TimeButtonMo>
                    </Link>
                </RowMo>
            </MobileView>
        </>
    );
}
export function RappleContent() {
    return (
        <>
            <BrowserView>
                <Row>
                    <BasicContent title="N월n일 래플이벤트" subtitle="N일까지 응모하고 할인 받자" />
                    <BasicContent title="N월n일 래플이벤트" subtitle="N일까지 응모하고 할인 받자" />
                </Row>
                <Row>
                    <BasicContent title="N월n일 래플이벤트" subtitle="N일까지 응모하고 할인 받자" />
                    <BasicContent title="N월n일 래플이벤트" subtitle="N일까지 응모하고 할인 받자" />
                </Row>
                <Row>
                    <BasicContent title="N월n일 래플이벤트" subtitle="N일까지 응모하고 할인 받자" />
                    <BasicContent title="N월n일 래플이벤트" subtitle="N일까지 응모하고 할인 받자" />
                </Row>
                <Row>
                    <BasicContent title="N월n일 래플이벤트" subtitle="N일까지 응모하고 할인 받자" />
                    <BasicContent title="N월n일 래플이벤트" subtitle="N일까지 응모하고 할인 받자" />
                </Row>
            </BrowserView>
            <MobileView>
                <RowMo>
                    <div className="mt-[40px]">
                        <BasicContent title="N월n일 래플이벤트" subtitle="N일까지 응모하고 할인 받자" />
                    </div>
                    <BasicContent title="N월n일 래플이벤트" subtitle="N일까지 응모하고 할인 받자" />
                    <BasicContent title="N월n일 래플이벤트" subtitle="N일까지 응모하고 할인 받자" />
                    <BasicContent title="N월n일 래플이벤트" subtitle="N일까지 응모하고 할인 받자" />
                    <BasicContent title="N월n일 래플이벤트" subtitle="N일까지 응모하고 할인 받자" />
                </RowMo>
            </MobileView>
        </>
    );
}
export function EventContent() {
    return (
        <>
            <BrowserView>
                <Row>
                    <EventContentEl
                        title="최저가 PICK"
                        subtitle="바이슈코 에코 파우치 구매 시"
                        subtitle2="인기 브랜드 샘플 5종(카테고리 별 택1) 증정"
                    />
                    <EventContentEl title="WOW! 무료배송" subtitle="06.15-06.21" subtitle2="향수 및 스킨이 90% 할인" />
                    <EventContentEl title="향수 이벤트" subtitle="06.14-06.20" subtitle2="향수 15% 할인 이벤트" />
                </Row>
                <Row>
                    <EventContentEl
                        title="최저가 PICK"
                        subtitle="바이슈코 에코 파우치 구매 시"
                        subtitle2="인기 브랜드 샘플 5종(카테고리 별 택1) 증정"
                    />
                    <EventContentEl title="WOW! 무료배송" subtitle="06.15-06.21" subtitle2="향수 및 스킨이 90% 할인" />
                    <EventContentEl title="향수 이벤트" subtitle="06.14-06.20" subtitle2="향수 15% 할인 이벤트" />
                </Row>
                <Row>
                    <EventContentEl
                        title="최저가 PICK"
                        subtitle="바이슈코 에코 파우치 구매 시"
                        subtitle2="인기 브랜드 샘플 5종(카테고리 별 택1) 증정"
                    />
                    <EventContentEl title="WOW! 무료배송" subtitle="06.15-06.21" subtitle2="향수 및 스킨이 90% 할인" />
                    <EventContentEl title="향수 이벤트" subtitle="06.14-06.20" subtitle2="향수 15% 할인 이벤트" />
                </Row>
                <Row>
                    <EventContentEl
                        title="최저가 PICK"
                        subtitle="바이슈코 에코 파우치 구매 시"
                        subtitle2="인기 브랜드 샘플 5종(카테고리 별 택1) 증정"
                    />
                    <EventContentEl title="WOW! 무료배송" subtitle="06.15-06.21" subtitle2="향수 및 스킨이 90% 할인" />
                    <EventContentEl title="향수 이벤트" subtitle="06.14-06.20" subtitle2="향수 15% 할인 이벤트" />
                </Row>
            </BrowserView>
            <MobileView>
                <RowMo>
                    <div className="mt-[40px]">
                        <BasicContent title="N월n일 래플이벤트" subtitle="N일까지 응모하고 할인 받자" />
                    </div>
                </RowMo>
            </MobileView>
        </>
    );
}
const TimeContentWrapCover = tw.div`
flex flex-col justify-center items-center mb-[30px] relative
after:content-['이미 종료된 타임세일입니다.'] after:absolute after:top-0 after:text-white after:text-[14px] after:font-bold
after:bg-black/30 after:w-full after:h-[170px] after:flex after:justify-center after:items-center
`;

// =================================================================================================================

//  Product 객체
function ProductEl() {
    return (
        <div className="flex-1 flex-col items-center justify-center">
            <div>
                <img src="images/product-img.jpg" alt="product-img" />
            </div>
            <div className="space-y-[15px] font-bold text-[13px]">
                <div className="leading-4 tracking-tighter">
                    <span>[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml</span>
                </div>
                <div className="space-x-[10px]">
                    <span className="text-[#21B586] text-[14px]">24%</span>
                    <span className="text-[#37846C] text-[15px]">169,900원</span>
                    <span className="text-[10px]">($141.83)</span>
                </div>
                <div className="flex">
                    <div className="border border-gray-200 rounded-sm h-[20px] w-[30px] flex justify-center items-center mr-[5px]">
                        <SportsScoreIcon />
                    </div>
                    <div className="text-white text-[10px] bg-[#F4B46A] rounded-sm flex justify-center items-center h-[20px] w-[80px]">
                        <span>관부가세 포함</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function BrandContent() {
    return (
        <>
            <BrowserView>
                <div className="flex space-x-[30px] mb-[50px]">
                    <ProductEl />
                    <ProductEl />
                    <ProductEl />
                    <ProductEl />
                </div>
                <div className="flex space-x-[30px] mb-[50px]">
                    <ProductEl />
                    <ProductEl />
                    <ProductEl />
                    <ProductEl />
                </div>
                <div className="flex space-x-[30px] mb-[50px]">
                    <ProductEl />
                    <ProductEl />
                    <ProductEl />
                    <ProductEl />
                </div>
                <div className="flex space-x-[30px] mb-[50px]">
                    <ProductEl />
                    <ProductEl />
                    <ProductEl />
                    <ProductEl />
                </div>
                <div className="flex space-x-[30px] mb-[50px]">
                    <ProductEl />
                    <ProductEl />
                    <ProductEl />
                    <ProductEl />
                </div>
            </BrowserView>
            <MobileView>
                <div>
                    <div />
                </div>
            </MobileView>
        </>
    );
}
export function NewContent() {
    return (
        <>
            <BrowserView>
                <div className="flex space-x-[30px] mb-[50px]">
                    <ProductEl />
                    <ProductEl />
                    <ProductEl />
                    <ProductEl />
                    <ProductEl />
                </div>
                <div className="flex space-x-[30px] mb-[50px]">
                    <ProductEl />
                    <ProductEl />
                    <ProductEl />
                    <ProductEl />
                    <ProductEl />
                </div>
                <div className="flex space-x-[30px] mb-[50px]">
                    <ProductEl />
                    <ProductEl />
                    <ProductEl />
                    <ProductEl />
                    <ProductEl />
                </div>
                <div className="flex space-x-[30px] mb-[50px]">
                    <ProductEl />
                    <ProductEl />
                    <ProductEl />
                    <ProductEl />
                    <ProductEl />
                </div>
            </BrowserView>
            <MobileView>
                <div>
                    <div />
                </div>
            </MobileView>
        </>
    );
}
export function BestContent() {
    return (
        <>
            <BrowserView>
                <div className="flex space-x-[30px] mb-[50px]">
                    <ProductEl />
                    <ProductEl />
                    <ProductEl />
                    <ProductEl />
                    <ProductEl />
                </div>
                <div className="flex space-x-[30px] mb-[50px]">
                    <ProductEl />
                    <ProductEl />
                    <ProductEl />
                    <ProductEl />
                    <ProductEl />
                </div>
                <div className="flex space-x-[30px] mb-[50px]">
                    <ProductEl />
                    <ProductEl />
                    <ProductEl />
                    <ProductEl />
                    <ProductEl />
                </div>
                <div className="flex space-x-[30px] mb-[50px]">
                    <ProductEl />
                    <ProductEl />
                    <ProductEl />
                    <ProductEl />
                    <ProductEl />
                </div>
            </BrowserView>
            <MobileView>
                <div>
                    <div />
                </div>
            </MobileView>
        </>
    );
}
