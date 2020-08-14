/* Valider un rendez-vous */

// Exemple 1 : pour une durée de RDV de 15 minutes

// Début du RDV : 15h40
let debutRdvHeures = 15;
let debutRdvMinutes = 40;
console.log("Le RDV débute à " + debutRdvHeures + "h" + debutRdvMinutes);

// Fin de journée : 16h30
let finJourneeHeures = 16;
let finJourneeMinutes = 30;
console.log("La journée se termine à " + finJourneeHeures + "h" + finJourneeMinutes);

// Durée du rendez-vous 
let duree = 55;
console.log("Le RDV dure " + duree + " minutes.");

// Étape 1 : Calcul de la fin du RDV
let finRdvHeures = debutRdvHeures;
let finRdvMinutes = debutRdvMinutes + duree;
if ((duree + debutRdvMinutes) >= 60) {
    finRdvHeures += 1;
    finRdvMinutes -= 60;
    if (finRdvMinutes < 10) {
        finRdvMinutes = "0" + finRdvMinutes;
    }
}
console.log("Le RDV se termine à " + finRdvHeures + "h" + finRdvMinutes);

// Étape 3 : Est-ce que la fin du RDV est avant la fin de la journée ?
if (finRdvHeures <= finJourneeHeures) {
    console.log("Pour l'heure on est bons !");
    if (finRdvMinutes <= finJourneeMinutes) {
        console.log("Pour les minutes on est bons !");
    } else {
        console.log("Pour les minutes on n'est pas bons !");
    }
} else {
    console.log("Pour l'heure on n'est pas bons !");
}

// Étape 4 : Affichage de l'heure de fin du RDV
// console.log("Le RDV se terminera à " + finRdvHeures + "h" + finRdvMinutes);