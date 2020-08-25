
                                        /* Affichage de plusieurs étoiles en ordre croissant */
function triangleCroissant(largeur) {
    let ligne = "";
    for (let positionLigne = 0; positionLigne < largeur; positionLigne++) {
        for (let position = 0; position <= positionLigne; position++) {
            if (position === 0) {
                ligne += "#";
            } else if (position % 2 === 0) {
                ligne+= "#";
            } else {
                ligne+= "*";
            }
            
        }
        console.log(ligne);
        ligne = "";
    }
}
// triangleCroissant(10);

                                        /* Affichage de plusieurs étoiles en ordre croissant et pairs */
function triangleCroissantPair(largeur) {
    let ligne = "";
    let compteur = 0;
    for (let positionLigne = 0; positionLigne <= largeur; positionLigne+= 2) {
        for (let position = 0; position < positionLigne; position++) {
            ligne+= "*";
            compteur++;
        }
        if (compteur > 0) {
            console.log(ligne);
        }
        ligne = "";
    }
}
// triangleCroissantPair(10);

                                        /* Affichage de plusieurs étoiles en ordre croissant et impairs */
function triangleCroissantImpair(largeur) {
    let ligne = "";
    for (let positionLigne = 1; positionLigne <= largeur; positionLigne+= 2) {
        for (let position = 1; position <= positionLigne; position++) {
            ligne+= "*";
        }
        console.log(ligne);
        ligne = "";
    }
}
// triangleCroissantImpair(9);


                                        /* Affichage de plusieurs étoiles en ordre décroissant */
function triangleDecroissant(largeur) {
    let ligne = "";
    for (let positionLigne = largeur - 1; positionLigne > 0; positionLigne--) {
        for (let position = 0; position < positionLigne; position++) {
            if (position === 0) {
                ligne += "#";
            } else if (position % 2 === 0) {
                ligne += "#";
            } else {
                ligne += "*";
            }
        }
        console.log(ligne);
        ligne = "";
    }
}
// triangleDecroissant(5);

                                        /* Affichage de plusieurs étoiles en ordre décroissant et pairs */
function triangleDecroissantPair(largeur) {
    let ligne = "";
    for (let positionLigne = largeur - 2; positionLigne > 0; positionLigne-= 2) {
        for (let position = 0; position < positionLigne; position++) {
            ligne+= "*";
        }
        console.log(ligne);
        ligne = "";
    }
}
// triangleDecroissantPair(10);

                                        /* Affichage de plusieurs étoiles en ordre décroissant et impairs */
function triangleDecroissantImpair(largeur) {
    let ligne = "";
    for (let positionLigne = largeur - 2; positionLigne > 0; positionLigne -= 2) {
        for (let position = 1; position <= positionLigne; position++) {
            ligne += "*";
        }
        console.log(ligne);
        ligne = "";
    }
}
// triangleDecroissantImpair(9);



                                        /* Affichage des 2 triangles à la suite */
/* Triangle */
function triangle(largeur) {
    triangleCroissant(largeur);
    triangleDecroissant(largeur);
}
// triangle(8);

/* Triangle Pair */
function trianglePair(largeur) {
    triangleCroissantPair(largeur);
    triangleDecroissantPair(largeur);
}
// trianglePair(10);

/* Triangle impair */
function triangleImpair(largeur) {
    triangleCroissantImpair(largeur);
    triangleDecroissantImpair(largeur);
}
triangleImpair(9);