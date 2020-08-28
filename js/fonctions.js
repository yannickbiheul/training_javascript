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

triangle(10);


/* Affichage de plusieurs étoiles en ordre croissant et pairs */


/* Affichage de plusieurs étoiles en ordre croissant et impairs */



/* Affichage de plusieurs étoiles en ordre décroissant */


/* Affichage de plusieurs étoiles en ordre décroissant et pairs */


/* Affichage de plusieurs étoiles en ordre décroissant et impairs */




/* Affichage des 2 triangles à la suite */

//Triangle



// Triangle Pair



// Triangle impair
