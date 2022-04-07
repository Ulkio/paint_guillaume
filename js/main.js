// installer un gestionnaire d'event dans lequel
// - il y aura l'instance de la class Program
// - et la méthode d'éxecution de l'appli'

import Program from "./class/Program.class.js";

document.addEventListener("DOMContentLoaded", function () {
  const program = new Program();
  program.start();
});
// document.querySelector("#color-palette").addEventListener("click", function () {
//   pen.setColorFromPalette();
// });
