// fonction getRandomColor va retourner une string avec des valeurs rgba
function getRandomColor() {
  //je vais tirer des chiffres au hasard entre 0 et 255 qui vont déterminer ma couleur rgb 3 constantes
  const red = getRandomInteger(0, 255);
  const green = getRandomInteger(0, 255);
  const blue = getRandomInteger(0, 255);

  //on va tirer un chiffre au hasard entre 0 et 1 pout déterminer l'opacité
  const opacity = Math.random();
  //on retourne la couleur
  return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
}

// fonction getRandomInteger
function getRandomInteger(min, max) {
  // Renvoie un nombre entier aléatoire compris entre les arguments min et max inclus.
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getMouseLocation(e) {
  // methode longue
  // const offset = canvas.getBoundingClientRect();
  // const style = getComputedStyle(canvas);

  // const position = {
  //     x: e.clientX - offset.left - parseInt(style.borderLeftWidth),
  //     y: e.clientY - offset.top - parseInt(style.borderTopWidth),
  // }

  // methode courte
  const position = {
    x: e.offsetX,
    y: e.offsetY,
  };

  return position;
}
export { getMouseLocation };
