import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import HowItWorks from "./pages/HowItWorks.jsx";
import CalendarView from "./pages/CalendarView.jsx";
import NavBar from "./components/NavBar.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/calendar" element={<CalendarView />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
