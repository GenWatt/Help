import { state, projects } from "../state.ts";
import Render from "./Render.ts";

class Filter {
  public static setFilters(target) {
    const render = new Render(projects);
    const value: string = target.value.toLowerCase();

    if (target.classList.contains("active")) {
      target.classList.remove("active");
      state.currentFilters = state.currentFilters.filter((filter) => value !== filter);
      return render.createProjects(true);
    }

    target.classList.add("active");
    state.currentFilters.push(value);
    render.createProjects(true);
  }

  public static filter(technologies: string[]): boolean {
    if (!state.currentFilters.length) return true;

    return state.currentFilters.every((filter: string) =>
      technologies.map((technologie) => technologie.toLowerCase()).includes(filter)
    );
  }
}

export default Filter;
