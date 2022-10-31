import React from "react";
import Main from "./pages/main";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
