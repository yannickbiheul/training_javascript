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


/* Affichage de plusieurs étoiles en ordre croissant et pairs */
function triangleCroissantPair(largeur) {
    let ligne = "";
    for (let positionLigne = 2; positionLigne <= largeur; positionLigne+= 2) {
        for (let position = 0; position < positionLigne; position++) {
            ligne+= "*";
        }
        console.log(ligne);
        ligne = "";
    }
}

/* Affichage de plusieurs étoiles en ordre croissant et impairs */
function triangleCroissantImpair(largeur) {
    let ligne = "";
    for (let positionLigne = 1; positionLigne <= largeur; positionLigne+= 2) {
        for (let position = 0; position < positionLigne; position++) {
            ligne+= "*";
        }
        console.log(ligne);
        ligne = "";
    }
}


/* Affichage de plusieurs étoiles en ordre décroissant */
function triangleDecroissant(largeur) {
    let ligne = "";
    for (let positionLigne = largeur; positionLigne > 0; positionLigne-= 1) {
        for (let position = 0; position < positionLigne; position++) {
            ligne+= "*";
        }
        console.log(ligne);
        ligne = "";
    }
}

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




/* Affichage des 2 triangles à la suite */

//Triangle
function triangle(largeur) {
    triangleCroissant(largeur);
    triangleDecroissant(largeur);
}


// Triangle Pair
function trianglePair(largeur) {
    triangleCroissantPair(largeur);
    triangleDecroissantPair(largeur);
}


// Triangle impair
function triangleImpair(largeur) {
    triangleCroissantImpair(largeur);
    triangleDecroissantImpair(largeur);
}
triangleImpair(23);