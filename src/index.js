import "./styles/main.css";
import { model } from "./model";
import { templates } from './templates';


const site = document.querySelector('#site')

console.log(templates)

model.forEach((block) => {
  let html;

  if (block.type === "title") {
    html = templates.title(block);
  } else if (block.type === "text") {
    html = templates.text(block);
  } else if (block.type === "textColums") {
    html = templates.textColumns(block);
  }

  site.insertAdjacentHTML('beforeend', html)
});