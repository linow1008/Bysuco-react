import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import tw from "twin.macro";

const Footer = tw.div`
    flex flex-col justify-center h-[17.5rem] w-[80%] mx-auto
    text-[.625rem] text-[#8ABAAB]
    tracking-tighter
`;
const ContentBox = tw.div`
    flex 
`;
const Content = tw.div`
    pr-[3.125rem]
`;

const footer = () => {
    return (
        <div className="bg-[#016344] mt-[6.25rem]">
            <Footer>
                <div>
                    <img src="images/logo2.png" alt="logo2" />
                </div>
                <ContentBox className="mt-[.625rem]">
                    <Content className="border-r border-r-[#8ABAAB]">
                        <div className="flex font-bold mb-[1.25rem] space-x-[1.25rem] text-[.75rem]">
                            <div>
                                <span>BYSUCO소개</span>
                            </div>
                            <div>
                                <span>이용안내</span>
                            </div>
                            <div>
                                <span>이용약관</span>
                            </div>
                            <div>
                                <span className="text-white font-bold">개인정보처리방침</span>
                            </div>
                        </div>
                        <div className="space-y-[.1875rem]">
                            <div>
                                <span>상호 (주)청담글로벌 대표 최석주 전화 1800-0852 이메일 bysuco@outlook.kr</span>
                            </div>
                            <div>
                                <span>
                                    주소 인천 연수구 인천타워대로 323 B동 2401호 사업자등록번호 678-81-01062
                                    [사업자정보확인]
                                </span>
                            </div>
                            <div>
                                <span>통신판매업신고번호 제2018-3520125-30-2-00678 개인정보보호책임자 연원경</span>
                            </div>
                            <div>
                                <span>
                                    고객님은 안전거래를 위해 현금으로 결제 시 저희 쇼핑몰에 가입한 구매안전서비스를
                                    이용하실 수 있습니다 [서비스 가입사실확인]
                                </span>
                            </div>
                        </div>
                        <div className="mt-[.9375rem]">
                            <span>(C) (주)청담글로벌 all rights reserverd</span>
                        </div>
                    </Content>
                    <Content className="pl-[3.125rem]">
                        <div className="mb-[.625rem]">
                            <span>CS CENTER</span>
                        </div>
                        <div className="mb-[5px]">
                            <span className="text-[1rem] text-white font-bold">1800-0852</span>
                        </div>
                        <div className="space-y-[.1875rem]">
                            <div>
                                <span>운영시간 10:00 - 18:00</span>
                            </div>
                            <div>
                                <span>점심시간 12:30 - 13:30</span>
                            </div>
                            <div>
                                <span>(공휴일,주말은 휴무입니다.)</span>
                            </div>
                            <div>
                                <span>반품주소 서울 강남구 도산대로 157</span>
                            </div>
                            <div>
                                <span>신웅타워2 17층</span>
                            </div>
                        </div>
                    </Content>
                    <Content>
                        <div className="mb-[.625rem]">
                            <span>BANKING</span>
                        </div>
                        <div className="mb-[.3125rem]">
                            <span className="text-[1rem] text-white font-bold">904-910014-51304</span>
                        </div>
                        <div>
                            <span>하나은행 예금주 : (주)청담글로벌</span>
                        </div>
                        <div className="mt-[2.5rem]">
                            <a href="#">
                                <FontAwesomeIcon icon={faInstagram} size="3x" />
                            </a>
                        </div>
                    </Content>
                </ContentBox>
            </Footer>
        </div>
    );
};

export default footer;
