import takeaway from "../assets/takeaway.png";
import solider from "../assets/solider.svg";
import famille from "../assets/famille.png";
import coeur from "../assets/coeur.svg";

const dataFr=
[
    {
        id: "home_landing",
        h2: "Une cuisine saine, bonne et goûteuse !",
        button1 :"Découvrir le menu",
        button2: "Nous trouver",
    },
   {
        id: "home_formules",
        h2: "Nos formules",
        p1 :"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellen dusaliquid vel blanditiis. Iste earum tempore, corrupti distinctio dignissimos incidunt eveniet in tempora libero!",
        vegeBon: "le bowl froid",
        p2 :"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellen dusaliquid vel blanditiis. Iste earum tempore, corrupti distinctio dignissimos incidunt eveniet in tempora libero!",
        TradiBon: "le bowl froid",
        p3 :"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellen dusaliquid vel blanditiis. Iste earum tempore, corrupti distinctio dignissimos incidunt eveniet in tempora libero!",
    },
    [
        {
        id: "home_apropos1",
        h2: "À propos de Gootsa",
        h3:"Local, de qualité et de saison",
        p:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellen dusaliquid vel blanditiis. Iste earum tempore, corrupti distinctio dignissimos incidunt eveniet in tempora libero!",
        img1: takeaway,
        img2: solider,
        bg:"marron"
        }, 
        {
        id: "home_apropos2",
        h3:"Une histoire de famille",
        p:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellen dusaliquid vel blanditiis. Iste earum tempore, corrupti distinctio dignissimos incidunt eveniet in tempora libero!",
        img1: famille,
        img2: coeur,
        bg:"rouge"
    }        
    ],
    {
        id: "home_infos",
        p1: "À propos de Gootsa",
        p2:"Précommander au",
        p3:"Ouvert du mardi au samedi de 10h à 21h",   
        p4:"À l'entrée de la médiathèque du Port : Avenue du 20 décembre 1948 97420 Le Port",
        p5: "Moyens de paiement acceptés sur place: CB, espèces et titres restaurant (tickets et carte)."             
    },
    {
        id: "home_footer",
        p1: "Suivez-nous sur les réseaux :",
        p2:"Mentions légales",
        p3:"Politique de confidentialité",   
        p4:"Site développé par",
        p5:"Design par",
        p6: "Réalisé avec le soutien de la Région Réunion"
    }

];

export default dataFr;