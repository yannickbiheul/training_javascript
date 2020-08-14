                                        /* BURGER MENU */

/* Déclaration des variables */
let burgerButton = document.querySelector('.burgerButton');
let burgerMenu = document.querySelector('.burgerMenu');
let span1 = document.querySelector('.span1');
let span2 = document.querySelector('.span2');
let span3 = document.querySelector('.span3');

/* Déclaration de la fonction qui switch l'ouverture du menu */
function menuOpen() {
    burgerMenu.classList.toggle('burgerMenuOpen');
    span1.classList.toggle('span1Open');
    span2.classList.toggle('span2Open');
    span3.classList.toggle('span3Open');
}

/* Ajout d'un écouteur d'événement sur le bouton */
burgerButton.addEventListener('click', menuOpen);

/* Valider un rendez-vous */

// Exemple 1 : pour une durée de RDV de 15 minutes

// Début du RDV : 15h40
let debutRdvHeures = 15;
let debutRdvMinutes = 40;

// Fin de journée : 16h30
let finJourneeHeures = 16;
let finJourneeMinutes = 30;

// Durée du rendez-vous 
let duree = 55;

// Étape 1 : Calcul de la fin du RDV
let finRdvHeures = debutRdvHeures;
let finRdvMinutes = debutRdvMinutes + duree;

if (finRdvMinutes >= 60) {
    finRdvHeures += 1;
    finRdvMinutes -= 60;
}

if (finRdvMinutes < 10) {
    finRdvMinutes = "0" + finRdvMinutes;
}

// Étape 2 : Est-ce que la fin du RDV est avant la fin de la journée ?
if (finRdvHeures <= finJourneeHeures || finRdvMinutes < finJourneeMinutes) {
    console.log("RDV OK")
} else {
    console.log("RDV impossible");
}

// Étape 3 : Affichage de l'heure de fin du RDV
console.log("Le RDV se terminera à " + finRdvHeures + "h" + finRdvMinutes);

