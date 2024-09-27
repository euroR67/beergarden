// Récupère les l'élément fa-bars et fa-times du DOM
const bars = document.querySelector('.fa-bars');
const times = document.querySelector('.fa-times');

// Récupère l'élément nav avec l'id mobile-menu du DOM
const mobileMenu = document.querySelector('#mobile-menu');

// Fonction qui permet l'ouverture et fermeture du menu en faisant passer la classe de mobileMenu de left-full à left-0
function toggleMenu() {
    mobileMenu.classList.toggle('left-full');
    mobileMenu.classList.toggle('left-0');
}

// Ajoute un écouteur d'événement sur l'élément bars qui déclenche la fonction toggleMenu
bars.addEventListener('click', toggleMenu);
// Ajoute un écouteur d'événement sur l'élément times qui déclenche la fonction toggleMenu
times.addEventListener('click', toggleMenu);