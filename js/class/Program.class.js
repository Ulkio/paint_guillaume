import ColorPalette from "./ColorPalette.class.js";
import Pen from "./Pen.class.js";
import Slate from "./Slate.class.js";

class Program {
  constructor() {
    // instancier 3 propriétés :
    // - ColorPalette
    this.palette = new ColorPalette();
    // - Pen
    this.pen = new Pen();
    // - Slate
    this.slate = new Slate(this.pen);
  }

  // méthode pour display la palette de dégradé
  displayPalette() {
    this.palette.canvas.classList.toggle("hide");
  }
  // méthodes:

  onClickPenColor(e) {
    this.pen.setColor = e.target.getAttribute("data-color");
  }

  onClickPenSize(e) {
    console.log(this.pen.size);
    this.pen.setSize = e.target.getAttribute("data-size");
  }

  onPickColor() {
    this.pen.setRGBColorFromPalette(this.palette.pickedColor);
  }

  start() {
    // installer des écouteurs sur les outils et de configuration
    // OUTILS
    document
      .querySelector("#tool-clear-canvas")
      .addEventListener("click", () => this.slate.clear());
    document
      .querySelector("#tool-color-picker")
      .addEventListener("click", () => this.displayPalette());

    // COULEURS
    document.querySelectorAll(".pen-color").forEach((element) => {
      element.addEventListener("click", (e) => this.onClickPenColor(e));
    });
    // SANS LE CUSTOM EVENT
    //
    // document
    //   .querySelector("#color-palette")
    //   .addEventListener("click", () => this.onPickColor());
    // EPAISSEUR
    //
    document.querySelectorAll(".pen-size").forEach((element) => {
      element.addEventListener("click", (e) => this.onClickPenSize(e));
    });

    // y'aura un gestionnaire d'evenement custom à créer (à ne pas faire tout de suite FFS !)
    // (clic palette)
    const colorPalette = document.querySelector("#color-palette");
    const event = new CustomEvent("click-palette");

    colorPalette.addEventListener("click-palette", () => this.onPickColor());
    colorPalette.addEventListener("click", () => {
      colorPalette.dispatchEvent(event);
    });
  }
}

export default Program;
