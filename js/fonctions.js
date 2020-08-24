// Affichage un triangle sur la console

/* Affichage d'une étoile */
// function afficherEtoile() {
//     console.log("*");
// }
// afficherEtoile();

/* Affichage de plusieurs étoiles en ordre croissant */

function triangleCroissant(largeurTriangle) {
    let ligne = "";
    for (let positionLigne = 0; positionLigne < largeurTriangle; positionLigne++) {
        for (let position = 0; position <= positionLigne; position++) {
            ligne += "*";
        }
        console.log(ligne);
        ligne = "";
    }
}
// triangleCroissant(10);

/* Affichage de plusieurs étoiles en ordre décroissant */

function triangleDecroissant(largeurTriangle) {
    let ligne = "";
    for (let positionLigne = largeurTriangle; positionLigne > 0; positionLigne--) {
        for (let position = 0; position < positionLigne; position++) {
            ligne += "*";
        }
        console.log(ligne);
        ligne = "";
    }
}
triangleDecroissant(10);