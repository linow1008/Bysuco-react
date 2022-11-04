import React from "react";
import { MobileView, BrowserView } from "react-device-detect";
import StyledTitle from "../components/elements/StyledTitle";
import { FourPromotion } from "../components/elements/StyledButton";
import { EventContent } from "../components/elements/StyledContent";

const event = () => {
    return (
        <>
            <BrowserView>
                <div className="w-2/3 mx-auto">
                    <StyledTitle title="EVENT" subtitle="BYSUCO" />
                    <FourPromotion />
                    <div className="flex justify-between items-center text-[10px] mb-[30px]">
                        <div>
                            총 <span className="text-[#006655]">45</span>개
                        </div>
                        {/* 드롭다운or셀렉트박스로 바꾸기 */}
                        <div>
                            <span>전체</span>
                        </div>
                    </div>
                    {/* 콘텐츠 3개 * 4줄 */}
                    <div>
                        <EventContent />
                    </div>
                    {/* 페이지네이션 */}
                </div>
            </BrowserView>
            <MobileView>
                <div>
                    <div />
                </div>
            </MobileView>
        </>
    );
};

export default event;
