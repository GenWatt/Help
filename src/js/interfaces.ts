import { Interfaces } from "./constant";

export interface ProjectI {
  title: string;
  img: string;
  technologies: string[];
  desc: string;
  link: string;
}

export interface IState {
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
