import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./components/Common/Header";
import AboutUsPage from "./pages/AboutUsPage";
import react from "../src/styles/Style.module.css"
function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
};

const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/Home" element={<HomePage />} />
        <Route path="/AboutUs" element={<AboutUsPage />} />
      </Routes>
    </>
  )
}

export default App;
