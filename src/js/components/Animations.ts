import { DOMElements } from "../DOMElements.ts";
import { state } from "../state.ts";

class Animations {
  public static animateTechHeader(headerLetters: NodeListOf<HTMLElement>) {
    headerLetters.forEach((letter, index) => setTimeout(() => letter.classList.add("scale"), 100 * index));
  }

  public static bgImgMovment(event) {
    const x: number = event.pageX;
    const y: number = event.pageY;

    document.body.style.backgroundPosition = `${x / state.BG_MOVEMENT_SPEED}% ${
      y / state.BG_MOVEMENT_SPEED
    }%`;
  }

  public static socialMediaAnimateOnMouse(event) {
    DOMElements.socialMedia.forEach((media: HTMLElement) => {
      event.target.className === media.className
        ? media.classList.add("scale-up")
        : media.classList.add("scale-down");
    });
  }

  public static socialMediaAnimateOnMouseLeave() {
    DOMElements.socialMedia.forEach((media: HTMLElement) => {
      media.classList.remove("scale-up");
      media.classList.remove("scale-down");
    });
  }

  public static navFlip(element: NodeListOf<HTMLElement>, STEP: number) {
    element.forEach((item, index) => {
      setTimeout(() => item.classList.add("flip"), STEP * (index + 1));
    });
  }

  public static projectRotate(projectsBox: NodeListOf<HTMLElement>) {
    projectsBox.forEach((project: HTMLElement) => {
      const imgElement: HTMLElement = project.querySelector(".project-img");

      project.addEventListener("mousemove", (e: any) => {
        const y: number = (project.offsetWidth / 2 + project.offsetLeft - e.pageX) / 10;
        const x: number = (project.offsetHeight / 2 + project.offsetTop - e.pageY) / 10;

        project.classList.add("on-mouse");
        imgElement.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
      });

      project.addEventListener("mouseleave", () => {
        project.classList.remove("on-mouse");
        imgElement.style.transform = `rotateX(0deg) rotateY(0deg)`;
      });
    });
  }
}

export default Animations;
