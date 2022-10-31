import React from "react";
import Main from "./pages/main";
import Header from "./components/layout/header.jsx";
import Footer from "./components/layout/footer.jsx";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

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
