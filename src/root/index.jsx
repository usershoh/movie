import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Header from "../components/header";
import MovieListCard from "../pages/movieListDetals";

const Root = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards/:id" element={<MovieListCard />} />
      </Routes>
    </>
  );
};

export default Root;
