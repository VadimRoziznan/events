export default class CustomСursor {
  constructor(element) {
    this.element = element;
  }
  changeCursor() {
    /*const field = document.querySelector('.field')*/
    this.element.style.cursor = 'url("../images/hammer.png"), auto';
  }
  rotateCursor() {
    this.element.addEventListener('mousedown', event => {
      this.element.style.cursor = 'url("../images/hammer_down.png"), auto';
      /*if (event.target.tagName === 'IMG') {
        console.log(event.target)
      }*/
    });
    
    this.element.addEventListener('mouseup', event => {
      this.element.style.cursor = 'url("../images/hammer_up.png"), auto';
    });
  }
}
