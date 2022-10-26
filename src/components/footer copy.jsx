import React from "react";

const footer = () => {
    return (
        <div className="bg-[#016344] mt-[100px] text-[10px]">
            <div className="w-[80%] mx-auto text-[#8ABAAB] flex h-[270px]">
                <div className="w-1/2 flex flex-col justify-center">
                    <div>
                        <img src="images/logo2.png" alt="logo2" />
                    </div>
                    <div className="flex space-x-[20px] mb-[20px] mt-[10px] text-[12px]">
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
                    <div className="space-y-[3px]">
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
                                고객님은 안전거래를 위해 현금으로 결제 시 저희 쇼핑몰에 가입한 구매안전서비스를 이용하실
                                수 있습니다 [서비스 가입사실확인]
                            </span>
                        </div>
                    </div>
                    <div className="mt-[15px]">
                        <span>(C) (주)청담글로벌 all rights reserverd</span>
                    </div>
                </div>
                <div className="flex w-1/2 mt-[100px]">
                    <div>
                        <div className="border-l border-[#8ABAAB] pl-[30px]">
                            <div>
                                <span>CS CENTER</span>
                            </div>
                            <div>
                                <span>1800-0852</span>
                            </div>
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
                    </div>
                    <div>
                        <div>
                            <span>BANKING</span>
                        </div>
                        <div>
                            <span>904-910014-51304</span>
                        </div>
                        <div>
                            <span>하나은행 예금주 : (주)청담글로벌</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default footer;
