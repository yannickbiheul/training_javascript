// VARIABLES
let enterNumber = document.querySelector('.enterNumber');
let validNumber = document.querySelector('.validNumber');
let userTime = "";
let resultDuree = document.querySelector('.resultDuree');
let debutRdvHeures = 15;
let debutRdvMinutes = 40;
let finJourneeHeures = 16;
let finJourneeMinutes = 30;
let resultFinRdv = document.querySelector('.resultFinRdv');
let finRdvHeures = "";
let finRdvMinutes = "";
let suppr = document.querySelector('.suppr');
let resultRdv = document.querySelector('.resultRdv');

// Fonction pour calculer la durée
function calculDuree() {
    userTime = parseInt(enterNumber.value);
    enterNumber.value = "";
    resultDuree.innerHTML = userTime + " minutes.";
    enterNumber.style.display = "none";
    validNumber.style.display = "none";
    finRdvHeures = debutRdvHeures;
    finRdvMinutes = debutRdvMinutes + userTime;
    // Si on dépasse les 60 minutes :
    while (finRdvMinutes >= 60) {
        finRdvHeures += 1;
        finRdvMinutes -= 60;
    }
    // Si on dépasse les 24 heures :
    while (finRdvHeures >= 24) {
        finRdvJours += 1;
        finRdvHeures -= 24;
    }
    dixaineHeures();
    dixaineMinutes();
    verifHoraire();
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

// Fonction RDV OK :
function rdvOk() {
    resultRdv.style.backgroundColor = "#4CAF50";
    resultRdv.style.color = "#fff";
    resultRdv.innerHTML = "RDV OK";
}

// Fonction RDV NOK :
function rdvNok() {
    resultRdv.style.backgroundColor = "#F44336";
    resultRdv.style.color = "#fff";
    resultRdv.innerHTML = "RDV impossible";
}

// Fonction pour vérifier l'horaire :
function verifHoraire() {
    if (finRdvHeures < finJourneeHeures) {
        rdvOk();
    } else if (finRdvHeures === finJourneeHeures && finRdvMinutes <= finJourneeMinutes) {
        rdvOk();
    } else {
        rdvNok();
    }
}

// Écouteur d'événement sur le bouton Envoyer
validNumber.addEventListener('click', calculDuree);

// Écouteur d'événement sur le bouton Recommencer
suppr.addEventListener('click', function() {
    window.location.reload();
})






