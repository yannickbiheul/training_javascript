/* Affichage de plusieurs étoiles en ordre croissant */
function triangle(largeur) {
    let ligne = "";
    for (let positionLigne = 0; positionLigne < largeur; positionLigne++) {
        for (let position = 0; position <= positionLigne; position++) {
            ligne+= "* " + (position + 1) + " ";
        }
        console.log(ligne);
        ligne = "";
    }
}



/* Affichage de plusieurs étoiles en ordre croissant et pairs */
function triangleCroissantPair(largeur) {
    let ligne = "";
    for (let positionLigne = 0; positionLigne <= largeur; positionLigne+= 2) {
        for (let position = 0; position < positionLigne; position++) {
            ligne+= "*";
        }
        if (positionLigne > 0) {
            console.log(ligne + " " + positionLigne);
        }
        ligne = "";
    }
}
triangleCroissantPair(20);

/* Affichage de plusieurs étoiles en ordre croissant et impairs */



/* Affichage de plusieurs étoiles en ordre décroissant */


/* Affichage de plusieurs étoiles en ordre décroissant et pairs */


/* Affichage de plusieurs étoiles en ordre décroissant et impairs */




/* Affichage des 2 triangles à la suite */

//Triangle



// Triangle Pair



// Triangle impair
