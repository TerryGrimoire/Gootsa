import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Defilant from "./components/Defilant";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Mentions from "./pages/Mentions";

import whatsapp from "./assets/whatsapp.png";
import iconeLangue from "./assets/langue.png";

import "./App.css";

function App() {
  const helmet = {
    title: "Gootsa, la Kfet",
    sentence: "Une cuisine saine, bonne et goûteuse !",
    href: "https://gootsa.re",
    description: "Change description",
  };

  const [langue, setLangue] = useState("fr");

  const handleClick = () => {
    if (langue === "fr") {
      setLangue("re");
    } else setLangue("fr");
  };

  return (
    <BrowserRouter>
      <HelmetProvider>
        <div className="container">
          <Header helmet={helmet} langue={langue} setLangue={setLangue} />
          <Defilant />
          <Routes>
            <Route
              path="/"
              element={<Home helmet={helmet} langue={langue} />}
            />
            <Route
              path="/Menu"
              element={<Services helmet={helmet} langue={langue} />}
            />
            <Route
              path="/Contact"
              element={<Contact helmet={helmet} langue={langue} />}
            />
            <Route path="/Mentions" element={<Mentions />} />
          </Routes>
          <a
            href="https://api.whatsapp.com/send?phone=+2626937702 vhb19&text=Bonjour"
            className="whatsapp mobile"
          >
            {" "}
            <img src={whatsapp} alt="Logo WhatsApp" />{" "}
          </a>
          <button
            type="button"
            className="whatsapp desktop"
            onClick={handleClick}
          >
            <img src={iconeLangue} alt="icone pour la langue" />
            {langue === "fr" ? "Kréol" : "Français"}
          </button>
          <Footer langue={langue} setLangue={setLangue} />
        </div>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
