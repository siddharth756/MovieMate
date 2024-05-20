import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>MovieMate</h1>

      <div className="navbar_links">
        <a href="#popular">🔥 Popular</a>
        <a href="#top_rated">✨ Top Rated</a>
        <a href="#upcoming">🎉 Upcoming</a>
      </div>
    </nav>
  );
};

export default Navbar;
