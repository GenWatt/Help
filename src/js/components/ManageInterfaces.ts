import { DOMElements } from "../DOMElements.ts";
import { state, projects } from "../state.ts";
import { Interfaces } from "../state";
import Animations from "./Animations.ts";
import Render from "./Render.ts";

class ManageInterfaces {
  public static activeInterface(element) {
    const pickedInterface = element.dataset.interface;

    if (document.querySelector(".nav__item.active"))
      document.querySelector(".nav__item.active").classList.remove("active");

    if (element) element.classList.add("active");
    this.saveCurrentInterface(pickedInterface);
  }

  private static saveCurrentInterface(pickedInterface: Interfaces) {
    if (state.currentInterface === pickedInterface) return;
    state.currentInterface = pickedInterface;
    sessionStorage.setItem("interface", pickedInterface);

    this.changeInterface();
  }

  private static changeInterface() {
    const currentActiveInterface: HTMLElement = document.querySelector(
      `.box-info[data-interface="${state.currentInterface}"]`
    );
    const visibleElement: HTMLElement = document.querySelector(".box-info.show");

    if (state.currentInterface === Interfaces.PROJECTS) new Render(projects).createProjects();
    if (visibleElement) {
      visibleElement.style.display = "none";
      visibleElement.classList.remove("show");
    }

    currentActiveInterface.style.display = "block";
    this.manageInterfaceAnimations(currentActiveInterface);
  }

  private static manageInterfaceAnimations(currentActiveInterface: HTMLElement) {
    setTimeout(() => {
      currentActiveInterface.classList.add("show");
      Render.createSplitLetterHeader(
        document.querySelector(`.box-info[data-interface="${state.currentInterface}"] h2`)
      );
      currentActiveInterface.addEventListener("transitionend", () =>
        Animations.animateTechHeader(
          document.querySelectorAll(`.box-info[data-interface="${state.currentInterface}"] h2 span`)
        )
      );
      if (state.currentInterface === Interfaces.TECHNOLOGY) {
        DOMElements.technologyItems.forEach((item: HTMLElement, index) =>
          setTimeout(() => item.classList.add("show"), 100 * index)
        );
      } else DOMElements.technologyItems.forEach((item: HTMLElement) => item.classList.remove("show"));
    }, 60);
  }

  public static setInterface() {
    const savedInterface: any = sessionStorage.getItem("interface") || Interfaces.ABOUT_ME;

    this.saveCurrentInterface(savedInterface);
    this.activeInterface(document.querySelector(`.nav__item[data-interface="${savedInterface}"]`));
  }
}

export default ManageInterfaces;
