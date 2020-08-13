                                        /* BURGER MENU */

/* Déclaration des variables */
let burgerButton = document.querySelector('.burgerButton');
let burgerMenu = document.querySelector('.burgerMenu');

/* Dévlaration de la fonction qui switch l'ouverture du menu */
function menuOpen() {
    burgerMenu.classList.toggle('burgerMenuOpen');
}

/* Ajout d'un écouteur d'événement sur le bouton */
burgerButton.addEventListener('click', menuOpen);

