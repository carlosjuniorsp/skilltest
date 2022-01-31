import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "../../pages/Home";
import Form from "../../pages/Form";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<Form />} path="/register" />
        <Route element={<Form />} path="/form/:edit/:id" />
      </Routes>
    </BrowserRouter>
  );
}
