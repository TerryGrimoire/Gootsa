import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import InfosPratiques from "../components/Home/InfosPratiques";

function Contact({ helmet, langue }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col align-center">
      <Helmet>
        <title> {helmet.title} | Contact </title>
        <link rel="canonical" href={`${helmet.href}/Services`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <h2>Nous joindre</h2>
      <InfosPratiques langue={langue} />
    </div>
  );
}

export default Contact;
