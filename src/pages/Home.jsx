import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from "../components/Home/LandingPage/Image";
import Propos from "../components/Home/Propos";

import dataFR from "../data/dataFR";
import dataRE from "../data/dataRE";

import vegebon from "../assets/vegebon.png";

export default function Home({ helmet, langue }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = langue === "fr"? dataFR : dataRE;
  const handleDragStart = (e) => e.preventDefault();

const items = [
  <div className="formules_explications">
    <div>
    <h3>VégéBon</h3>
    <h4>le bowl froid</h4>
    <img src={vegebon} onDragStart={handleDragStart} role="presentation" className="carousel_home_img_gootsa" />
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus cum inventore culpa quas repellat accusamus, omnis odit recusandae nostrum? Fugiat veritatis totam reprehenderit. Quaerat sed mollitia vitae, dolor nobis pariatur deserunt facilis id esse ex obcaecati et? Omnis, porro voluptatem doloremque quasi nemo natus dolorum hic ad, quo, ab maiores.</p>
    </div>
  </div>,
  <div className="formules_explications">
    <div>
  <h3>TradiBon</h3>
  <h4>le bowl froid</h4>
  <img src={vegebon} onDragStart={handleDragStart} role="presentation" className="carousel_home_img_gootsa" />
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus cum inventore culpa quas repellat accusamus, omnis odit recusandae nostrum? Fugiat veritatis totam reprehenderit. Quaerat sed mollitia vitae, dolor nobis pariatur deserunt facilis id esse ex obcaecati et? Omnis, porro voluptatem doloremque quasi nemo natus dolorum hic ad, quo, ab maiores.</p>
</div></div>

];
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
      <section className="home_carousel_container_gootsa">
      <AliceCarousel mouseTracking items={items} disableDotsControls  />

      </section>
      <section>
      <h2>{data[2][0].h2}</h2>
      <Propos index1="2" index2="0" langue={langue} />
     <Propos index1="2" index2="1" langue={langue} />
      </section>
     
    </main>
  );
}
