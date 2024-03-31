export default class CustomСursor {
  constructor(element) {
    this.element = element;
    this.clickCountHit = 0;
    this.clickCountMissed = 0;
  }
  changeCursor() {
    this.element.style.cursor = 'url("../images/hammer_up.png"), auto';
  }
  rotateCursor() {
    this.element.addEventListener("mousedown", (event) => {
      this.element.style.cursor = 'url("../images/hammer_down.png"), auto';
      if (event.target.tagName === "IMG") {
        this.clickCountHit += 1;
        event.target.remove();
      } else {
        this.clickCountMissed += 1;
      }
    });

    this.element.addEventListener("mouseup", () => {
      this.element.style.cursor = 'url("../images/hammer_up.png"), auto';
    });
  }
  resetCounter() {
    this.clickCountHit = 0;
    this.clickCountMissed = 0;
  }
}
