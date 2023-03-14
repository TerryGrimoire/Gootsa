import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import papa from "papaparse";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Image from "../components/Home/LandingPage/Image";
import Propos from "../components/Home/Propos";
import InfosPratiques from "../components/Home/InfosPratiques";

import dataFR from "../data/dataFR";
import dataRE from "../data/dataRE";

import vegebon from "../assets/vegebon.png";
import cafet from "../assets/cafet1.png";

export default function Home({ helmet, langue }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = langue === "fr" ? dataFR : dataRE;
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <div className="formules_explications">
      <div>
        <h3>VégéBon</h3>
        <h4>{data[1].vegeBon}</h4>
        <img
          src={vegebon}
          onDragStart={handleDragStart}
          alt="presentation"
          className="carousel_home_img_gootsa"
        />
        <p className="p">{data[1].p2}</p>
      </div>
    </div>,
    <div className="formules_explications">
      <div>
        <h3>TradiBon</h3>
        <h4>{data[1].tradiBon}</h4>
        <img
          src={vegebon}
          onDragStart={handleDragStart}
          alt="presentation"
          className="carousel_home_img_gootsa"
        />
        <p className="p">{data[1].p3}</p>
      </div>
    </div>,
  ];

  const prepareData2 = (data2) => {
    // j correspond aux lignes de A à ZZZ sur fichier Excel
    // index
    // line correspond à
    // index correspond à
    // key correspond à

    let obj = {};
    const json = data2.map((line, index) => {
      if (index > 8) {
        data2[9].forEach((key, j) => {
          if (line[j] !== "" && key !== "" && key) {
            obj = { ...obj, [key]: line[j] };
          }
        });
      }
      return obj;
    });

    json.shift();
    sessionStorage.setItem("menus", JSON.stringify([...new Set(json)]));
  };

  useEffect(() => {
    fetch(import.meta.env.VITE_GOOGLE_MENUS)
      .then((result) => result.text())
      .then((text) => papa.parse(text))
      .then((data2) => prepareData2(data2.data));
  }, []);

  const responsive = {
    0: { items: 1 },
    568: { items: 2.5 },
    1024: { items: 2.5 },
  };

  return (
    <main>
      <Helmet>
        <title> {helmet.title} | Accueil </title>
        <link rel="canonical" href={helmet.href} />
        <meta name="description" content={helmet.description} />
      </Helmet>

      <Image helmet={helmet} langue={langue} />
      <section className="section formules">
        <h2>{data[1].h2}</h2>
        <p>{data[1].p1}</p>
      </section>
      <section className="home_carousel_container_gootsa">
        <AliceCarousel
          mouseTracking
          items={items}
          disableDotsControls
          responsive={responsive}
        />
      </section>
      <section className="section">
        <h2>{data[2][0].h2}</h2>
        <Propos index1="2" index2="0" langue={langue} />
        <Propos index1="2" index2="1" langue={langue} />
      </section>
      <section className="section infosPratiques_container">
        <h2>{data[3].h2}</h2>
        <img src={cafet} alt="intérieur de la cafeteria de Gootsa" />
        <InfosPratiques langue={langue} />
      </section>
      <section className="InfosPratiques marron paiement">
        <img src={data[3].img4} alt="carte bancaire acceptées" />
        <p>
          <span>{data[3].p7}</span> {data[3].p8}
        </p>
      </section>
    </main>
  );
}
