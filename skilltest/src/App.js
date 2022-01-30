import React from "react";
import "./App.css";

import Routers from "./components/Route/";
import Menu from "./pages/Menu";

const App = () => {
  return (
    <>
      <Menu />
      <Routers />
    </>
  );
};
export default App;
