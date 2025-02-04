import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import NotFoundPage from "./pages/NotFoundPage";
import PrizePage from "./pages/PrizePage";
import JoinUSPage from "./pages/JoinUsPage";
import QnAPage from "./pages/QnAPage";
import QuestionFormPage from "./pages/QuestionFormPage";
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
        <Route path="/Prize" element={<PrizePage />} />
        <Route path="/JoinUs" element={<JoinUSPage />} />
        <Route path="/QnA" element={<QnAPage />} />
        <Route path="/QuestionForm" element={<QuestionFormPage />} />
        <Route path="/NotFound" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App;
