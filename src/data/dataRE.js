import takeaway from "../assets/takeaway.png";
import solider from "../assets/solider.svg";
import famille from "../assets/famille.png";
import coeur from "../assets/coeur.svg";
import cal from "../assets/cal.svg";
import loc from "../assets/loc.svg";
import tel from "../assets/tel.svg";
import pay from "../assets/pay.svg";

const dataRE = [
  {
    id: 0,
    section: "home_landing",
    h2: "In kuisyn sin, bon ek lo gou nout péi !",
    button1: "Dékouv lo menu",
    button2: "Trouv anou",
  },
  {
    id: 1,
    section: "home_formules",
    h2: "Nout formul",
    p1: "Nout lof lé étalé su pluzièr formul 100% végétaryin. Li chanj an fonksion sak néna su marshé forin é de bann prodwi disponyb selon lo sézon. Artrouv nout savwar fèr kulinèr kréol, nout zépis é nout légum péi dann nout bann pla ke lé telman gourman ke zot sa lis zot dwa.",
    vegeBon: "le bol fré",
    p2: "Le végébon sé in bol fré ke lé alafwa biyin bon é diététik. Sé in sinfoni d'saveur ant nout bonbon piman i poik biyin la boush é nout légum fondan. Lé ankor plu bel ek nout bann crackers mézon ke i krom sou lo dan.",
    tradiBon: "zasièt sho",
    p3: "Le tradibon sé nout kari végétaryn. Le bon gou nout péi dann in zasièt biyin ranpli, koloré é plin d'variété. Le tradibon, sé fé anou plézir é pran swin nout santé an in sèl kari végé.",
  },
  [
    {
      id: "2.1",
      section: "home_apropos1",
      h2: "Sak néna a savwar su Gootsa",
      h3: "Lokal, de kalité, de sézon",
      p: "Nout prodwi lé séléksioné ek swin é amour direkteman su marshé forin. Nout lobjektif sé sublim nout frwi é légum ke la pous isi mèm, fé kwi ali solman kan sé le sézon. Nou ve un kwizin i reprézant vréman la Rényon.",
      img1: takeaway,
      img2: solider,
      bg: "vert",
    },
    {
      id: "2.2",
      section: "home_apropos2",
      h3: "In zistwar d'famy",
      p: "Gootsa sé avan tou lamour in papa pou la kwisin kréol. Sé le bezwin transmet son pasyon de biyin manjé a son bann zanfan, a son jann et surtou a son bann klian.",
      img1: famille,
      img2: coeur,
      bg: "rouge",
    },
  ],
  {
    id: 3,
    section: "home_infos",
    h2: "Zinfo pratik",
    p1: "Prékomand",
    p2: "su",
    p3: "Rouver du mardi o samedi",
    p4: "de 10h a 18h",
    p9: "Lé osi rouver shak 1ers vandredi du mwa de 10h a 21h",
    p9b: "de 10h a 18h | Lé osi rouver shak 1ers vandredi du mwa de 10h a 21h",
    p5: "Just dovan la médiatèk lo Port : ",
    p6: "Avenue du 20 décembre 1948 97420 Le Port",
    p7: "Mwayin de péman aksepté: ",
    p8: "Karte bankèr, léspès é tit restoran (tiké é kart).",
    img1: tel,
    img2: cal,
    img3: loc,
    img4: pay,
  },
  {
    id: 4,
    section: "home_footer",
    p1: "Suiv anou su bann rézo sosyo :",
    p2: "Mansyon légal",
    p3: "Politik konfidansyalité",
    p4: "Syt dévlopé é tradwi par lo",
    p5: "Disayné par",
    p6: "Réalizé ek lo soutyi la Région Rényon",
  },
  {
    id: 5,
    section: "contact",
    h1: "Aksé / Kontakt",
    h2: "Ékri anou",
    p1: "Pou zot lévènman, mariaj, aniversèr, repa dafèr ou pou tout demand kolaborasyon, kontakt anou su nout formulèr.",
    nom: "koman ou porte",
    prenom: "koman ou apel",
    email: "Out ladres imèyl",
    message: "Out messaj",
    condition:
      "Mi aksept ke le bann zinformasyion ke ma la doné lé utilisé pou kontakt amwin dan in kadr de démarshaj komersyal (devi, lof, ranseyman...).",
    bouton: "Anvoy le mesaj",
  },
  {
    id: 6,
    section: "Menu",
    p1: "Nout lof i kontyin pa protéïn animal. Li lé étudié ek swin pou alié le bann zapor énergétik esansyel ek nout bann saveur lokal.",
    p2: "Kosa i manj zordi le",
    p22: "Kosa i manj zordi",
    p3: "zordi",
    p4: "son tou sèl",
    p5: "Formul",
    p6: "midi",
    p7: "Deser zordi",
    p8: "Sak nena pou bwar",
    p9: "Sak i ariv byinto",
    p10: "Komand kari o kilo",
    p11: "Nout kari lé osi disponyb an komand o kilo. Si zot i veu komandé, zot peu kontakt anou su WhatsApp ou su nout fomulèr antsou. Nou konsey azot pas zot bann komann in peu a lavans pou èt sur ke nou nena le bann kari.",
  },
];

export default dataRE;
