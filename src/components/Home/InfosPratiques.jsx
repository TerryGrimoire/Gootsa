import React from "react";
import { useLocation } from "react-router-dom";
import dataFR from "../../data/dataFR";
import dataRE from "../../data/dataRE";

function InfosPratiques({ langue }) {
  const location = useLocation();
  const data = langue === "fr" ? dataFR : dataRE;
  return (
    <section
      className={
        location.pathname === "/"
          ? "InfosPratiques homeInfo"
          : "InfosPratiques ContactInfo"
      }
    >
      <div>
        <img src={data[3].img1} alt=" téléphone portable" />
        <p>
          <span>{data[3].p1}</span> {data[3].p2}{" "}
          <a href="tel:+262693770219">0693770219</a>
        </p>
      </div>
      <div>
        <img src={data[3].img2} alt="calendrier" />
        <p>
          <span>{data[3].p3}</span> {data[3].p4}
        </p>
      </div>
      <div>
        <img src="" alt="" />
        <p>{data[3].p9}</p>
      </div>
      <div>
        <img src={data[3].img3} alt="localisation" />
        <p>
          <span>{data[3].p5}</span> {data[3].p6}
        </p>
      </div>
    </section>
  );
}

export default InfosPratiques;
