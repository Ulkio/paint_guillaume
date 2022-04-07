class Pen {
  constructor() {
    // initialiser 2 propriétés avec des valeurs par defaut
    // - color
    this.color = "black";
    // - size
    this.size = "5";
  }

  // setter pour appliquer la couleur "au crayon", et un autre pour appliquer la taille( size)
  //...
  set setColor(value) {
    this.color = value;
  }
  set setSize(value) {
    this.size = value;
  }

  // méthode de configuration de l'ardoise à l'execution d'un dessin avec le crayon
  configure(ctx) {
    // mise à jour des propriété de dessin de l'ardoise(slate)
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.size;
    ctx.lineCap = "round";
  }

  // methode pour appliquer une couleur rgb au crayon
  setRGBColorFromPalette(color) {
    this.setColor = `rgb(${color.red},${color.green},${color.blue})`;
  }
}

export default Pen;
