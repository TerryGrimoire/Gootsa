import React from "react";
import { Link } from "react-router-dom";
import dataFR from "../../../data/dataFR";
import dataRE from "../../../data/dataRE";
import background from "../../../assets/background.png";
import go from "../../../assets/go.svg";

function Image({ helmet, langue }) {
  const data = langue === "fr" ? dataFR : dataRE;
  return (
    <section className="landing_page">
      <h1>{helmet.title}</h1>
      <h2>{data[0].h2}</h2>
      <div className="home_button_container">
        <Link to="/Menu">
          <button type="button">
            {data[0].button1}
            <img src={go} alt="fleche vers la droite" />
          </button>
        </Link>{" "}
        <Link to="/Contact">
          <button type="button">
            {data[0].button2}
            <img src={go} alt="fleche vers la droite" />
          </button>
        </Link>{" "}
      </div>
      <img src={background} alt={helmet.sentence} className="background_img" />
      <div className="veil" />
    </section>
  );
}

export default Image;
