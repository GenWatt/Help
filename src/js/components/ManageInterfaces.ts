import { state, projects } from "../state.ts";
import { ICONS_INTERFACE, NAV_ITEM_ACTIVE } from "../constant.ts";
import { Interfaces } from "../constant";
import Animations from "./Animations.ts";
import Render from "./Render.ts";
import AnimationFactory from "./AnimationFactory.ts";

class ManageInterfaces {
  public static activeInterface(element) {
    const pickedInterface = element.dataset.interface;

    if (document.querySelector(NAV_ITEM_ACTIVE))
      document.querySelector(NAV_ITEM_ACTIVE).classList.remove("active");

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
    setTimeout(() => this.manageInterfaceAnimations(currentActiveInterface), 60);
    this.setIcon(state.currentInterface);
  }

  private static manageInterfaceAnimations(currentActiveInterface: HTMLElement) {
    const { currentInterface } = state;

    currentActiveInterface.classList.add("show");
    Render.createSplitLetterHeader(
      document.querySelector(`.box-info[data-interface="${currentInterface}"] h2`)
    );

    Animations.delayAnimation(
      document.querySelectorAll(`.box-info[data-interface="${currentInterface}"] h2 span`),
      150,
      "scale"
    ),
      AnimationFactory.animateActiveInterface(currentInterface);
  }

  public static setIcon(currentInterface: Interfaces) {
    document.querySelectorAll(ICONS_INTERFACE).forEach((icon: HTMLElement) => {
      icon.dataset.iconinterface === currentInterface
        ? icon.classList.add("active")
        : icon.classList.remove("active");
    });
  }

  public static setInterface() {
    const savedInterface: any = sessionStorage.getItem("interface") || Interfaces.ABOUT_ME;

    this.saveCurrentInterface(savedInterface);
    this.activeInterface(document.querySelector(`.nav__item[data-interface="${savedInterface}"]`));
  }
}

export default ManageInterfaces;
