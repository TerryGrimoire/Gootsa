import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const loc = location.pathname;
  return (
    <nav className="flex justify-between navbar">
      <Link to="/" className={loc === "/" ? "blue" : ""}>
        Accueil
      </Link>
      <Link to="/Menu" className={loc === "/Menu" ? "blue" : ""}>
        Menu
      </Link>
      <Link to="/Contact" className={loc === "/Contact" ? "blue" : ""}>
        Accès / Contact
      </Link>
    </nav>
  );
}

export default Navbar;
