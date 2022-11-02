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
    { imgURL: "product1.jpg", imgTitle: "SKIN CARE" },
    { imgURL: "product2.jpg", imgTitle: "MAKE UP" },
    { imgURL: "product3.jpg", imgTitle: "BODY & HAIR" },
    { imgURL: "product4.jpg", imgTitle: "BODY & HAIR" },
    { imgURL: "product5.jpg", imgTitle: "BODY & HAIR" },
    { imgURL: "product6.jpg", imgTitle: "BODY & HAIR" },
    { imgURL: "product7.jpg", imgTitle: "BODY & HAIR" },
    { imgURL: "product8.jpg", imgTitle: "BODY & HAIR" },
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
        // height: 400px;
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
    .slick-track {
        display: flex;
    }
    .slick-slide div {
        outline: none;
    }
    .slick-slide img {
        width: 100%;
        // height: 400px;
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
                <a></a>
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
                            return (
                                <div className="ease-linear duration-300 hover:scale-y-150">
                                    <img src={`/product/${img.imgURL}`} alt={`${img.imgTitle}`} />
                                </div>
                            );
                        })}
                    </Product>
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

export default mainPage;
