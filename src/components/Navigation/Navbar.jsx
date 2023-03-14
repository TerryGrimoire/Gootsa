import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar({ langue }) {
  const location = useLocation();
  const loc = location.pathname;
  return (
    <nav className="flex justify-between navbar">
      <Link to="/" className={loc === "/" ? "blue" : ""}>
        {langue === "fr" ? "Accueil" : "Lakèy"}
      </Link>
      <Link to="/Menu" className={loc === "/Menu" ? "blue" : ""}>
        {langue === "fr" ? "Menu" : "Nout Menu"}
      </Link>
      <Link to="/Contact" className={loc === "/Contact" ? "blue" : ""}>
        {langue === "fr" ? "Accès / Contact" : "Aksé / Kontakt"}
      </Link>
    </nav>
  );
}

export default Navbar;
