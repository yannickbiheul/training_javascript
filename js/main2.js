/* Valider un rendez-vous */

// Exemple 1 : pour une durée de RDV de 15 minutes

// Fin de journée : 16h30
let finJourneeHeures = 16;
let finJourneeMinutes = 30;
console.log("La journée se termine à " + finJourneeHeures + "h" + finJourneeMinutes);

// Début du RDV : 15h40
let rdv = true;
let debutRdvHeures = 15;
let debutRdvMinutes = 40;
console.log("Le RDV débute à " + debutRdvHeures + "h" + debutRdvMinutes);

// Durée du rendez-vous 
let enterNumber = document.querySelector('.enterNumber');
let validNumber = document.querySelector('.validNumber');
let dureeUtilisateur = 0;
let duree = 0;

validNumber.addEventListener('click', function() {
    dureeUtilisateur = enterNumber.value;
    console.log(dureeUtilisateur);
    enterNumber.value = "";
})
duree = dureeUtilisateur;

console.log("Le RDV dure " + duree + " minutes.");

// Étape 1 : Calcul de la fin du RDV
finRdvHeures = debutRdvHeures;
finRdvMinutes = debutRdvMinutes + duree;
finRdvJour = 0;
function calculMinutes() {
    while (finRdvMinutes >= 60) {
        finRdvHeures += 1;
        finRdvMinutes -= 60;
    }
}
function calculHeures() {
    while (finRdvHeures >= 24) {
        finRdvJour += 1;
        finRdvHeures -= 24;
    }
}

calculMinutes();
calculHeures();

// console.log("Heure de fin de RDV : " + finRdvHeures);
// console.log("Minutes de fin de RDV : " + finRdvMinutes);
// console.log("Nombre de jours : " + finRdvJour);

// Étape 3 : Est-ce que la fin du RDV est avant la fin de la journée ?
function rdvAvantFinJournee() {
    if (finRdvJour == 0) {
        if (finRdvHeures < finJourneeHeures || finRdvHeures == finJourneeHeures && finRdvMinutes <= finJourneeMinutes) {
            console.log("RDV OK");
            rdv = true;
        } else {
            console.log("RDV impossible");
            rdv = false;
        }
    } else {
        console.log("RDV impossible");
        rdv = false;
    }
}
rdvAvantFinJournee();
// console.log(rdv);

// Étape 4 : Affichage de l'heure de fin du RDV
if (finRdvJour > 0) {
    if (finRdvJour > 1) {
        if (finRdvHeures < 10) {
            if (finRdvMinutes < 10) {
                console.log("Le RDV se terminerait dans " + finRdvJour + " jours, à " + "0" + finRdvHeures + "h0" + finRdvMinutes);
            } else {
                console.log("Le RDV se terminerait dans " + finRdvJour + " jours, à " + "0" + finRdvHeures + "h" + finRdvMinutes);
            }
        } else {
            if (finRdvMinutes < 10) {
                console.log("Le RDV se terminerait dans " + finRdvJour + " jours, à " + finRdvHeures + "h0" + finRdvMinutes);
            } else {
                console.log("Le RDV se terminerait dans " + finRdvJour + " jours, à " + finRdvHeures + "h" + finRdvMinutes);
            }
        }   
    } else {
        if (finRdvHeures < 10) {
            if (finRdvMinutes < 10) {
                console.log("Le RDV se terminerait dans " + finRdvJour + " jour, à " + "0" + finRdvHeures + "h0" + finRdvMinutes);
            } else {
                console.log("Le RDV se terminerait dans " + finRdvJour + " jour, à " + "0" + finRdvHeures + "h" + finRdvMinutes);
            }
        } else {
            if (finRdvMinutes < 10) {
                console.log("Le RDV se terminerait dans " + finRdvJour + " jour, à " + finRdvHeures + "h0" + finRdvMinutes);
            } else {
                console.log("Le RDV se terminerait dans " + finRdvJour + " jour, à " + finRdvHeures + "h" + finRdvMinutes);
            }
        }
        
    }
} else if (rdv) {
    if (finRdvMinutes < 10) {
        console.log("Le RDV se terminera à " + finRdvHeures + "h0" + finRdvMinutes);
    } else {
        console.log("Le RDV se terminera à " + finRdvHeures + "h" + finRdvMinutes);
    }
} else {
    if (finRdvMinutes < 10) {
        console.log("Le RDV se terminerait à " + finRdvHeures + "h0" + finRdvMinutes);
    } else {
        console.log("Le RDV se terminerait à " + finRdvHeures + "h" + finRdvMinutes);
    }
}


