export const DOMElements = {
  navItems: document.querySelectorAll(".nav__item") as NodeListOf<HTMLButtonElement>,
  technologyItems: document.querySelectorAll(".technology-set li") as NodeListOf<HTMLElement>,
  interfaceHeader: document.querySelector(".box-info.show h2") as HTMLElement,
  socialMedia: document.querySelectorAll(".labels") as NodeListOf<HTMLElement>,
  projectsContainer: document.querySelector(".projects-container") as HTMLElement,
  projects: document.querySelectorAll(".project-box") as NodeListOf<HTMLElement>,
  filterBox: document.querySelector(".filter-box") as HTMLElement,
};
