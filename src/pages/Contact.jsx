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
    <div className="contact">
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

      <section className="form">
        <h2>Nous écrire</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi a, eum
          fugiat numquam labore tenetur reiciendis quaerat dolore ipsam iste.
          Nihil tempora in doloribus obcaecati.
        </p>
        <form action="submit">
          <label htmlFor="Nom">
            {" "}
            Nom
            <input type="text" />
          </label>
          <label htmlFor="Prenom">
            {" "}
            Prénom
            <input type="text" />
          </label>
          <label htmlFor="mail">
            {" "}
            Adresse e-mail
            <input type="text" />
          </label>
          <label htmlFor="Texte">
            {" "}
            Message
            <textarea name="texte" id="" cols="30" rows="10" />
          </label>
          <label htmlFor="check">
            <input type="checkbox" name="" id="" />
            J'accepte que les informations renseignées soient utilisées pour me
            contacter dans le cadre d'un démarcharge commercial (devis, offre,
            renseignement...).
          </label>

          <button type="submit">Envoyer le message</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
