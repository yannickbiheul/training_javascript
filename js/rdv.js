                                                            /* VARIABLES */

// Variables entrées utilisateur
let enterNumber = document.querySelector('.enterNumber');
let validNumber = document.querySelector('.validNumber');
let userTime = "";

// Variables interface
let resultDuree = document.querySelector('.resultDuree');
let resultFinRdv = document.querySelector('.resultFinRdv');
let resultRdv = document.querySelector('.resultRdv');
let suppr = document.querySelector('.suppr');

// Variables du programme
let debutRdvHeures = 15;
let debutRdvMinutes = 40;
let finJourneeHeures = 16;
let finJourneeMinutes = 30;
let finRdvHeures = "";
let finRdvMinutes = "";

                                                            /* FONCTIONS */

// Fonction principale
function calculRdv() {
    userTime = parseInt(enterNumber.value);
    enterNumber.value = "";
    resultDuree.innerHTML = userTime + " minutes.";
    enterNumber.style.display = "none";
    validNumber.style.display = "none";
    finRdvHeures = debutRdvHeures;
    finRdvMinutes = debutRdvMinutes + userTime;
    soixanteMinutes();
    vingtQuatreHeures();
    dixaineHeures();
    dixaineMinutes();
    verifHoraire();
}

// Fonction si on dépasse les 60 minutes :
function soixanteMinutes() {
    while (finRdvMinutes >= 60) {
        finRdvHeures += 1;
        finRdvMinutes -= 60;
    }
}

// Fonction si on dépasse les 24 heures :
function vingtQuatreHeures() {
    while (finRdvHeures >= 24) {
        finRdvJours += 1;
        finRdvHeures -= 24;
    }
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

                                                            /* ÉCOUTEURS D'ÉVÉNEMENTS */

// Bouton Envoyer
validNumber.addEventListener('click', calculRdv);

// Bouton Recommencer
suppr.addEventListener('click', function() {
    window.location.reload();
})






