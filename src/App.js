import React from "react";
import Header from "./components/header.jsx";
import Nav from "./components/nav.jsx";
import Footer from "./components/footer.jsx";
import StyledButton from "./components/elements/button.jsx";

function App() {
    return (
        <div>
            <Header />
            <Nav />
            <StyledButton primary>hihihihih</StyledButton>
            <Footer />
        </div>
    );
}

export default App;
