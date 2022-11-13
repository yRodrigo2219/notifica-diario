import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Unsubscribe from "./pages/Unsubscribe";
import Home from "./pages/Home";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";

export default function AppRoutes() {
  return (
    <BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/unsubscribe/:token" element={<Unsubscribe />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
