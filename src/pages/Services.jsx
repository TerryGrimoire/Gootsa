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
          if (line[j] !== "" && key !== "") {
            obj = { ...obj, [key]: line[j] };
          }
        });
      }
      return obj;
    });

    json.shift();
    sessionStorage.setItem(
      "menus",
      JSON.stringify([...new Set(json.distinct())])
    );
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

  console.log(today);
  console.log(menus);
  console.log(menus[2].Debut.split(" ").pop().split("/").reverse().join(""));

  return (
    <div>
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
        <h1>Au Menu</h1>
      </section>
      <section className="menu_main">
        {menus &&
          menus
            .filter(
              (menu) => menu.Type !== "Boissons" && menu.Type !== "Dessert"
            )
            .map((el) => (
              <div key={el.id}>
                <h2>{el.Plat}</h2>
                <p>{el.Debut}</p>
              </div>
            ))}
      </section>
    </div>
  );
}

export default Services;
