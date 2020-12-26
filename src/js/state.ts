import CoronaTracker from "../assets/Corona-Tracker.jpg";
import MobileShop from "../assets/Mobile-shop.png";
import AdrianTube from "../assets/adriantube.png";
import { Interfaces } from "./constant";
import { IState, ProjectI } from "./interfaces";

export const state: IState = {
  currentInterface: Interfaces.EMPTY,
  polishInterfaceName: {
    ABOUT_ME: "O mnie",
    CONTACT: "Kontakt",
    TECHNOLOGY: "Technologie",
    PROJECTS: "Projekty",
  },
  BG_MOVEMENT_SPEED: 28,
  currentFilters: [],
};

export const projects: ProjectI[] = [
  {
    title: "AdrianTube",
    img: AdrianTube,
    technologies: ["React", "Redux", "TypeScript"],
    desc: "Aplikacja do oglądania filmów.",
    link: "https://stoic-jennings-9a00f9.netlify.app/#/",
  },
  {
    title: "Corona-Tracker",
    img: CoronaTracker,
    technologies: ["JS", "HTML", "SCSS", "TypeScript"],
    desc: "Ładuje informacje o rozprzestrzenianiu się wirusa.",
    link: "https://genwatt.github.io/Corona-Tracker/",
  },
  {
    title: "Mobile-Shop",
    img: MobileShop,
    technologies: ["Node", "Express", "MongoDB", "EJS"],
    desc: "Sklep internetowy",
    link: "https://mobile-shop-mvc.herokuapp.com/products",
  },
];

export const filters: string[] = [
  "React",
  "JS",
  "HTML",
  "TypeScript",
  "Redux",
  "SCSS",
  "Node",
  "Express",
  "EJS",
  "MongoDB",
];
