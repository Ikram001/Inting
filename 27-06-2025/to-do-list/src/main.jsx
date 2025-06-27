import React from "react";
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import FetchDemo from "./useFetchDemo.jsx";
import Navbar from "./Navbar";
import "./index.css";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/fetch" element={<FetchDemo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
