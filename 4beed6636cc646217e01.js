import Field from"./Field";import Moving from"./Moving";import AddImage from"./AddImage";import CustomСursor from"./CustomСursor";document.addEventListener("DOMContentLoaded",(()=>{new Field(document.querySelector(".field"),4,4).fieldGenerator();const e=new AddImage(document.querySelector(".field")),o=new Moving;new CustomСursor(document.querySelector(".field")).changeCursor(),setInterval((()=>{const r=o.randomStep(4,4);e.createImage(r.width,r.height)}),1e3)}));