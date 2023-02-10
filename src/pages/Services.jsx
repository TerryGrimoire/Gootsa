import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

function Services({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title> {helmet.title} | Services </title>
        <link rel="canonical" href={`${helmet.href}/Services`} />
        <meta name="description" content={helmet.description} />
      </Helmet>

      <section>
        <h1>Menu</h1>
      </section>
    </div>
  );
}

export default Services;
