import React from "react";
import Main from "./pages/main";
import TimeSale from "./pages/timeSale";
import Header from "./components/layout/header.jsx";
import Footer from "./components/layout/footer.jsx";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Nav from "./components/layout/nav";
import Shop from "./pages/shop";
import Brand from "./pages/brand";
import Rapple from "./pages/rapple";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Nav />
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route path="/timesale" element={<TimeSale />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/brand" element={<Brand />} />
                <Route path="/rapple" element={<Rapple />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
