import React from "react";
import Nav from "../components/layout/nav.jsx";
import tw, { styled } from "twin.macro";
import { BrowserView, MobileView } from "react-device-detect";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FullWidthTabs } from "../components/elements/StyledButton.jsx";
import StyledTitle from "../components/elements/StyledTitle";
import Pagination from "../components/elements/pagination.jsx";

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

const Banner = styled(Slider)`
    .slick-track {
        display: flex;
    }
    .slick-slide div {
        outline: none;
    }
    .slick-slide img {
        width: 100%;
        height: 400px;
    }
    .slick-dots {
        position: unset;
        bottom: unset;
    }
    .slick-dots li {
        width: 100px;
        height: 100px;
    }
`;

const Category = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    width: 150px;
    & {
        a {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 150px;
            & > div {
            }
            & > div img {
                border-radius: 50%;
            }
            & > div span {
            }
        }
    }
`;

const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    variableWidth: true,
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
