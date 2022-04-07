import { getMouseLocation } from "../utilities.js";

class ColorPalette {
  constructor() {
    // récupérer le canvas/context
    this.canvas = document.querySelector("#color-palette");
    this.ctx = this.canvas.getContext("2d");
    // initialiser une proriété rgb (objet ??)
    this.rgb = {
      red: 0,
      green: 0,
      blue: 0,
    };
    // installer l'écouteur sur la ColorPalette
    this.canvas.addEventListener("click", (e) => this.onClick(e));

    // appeler la methode pour Build() la palette
    this.build();
  }
  // getter pour récuperer la .pickedColor
  // ...
  get pickedColor() {
    return this.rgb;
  }

  // méthode de construction graphique de la palette de couleurs
  build() {
    let gradient = this.ctx.createLinearGradient(
      0,
      0,
      this.canvas.getAttribute("width"),
      0
    );
    gradient.addColorStop(0, "black");
    gradient.addColorStop(0.14, "rgb(255,   0,   0)");
    gradient.addColorStop(0.28, "rgb(255,   0, 255)");
    gradient.addColorStop(0.42, "rgb(0,     0, 255)");
    gradient.addColorStop(0.56, "rgb(0,   255, 255)");
    gradient.addColorStop(0.7, "rgb(0,   255,   0)");
    gradient.addColorStop(0.84, "rgb(255, 255,   0)");
    gradient.addColorStop(1, "white");

    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(
      0,
      0,
      this.canvas.getAttribute("width"),
      this.canvas.getAttribute("height")
    );
  }

  // méthode de gestion de click sur la palette
  onClick(e) {
    const coords = getMouseLocation(e);
    const pixelData = this.ctx.getImageData(coords.x, coords.y, 1, 1).data;
    const pixelColor = {
      red: pixelData[0],
      green: pixelData[1],
      blue: pixelData[2],
    };
    this.rgb = pixelColor;
  }
}
export default ColorPalette;
