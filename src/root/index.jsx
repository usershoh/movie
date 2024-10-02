import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Header from "../components/header";

const Root = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default Root;
