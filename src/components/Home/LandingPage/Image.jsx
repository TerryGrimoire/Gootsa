import React from "react";
import dataFR from "../../../data/dataFR";
import dataRE from "../../../data/dataRE";
import background from "../../../assets/background.png";
import go from "../../../assets/go.svg"

function Image({ helmet, langue }) {
  const data = langue === "fr"? dataFR : dataRE;
  return (
    <section className="landing_page">
      <p className="banniere">
        Ne ratez pas la nocture de ce vendredi, jusqu'à 21h ! TradiBon et riz chauffé au menu.
      </p>
      <h1>{helmet.title}</h1>
      <h2>{data[0].h2}</h2>
      <div className="home_button_container">
        <button type="button">{data[0].button1}<img src={go} alt="fleche vers la droite" /></button>
        <button type="button">{data[0].button2}<img src={go} alt="fleche vers la droite" /></button>
      </div>
      <img src={background} alt={helmet.sentence} className="background_img" />
      <div className="veil" />
    </section>
  );
}

export default Image;
