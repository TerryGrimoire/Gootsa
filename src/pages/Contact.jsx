/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InfosPratiques from "../components/Home/InfosPratiques";

import dataFR from "../data/dataFR";
import dataRE from "../data/dataRE";

import cafet1 from "../assets/cafet1.png";
import cafet2 from "../assets/cafet2.png";
import cafet3 from "../assets/cafet3.png";

function Contact({ helmet, langue }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = langue === "fr" ? dataFR : dataRE;
  const notify = () =>
    toast.success("Votre email a bien été envoyé", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const templateID = import.meta.env.VITE_TEMPLATE;
  const publicKey = import.meta.env.VITE_EMAILJS;

  const onSubmit = (dataForm) => {
    const FormData = {
      nom: dataForm.nom,
      prenom: dataForm.prenom,
      email: dataForm.email,
      message: dataForm.message,
    };

    emailjs
      .send("service_y9sgq0u", templateID, FormData, publicKey)
      .then(notify())
      .then(document.getElementById("myForm").reset(), (error) => {
        Window.alert(error.text);
      });
  };

  return (
    <main className="contact">
      <Helmet>
        <title> {helmet.title} | Contact </title>
        <link rel="canonical" href={`${helmet.href}/Services`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <section className="section contact">
        <img
          src={cafet1}
          srcSet={`${cafet1} 340w, ${cafet2} 680w, ${cafet3} 1020w`}
          sizes="(max-width: 340px) 340px, (max-width: 680px) 680px, 1020px"
          alt="intérieur de la cafeteria de Gootsa"
        />
        <h1>{data[5].h1}</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14905.392366338263!2d55.2979767!3d-20.9385318!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2182897c8fd09843%3A0xe9feb9abb74ca5f8!2sGootsa%20La%20Kfet!5e0!3m2!1sfr!2sfr!4v1676194849064!5m2!1sfr!2sfr"
          title="gootsa google maps"
          className="mobile"
        />
        <InfosPratiques langue={langue} />
      </section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14905.392366338263!2d55.2979767!3d-20.9385318!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2182897c8fd09843%3A0xe9feb9abb74ca5f8!2sGootsa%20La%20Kfet!5e0!3m2!1sfr!2sfr!4v1676194849064!5m2!1sfr!2sfr"
        title="gootsa google maps"
        className="desktop"
      />
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
        <form action="submit" onSubmit={handleSubmit(onSubmit)} id="myForm">
          <label htmlFor="Nom">
            {" "}
            Nom
            <input type="text" {...register("nom", { required: true })} />
          </label>
          {errors.nom && <p>Le nom est obligatoire.</p>}
          <label htmlFor="Prenom">
            {" "}
            Prénom
            <input type="text" {...register("prenom", { required: true })} />
          </label>
          {errors.prenom && <p>Le prénom est obligatoire.</p>}

          <label htmlFor="mail">
            {" "}
            Adresse e-mail
            <input type="text" {...register("email", { required: true })} />
          </label>
          {errors.email && <p>L'adresse e-mail est obligatoire.</p>}

          <label htmlFor="Texte">
            {" "}
            Message
            <textarea
              name="texte"
              id=""
              cols="30"
              rows="10"
              {...register("message", { required: true })}
            />
          </label>
          {errors.message && <p>Le message est obligatoire.</p>}

          <label htmlFor="check">
            <input type="checkbox" {...register("check", { required: true })} />
            J'accepte que les informations renseignées soient utilisées pour me
            contacter dans le cadre d'un démarcharge commercial (devis, offre,
            renseignement...).
          </label>

          <button type="submit">Envoyer le message</button>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </form>
      </section>
    </main>
  );
}

export default Contact;
