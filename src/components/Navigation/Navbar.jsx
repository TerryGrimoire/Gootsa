import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between navbar">
      <Link to="/">Accueil</Link>
      <Link to="/Menu">Menu</Link>
      <Link to="/Contact">Accès / Contact</Link>
    </nav>
  );
}

export default Navbar;
