import React from "react";
import { Link } from "react-router-dom";
import croix from "../../assets/fermer.png";

function Nav({ setOpenBurger, setLangue, langue }) {
  return (
    <nav className="flex-col openBurger justify-between">
      <button
        type="button"
        onClick={() => setOpenBurger(false)}
        className="croix"
      >
        <img src={croix} alt="croix pour fermer la navigation sur la page" />
      </button>
      <Link to="/">
        <button type="button" onClick={() => setOpenBurger(false)}>
          {langue === "fr" ? "Accueil" : "Lakèy"}
        </button>
      </Link>
      <Link to="/Menu">
        <button type="button" onClick={() => setOpenBurger(false)}>
          {langue === "fr" ? "Menu" : "Nout Menu"}
        </button>
      </Link>
      <Link to="/Contact">
        <button type="button" onClick={() => setOpenBurger(false)}>
          {langue === "fr" ? "Accès / Contact" : "Aksé / Kontakt"}
        </button>
      </Link>
      <div className="languages mobile">
        <p> {langue === "fr" ? "Langue :" : "Langkozé :"} </p>
        <button type="button" onClick={() => setLangue("re")}>
          RE
        </button>
        <button type="button" onClick={() => setLangue("fr")}>
          FR
        </button>
      </div>
    </nav>
  );
}

export default Nav;
