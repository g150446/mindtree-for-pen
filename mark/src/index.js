//import { transform, getUsedAssets } from "markmap-lib";
//import { Markmap, loadCSS, loadJS } from "markmap-view";

// 1. transform markdown
const { root } = transform("#test\n ### Test2");

// 2. create markmap

// or pass an SVG element directly
const svgEl = document.querySelector("#markmap");
Markmap.create(svgEl, null, root);
