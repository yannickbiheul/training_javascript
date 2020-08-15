/* Valider un rendez-vous */

// Exemple 1 : pour une durée de RDV de 15 minutes

// Fin de journée : 16h30
let finJourneeHeures = 16;
let finJourneeMinutes = 30;
console.log("La journée se termine à " + finJourneeHeures + "h" + finJourneeMinutes);

// Début du RDV : 15h40
let debutRdvHeures = 15;
let debutRdvMinutes = 40;
console.log("Le RDV débute à " + debutRdvHeures + "h" + debutRdvMinutes);

// Durée du rendez-vous 
let duree = 25;
console.log("Le RDV dure " + duree + " minutes.");

// Étape 1 : Calcul de la fin du RDV
finRdvHeures = debutRdvHeures;
finRdvMinutes = debutRdvMinutes + duree;
if (finRdvMinutes >= 60) {
    finRdvHeures += 1;
    finRdvMinutes -=60;
}
console.log("Heure de fin de RDV : " + finRdvHeures);
console.log("Minutes de fin de RDV : " + finRdvMinutes);

// Étape 3 : Est-ce que la fin du RDV est avant la fin de la journée ?
if (finRdvHeures < finJourneeHeures || finRdvHeures == finJourneeHeures && finRdvMinutes < finJourneeMinutes) {
    console.log("RDV OK");
} else {
    console.log("RDV impossible");
}

// Étape 4 : Affichage de l'heure de fin du RDV
if (finRdvMinutes < 10) {
    console.log("Le RDV se terminera à " + finRdvHeures + "h0" + finRdvMinutes);
} else {
    console.log("Le RDV se terminera à " + finRdvHeures + "h" + finRdvMinutes);
}
