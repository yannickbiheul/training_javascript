/* Affichage de plusieurs étoiles en ordre croissant */
function triangleCroissant(largeur) {
    let ligne = "";
    for (let positionLigne = 0; positionLigne < largeur; positionLigne++) {
        for (let position = 0; position <= positionLigne; position++) {
            ligne += "*";
        }
        console.log(ligne);
        ligne = "";
    }
}
// triangleCroissant(5);

/* Affichage de plusieurs étoiles en ordre croissant et pairs */
function triangleCroissantPair(largeur) {
    let ligne = "";
    for (let positionLigne = 2; positionLigne <= largeur; positionLigne += 2) {
        for (let position = 0; position < positionLigne; position++){
        ligne+= "*";
    }
    console.log(ligne);
    ligne = "";
    }
}
// triangleCroissantPair(20);

/* Affichage de plusieurs étoiles en ordre croissant et impairs */
function triangleCroissantImpair(largeur) {
    let ligne = "";
    for (let positionLigne = 1; positionLigne <= largeur; positionLigne += 2) {
        for (let position = 0; position < positionLigne; position++) {
            ligne+= "*";
        }
        console.log(ligne);
        ligne = "";
    }
}
// triangleCroissantImpair(23);


/* Affichage de plusieurs étoiles en ordre décroissant */
function triangleDecroissant(largeur) {
    let ligne = "";
    for (let positionLigne = largeur; positionLigne > 0; positionLigne--) {
        for (let position = 0; position < positionLigne; position++) {
            ligne+= "*";
        }
        console.log(ligne);
        ligne = "";
    }
}
// triangleDecroissant(10);

/* Affichage de plusieurs étoiles en ordre décroissant et pairs */
function triangleDecroissantPair(largeur) {
    let ligne = "";
    for (let positionLigne = largeur; positionLigne > 0; positionLigne-= 2) {
        for (let position = 0; position < positionLigne; position++) {
            ligne+= "*";
        }
        console.log(ligne);
        ligne = "";
    }
}
// triangleDecroissantPair(20);

/* Affichage de plusieurs étoiles en ordre décroissant et impairs */
function triangleDecroissantImpair(largeur) {
    let ligne = "";
    for (let positionLigne = largeur; positionLigne > 0; positionLigne-= 2) {
        for (let position = 0; position < positionLigne; position++) {
            ligne+= "*";
        }
        console.log(ligne);
        ligne = "";
    }
}
// triangleDecroissantImpair(23);



/* Affichage des 2 triangles à la suite */

//Triangle
function triangle(largeur) {
    triangleCroissant(largeur);
    triangleDecroissant(largeur);
}
// triangle(10);

// Triangle Pair
function trianglePair(largeur) {
    triangleCroissantPair(largeur);
    triangleDecroissantPair(largeur);
}
// trianglePair(20);

// Triangle impair
function triangleImpair(largeur) {
    triangleCroissantImpair(largeur);
    triangleDecroissantImpair(largeur);
}
// triangleImpair(23);