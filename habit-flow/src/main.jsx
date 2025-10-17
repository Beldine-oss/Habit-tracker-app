import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import HowItWorks from "./pages/HowItWorks.jsx";
import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
