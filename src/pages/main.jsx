import React from "react";
import Header from "../components/layout/header.jsx";
import Nav from "../components/layout/nav.jsx";
import Footer from "../components/layout/footer.jsx";
import Timesale from "../components/timesale.jsx";

const page = () => {
    return (
        <div>
            <Header />
            <Nav />
            <Timesale />
            <Footer />
        </div>
    );
};

export default page;
