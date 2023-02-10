import React from "react";
import dataFR from "../../data/dataFR";
import dataRE from "../../data/dataRE";

function Propos({ langue, index1, index2 }) {
  const data = langue === "fr"? dataFR : dataRE;
  return (
    <section className="section apropos">
        <img src={data[index1][index2].img1} alt="" />
        <div className={data[index1][index2].bg}>
          <img src={data[index1][index2].img2} alt="icone montrant deux mains avec une feuille dedans" />
          <h3>{data[index1][index2].h3}</h3>
          <p>
          {data[index1][index2].p}
        </p>
        </div>
      </section>
  );
}

export default Propos;
