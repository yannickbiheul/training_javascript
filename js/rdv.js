// VARIABLES
let enterNumber = document.querySelector('.enterNumber');
let validNumber = document.querySelector('.validNumber');
let userTime = "";
let resultDuree = document.querySelector('.resultDuree');
let debutRdvHeures = 15;
let debutRdvMinutes = 40;
let resultFinRdv = document.querySelector('.resultFinRdv');
let finRdvHeures = debutRdvHeures;
let finRdvMinutes = debutRdvMinutes + userTime;

// Fonction pour calculer la durée
function calculDuree() {
    userTime = parseInt(enterNumber.value);
    enterNumber.value = "";
    resultDuree.innerHTML = userTime + " minutes.";
    // Si on dépasse les 60 minutes :
    while (finRdvMinutes > 60) {
        finRdvHeures += 1;
        finRdvMinutes -= 60;
    }
    // Si on dépasse les 24 heures :
    while (finRdvHeures > 24) {
        finRdvJours += 1;
        finRdvHeures -= 24;
    }
    dixaineHeures();
    dixaineMinutes();
}

// Fonction pour ajouter un 0 si moins de 10 heures :
function dixaineHeures() {
    if (finRdvHeures < 10) {
        resultFinRdv.innerHTML = "0" + finRdvHeures + "h" + finRdvMinutes;
    } else {
        resultFinRdv.innerHTML = finRdvHeures + "h" + finRdvMinutes;
    }
}

// Fonction pour ajouter un 0 si moins de 10 minutes :
function dixaineMinutes() {
    if (finRdvMinutes < 10) {
        resultFinRdv.innerHTML = finRdvHeures + "h0" + finRdvMinutes;
    } else {
        resultFinRdv.innerHTML = finRdvHeures + "h" + finRdvMinutes;
    }
}

// Écouteur d'événement sur le bouton Envoyer
validNumber.addEventListener('click', calculDuree);





