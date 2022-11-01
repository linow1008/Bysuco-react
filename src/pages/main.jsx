import React from "react";
import Nav from "../components/layout/nav.jsx";
import tw, { styled } from "twin.macro";
import { BrowserView, MobileView } from "react-device-detect";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner_Images = ["1.jpg", "2.jpg", "3.jpg"];
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

const Banner_dot = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
    & {
        & > div {
        }
        & > div img {
            border-radius: 50%;
        }
        & > div span {
        }
    }
`;

const settings = {
    customPaging: (i) => {
        return (
            <Banner_dot>
                <div>
                    <img src={`/category/category${i + 1}.jpg`} />
                </div>
                <div>
                    <span>asdasd</span>
                </div>
            </Banner_dot>
        );
    },
    className: "slider variable-width",
    dots: true,
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
                <Nav />
                <Banner {...settings}>
                    {Banner_Images.map((img) => {
                        return (
                            <div>
                                <img src={`/slider/${img}`} />
                            </div>
                        );
                    })}
                </Banner>
            </BrowserView>
            <MobileView>
                <div>
                    <span>asdasd</span>
                </div>
            </MobileView>
        </>
    );
};

export default mainPage;
