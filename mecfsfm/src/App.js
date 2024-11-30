import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Support from "./pages/Support";
import ZoomChat from "./pages/ZoomChat";
import CafeClubs from "./pages/CafeClubs";
import Conditions from "./pages/Conditions";
import Awareness from "./pages/Awareness";
import FacebookGroup from "./pages/FacebookGroup";
import SelfHelpProgram from "./pages/SelfHelpProgram";
import Contact from "./pages/Contact";

const App = () => {
    return (
        <Router>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/zoom-chat" element={<ZoomChat />} />
                    <Route path="/cafe-clubs" element={<CafeClubs />} />
                    <Route path="/conditions" element={<Conditions />} />
                    <Route path="/awareness" element={<Awareness />} />
                    <Route path="/facebook-group" element={<FacebookGroup />} />
                    <Route
                        path="/self-help-program"
                        element={<SelfHelpProgram />}
                    />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
