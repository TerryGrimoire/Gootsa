import React from "react";
import { Link } from "react-router-dom";
import croix from "../../assets/fermer.png";

function Nav({ setOpenBurger, setLangue }) {
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
          Accueil
        </button>
      </Link>
      <Link to="/Menu">
        <button type="button" onClick={() => setOpenBurger(false)}>
          Menu
        </button>
      </Link>
      <Link to="/Contact">
        <button type="button" onClick={() => setOpenBurger(false)}>
          Accès / Contact
        </button>
      </Link>
      <div className="languages mobile">
        <p>Langue :</p>
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
