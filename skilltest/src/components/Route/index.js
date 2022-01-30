import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "../../pages/Home";
import Register from "../../pages/Register";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<Register />} path="/register" />
      </Routes>
    </BrowserRouter>
  );
}
