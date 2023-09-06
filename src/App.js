import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Coin from "./pages/Coin/Coin";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:id" element={<Coin />} />
      </Routes>
    </>
  );
}

export default App;
