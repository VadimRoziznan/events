import Field from "./Field";
import Moving from "./Moving";
import AddImage from "./AddImage";
import CustomСursor from "./CustomСursor";

document.addEventListener("DOMContentLoaded", () => {
  const score = document.querySelector(".score");
  const life = document.querySelector(".life");
  const buttonNewGame = document.querySelector(".new-game");
  const field = new Field(document.querySelector(".field"), 4, 4);
  field.fieldGenerator();

  const newImage = new AddImage(document.querySelector(".field"));
  const move = new Moving();

  const cursor = new CustomСursor(document.querySelector(".field"));
  cursor.changeCursor();
  cursor.rotateCursor();

  let game = false;

  buttonNewGame.addEventListener("click", () => {
    cursor.resetCounter();
    if (!game) {
      const interval = setInterval(() => {
        game = true;
        score.textContent = cursor.clickCountHit;
        life.textContent = cursor.clickCountMissed;
        if (cursor.clickCountHit === 5) {
          clearInterval(interval);
          game = false;
          alert("Вы выиграли!");
        }
        if (cursor.clickCountMissed === 5) {
          clearInterval(interval);
          game = false;
          alert("Вы проиграли!");
        }
        const step = move.randomStep(4, 4);
        newImage.createImage(step.width, step.height);
      }, 1000);
    }
  });
});
