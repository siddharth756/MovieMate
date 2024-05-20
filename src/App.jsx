import React from "react";
import "./App.css";
import Navbar from "./componenets/Navbar/Navbar";
import MovieList from "./componenets/MovieList/MovieList";

function App() {
  return (
    <div className="app">
      <Navbar />
      <MovieList type="popular" title="Popular" />
      <MovieList type="top_rated" title="Top Rated " />
      <MovieList type="upcoming" title="UpComing" />
    </div>
  );
}

export default App;
