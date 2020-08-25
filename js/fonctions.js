
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
triangleCroissant(5);

/* Affichage de plusieurs étoiles en ordre décroissant */
function triangleDecroissant(largeur) {
    let ligne = "";
    for (let positionLigne = largeur - 1; positionLigne > 0; positionLigne--) {
        for (let position = 0; position < positionLigne; position++) {
            ligne+= "*";
        }
        console.log(ligne);
        ligne = "";
    }
}
triangleDecroissant(5);


/* Affichage des 2 triangles à la suite */

