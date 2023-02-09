import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Image from "../components/Home/LandingPage/Image";

export default function Home({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <Helmet>
        <title> {helmet.title} | Accueil </title>
        <link rel="canonical" href={helmet.href} />
        <meta name="description" content={helmet.description} />
      </Helmet>

      {/*

        Options here :
        -  Main image Style - Landing page like Charles Portefolio (main image + title in the middle) 
        -  Main video Style - Landing page like Barber 902 (main vidéo + title in the middle)
        -  Animation  Style - Landing page like ASMK (main image animated + title in the middle)
 
        */}

      <Image helmet={helmet} />
      <section className="section formules">
        <h2>Nos formules</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
          aliquid vel blanditiis. Iste earum tempore, corrupti distinctio nam
          dignissimos incidunt eveniet in tempora libero!
        </p>
      </section>
    </main>
  );
}
