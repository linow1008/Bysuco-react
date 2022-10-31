import React from "react";
import Header from "../components/layout/header.jsx";
import Nav from "../components/layout/nav.jsx";
import Footer from "../components/layout/footer.jsx";
import StyledTitle from "../components/elements/StyledTitle.jsx";

const page = () => {
    return (
        <div>
            <Header />
            <Nav />
            <StyledTitle title="타임세일" subtitle="TIME SALE" />
            <Footer />
        </div>
    );
};

export default page;
