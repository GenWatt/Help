import CoronaTracker from "../assets/Corona-Tracker.jpg";
import MobileShop from "../assets/Mobile-shop.png";

export const enum Interfaces {
  ABOUT_ME = "ABOUT_ME",
  CONTACT = "CONTACT",
  TECHNOLOGY = "TECHNOLOGY",
  PROJECTS = "PROJECTS",
  EMPTY = "",
}

interface IState {
  currentInterface: Interfaces;
  polishInterfaceName: {
    ABOUT_ME: string;
    CONTACT: string;
    TECHNOLOGY: string;
    PROJECTS: string;
  };
  BG_MOVEMENT_SPEED: number;
  currentFilters: string[];
}

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

export interface ProjectI {
  title: string;
  img: string;
  technologies: string[];
  desc: string;
  link: string;
}

export const projects: ProjectI[] = [
  {
    title: "AdrianTube",
    img: CoronaTracker,
    technologies: ["React", "Redux", "TypeScript"],
    desc: "Aplikacja do oglądania filmów.",
    link: "",
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

export const filters = [
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
