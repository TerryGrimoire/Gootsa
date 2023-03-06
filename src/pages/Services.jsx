import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import papa from "papaparse";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import image from "../assets/takeaway.png";

function Services({ helmet }) {
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
    />,
    <img src="" alt="" />,
  ];

  const menus = JSON.parse(sessionStorage.getItem("menus"));
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
  const yyyy = today.getFullYear();

  today = `${yyyy}${mm}${dd}`;

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
  return (
    <main>
      <Helmet>
        <title> {helmet.title} | Services </title>
        <link rel="canonical" href={`${helmet.href}/Services`} />
        <meta name="description" content={helmet.description} />
      </Helmet>

      <section>
        <AliceCarousel mouseTracking items={items} disableDotsControls />
      </section>
      <section className="menu_top">
        <p>
          Nos offres ne contiennent pas de protéines animales. Elles sont
          réfléchies pour allier apport énergétique essentiel et saveurs
          locales.
        </p>
        <h1 className="menu_top_h1">Au Menu</h1>
      </section>
      <section className="menu_du_jour menu">
        {menus &&
          menuDuJour.map((el) => (
            <div key={el.id}>
              <h2>{el.Plat} du jour</h2>
              <div>
                <div className="prix">
                  <h3>{el.Plat} seul</h3>
                  <p>{el.Prix.toString().replace("€", "".replace(",", "."))}</p>
                </div>
                <p>{el.Description}</p>
              </div>
              <div>
                <div className="prix">
                  <h3>Formule {el.Plat} midi</h3>
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
      <section className="menu_desserts menu">
        {menuDesserts.length > 0 && (
          <div>
            <h2>Desserts du moment</h2>
            {menuDesserts.map((el) => (
              <div key={el.id}>
                <div className="prix">
                  <h3>{el.Plat}</h3>
                  <p>{el.Prix.toString().replace("€", "".replace(",", "."))}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
      <section className="menu_boissons menu">
        {menuBoissons && (
          <div>
            <h2>Boissons</h2>
            {menuBoissons.map((el) => (
              <div key={el.id}>
                <div className="prix">
                  <h3>{el.Plat}</h3>
                  <p>{el.Prix.toString().replace("€", "".replace(",", "."))}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {menuSuivant.length > 0 && (
        <section className="menu menu_suivant">
          <h2 className="h1">Au menu</h2>
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
        </section>
      )}

      <section className="menu menu_commande">
        <h2>Commande de cari au kilo</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ut sequi
          alias provident, voluptas id cum odio eos, tempora, excepturi ea sed
          qui a fugiat deleniti dolor quaerat. Vel, quia vero labore illum eius
          adipisci optio rem doloribus beatae, harum nam voluptatem recusandae
          corporis nemo corrupti! Labore repudiandae vel neque.
        </p>
      </section>
    </main>
  );
}

export default Services;
