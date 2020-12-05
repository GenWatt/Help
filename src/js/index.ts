import "../scss/style.scss";
import { DOMElements } from "./DOMElements.ts";
import ManageInterfaces from "./components/ManageInterfaces.ts";
import Animations from "./components/Animations.ts";

const init = (): void => {
  addEventsListeners();
  Animations.navFlip(DOMElements.navItems, 300);
  ManageInterfaces.setInterface();
};

function addEventsListeners() {
  DOMElements.navItems.forEach((item: HTMLElement) =>
    item.addEventListener("click", (e) => ManageInterfaces.activeInterface(e.target))
  );
  document.body.addEventListener("mousemove", (e) => Animations.bgImgMovment(e));
  DOMElements.socialMedia.forEach((media: HTMLElement) => {
    media.addEventListener("mouseenter", (e: any) => Animations.socialMediaAnimateOnMouse(e));
    media.addEventListener("mouseleave", () => Animations.socialMediaAnimateOnMouseLeave());
  });
}

init();
