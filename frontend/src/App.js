import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AboutUs from "./pages/AboutUs"; // Importing About Us page
import ContactUs from "./pages/ContactUs"; // Importing Contact Us page
import Features from "./pages/Features"; // Importing Features page
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about-us" element={<AboutUs />} /> {/* New route */}
        <Route path="/contact-us" element={<ContactUs />} /> {/* New route */}
        <Route path="/features" element={<Features />} /> {/* New route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

