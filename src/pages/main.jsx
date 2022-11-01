import React from "react";
import Header from "../components/layout/header.jsx";
import Nav from "../components/layout/nav.jsx";
import Footer from "../components/layout/footer.jsx";
import StyledTitle from "../components/elements/StyledTitle.jsx";
// import Nav from "../components/nav.jsx";
import tw, { styled } from "twin.macro";
import { BrowserView, MobileView } from "react-device-detect";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const banner = styled(Slider)``;

const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
};

const mainPage = () => {
    return (
        <>
            <BrowserView>
                <Nav />
                <Slider {...settings}>
                    <div>asdasd</div>
                    <div>asdasd</div>
                    <div>asdasd</div>
                    <div>asdasd</div>
                </Slider>
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
