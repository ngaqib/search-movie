import "regenerator-runtime";
import "./styles/style.css";
import "./script/component/app-bar.js";
import main from "./script/view/main.js";
import "./clock.js";
import jpg from './image/foto.jpg';

document.querySelector('#jpgElement').src = jpg;
document.addEventListener("DOMContentLoaded", main);