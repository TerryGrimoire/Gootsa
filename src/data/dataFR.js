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
    p1: "Notre offre s'étale sur plusieurs formules 100% végétariennes évoluant au gré des saisons et des disponibilité du marché forain. Retrouvez notre savoir faire-culinaire créole, nos épices et nos légumes péi dans des plats savoureux et gourmand.",
    vegeBon: "le bowl froid",
    p2: "Le végébon est un bowl froid à la fois gouteux et diététique. C'est une symphonie de saveurs mêlant le piquant de nos bonbons piment avec nos légumes juteux, sublimés par nos crackers maisons.",
    tradiBon: "l'assiette chaude",
    p3: "Le tradibon c'est notre cari végétarien. Le bon goût péi dans une assiette généreuse, colorée et pleine de variété. Le tradibon, c'est se faire plaisir tout en prenant soin de sa santé.",
  },
  [
    {
      id: "2.1",
      section: "home_apropos1",
      h2: "À propos de Gootsa",
      h3: "Local, de qualité et de saison",
      p: "Nos produits sont séléctionnés avec soin et amour directement sur le marché forain local. Notre objectif est de sublimer les fruits et légumes produits localement, de saison et représantant La Réunion.",
      img1: takeaway,
      img2: solider,
      bg: "vert",
    },
    {
      id: "2.2",
      section: "home_apropos2",
      h3: "Une histoire de famille",
      p: "Gootsa c'est avant tout l'amour d'un père pour la cuisine créole. C'est ce besoin de transmettre cette passion du bien manger à ses enfants, à son gendre, à ses clients...",
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
    p9b: "de 10h à 18h | Également les 1ers vendredi du mois de 10h à 21h",
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
    p4: "Site développé et traduit par le",
    p5: "Design par",
    p6: "Réalisé avec le soutien de la Région Réunion",
  },
  {
    id: 5,
    section: "contact",
    h1: "Accès / Contact",
    h2: "Nous écrire",
    p1: "Pour vos évènements, mariages, anniversaires, repas d'affaires ou pour toute demande de collaboration, vous pouvez nous contacter via notre formulaire.",
    nom: "Nom",
    prenom: "Prénom",
    email: "Adresse e-mail",
    message: "Message",
    condition:
      "J'accepte que les informations renseignées soient utilisées pour me contacter dans le cadre d'un démarcharge commercial (devis, offre, renseignement...).",
    bouton: "Envoyer le message",
  },
  {
    id: 6,
    section: "Menu",
    p1: "Nos offres ne contiennent pas de protéines animales. Elles sont réfléchies pour allier apport énergétique essentiel et saveurs locales.",
    p2: "Au menu du",
    p22: "Au menu ",
    p3: "du jour",
    p4: "seul",
    p5: "Formule",
    p6: "midi",
    p7: "Desserts du moment",
    p8: "Boissons",
    p9: "À venir",
    p10: "Commande de cari au kilo",
    p11: "Nos caris sont également disponible en commande au kilo. Pour ce faire, vous pouvez nous contacter via whatsApp ou via notre fomulaire de contact. Nous vous invitons à vous y prendre à l'avance pour vous assurer de la disponibilité de nos caris.",
  },
];

export default dataFr;
