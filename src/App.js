// This is default import
import React from "react";
// This is named import
import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import TextForms from "./components/TextForms/TextForms";
import About from "./components/About/About";
// import Alert from "./components/Alert/Alert";

function App() {
  return (
    <>
      <Navbar title="TEXT_UTIL" about_title="AboutUs" />
      {/* <Alert/> */}
      <div className="container my-4">
        <Routes>
          <Route path="/" element={<TextForms TextForm_Title="Enter a text to do following operations"/>} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </>

  );
}

export default App;
