/* BURGER MENU */

/* Déclaration des variables */
let burgerButton = document.querySelector('.burgerButton');
let burgerMenu = document.querySelector('.burgerMenu');
let span1 = document.querySelector('.span1');
let span2 = document.querySelector('.span2');
let span3 = document.querySelector('.span3');
let boutonMoyenne = document.querySelector('.moyenne');

/* Déclaration de la fonction qui switch l'ouverture du menu */
function menuOpen() {
    burgerMenu.classList.toggle('burgerMenuOpen');
    span1.classList.toggle('span1Open');
    span2.classList.toggle('span2Open');
    span3.classList.toggle('span3Open');
}

/* Ajout d'un écouteur d'événement sur le bouton Burger */
burgerButton.addEventListener('click', menuOpen);

/* Écouteurs d'événements sur les liens du menu */
boutonMoyenne.addEventListener('click', menuOpen);



