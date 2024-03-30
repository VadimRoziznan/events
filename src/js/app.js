import Field from "./Field";
import Moving from "./Moving";
import AddImage from "./AddImage";
import CustomСursor from "./CustomСursor";

document.addEventListener("DOMContentLoaded", () => {
  new Field(document.querySelector(".field"), 4, 4).fieldGenerator();
  const newImage = new AddImage(document.querySelector(".field"));
  const move = new Moving();

  const cursor = new CustomСursor(document.querySelector('.field'))
  cursor.changeCursor()
  cursor.rotateCursor()



  setInterval(() => {
    const step = move.randomStep(4, 4);
    newImage.createImage(step.width, step.height);
  }, 1000);
});
