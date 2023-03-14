import React, { useState, useEffect } from "react";
import papa from "papaparse";

function Defilant() {
  const [message, setMessage] = useState("Bienvue sur Gootsa ! ");
  const prepareData2 = (data2) => {
    // j correspond aux lignes de A à ZZZ sur fichier Excel
    // index
    // line correspond à
    // index correspond à
    // key correspond à

    let obj = {};
    const json = data2.map((line, index) => {
      if (index > 0) {
        data2[0].forEach((key, j) => {
          if (line[j] !== "" && key !== "" && key) {
            obj = { ...obj, [key]: line[j] };
          }
        });
      }
      return obj;
    });

    json.shift();
    setMessage(json[0].Message);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    fetch(import.meta.env.VITE_GOOGLE_MESSAGE)
      .then((result) => result.text())
      .then((text) => papa.parse(text))
      .then((data2) => prepareData2(data2.data));
  }, []);
  return (
    <div className="messagedefilant">
      <div data-text={message}>
        <span>{message}</span>
      </div>
    </div>
  );
}

export default Defilant;
