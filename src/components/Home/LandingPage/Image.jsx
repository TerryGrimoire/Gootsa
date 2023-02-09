import React from "react";
import background from "../../../assets/background.png";
import go from "../../../assets/go.svg"

function Image({ helmet }) {
  /* Pour utiliser ce composant, suivre les étapes suivantes :

    1/ Remplacer background.png par l'image souhaitée dans Assets
    2/ Remplir landingData
    3/ Importer Image dans le composant souhaitée

    Depuis n'importe quelle page, on peut importer Image de la façon suivante :

    import Image from "../components/Home/LandingPage/Image"
    <Image title={helmet.title} />

  */

  const landingData = {
    h2: "Belle phrase d'accroche",
    alt: "decription de l'image",
  };
  return (
    <section className="landing_page relative">
      <h1>{helmet.title}</h1>
      <h2>{helmet.sentence}</h2>
      <div className="home_button_container">
        <button type="button">Découvrir le menu <img src={go} alt="fleche vers la droite" /></button>
        <button type="button">Nous trouver <img src={go} alt="fleche vers la droite" /></button>
      </div>
      <img src={background} alt={helmet.sentence} className="background_img" />
      <div className="veil" />
    </section>
  );
}

export default Image;
