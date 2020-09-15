import { col, row } from './utils';

function title(block) {
  return row(col(`<h1>${block.value}</h1>`))
}

function text(block) {
  return row(col(`<p>${block.value}</p>`))
}

function textColums(block) {
  const html = block.value
    .map((item) => col(`<p>${item}</p>`))
    .join("");
  return row(html)
}

export const templates = { title, text, textColums };
