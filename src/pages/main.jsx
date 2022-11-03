import React from "react";
import tw, { styled } from "twin.macro";
import { BrowserView, MobileView } from "react-device-detect";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StyledTitle from "../components/elements/StyledTitle";

const Banner_Images = [
    { imgURL: "1.jpg", imgTitle: "SKIN CARE" },
    { imgURL: "2.jpg", imgTitle: "MAKE UP" },
    { imgURL: "3.jpg", imgTitle: "BODY & HAIR" },
];

const categorys = [
    { imgURL: "category1.jpg", imgTitle: "SKIN CARE" },
    { imgURL: "category2.jpg", imgTitle: "MAKE UP" },
    { imgURL: "category3.jpg", imgTitle: "BODY & HAIR" },
];

const products = [
    {
        imgURL: "product1.jpg",
        imgTitle: "[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml",
        discount: "24",
        price: "169,900",
        exchange: 141.86,
        tags: [
            { type: "#fff", text: "소량입고" },
            { type: "red", text: "기한임박" },
            { type: "#808080", text: "무료배송" },
        ],
    },
    {
        imgURL: "product2.jpg",
        imgTitle: "[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml",
        discount: "24",
        price: "169,900",
        exchange: 141.86,
        tags: [
            { type: "#fff", text: "소량입고" },
            { type: "red", text: "기한임박" },
            { type: "#808080", text: "무료배송" },
        ],
    },
    {
        imgURL: "product3.jpg",
        imgTitle: "[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml",
        discount: "24",
        price: "169,900",
        exchange: 141.86,
        tags: [
            { type: "#fff", text: "소량입고" },
            { type: "red", text: "기한임박" },
            { type: "#808080", text: "무료배송" },
        ],
    },
    {
        imgURL: "product4.jpg",
        imgTitle: "[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml",
        discount: "24",
        price: "169,900",
        exchange: 141.86,
        tags: [
            { type: "#fff", text: "소량입고" },
            { type: "red", text: "기한임박" },
            { type: "#808080", text: "무료배송" },
        ],
    },
    {
        imgURL: "product5.jpg",
        imgTitle: "[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml",
        discount: "24",
        price: "169,900",
        exchange: 141.86,
        tags: [
            { type: "#fff", text: "소량입고" },
            { type: "red", text: "기한임박" },
            { type: "#808080", text: "무료배송" },
        ],
    },
    {
        imgURL: "product6.jpg",
        imgTitle: "[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml",
        discount: "24",
        price: "169,900",
        exchange: 141.86,
        tags: [
            { type: "#fff", text: "소량입고" },
            { type: "red", text: "기한임박" },
            { type: "#808080", text: "무료배송" },
        ],
    },
    {
        imgURL: "product7.jpg",
        imgTitle: "[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml",
        discount: "24",
        price: "169,900",
        exchange: 141.86,
        tags: [
            { type: "#fff", text: "소량입고" },
            { type: "red", text: "기한임박" },
            { type: "#808080", text: "무료배송" },
        ],
    },
    {
        imgURL: "product8.jpg",
        imgTitle: "[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml",
        discount: "24",
        price: "169,900",
        exchange: 141.86,
        tags: [
            { type: "#fff", text: "소량입고" },
            { type: "red", text: "기한임박" },
            { type: "#808080", text: "무료배송" },
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
    .slick-track {
        display: flex;
    }
    .slick-slide div {
        outline: none;
    }
    .slick-slide img {
        width: 100%;
    }
    .slick-dots {
        display: flex !important;
    }
    .slick-dots li {
        width: 100%;
        border: 2px solid #808080;
        height: unset;
        margin: 0;
    }
    .slick-dots li.slick-active {
        border-color: #000;
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
        display: flex;
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

const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1.175,
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

const mainPage = () => {
    return (
        <>
            <BrowserView>
                <Banner {...settings}>
                    {Banner_Images.map((img) => {
                        return (
                            <div>
                                <img src={`/slider/${img.imgURL}`} alt={`${img.imgTitle}`} />
                            </div>
                        );
                    })}
                </Banner>
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
                <div className="w-[80%] mx-auto">
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
                                                <div className="flex justify-between content-end w-[50%]">
                                                    <span className="text-green-500">{img.discount}%</span>
                                                    <span className="">{img.price}원</span>
                                                    <span className="text-gray-300 text-[0.625rem] flex items-end">
                                                        ({img.exchange})
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex justify-between w-[60%]">
                                                {img.tags.map((tag) => {
                                                    return (
                                                        <span
                                                            style={{ backgroundColor: `${tag.type}` }}
                                                            className={"rounded-md " + tag.type == "#fff" ? "" : ""}
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
