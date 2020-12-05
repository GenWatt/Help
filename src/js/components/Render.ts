import { DOMElements } from "../DOMElements.ts";
import { ProjectI } from "../state";
import { state, filters } from "../state.ts";
import Animations from "./Animations.ts";
import Filter from "./Filter.ts";

class Render {
  readonly projects: ProjectI[];
  constructor(projects: ProjectI[]) {
    this.projects = projects;
  }

  public static createSplitLetterHeader(header: HTMLElement) {
    const letterArr: string[] = state.polishInterfaceName[state.currentInterface].split("");

    header.innerHTML = "";
    letterArr.forEach((letter) => {
      const span = document.createElement("span");
      span.style.display = "inline-block";
      span.classList.add("tech-letter");
      span.innerText = letter;

      header.appendChild(span);
    });
  }

  public createProjects(isFilter: boolean = false) {
    if (document.querySelectorAll(".project-box").length === this.projects.length && !isFilter) return;
    DOMElements.projectsContainer.innerHTML = "";

    this.projects.forEach(({ title, img, desc, technologies, link }) => {
      if (Filter.filter(technologies)) {
        const li = document.createElement("li");
        li.classList.add("project-box");
        li.innerHTML = `
      <a href="${link}" target="blank">
        <h4 class="project-title">${title}</h4>
        <img src="${img}" alt="${title}" class="project-img"/>
        <p>${desc}</p>
        <ul class="tags">
          ${technologies
            .map((technology) => `<li class="tag" data-filter="${technology}">${technology}</li>`)
            .join("")}
        </ul>
      </a>
      `;

        DOMElements.projectsContainer.appendChild(li);
      }
    });

    if (document.querySelectorAll(".filter-box button").length !== filters.length)
      this.createFilters(filters);

    Render.highlightActiveFilters(state.currentFilters);
    Animations.projectRotate(document.querySelectorAll(".project-box"));
  }

  public createFilters(filters: string[]) {
    filters.forEach((filter) => {
      const button = document.createElement("button");
      button.innerText = filter;
      button.value = filter;
      button.addEventListener("click", (e) => Filter.setFilters(e.target));

      DOMElements.filterBox.insertBefore(button, document.querySelector(".projects-container h2"));
    });
  }

  public static highlightActiveFilters(activeFilters: string[]) {
    document.querySelectorAll(".project-box").forEach((box) => {
      box.querySelectorAll(`.tag`).forEach((filterElemnt) => filterElemnt.classList.remove("active"));

      activeFilters.forEach((filter) => {
        if (box.querySelectorAll(`.tag[data-filter="${filter}"]`).length)
          box.querySelectorAll(`.tag[data-filter="${filter}"]`).forEach((tagElement) => {
            tagElement.classList.add("active");
          });
      });
    });
  }
}

export default Render;
