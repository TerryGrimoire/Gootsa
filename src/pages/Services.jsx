import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import papa from "papaparse";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import image from "../assets/takeaway.png";
import feuille from "../assets/feuille.png";

import dataFR from "../data/dataFR";
import dataRE from "../data/dataRE";

function Services({ helmet, langue }) {
  const data = langue === "fr" ? dataFR : dataRE;

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
    window.scrollTo(0, 0);
    if (JSON.parse(sessionStorage.getItem("menus")) === null) {
      fetch(import.meta.env.VITE_GOOGLE_MENUS)
        .then((result) => result.text())
        .then((text) => papa.parse(text))
        .then((data2) => prepareData2(data2.data));
    }
  }, []);

  const items = [
    <img
      src={image}
      alt="fond d'écran avec un restaurant et de la nourriture"
      className="menu_img"
    />,
    <img src={image} alt="fbhhh" className="menu_img" />,
  ];

  const menus = JSON.parse(sessionStorage.getItem("menus"));
  let today = new Date();
  let todaay = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
  const yyyy = today.getFullYear();

  today = `${yyyy}${mm}${dd}`;
  todaay = `${dd}/${mm}`;

  const menuDuJour = menus.filter(
    (menu) =>
      menu.Type === "Repas Végétarien" &&
      menu.Debut !== undefined &&
      menu.Debut !== "Debut" &&
      menu.Debut.split(" ").pop().split("/").reverse().join("") < today &&
      menu.Fin.split(" ").pop().split("/").reverse().join("") > today
  );
  const menuSuivant = menus.filter(
    (menu) =>
      menu.Type === "Repas Végétarien" &&
      menu.Debut !== undefined &&
      menu.Debut !== "Debut" &&
      menu.Debut.split(" ").pop().split("/").reverse().join("") > today
  );

  const menuDesserts = menus.filter(
    (menu) => menu.Type === "Dessert" && menu.Debut !== undefined
  );

  const menuBoissons = menus.filter(
    (menu) => menu.Type === "Boissons" && menu.Debut !== undefined
  );

  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };
  return (
    <main>
      <Helmet>
        <title> {helmet.title} | Services </title>
        <link rel="canonical" href={`${helmet.href}/Services`} />
        <meta name="description" content={helmet.description} />
      </Helmet>

      <section className="menu_top0">
        <AliceCarousel
          mouseTracking
          items={items}
          disableDotsControls
          responsive={responsive}
        />
        <div className="p_container">
          <img src={feuille} alt="feuille marron" className="desktop" />
          <p>{data[6].p1}</p>
        </div>
      </section>
      <section className="menu_top">
        <h1 className="menu_top_h1 mobile">{data[6].p22}</h1>
        <h1 className="menu_top_h1 desktop">
          {data[6].p2} {todaay}
        </h1>
      </section>
      <section className="menu_du_jour menu">
        {menus &&
          menuDuJour.map((el) => (
            <div key={el.id}>
              <h2>
                {el.Plat} {data[6].p3}
              </h2>
              <div>
                <div className="prix">
                  <h3>
                    {el.Plat} {data[6].p4}
                  </h3>
                  <p>{el.Prix.toString().replace("€", "".replace(",", "."))}</p>
                </div>
                <p>{el.Description}</p>
              </div>
              <div>
                <div className="prix">
                  <h3>
                    {data[6].p5} {el.Plat} midi
                  </h3>
                  <p>
                    {el.PrixFormule.toString().replace(
                      "€",
                      "".replace(",", ".")
                    )}
                  </p>
                </div>
                <p>{el.Formule}</p>
              </div>
            </div>
          ))}
      </section>
      <div className="menu_container_boissons">
        <section className="menu_desserts menu">
          {menuDesserts.length > 0 && (
            <div>
              <h2>{data[6].p7}</h2>
              {menuDesserts.map((el) => (
                <div key={el.id}>
                  <div className="prix">
                    <h3>{el.Plat}</h3>
                    <p>
                      {el.Prix.toString().replace("€", "".replace(",", "."))}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
        <section className="menu_boissons menu">
          {menuBoissons && (
            <div>
              <h2>{data[6].p8}</h2>
              {menuBoissons.map((el) => (
                <div key={el.id}>
                  <div className="prix">
                    <h3>{el.Plat}</h3>
                    <p>
                      {el.Prix.toString().replace("€", "".replace(",", "."))}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      {menuSuivant.length > 0 && (
        <section className="menu menu_suivant">
          <h2 className="h1 mobile">{data[6].p9}</h2>
          <h2 className="h1 desktop">{data[6].p9}</h2>
          <div>
            {menuSuivant.map((el) => (
              <div key={el.id}>
                <h2>
                  {(el.Debut.charAt(0).toUpperCase() + el.Debut.slice(1))
                    .replace("/2023", "")
                    .replace("/2024", "")
                    .replace("/2025", "")
                    .replace("/2026", "")
                    .replace("/2027", "")
                    .replace("/2028", "")
                    .replace("/2029", "")
                    .replace("/2030", "")}
                </h2>
                <div>
                  <h3>{el.Plat}</h3>
                  <p>{el.Description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="menu menu_commande">
        <h2>{data[6].p10}</h2>
        <p>{data[6].p11}</p>
      </section>
    </main>
  );
}

export default Services;
