import React from "react";
import Main from "./pages/main";
import TimeSale from "./pages/timesale";
import Header from "./components/layout/header.jsx";
import Footer from "./components/layout/footer.jsx";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Nav from "./components/layout/nav";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Nav />
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route path="/timesale" element={<TimeSale />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
