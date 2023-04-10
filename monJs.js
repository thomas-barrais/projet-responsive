// JavaScript pour détecter quand l'objet est visible dans la fenêtre du navigateur
window.addEventListener('scroll', function() {
  var elementCible = document.querySelector('.element-cible');
  var positionTop = elementCible.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;

  if (positionTop - windowHeight + 50 <= 0) { // L'objet est visible dans la fenêtre avec un décalage de 50 pixels
    elementCible.style.animationPlayState = 'running'; // Jouer l'animation en modifiant la propriété animation-play-state
  }
});

window.addEventListener('scroll', function() {
  var elementCible = document.querySelector('.element-cible3');
  var positionTop = elementCible.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;

  if (positionTop - windowHeight + 50 <= 0) { // L'objet est visible dans la fenêtre avec un décalage de 50 pixels
    elementCible.style.animationPlayState = 'running'; // Jouer l'animation en modifiant la propriété animation-play-state
  }
});

window.addEventListener('scroll', function() {
  var elementCible = document.querySelector('.image-milieu');
  var positionTop = elementCible.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;

  if (positionTop - windowHeight + 50 <= 0) { // L'objet est visible dans la fenêtre avec un décalage de 50 pixels
    elementCible.style.animationPlayState = 'running'; // Jouer l'animation en modifiant la propriété animation-play-state
  }
});