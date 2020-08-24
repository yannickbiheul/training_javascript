// Affichage un triangle sur la console

/* Affichage d'une étoile */
// function afficherEtoile() {
//     console.log("*");
// }
// afficherEtoile();

/* Affichage de plusieurs étoiles en ordre croissant */

function triangle(largeurTriangle) {
    let ligne = "";
    for (let positionLigne = 0; positionLigne < largeurTriangle; positionLigne++) {
        for (let position = 0; position <= positionLigne; position++) {
            ligne += "*";
            console.log(ligne);
        }
        ligne = "";
    }
}
triangle(5);

/* Affichage de plusieurs étoiles en ordre décroissant */
