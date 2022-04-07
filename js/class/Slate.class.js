import { getMouseLocation } from "../utilities.js";

class Slate {
  // le constructor reçoit un argument
  constructor(pen) {
    // récupération du canvas, du context
    this.canvas = document.querySelector("#slate");
    this.ctx = this.canvas.getContext("2d");

    // au début, on ne sait pas où se trouve la souris (currentLocation)
    this.currentLocation = {
      x: "",
      y: "",
    };
    // au début on dessine pas (isDrawing)
    this.isDrawing = false;
    // stockage de l'objet crayon
    this.pen = pen;

    // installer les écouteur lié à la souris
    this.canvas.addEventListener("mousedown", (e) => {
      this.isDrawing = true;
      this.pen.configure(this.ctx);
      this.currentLocation = getMouseLocation(e);
    });

    this.canvas.addEventListener("mousemove", (e) => {
      if (this.isDrawing === true) {
        this.ctx.beginPath();
        this.ctx.moveTo(this.currentLocation.x, this.currentLocation.y);
        this.currentLocation = getMouseLocation(e);
        this.ctx.lineTo(this.currentLocation.x, this.currentLocation.y);
        this.ctx.stroke();
      }
    });

    this.canvas.addEventListener("mouseup", () => {
      this.isDrawing = false;
    });
    
    this.canvas.addEventListener("mouseleave", () => {
      this.isDrawing = false;
    });
  }

  // méthode de nettoyage de l'ardoise
  clear() {
    this.ctx.clearRect(
      0,
      0,
      this.canvas.getAttribute("width"),
      this.canvas.getAttribute("height")
    );
  }
}
export default Slate;
