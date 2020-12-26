import "../scss/style.scss";
import ManageInterfaces from "./components/ManageInterfaces.ts";
import Animations from "./components/Animations.ts";
import { NAV_ITEMS, SOCIAL_MEDIA } from "./constant.ts";

const init = (): void => {
  addEventsListeners();
  Animations.delayAnimation(document.querySelectorAll(NAV_ITEMS), 400, "show");
  ManageInterfaces.setInterface();
};

function addEventsListeners() {
  document
    .querySelectorAll(NAV_ITEMS)
    .forEach((item) => item.addEventListener("click", (e) => ManageInterfaces.activeInterface(e.target)));
  document.body.addEventListener("mousemove", (e) => Animations.bgImgMovment(e));
  document.querySelectorAll(SOCIAL_MEDIA).forEach((media) => {
    media.addEventListener("mouseenter", (e: any) => Animations.socialMediaAnimateOnMouse(e));
    media.addEventListener("mouseleave", () => Animations.socialMediaAnimateOnMouseLeave());
  });
}

window.addEventListener("DOMContentLoaded", init);
