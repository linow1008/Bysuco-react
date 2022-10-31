import React from "react";
import Main from "./pages/main";
import Main2 from "./pages/main2";
import Header from "./components/layout/header.jsx";
import Footer from "./components/layout/footer.jsx";
import MoFooter from "./components/layout/mo-footer";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Header />
            {/* <Routes>
                <Route path="/" element={<Main />} />
            </Routes> */}
            <Main2 />
            <MoFooter />
        </BrowserRouter>
    );
}

export default App;
