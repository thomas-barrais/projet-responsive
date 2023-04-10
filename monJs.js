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

// window.addEventListener('scroll', function() {
//   var elementCible = document.querySelector('.avis1' '.avis2' '.avis3');
//   var positionTop = elementCible.getBoundingClientRect().top;
//   var windowHeight = window.innerHeight;

//   if (positionTop - windowHeight + 50 <= 0) { // L'objet est visible dans la fenêtre avec un décalage de 50 pixels
//     elementCible.style.animationPlayState = 'running'; // Jouer l'animation en modifiant la propriété animation-play-state
//   }
// });

window.addEventListener('scroll', function() {
  var elementCible1 = document.querySelector('.avis1'); // Cibler le premier élément avec la classe 'avis1'
  var elementCible2 = document.querySelector('.avis2'); // Cibler le deuxième élément avec la classe 'avis2'
  var elementCible3 = document.querySelector('.avis3'); // Cibler le troisième élément avec la classe 'avis3'

  var positionTop1 = elementCible1.getBoundingClientRect().top;
  var positionTop2 = elementCible2.getBoundingClientRect().top;
  var positionTop3 = elementCible3.getBoundingClientRect().top;

  var maxPositionTop = Math.max(positionTop1, positionTop2, positionTop3); // Calculer la position la plus haute parmi les trois éléments

  var windowHeight = window.innerHeight;

  if (maxPositionTop - windowHeight + 50 <= 0) { // Vérifier si la position la plus haute est visible dans la fenêtre avec un décalage de 50 pixels
    elementCible1.style.animationPlayState = 'running'; // Jouer l'animation pour le premier élément en modifiant la propriété animation-play-state
    elementCible2.style.animationPlayState = 'running'; // Jouer l'animation pour le deuxième élément en modifiant la propriété animation-play-state
    elementCible3.style.animationPlayState = 'running'; // Jouer l'animation pour le troisième élément en modifiant la propriété animation-play-state
  }
});


window.addEventListener('scroll', function() {
  var elementCible = document.querySelector('.avis2');
  var positionTop = elementCible.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;

  if (positionTop - windowHeight + 50 <= 0) { // L'objet est visible dans la fenêtre avec un décalage de 50 pixels
    elementCible.style.animationPlayState = 'running'; // Jouer l'animation en modifiant la propriété animation-play-state
  }
});

window.addEventListener('scroll', function() {
  var elementCible = document.querySelector('.avis3');
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

window.addEventListener('scroll', function() {
  var elementCible = document.querySelector('.fade-in2-scroll');
  var positionTop = elementCible.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;

  if (positionTop - windowHeight + 50 <= 0) { // L'objet est visible dans la fenêtre avec un décalage de 50 pixels
    elementCible.style.animationPlayState = 'running'; // Jouer l'animation en modifiant la propriété animation-play-state
  }
});