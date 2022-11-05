import React from "react";
import tw, { styled } from "twin.macro";
import { BrowserView, MobileView } from "react-device-detect";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StyledTitle from "../components/elements/StyledTitle";
import ProductWrap from "../components/elements/StyledProduct";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import AddIcon from "@mui/icons-material/Add";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BasicContent from "../components/elements/StyledContent.jsx";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
    palette: {
        anger: createColor("#F40B27"),
        apple: createColor("#5DBA40"),
        steelBlue: createColor("#5C76B7"),
        violet: createColor("#BC00A3"),
        black: createColor("#4d4d4d"),
    },
});
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
`;

const Repple = styled(Slider)`
    .flex {
        display: flex !important;
    }

    .slick-list {
        width: 100vw;
        margin-left: calc(-50vw + 50%);
    }
    .slick-track {
        display: flex;
    }
    .slick-slide {
        padding: 0 2em;
    }
    .slick-slide div {
        outline: none;
    }
    .slick-slide img {
        /* width: 100%; */
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

const BuscoButton = styled(Button)`
    &:not(:disabled) {
        border-color: green !important;
        color: green !important;
    }
`;

const Product = styled(Slider)`
    .slick-list {
        height: 400px;
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

const Category = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 2em 0;
    & {
        width: 100%;
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
    className: "slider variable-width",
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1.175,
    slidesToScroll: 1,
    variableWidth: true,
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

const product_settings = {
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
    // swipeToSlide: true,
    // afterChange: function (index) {
    //     console.log(`Slider Changed to: ${index + 1}, background: #222; color: #bada55`);
    // },
};

const repple_slide = {
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

const product_settings_slide = {
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
    variableWidth: true,
    swipeToSlide: true,
    afterChange: function (index) {
        console.log(`Slider Changed to: ${index + 1}, background: #222; color: #bada55`);
    },
};

const TimeButton = tw.div`
    bg-[#006655] text-white font-bold flex justify-center items-center mx-2
    mt-[.9375rem] h-[30px] text-[.875rem] space-x-[.3125rem] mx-2
`;

const mainPage = () => {
    return (
        <>
            <BrowserView>
                <div className="w-[80%] mx-auto mb-[2em]">
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
                </Category>
                <div className="w-[80%] mx-auto mb-[2em]">
                    <StyledTitle title="FREE SHIPPING" subtitle="WOW! 무료배송" isMore="true" />
                    <Product {...product_settings}>
                        {getProductImg(20).map((img) => {
                            let imgURL = "/product/" + img.imgURL;

                            return (
                                <div className="">
                                    <div
                                        style={{
                                            backgroundImage: `url(${imgURL})`,
                                            backgroundRepeat: "no-repeat",
                                            backgroundPosition: "center",
                                        }}
                                        className="group flex flex-col justify-end transition-all ease-linear duration-300 hover:h-[25rem] hover:top-[-5rem] h-[18.225rem]"
                                    >
                                        <div className="flex flex-col items-center text-center transition-opacity duration-200 ease-in opacity-0 group-hover:opacity-100 pb-[2em] text-[0.825rem]">
                                            <span className="inline-block w-[80%]">{img.imgTitle}</span>
                                            <div className="flex justify-center w-[100%]">
                                                <span className="text-green-500">{img.discount}%</span>
                                                <span className="pl-[1em]">{img.price}원</span>
                                                <span className="pl-[1em] text-gray-300 text-[0.625rem] flex items-end">
                                                    ({img.exchange})
                                                </span>
                                            </div>
                                            <div className="flex mt-2">
                                                {img.tags.map((tag) => {
                                                    return (
                                                        <span
                                                            style={{ backgroundColor: `${tag.type}` }}
                                                            className={"rounded-sm text-[0.525rem] pl-1 pr-1 mx-[.1em]"}
                                                        >
                                                            {tag.text}
                                                        </span>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Product>
                </div>
                <div className="w-[80%] mx-auto pt-[4em]">
                    <img src="/banner/banner.jpg" className="w-[100%]"></img>
                </div>
                <div className="w-[80%] mx-auto">
                    <StyledTitle title="#For man" subtitle="BYSUCO" isMore="true" />
                    <div className="flex justify-center">
                        <Stack direction="row" spacing={2}>
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
                        <Banner {...product_settings_slide}>
                            {getProductImg(20).map((img) => {
                                let imgURL = "/product/" + img.imgURL;

                                return (
                                    <div style={{ width: "18rem" }}>
                                        <img src={imgURL}></img>
                                        <div className="flex flex-col justify-end">
                                            <div className="flex flex-col items-center text-left transition-opacity pb-[2em] text-[0.825rem]">
                                                <span className="inline-block w-[80%]">{img.imgTitle}</span>
                                                <div className="flex justify-start w-[80%]">
                                                    <span className="text-green-500">{img.discount}%</span>
                                                    <span className="pl-[1em]">{img.price}원</span>
                                                    <span className="pl-[1em] text-gray-300 text-[0.625rem] flex items-end">
                                                        ({img.exchange})
                                                    </span>
                                                </div>
                                                <div className="flex mt-2 justify-start w-[80%]">
                                                    {img.tags.map((tag) => {
                                                        return (
                                                            <span
                                                                style={{ backgroundColor: `${tag.type}` }}
                                                                className={
                                                                    "rounded-sm text-[0.525rem] pl-1 pr-1 mx-[.1em]"
                                                                }
                                                            >
                                                                {tag.text}
                                                            </span>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </Banner>
                    </div>
                </div>
                <div className="w-[80%] mx-auto pt-[4em]">
                    <img src="/banner/banner.jpg" className="w-[100%]"></img>
                </div>
                <div className="w-[80%] mx-auto">
                    <StyledTitle title="래플 이벤트" subtitle="RAFFLE EVENT" isMore="true" />
                    <div className="">
                        <Repple {...repple_slide}>
                            {getProductImg(5).map((img) => {
                                let imgURL = "/product/" + img.imgURL;
                                return (
                                    // <div style={{ width: "27.25rem" }}>
                                    <div
                                        style={{ display: "flex !important" }}
                                        className="flex flex-col justify-center items-center"
                                    >
                                        <img src={imgURL}></img>
                                        <div className="flex flex-col justify-end w-[100%]">
                                            <div className="flex flex-col text-left pb-[2em] text-[0.825rem]">
                                                <span className="inline-block text-[0.825rem] font-bold">
                                                    7월 래플 이벤트
                                                </span>
                                                <div className="flex justify-between items-center mt-1">
                                                    <div>
                                                        <span>
                                                            두줄 노출 가능 최대 40자까지 입력 가능합니다. 내용을
                                                            <br />
                                                            입력해주세요!
                                                        </span>
                                                    </div>
                                                    <div className="ml-auto">
                                                        <ThemeProvider theme={theme}>
                                                            <Button
                                                                color="black"
                                                                variant="contained"
                                                                endIcon={<ArrowRightAltIcon />}
                                                            >
                                                                응모하기
                                                            </Button>
                                                        </ThemeProvider>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </Repple>
                    </div>
                </div>
                <div className="w-[80%] mx-auto pt-[4em]">
                    <img src="/banner/banner.jpg" className="w-[100%]"></img>
                </div>
                <div className="w-[80%] mx-auto">
                    <StyledTitle title="BRAND PICK" subtitle="BYSUCO" isMore="false" />
                    <div className="flex">
                        <div className="w-[50%]">
                            <img src="/brand/brand1.jpg" className="h-[100%]"></img>
                        </div>
                        <div className="flex flex-col marker:w-[50%] ml-5">
                            <div className="flex w-[4.25rem] ml-auto items-center text-[0.825rem] border-b-2 border-black">
                                <span>더보기</span>
                                <AddIcon className="ml-auto" sx={{ fontSize: "0.825rem" }} />
                            </div>
                            <div className="flex flex-col">
                                <div className="flex mt-5">
                                    <div className="w-[20%]">
                                        <img src="images/product-img.jpg" />
                                    </div>
                                    <div className="w-[80%]">
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
                                    <div className="w-[20%]">
                                        <img src="images/product-img.jpg" />
                                    </div>
                                    <div className="w-[80%]">
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
                                    <div className="w-[20%]">
                                        <img src="images/product-img.jpg" />
                                    </div>
                                    <div className="w-[80%]">
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
                    <div className="flex">
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
                                                리뷰글이 노출되는 영역입니다. 최대 두줄까지 노출됩니다. 리뷰글이
                                                노출되는 영역입니다 최대...
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
            </BrowserView>
            <MobileView>
                <div>
                    {/* 페이지 슬라이드배너 */}
                    <div>
                        <div />
                    </div>
                    {/* 슬라이드되는 Nav div*/}
                    <div>
                        <div />
                    </div>
                    {/* Free shipping 슬라이드 포커스 확대*/}
                    <div>
                        <div />
                    </div>
                    {/* 고정배너 */}
                    <div>
                        <div />
                    </div>
                    {/* forman 제품 슬라이드 */}
                    <div>
                        <div />
                    </div>
                    {/* 고정 배너 */}
                    <div>
                        <div />
                    </div>
                    {/* 래플이벤트 슬라이드 */}
                    <div>
                        <div />
                    </div>
                    {/* 고정 배너 */}
                    <div>
                        <div />
                    </div>
                    {/* Brand pick 버튼 탭*/}
                    <div>
                        <div />
                    </div>
                    {/* 고정 배너 */}
                    <div>
                        <div />
                    </div>
                    {/* 최저가 pick */}
                    <div>
                        <div />
                    </div>
                    {/* 고정 배너 */}
                    <div>
                        <div />
                    </div>
                    {/* best review 슬라이드*/}
                    <div>
                        <div />
                    </div>
                    {/* 고정 배너 */}
                    <div>
                        <div />
                    </div>
                    {/* 타임세일 슬라이드*/}
                    <div>
                        <div />
                    </div>
                    {/* bysuco 추천 기획전 슬라이드 */}
                    <div>
                        <div />
                    </div>
                    {/* 고정 배너 */}
                    <div>
                        <div />
                    </div>
                    {/* 핫 세일 */}
                    <div>
                        <div />
                    </div>
                    {/* 고정 배너 */}
                    <div>
                        <div />
                    </div>
                    {/* by you 슬라이드 */}
                    <div>
                        <div />
                    </div>
                    {/* 바이슈코 인스타그램 */}
                    <div>
                        <div />
                    </div>
                </div>
            </MobileView>
        </>
    );
};

export default mainPage;
