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

// Si l'heure de fin du RDV est inférieure ou égale à l'heure de fin de journée :
if (finRdvHeures <= finJourneeHeures) {
    console.log("L'heure de fin du RDV est inférieure ou égale à l'heure de fin de journée");

    // Si les minutes de fin du RDV sont supérieures ou égales aux minutes de fin de journée, mais que l'heure est inférieure :
    if (finRdvMinutes >= finJourneeMinutes && finRdvHeures <= finJourneeHeures) {
        console.log("Les minutes de fin du RDV sont supérieures ou égales aux minutes de fin de journée, mais l'heure est inférieure")
        console.log("RDV OK");

    } else if (finRdvMinutes > finJourneeMinutes && finRdvHeures >= finJourneeHeures) {
            console.log("RDV impossible");
        
    // Si les minutes de fin du RDV sont inférieures ou égales aux minutes de fin de journée, mais que l'heure est supérieure :
    } else if (finRdvMinutes <= finJourneeMinutes && finRdvHeures >= finJourneeHeures) {
        console.log("Les minutes de fin du RDV sont inférieures ou égales aux minutes de fin de journée, mais l'heure est supérieure");
        console.log("RDV OK");

    // Ses minutes de fin du RDV sont égales aux minutes de fin de journée, mais que l'heure est supérieure ou égale :
    } else if (finRdvMinutes == finJourneeMinutes && finRdvHeures >= finJourneeHeures) {
        console.log("Les minutes de fin du RDV sont égales aux minutes de fin de journée, mais l'heure est supérieure ou égale");
        console.log("RDV OK");
    } 

    // Si l'heure de fin du RDV est supérieure à l'heure de fin de journée :
} else {
    console.log("Pour l'heure on n'est pas bons !");
    console.log("RDV impossible");
}

// Étape 4 : Affichage de l'heure de fin du RDV
// console.log("Le RDV se terminera à " + finRdvHeures + "h" + finRdvMinutes);