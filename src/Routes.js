import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Unsubscribe from "./pages/Unsubscribe";
import Home from "./pages/Home";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/unsubscribe/:token" element={<Unsubscribe />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
