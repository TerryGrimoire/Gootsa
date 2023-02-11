import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex-col center padding1 footer ">
      <p>Suivez-nous sur les réseaux :</p>
      <div className="flex">
        <Link to="/Mentions">
          <p className="small">Mentions Légales</p>
        </Link>
        <Link to="/Mentions">
          <p className="small">Politique de confidentialité</p>
        </Link>
      </div>
      <p>Site développé par le Grimoire Numérique. Design par Jayce Salez.</p>
      <p>Réalisé avec le soutien de la Région Réunion</p>
    </footer>
  );
}

export default Footer;
