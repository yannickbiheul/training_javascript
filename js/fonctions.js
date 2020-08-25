
/* Affichage de plusieurs étoiles en ordre croissant */
function triangleCroissant(largeur) {
    let ligne = "";
    for (let positionLigne = 0; positionLigne < largeur; positionLigne++) {
        for (let position = 0; position <= positionLigne; position++) {
            ligne+= "*";
        }
        console.log(ligne);
        ligne = "";
    }
}


/* Affichage de plusieurs étoiles en ordre décroissant */



/* Affichage des 2 triangles à la suite */

