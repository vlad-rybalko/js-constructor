import { col, row } from './utils';

function title(block) {
const tag = block.options.tag
const styles = block.options.styles

  return row(col(`<${tag}>${block.value}</${block.options.tag}>`), styles)
}

function text(block) {
  return row(col(`<p>${block.value}</p>`), block.options.styles)
}

function textColums(block) {
  const html = block.value
    .map((item) => col(`<p>${item}</p>`))
    .join("");
  return row(html, block.options.styles)
}

export const templates = { title, text, textColums };
