import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Mentions from "./pages/Mentions";

import "./App.css";

function App() {
  const helmet = {
    title: "Gootsa, la Kfet",
    sentence: "Une cuisine saine, bonne et goûteuse !",
    href: "https://gootsa.re",
    description: "Change description",
  };

  const [langue, setLangue] = useState("fr");

  return (
    <BrowserRouter>
      <Header helmet={helmet} langue={langue} setLangue={setLangue} />
      <Routes>
        <Route path="/" element={<Home helmet={helmet} langue={langue} />} />
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
      <Footer langue={langue} />
    </BrowserRouter>
  );
}

export default App;
