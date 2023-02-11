import takeaway from "../assets/takeaway.png";
import solider from "../assets/solider.svg";
import famille from "../assets/famille.png";
import coeur from "../assets/coeur.svg";
import cal from "../assets/cal.svg";
import loc from "../assets/loc.svg";
import tel from "../assets/tel.svg";
import pay from "../assets/pay.svg";

const dataFr = [
  {
    id: 0,
    section: "home_landing",
    h2: "Une cuisine saine, bonne et goûteuse !",
    button1: "Découvrir le menu",
    button2: "Nous trouver",
  },
  {
    id: 1,
    section: "home_formules",
    h2: "Nos formules",
    p1: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellen dusaliquid vel blanditiis. Iste earum tempore, corrupti distinctio dignissimos incidunt eveniet in tempora libero!",
    vegeBon: "le bowl froid",
    p2: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellen dusaliquid vel blanditiis. Iste earum tempore, corrupti distinctio dignissimos incidunt eveniet in tempora libero!",
    TradiBon: "le bowl froid",
    p3: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellen dusaliquid vel blanditiis. Iste earum tempore, corrupti distinctio dignissimos incidunt eveniet in tempora libero!",
  },
  [
    {
      id: "2.1",
      section: "home_apropos1",
      h2: "À propos de Gootsa",
      h3: "Local, de qualité et de saison",
      p: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellen dusaliquid vel blanditiis. Iste earum tempore, corrupti distinctio dignissimos incidunt eveniet in tempora libero!",
      img1: takeaway,
      img2: solider,
      bg: "marron",
    },
    {
      id: "2.2",
      section: "home_apropos2",
      h3: "Une histoire de famille",
      p: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellen dusaliquid vel blanditiis. Iste earum tempore, corrupti distinctio dignissimos incidunt eveniet in tempora libero!",
      img1: famille,
      img2: coeur,
      bg: "rouge",
    },
  ],
  {
    id: 3,
    section: "home_infos",
    h2: "Infos pratiques",
    p1: "Précommander",
    p2: "au",
    p3: "Ouvert du mardi au samedi",
    p4: "de 10h à 18h",
    p9: "Également les 1ers vendredi du mois de 10h à 21h",
    p5: "À l'entrée de la médiathèque du Port : ",
    p6: "Avenue du 20 décembre 1948 97420 Le Port",
    p7: "Moyens de paiement acceptés sur place: ",
    p8: "CB, espèces et titres restaurant (tickets et carte).",
    img1: tel,
    img2: cal,
    img3: loc,
    img4: pay,
  },
  {
    id: 4,
    section: "home_footer",
    p1: "Suivez-nous sur les réseaux :",
    p2: "Mentions légales",
    p3: "Politique de confidentialité",
    p4: "Site développé par",
    p5: "Design par",
    p6: "Réalisé avec le soutien de la Région Réunion",
  },
];

export default dataFr;
