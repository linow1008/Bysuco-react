import React from "react";
import tw, { styled } from "twin.macro";
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StyledTitle from "../components/elements/StyledTitle";
import ProductWrap, { FreeProduct, FormanProduct, ReppleProduct } from "../components/elements/StyledProduct";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import AddIcon from "@mui/icons-material/Add";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import BasicContent from "../components/elements/StyledContent.jsx";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const Banner_Images = [
    { imgURL: "1.jpg", imgTitle: "SKIN CARE" },
    { imgURL: "2.jpg", imgTitle: "MAKE UP" },
    { imgURL: "3.jpg", imgTitle: "BODY & HAIR" },
];
const categorys = [
    { imgURL: "category1.jpg", imgTitle: "SKIN CARE" },
    { imgURL: "category2.jpg", imgTitle: "MAKE UP" },
    { imgURL: "category3.jpg", imgTitle: "BODY & HAIR" },
    { imgURL: "category1.jpg", imgTitle: "PERFUME" },
    { imgURL: "category2.jpg", imgTitle: "MEN" },
    { imgURL: "category3.jpg", imgTitle: "ACCESSORY" },
];
const products = [
    {
        imgURL: "product1.jpg",
        imgTitle: "[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml",
        discount: "24",
        price: "169,900",
        exchange: 141.86,
        alarmTags: [{ color: "#888888", text: "SALE" }],
        tags: [
            { type: "icon", text: <SportsScoreIcon /> },
            { type: "#cd5b5b", text: "기한임박" },
            { type: "#F4B46A", text: "무료배송" },
        ],
    },
    {
        imgURL: "product2.jpg",
        imgTitle: "[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml",
        discount: "24",
        price: "169,900",
        exchange: 141.86,
        alarmTags: [
            { color: "#888888", text: "SALE" },
            { color: "#174f0c", text: "NEW" },
            { color: "#44c57e", text: "BEST" },
        ],
        tags: [
            { type: "icon", text: <SportsScoreIcon /> },
            { type: "#cd5b5b", text: "기한임박" },
            { type: "#F4B46A", text: "무료배송" },
        ],
    },
    {
        imgURL: "product3.jpg",
        imgTitle: "[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml",
        discount: "24",
        price: "169,900",
        exchange: 141.86,
        alarmTags: [{ color: "#888888", text: "SALE" }],
        tags: [
            { type: "icon", text: <SportsScoreIcon /> },
            { type: "#cd5b5b", text: "기한임박" },
            { type: "#F4B46A", text: "무료배송" },
        ],
    },
    {
        imgURL: "product4.jpg",
        imgTitle: "[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml",
        discount: "24",
        price: "169,900",
        exchange: 141.86,
        alarmTags: [{ color: "#888888", text: "SALE" }],
        tags: [
            { type: "icon", text: <SportsScoreIcon /> },
            { type: "#cd5b5b", text: "기한임박" },
            { type: "#F4B46A", text: "무료배송" },
        ],
    },
    {
        imgURL: "product5.jpg",
        imgTitle: "[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml",
        discount: "24",
        price: "169,900",
        exchange: 141.86,
        alarmTags: [{ color: "#888888", text: "SALE" }],
        tags: [
            { type: "icon", text: <SportsScoreIcon /> },
            { type: "#cd5b5b", text: "기한임박" },
            { type: "#F4B46A", text: "무료배송" },
        ],
    },
    {
        imgURL: "product6.jpg",
        imgTitle: "[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml",
        discount: "24",
        price: "169,900",
        exchange: 141.86,
        alarmTags: [{ color: "#888888", text: "SALE" }],
        tags: [
            { type: "icon", text: <SportsScoreIcon /> },
            { type: "#cd5b5b", text: "기한임박" },
            { type: "#F4B46A", text: "무료배송" },
        ],
    },
    {
        imgURL: "product7.jpg",
        imgTitle: "[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml",
        discount: "24",
        price: "169,900",
        exchange: 141.86,
        alarmTags: [{ color: "#888888", text: "SALE" }],
        tags: [
            { type: "icon", text: <SportsScoreIcon /> },
            { type: "#cd5b5b", text: "기한임박" },
            { type: "#F4B46A", text: "무료배송" },
        ],
    },
    {
        imgURL: "product8.jpg",
        imgTitle: "[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml",
        discount: "24",
        price: "169,900",
        exchange: 141.86,
        alarmTags: [{ color: "#888888", text: "SALE" }],
        tags: [
            { type: "icon", text: <SportsScoreIcon /> },
            { type: "#cd5b5b", text: "기한임박" },
            { type: "#F4B46A", text: "무료배송" },
        ],
    },
];

let getProductImg = (num) => {
    let returnArr = [];

    for (let i = 0; i < num; i++) {
        let rNum = Math.floor(Math.random() * products.length);

        returnArr.push(products[rNum]);
    }

    return returnArr;
};

const Banner = styled(Slider)`
    button {
        position: absolute;
        left: 0;
    }
    .slick-list {
        width: 100vw;
        margin-left: calc(-50vw + 50%);
    }
    .slick-track {
        display: flex;
    }
    .slick-slide div {
        outline: none;
    }

    @media only screen and (max-width: 780px) {
        display: flex;
        justify-content: center;

        .slick-dots {
            display: flex !important;
            width: 90%;
            bottom: 15px;
        }

        .slick-slide div {
            outline: none;
            height: 400px;
        }

        .slick-slide div img {
            height: 100%;
        }

        .slick-dots li {
            width: 80%;
            border: 2px solid #f3f3f3;
            height: unset;
            margin: 0;
        }

        .slick-dots li.slick-active {
            border-color: #000;
        }
    }
`;

const Event = styled(Slider)`
    button {
        position: absolute;
        left: 0;
    }
    .slick-list {
        width: 100vw;
        margin-left: calc(-50vw + 50%);
    }
    .slick-track {
        display: flex;
    }
    .slick-slide {
        height: 300px;
    }
    .slick-slide > div {
        height: 100%;
    }
    .slick-slide div {
        outline: none;
        height: 100%;
    }
    .slick-slide img {
        height: 100%;
    }
    .slick-dots {
        display: flex !important;
    }
    .slick-dots li {
        width: 100%;
        border: 2px solid #f3f3f3;
        height: unset;
        margin: 0;
    }
    .slick-dots li.slick-active {
        border-color: #000;
    }

    @media screen {
    }
`;

const BuscoButton = styled(Button)`
    font-size: 0.875rem !important;
    padding: 1em 0.5em !important;
    &:not(:disabled) {
        border-color: green !important;
        color: green !important;
    }

    @media only screen and (max-width: 780px) {
        & {
            font-size: 0.625rem !important;
            padding: 1em 0.5em !important;
        }
    }
`;

const Category = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2em 0;
    & {
        > div {
            display: flex;
        }

        a {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100px;
            & > div {
            }
            & > div img {
                border-radius: 50%;
            }
            & > div span {
                font-size: 12px;
                font-weight: 700;
            }
        }
        a + a {
            margin-left: 1em;
        }
    }

    @media only screen and (max-width: 780px) {
        display: block;
        overflow: scroll;
        & {
            > div {
                justify-content: center;
                width: 180%;
            }

            a {
                float: left;
            }
        }
    }
`;

const Review = styled(Slider)`
    .slick-list {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .slick-slide {
        display: flex !important;
        align-items: center;
        justify-content: center;
    }
    .slick-track {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
    .slick-slide {
        /* height: 1 !important; */
    }
    .slick-slide > div {
        outline: none;
        display: flex;
        height: 100%;
        align-items: center;
        transition-property: all;
    }
    .slick-slide img {
        width: 100%;
    }
    .slick-dots {
        display: flex !important;
    }
    .slick-dots li {
        width: 100%;
        border: 2px solid #f3f3f3;
        height: unset;
        margin: 0;
    }
    .slick-dots li.slick-active {
        border-color: #000;
    }
`;

const TimeSaleSlide = styled(Slider)`
    .slick-list {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .slick-slide {
        display: flex !important;
        align-items: center;
        justify-content: center;
    }
    .slick-track {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
    .slick-slide {
        /* height: 1 !important; */
    }
    .slick-slide > div {
        outline: none;
        display: flex;
        height: 100%;
        align-items: center;
        transition-property: all;
    }
    .slick-slide img {
        width: 100%;
    }
    .slick-dots {
        display: flex !important;
    }
    .slick-dots li {
        width: 100%;
        border: 2px solid #f3f3f3;
        height: unset;
        margin: 0;
    }
    .slick-dots li.slick-active {
        border-color: #000;
    }
`;

const settings = {
    customPaging: function (i) {
        return (
            <div>
                <a />
            </div>
        );
    },
    dots: isBrowser ? false : true,
    infinite: true,
    centerMode: isBrowser ? true : false,
    slidesToShow: isBrowser ? 1.175 : 1,
    slidesToScroll: 1,
    variableWidth: isBrowser ? true : false,
};

const event_settings = {
    customPaging: function (i) {
        return (
            <div>
                <a />
            </div>
        );
    },
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
};

const revive_settings = {
    customPaging: function (i) {
        return (
            <div>
                <a />
            </div>
        );
    },
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
};

const timeSale_slide = {
    customPaging: function (i) {
        return (
            <div>
                <a />
            </div>
        );
    },
    dots: true,
    infinite: true,
    centerMode: false,
    slidesToShow: 3,
    slidesToScroll: 1,
};

const TimeButton = tw.div`
    bg-[#006655] text-white font-bold flex justify-center items-center mx-2
    mt-[.9375rem] h-[30px] text-[.875rem] space-x-[.3125rem] mx-2
`;

const mainPage = () => {
    return (
        <>
            <div className="md:w-[80%] w-[100%] mx-auto mb-[2em]">
                <Banner {...settings}>
                    {Banner_Images.map((img) => {
                        return (
                            <div>
                                <img src={`/slider/${img.imgURL}`} alt={`${img.imgTitle}`} />
                            </div>
                        );
                    })}
                </Banner>
            </div>
            <Category>
                <div>
                    {categorys.map((img) => {
                        return (
                            <a>
                                <div>
                                    <img src={`/category/${img.imgURL}`} />
                                </div>
                                <div>
                                    <span>{img.imgTitle}</span>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </Category>
            <div className="w-[80%] mx-auto mb-[2em]">
                <StyledTitle title="WOW! 무료배송" subtitle="FREE SHIPPING" isMore="true" />
                <FreeProduct products={getProductImg(20)} text_center={"false"}></FreeProduct>
            </div>
            <div className="w-[80%] mx-auto pt-[4em]">
                <img src="/banner/banner.jpg" className="w-[100%]"></img>
            </div>
            <div className="w-[80%] mx-auto">
                <StyledTitle title="#For man" subtitle="BYSUCO" isMore="true" />
                <div className="flex justify-center font-[0.625rem]">
                    <Stack direction="row" spacing={2} className="font-[0.625rem]">
                        <BuscoButton variant="outlined">SKIN CARE</BuscoButton>
                        <BuscoButton variant="outlined" disabled>
                            PERFUME
                        </BuscoButton>
                        <BuscoButton variant="outlined" disabled>
                            BODY&HAIR
                        </BuscoButton>
                    </Stack>
                </div>
                <div>
                    <FormanProduct products={getProductImg(20)} text_center={"true"}></FormanProduct>
                </div>
            </div>
            <div className="w-[80%] mx-auto pt-[4em]">
                <img src="/banner/banner.jpg" className="w-[100%]"></img>
            </div>
            <div className="w-[80%] mx-auto">
                <StyledTitle title="래플 이벤트" subtitle="RAFFLE EVENT" isMore="true" />
                <div className="">
                    <ReppleProduct products={getProductImg(5)} text_center={"true"}></ReppleProduct>
                </div>
            </div>
            <div className="w-[80%] mx-auto pt-[4em]">
                <img src="/banner/banner.jpg" className="w-[100%]"></img>
            </div>
            <div className="w-[80%] mx-auto">
                <StyledTitle title="BRAND PICK" subtitle="BYSUCO" isMore="false" />
                <div className="md:flex-row flex flex-col">
                    <div className="md:w-[50%] w-[100%]">
                        <img src="/brand/brand1.jpg" className="h-[100%]"></img>
                    </div>
                    <div className="flex flex-col marker:w-[50%] ml-5">
                        <div className="md:flex hidden w-[4.25rem] ml-auto items-center text-[0.825rem] border-b-2 border-black">
                            <span>더보기</span>
                            <AddIcon className="ml-auto" sx={{ fontSize: "0.825rem" }} />
                        </div>
                        <div className="flex flex-col">
                            <div className="flex mt-5">
                                <div className="flex items-center md:w-[20%] w-[30%]">
                                    <img src="images/product-img.jpg" />
                                </div>
                                <div className="md:w-[80%] w-[70%]">
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
                            </div>
                            <div className="flex mt-5">
                                <div className="flex items-center md:w-[20%] w-[30%]">
                                    <img src="images/product-img.jpg" />
                                </div>
                                <div className="md:w-[80%] w-[70%]">
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
                            </div>
                            <div className="flex mt-5">
                                <div className="flex items-center md:w-[20%] w-[30%]">
                                    <img src="images/product-img.jpg" />
                                </div>
                                <div className="md:w-[80%] w-[70%]">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mx-auto pt-[4em]">
                <img src="/banner/banner.jpg" className="w-[100%]"></img>
            </div>
            <div className="w-[80%] mx-auto">
                <StyledTitle title="최저가 PICK" subtitle="LOWEST PRICE" isMore="true" />
                <div className="md:flex hidden">
                    <div className="w-[50%] mr-3">
                        <div className="flex justify-between rounded-sm bg-[#8b8b8b] p-5 text-white">
                            <div>
                                <span>
                                    유사한 고객님이
                                    <br />
                                    많이 구매했어요
                                </span>
                            </div>
                            <div className="flex w-[4.25rem] mt-auto ml-auto items-center text-[0.825rem] border-b-2 border-white">
                                <span>더보기</span>
                                <AddIcon className="ml-auto" sx={{ fontSize: "0.825rem" }} />
                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-[50%] mr-1">
                                <div className="flex-1 flex-col items-center justify-center">
                                    <div className="">
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
                            </div>
                            <div className="w-[50%] ml-1">
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
                            </div>
                        </div>
                    </div>
                    <Divider orientation="vertical" flexItem />
                    <div className="flex flex-col w-[50%] ml-3">
                        <div className="flex justify-between rounded-sm bg-[rgb(138,171,150)] p-5 text-white">
                            <div>
                                <span>
                                    유사한 고객님이
                                    <br />
                                    많이 구매했어요
                                </span>
                            </div>
                            <div className="flex w-[4.25rem] mt-auto ml-auto items-center text-[0.825rem] border-b-2 border-white">
                                <span>더보기</span>
                                <AddIcon className="ml-auto" sx={{ fontSize: "0.825rem" }} />
                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-[50%] mr-1">
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
                            </div>
                            <div className="w-[50%] ml-1">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:hidden flex flex-col w-[80%] mx-auto">
                <div className="w-[100%]">
                    <img src="/brand/brand1.jpg" className="h-[100%]"></img>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-col w-[50%]">
                        <div className="flex mt-5">
                            <div className="flex items-center w-[25%]">
                                <img src="images/product-img.jpg" />
                            </div>
                            <div className="w-[75%]">
                                <div className="space-y-1 font-bold text-[13px]">
                                    <div className="leading-2 tracking-tighter">
                                        <span>[이솝] 제라늄 리...</span>
                                    </div>
                                    <div className="space-x-[5px]">
                                        <span className="text-[#21B586] text-[14px]">24%</span>
                                        <span className=" text-[15px]">169,900원</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex mt-5">
                            <div className="flex items-center w-[25%]">
                                <img src="images/product-img.jpg" />
                            </div>
                            <div className="w-[75%]">
                                <div className="space-y-1 font-bold text-[13px]">
                                    <div className="leading-2 tracking-tighter">
                                        <span>[이솝] 제라늄 리...</span>
                                    </div>
                                    <div className="space-x-[5px]">
                                        <span className="text-[#21B586] text-[14px]">24%</span>
                                        <span className=" text-[15px]">169,900원</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex mt-5">
                            <div className="flex items-center w-[25%]">
                                <img src="images/product-img.jpg" />
                            </div>
                            <div className="w-[75%]">
                                <div className="space-y-1 font-bold text-[13px]">
                                    <div className="leading-2 tracking-tighter">
                                        <span>[이솝] 제라늄 리...</span>
                                    </div>
                                    <div className="space-x-[5px]">
                                        <span className="text-[#21B586] text-[14px]">24%</span>
                                        <span className=" text-[15px]">169,900원</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-[50%]">
                        <div className="flex mt-5">
                            <div className="flex items-center w-[25%]">
                                <img src="images/product-img.jpg" />
                            </div>
                            <div className="w-[75%]">
                                <div className="space-y-1 font-bold text-[13px]">
                                    <div className="leading-2 tracking-tighter">
                                        <span>[이솝] 제라늄 리...</span>
                                    </div>
                                    <div className="space-x-[5px]">
                                        <span className="text-[#21B586] text-[14px]">24%</span>
                                        <span className="text-[15px]">169,900원</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex mt-5">
                            <div className="flex items-center w-[25%]">
                                <img src="images/product-img.jpg" />
                            </div>
                            <div className="w-[75%]">
                                <div className="space-y-1 font-bold text-[13px]">
                                    <div className="leading-2 tracking-tighter">
                                        <span>[이솝] 제라늄 리...</span>
                                    </div>
                                    <div className="space-x-[5px]">
                                        <span className="text-[#21B586] text-[14px]">24%</span>
                                        <span className="text-[15px]">169,900원</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex mt-5">
                            <div className="flex items-center w-[25%]">
                                <img src="images/product-img.jpg" />
                            </div>
                            <div className="w-[75%]">
                                <div className="space-y-1 font-bold text-[13px]">
                                    <div className="leading-2 tracking-tighter">
                                        <span>[이솝] 제라늄 리...</span>
                                    </div>
                                    <div className="space-x-[5px]">
                                        <span className="text-[#21B586] text-[14px]">24%</span>
                                        <span className="text-[15px]">169,900원</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mx-auto pt-[4em]">
                <img src="/banner/banner.jpg" className="w-[100%]"></img>
            </div>
            <div className="w-[80%] mx-auto">
                <StyledTitle title="BEST REVIEW" subtitle="BYSUCO" isMore="true" />
                <Review {...revive_settings}>
                    {getProductImg(20).map((img) => {
                        let imgURL = "/product/" + img.imgURL;

                        return (
                            <div className="flex flex-col justify-end relative h-[100%]">
                                <img src={imgURL} className="w-[12rem]"></img>
                                <div className="absolute w-[100%] bottom-0 left-0 text-[0.625rem]">
                                    <div className="pb-[1em]">
                                        <span>han**** | 2022/03/25</span>
                                    </div>
                                    <Divider variant="fullWidth" />
                                    <div className="pt-[1em]">
                                        <span className="inline-block w-[100%] text-[0.925rem] font-bold">
                                            최애 향수!
                                        </span>
                                        <span className="inline-block pt-[1em]">
                                            리뷰글이 노출되는 영역입니다. 최대 두줄까지 노출됩니다. 리뷰글이 노출되는
                                            영역입니다 최대...
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Review>
            </div>
            <div className="w-[80%] mx-auto pt-[4em]">
                <img src="/banner/banner.jpg" className="w-[100%]"></img>
            </div>
            <div className="w-[80%] mx-auto">
                <StyledTitle title="타임세일" subtitle="TIME SALE" isMore="true" />
                <div className="flex justify-center">
                    <Stack direction="row" spacing={2}>
                        <BuscoButton variant="outlined">진행중</BuscoButton>
                        <BuscoButton variant="outlined" disabled>
                            종료
                        </BuscoButton>
                    </Stack>
                </div>
                <div className="mt-10">
                    <TimeSaleSlide {...timeSale_slide}>
                        <div className="flex flex-col justify-center items-center">
                            <BasicContent
                                title="타임세일A"
                                subtitle="두줄 노출 가능 최대 60자까지 입력 가능합니다. 내용을 입력해주세요!"
                                align="left"
                            />
                            <TimeButton>
                                <div>
                                    <AccessTimeIcon fontSize="8" />
                                </div>
                                <div>
                                    <span>12 : 34 : 56</span>
                                </div>
                            </TimeButton>
                        </div>
                        <div className="flex flex-col justify-start items-center">
                            <BasicContent
                                title="타임세일A"
                                subtitle="두줄 노출 가능 최대 60자까지 입력 가능합니다. 내용을 입력해주세요!"
                                align="center"
                            />
                            <TimeButton>
                                <div>
                                    <AccessTimeIcon fontSize="8" />
                                </div>
                                <div>
                                    <span>12 : 34 : 56</span>
                                </div>
                            </TimeButton>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <BasicContent
                                title="타임세일A"
                                subtitle="두줄 노출 가능 최대 60자까지 입력 가능합니다. 내용을 입력해주세요!"
                                align="left"
                            />
                            <TimeButton>
                                <div>
                                    <AccessTimeIcon fontSize="8" />
                                </div>
                                <div>
                                    <span>12 : 34 : 56</span>
                                </div>
                            </TimeButton>
                        </div>
                    </TimeSaleSlide>
                </div>
            </div>
            <div className="w-[80%] mx-auto pt-[4em]">
                <img src="/banner/banner.jpg" className="w-[100%]"></img>
            </div>
            <div className="w-[80%] mx-auto">
                <StyledTitle title="BYSUCO 추천 기획전" subtitle="RECOMMENDED EXHIBITION" isMore="true" />
                <div className="flex h-[20rem]">
                    <div className="w-[50vw] ml-[calc(-50vw+50%)]">
                        <img src="plan/plan1.jpg" className="h-[100%] w-[100%]"></img>
                    </div>
                    <div className="flex flex-col justify-center w-[50%] pl-10">
                        <div className="flex flex-col">
                            <div className="flex">
                                <div className="flex justify-center items-center w-[20%] border border-gray-200">
                                    <img src="images/product-img.jpg" />
                                </div>
                                <div className="flex items-center w-[80%] ml-5">
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
                            </div>
                            <div className="flex mt-5">
                                <div className="flex justify-center items-center w-[20%] border border-gray-200">
                                    <img src="images/product-img.jpg" />
                                </div>
                                <div className="flex items-center w-[80%] ml-5">
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
                            </div>
                        </div>
                    </div>
                </div>
                <Divider className="py-3" flexItem />
                <div className="flex h-[20rem] mt-5">
                    <div className="flex flex-col justify-center w-[50%] pr-10">
                        <div className="flex flex-col items-end">
                            <div className="flex">
                                <div className="flex justify-center items-center w-[20%] border border-gray-200">
                                    <img src="images/product-img.jpg" />
                                </div>
                                <div className="flex items-center w-[80%] ml-5">
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
                            </div>
                            <div className="flex mt-5">
                                <div className="flex justify-center items-center w-[20%] border border-gray-200">
                                    <img src="images/product-img.jpg" />
                                </div>
                                <div className="flex items-center w-[80%] ml-5">
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
                            </div>
                        </div>
                    </div>
                    <div className="w-[50vw] mr-[calc(-50vw+50%)]">
                        <img src="plan/plan2.jpg" className="h-[100%] w-[100%]"></img>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mx-auto pt-[4em]">
                <img src="/banner/banner.jpg" className="w-[100%]"></img>
            </div>
            <div className="w-[80%] mx-auto">
                <StyledTitle title="핫세일" subtitle="HOT SALE" isMore="true" />
                <ProductWrap products={getProductImg(12)} rowCnt={4}></ProductWrap>
            </div>
            <div className="w-[80%] mx-auto pt-[4em]">
                <img src="/banner/banner.jpg" className="w-[100%]"></img>
            </div>
            <div className="w-[80%] mx-auto">
                <StyledTitle title="By You" subtitle="BYSUCO" isMore="false" />
                <div className="flex space-x-5">
                    <div className="relative w-[20%]">
                        <img src="buyyou/buyyou.PNG" className="w-[100%] rounded-lg" />
                        <div className="absolute flex items-center top-3 left-3">
                            <img src="buyyou/buyyouSumb.PNG" className="w-8 rounded-full border border-white" />
                            <span className="text-sm text-white ml-2">example.kr</span>
                        </div>
                    </div>
                    <div className="relative w-[20%]">
                        <img src="buyyou/buyyou.PNG" className="w-[100%] rounded-lg" />
                        <div className="absolute flex items-center top-3 left-3">
                            <img src="buyyou/buyyouSumb.PNG" className="w-8 rounded-full border border-white" />
                            <span className="text-sm text-white ml-2">example.kr</span>
                        </div>
                    </div>
                    <div className="relative w-[20%]">
                        <img src="buyyou/buyyou.PNG" className="w-[100%] rounded-lg" />
                        <div className="absolute flex items-center top-3 left-3">
                            <img src="buyyou/buyyouSumb.PNG" className="w-8 rounded-full border border-white" />
                            <span className="text-sm text-white ml-2">example.kr</span>
                        </div>
                    </div>
                    <div className="relative w-[20%]">
                        <img src="buyyou/buyyou.PNG" className="w-[100%] rounded-lg" />
                        <div className="absolute flex items-center top-3 left-3">
                            <img src="buyyou/buyyouSumb.PNG" className="w-8 rounded-full border border-white" />
                            <span className="text-sm text-white ml-2">example.kr</span>
                        </div>
                    </div>
                    <div className="relative w-[20%]">
                        <img src="buyyou/buyyou.PNG" className="w-[100%] rounded-lg" />
                        <div className="absolute flex items-center top-3 left-3">
                            <img src="buyyou/buyyouSumb.PNG" className="w-8 rounded-full border border-white" />
                            <span className="text-sm text-white ml-2">example.kr</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mx-auto">
                <StyledTitle title="바이슈코 인스타그램" subtitle="INSTAGRAM" isMore="false" />
                <div className="flex flex-col justify-center items-center">
                    <span className="font-bold">@바이슈코</span>
                    <span className="text-gray-400 mt-2">#바이슈코 #100%정품 #직구 #프리미엄뷰티 #래플이벤트</span>
                </div>
                <Event {...event_settings}>
                    {Banner_Images.map((img) => {
                        return (
                            <div style={{ width: "300px", height: "400px" }}>
                                <img src={`/slider/${img.imgURL}`} alt={`${img.imgTitle}`} />
                            </div>
                        );
                    })}
                </Event>
            </div>
        </>
    );
};

export default mainPage;
