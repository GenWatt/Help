import {
  FILTER_BOX,
  PROJECT_BOXES,
  PROJECT_CONTAINER,
  FILTER_BUTTONS,
  PROJECT_HEADER,
  TAG,
} from "../constant.ts";
import { ProjectI } from "../interfaces";
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
    if (document.querySelectorAll(PROJECT_BOXES).length === this.projects.length && !isFilter) return;
    document.querySelector(PROJECT_CONTAINER).innerHTML = "";

    this.projects.forEach(({ title, img, desc, technologies, link }) => {
      if (Filter.filter(technologies)) {
        const li = document.createElement("li");
        li.className = Filter.filter(technologies) && isFilter ? "project-box show" : "project-box";
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

        document.querySelector(PROJECT_CONTAINER).appendChild(li);
      }
    });

    if (document.querySelectorAll(FILTER_BUTTONS).length !== filters.length) this.createFilters(filters);

    Render.highlightActiveFilters(state.currentFilters);
    Animations.projectRotate(document.querySelectorAll(PROJECT_BOXES));
  }

  public createFilters(filters: string[]) {
    filters.forEach((filter) => {
      const button = document.createElement("button");
      button.innerText = filter;
      button.value = filter;
      button.addEventListener("click", (e) => Filter.setFilters(e.target));

      document.querySelector(FILTER_BOX).insertBefore(button, document.querySelector(PROJECT_HEADER));
    });
  }

  public static highlightActiveFilters(activeFilters: string[]) {
    document.querySelectorAll(PROJECT_BOXES).forEach((box) => {
      box.querySelectorAll(TAG).forEach((filterElemnt) => filterElemnt.classList.remove("active"));

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
