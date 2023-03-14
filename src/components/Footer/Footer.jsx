import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import region from "../../assets/region.png";

import dataFR from "../../data/dataFR";
import dataRE from "../../data/dataRE";

function Footer({ setLangue, langue }) {
  const data = langue === "fr" ? dataFR : dataRE;
  return (
    <footer className="footer">
      <img src={logo} alt="logo de Gootsa" />
      <div className="reseaux_sociaux">
        <small>{data[4].p1}</small>
        <a
          target="_blank"
          href="https://www.facebook.com/GootsaTawar"
          rel="noreferrer"
        >
          {" "}
          <img src={facebook} alt="Logo de Facebook" />{" "}
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/t_gootsa/"
          rel="noreferrer"
        >
          {" "}
          <img src={instagram} alt="Logo de Instagram" />{" "}
        </a>
      </div>
      <div className="mentions_container">
        <Link to="/Mentions">
          <small className="small">{data[4].p2}</small>
        </Link>
        <Link to="/Mentions">
          <small className="small">{data[4].p3}</small>
        </Link>
      </div>
      <small className="reference">
        {data[4].p4}{" "}
        <a
          target="_blank"
          href="https://grimoire-numerique.re/"
          rel="noreferrer"
        >
          Grimoire Numérique
        </a>
        . {data[4].p5}{" "}
        <a target="_blank" href="https://www.jayce.re/" rel="noreferrer">
          Jayce Salez
        </a>
        .
      </small>
      <div className="languages mobile">
        <small>Langue :</small>
        <button type="button" onClick={() => setLangue("re")}>
          RE
        </button>
        <button type="button" onClick={() => setLangue("fr")}>
          FR
        </button>
      </div>
      <small>{data[4].p6}</small>
      <img src={region} alt="Logo Region Réunion" className="region" />
    </footer>
  );
}

export default Footer;
