import Nav from "../components/nav.jsx";
import tw, { styled } from "twin.macro";
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
        <div>
            <Nav />
            <Slider {...settings}>
                <div>asdasd</div>
                <div>asdasd</div>
                <div>asdasd</div>
                <div>asdasd</div>
            </Slider>
        </div>
    );
};

export default mainPage;
