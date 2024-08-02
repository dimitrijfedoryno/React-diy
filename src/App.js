// src/App.js
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LiquidCalculator from "./pages/Liquid";
import Spiralky from "./pages/Spiralky";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { trackPageView } from "./analytics";

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    console.log("Tracking page view:", location.pathname + location.search);
    trackPageView(location.pathname + location.search);
  }, [location]);

  return (
    <div className="flex-grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/liquid" element={<LiquidCalculator />} />
        <Route path="/spiralky" element={<Spiralky />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <AppContent />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
