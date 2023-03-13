import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../Navigation/Nav";
import Navbar from "../Navigation/Navbar";
import burger from "../../assets/menu.svg";
import logo from "../../assets/logo.png";
import precommande from "../../assets/precommande.svg";

function Burger({ helmet, setLangue }) {
  const [openBurger, setOpenBurger] = useState(false);

  return (
    <header>
      <Link to="/">
        <img src={logo} alt={`logo de ${helmet.title}`} className="logo" />
      </Link>
      <div className="desktop">
        <Navbar setOpenBurger={setOpenBurger} />
      </div>
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
      {openBurger && (
        <Nav setOpenBurger={setOpenBurger} setLangue={setLangue} />
      )}
      <div className="desktop precommande">
        <img src={precommande} alt="icone petit telephone" />
        <p>
          <span>Précommandez</span> au{" "}
          <a href="tel:+262693770219">0693770219</a>
        </p>
      </div>
    </header>
  );
}

export default Burger;
