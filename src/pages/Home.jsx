import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Image from "../components/Home/LandingPage/Image";
import dataFR from "../data/dataFR";
import dataRE from "../data/dataRE";

export default function Home({ helmet, langue }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = langue === "fr"? dataFR : dataRE;
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
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
          aliquid vel blanditiis. Iste earum tempore, corrupti distinctio nam
          dignissimos incidunt eveniet in tempora libero!
        </p>
      </section>
    </main>
  );
}
