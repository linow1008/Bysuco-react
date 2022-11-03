import React from "react";
import tw from "twin.macro";
import { BrandContent } from "../components/elements/StyledContent";
import { BrowserView, MobileView } from "react-device-detect";
import StyledTitle from "../components/elements/StyledTitle";
import SearchIcon from "@mui/icons-material/Search";
import Pagination from "../components/elements/pagination";

const Row = tw.div`
    flex justify-center items-center space-x-[5px] mb-[5rem]
    lg:space-x-[10px] lg:mb-[40px]
`;
const Banner = tw.div`
    flex flex-col justify-end pl-[1.25rem] pb-[1.25rem] text-[.8125rem]
    background-image[url('images/alt-image.jpg')] bg-cover
    w-full h-[10.625rem] lg:h-[15.625rem] lg:justify-center
`;
const Input = tw.input`
    placeholder:text-[.6875rem] placeholder:text-[#d3d3d3] pb-[.3125rem] w-full
`;

const shop = () => {
    return (
        <>
            <BrowserView>
                <div className="w-2/3 mx-auto">
                    <StyledTitle title="BRAND" subtitle="BYSUCO" />
                    <Banner>
                        <div className="text-[#4F95E8] font-bold text-[1.125rem] mb-[.625rem]">
                            <span>여름 향수도 역시 바이슈코에서!</span>
                        </div>
                        <div className="text-[#71A7E7]">
                            <span>#여름향수 #상쾌한 #시트러스 #오션 #바이슈코</span>
                        </div>
                    </Banner>
                    <div className="flex mt-[3rem]">
                        {/* 브랜드 리스트 */}
                        <div>
                            <div className="border-b-2 border-[#000] relative w-[9.375rem]">
                                <Input type="text" placeholder="브랜드를 입력해주세요" />
                                <div className="absolute right-0 bottom-[.3125rem]">
                                    <SearchIcon />
                                </div>
                            </div>
                            <div className="mt-[1.25rem]">
                                <ul className="space-y-2 text-[.6875rem] w-[9.375rem] h-[27.5rem] overflow-hidden border-r border-[#d3d3d3]">
                                    <li>전체보기</li>
                                    <li>ADDICTION[어딕션]</li>
                                    <li>AESOP[이솝]</li>
                                    <li>AVEDA[아베다]</li>
                                    <li>BIOTHERM[비오템]</li>
                                    <li>BYREDO[바이레도]</li>
                                    <li>CAUDALIE[꼬달리]</li>
                                    <li>CHANEL[샤넬]</li>
                                    <li>CHLOE[끌로에]</li>
                                    <li>CLARINS[클라랑스]</li>
                                    <li>
                                        CLEDEPEAU BEAUTE
                                        <br />
                                        [끌레드뽀 보떼]
                                    </li>
                                    <li>CLINIQUE[크리니크]</li>
                                    <li>CREED[크리드]</li>
                                    <li>DARPHN[달팡]</li>
                                    <li>DECORTE[데코르테]</li>
                                    <li>DIOR[디올]</li>
                                    <li>DIPTYQUE[딥티크]</li>
                                    <li>ADDICTION[어딕션]</li>
                                    <li>ADDICTION[어딕션]</li>
                                    <li>ADDICTION[어딕션]</li>
                                    <li>ADDICTION[어딕션]</li>
                                    <li>ADDICTION[어딕션]</li>
                                    <li>ADDICTION[어딕션]</li>
                                    <li>ADDICTION[어딕션]</li>
                                </ul>
                            </div>
                        </div>
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
                                <BrandContent />
                                <Pagination />
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserView>
            <MobileView>
                <div>
                    <Banner>
                        <div className="text-[#4F95E8] font-bold text-[18px] mb-[10px]">
                            <span>여름 향수도 역시 바이슈코에서!</span>
                        </div>
                        <div className="text-[#71A7E7]">
                            <span>#여름향수 #상쾌한 #시트러스 #오션 #바이슈코</span>
                        </div>
                    </Banner>
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
