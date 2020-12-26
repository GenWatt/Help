import {
  CONTACT_ITEMS,
  PROJECT_BOXES,
  SHOW_CLASS,
  STAGGER_VISIBLE_ELEMENTS,
  TECHNOLOGY_ITEMS,
} from "../constant.ts";
import { Interfaces } from "../constant";
import Animations from "./Animations.ts";

class AnimationFactory {
  public static animateActiveInterface(currentInterface: Interfaces) {
    this.clearClasses(document.querySelectorAll(STAGGER_VISIBLE_ELEMENTS));
    switch (currentInterface) {
      case Interfaces.CONTACT:
        Animations.delayAnimation(document.querySelectorAll(CONTACT_ITEMS), 300, SHOW_CLASS);
        break;
      case Interfaces.TECHNOLOGY:
        Animations.delayAnimation(document.querySelectorAll(TECHNOLOGY_ITEMS), 300, SHOW_CLASS);
        break;
      case Interfaces.PROJECTS:
        Animations.delayAnimation(document.querySelectorAll(PROJECT_BOXES), 350, SHOW_CLASS);
      default:
        break;
    }
  }

  private static clearClasses(elements: NodeListOf<HTMLElement>) {
    elements.forEach((element) => {
      element.classList.remove(SHOW_CLASS);
      element.removeAttribute("data-stagger");
    });
  }
}

export default AnimationFactory;
