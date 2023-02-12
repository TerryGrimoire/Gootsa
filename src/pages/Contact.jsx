import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import InfosPratiques from "../components/Home/InfosPratiques";

import dataFR from "../data/dataFR";
import dataRE from "../data/dataRE";

import cafet from "../assets/cafet.png";

function Contact({ helmet, langue }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = langue === "fr" ? dataFR : dataRE;

  return (
    <div className="flex flex-col align-center">
      <Helmet>
        <title> {helmet.title} | Contact </title>
        <link rel="canonical" href={`${helmet.href}/Services`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <section className="section contact">
        <img src={cafet} alt="intérieur de la cafeteria de Gootsa" />
        <h1>{data[5].h1}</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14905.392366338263!2d55.2979767!3d-20.9385318!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2182897c8fd09843%3A0xe9feb9abb74ca5f8!2sGootsa%20La%20Kfet!5e0!3m2!1sfr!2sfr!4v1676194849064!5m2!1sfr!2sfr"
          title="gootsa google maps"
        />
        <InfosPratiques langue={langue} />
      </section>
      <section className="InfosPratiques marron paiement">
        <div className="paiement">
          <img src={data[3].img4} alt="carte bancaire acceptées" />
          <p>
            <span>{data[3].p7}</span> {data[3].p8}
          </p>
        </div>
      </section>
    </div>
  );
}

export default Contact;
