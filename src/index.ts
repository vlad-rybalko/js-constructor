import "./styles/main.css";
import { model } from "./model";
import { Site } from './classes/site';
import { Sitebar } from './classes/sitebar';
import { Block } from './classes/blocks';

const site = new Site('#site');

const updateCallback = (newBlock: Block) => {
  model.push(newBlock);
  site.render(model);
};

new Sitebar('#panel', updateCallback);

site.render(model);
