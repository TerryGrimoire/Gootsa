import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../Navigation/Nav";
import Navbar from "../Navigation/Navbar";
import burger from "../../assets/menu.svg";
import logo from "../../assets/logo.png";

function Burger({ helmet, langue, setLangue }) {
  const [openBurger, setOpenBurger] = useState(false);

  return (
    <header>
      <Link to="/">
        <img src={logo} alt={`logo de ${helmet.title}`} className="logo" />
      </Link>
      <select
          name="language"
          id="language"
          className={langue === "fr" ? "drapeau_fr" : "drapeau_re"}
          onChange={(e) => setLangue(e.target.value)}
        >
          <option value="fr">FR</option>
          <option value="re">RE</option>
        </select>
      <button
        type="button"
        onClick={() => setOpenBurger(!openBurger)}
        className="mobile no_button burger"
      >
        <img
          src={burger}
          alt="menu de navigation sur le site internet - trois lignes de navigation"
        />
      </button>
      {openBurger && <Nav setOpenBurger={setOpenBurger} />}
      <div className="desktop">
        <Navbar setOpenBurger={setOpenBurger} />
      </div>
    </header>
  );
}

export default Burger;
