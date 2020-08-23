// Affichage un triangle sur la console

/* Affichage d'une étoile */
// function afficherEtoile() {
//     console.log("*");
// }
// afficherEtoile();

/* Affichage de plusieurs étoiles */
// function afficherEtoiles(nombre) {
//     let ligne = "";
//     for (let i = 0; i < nombre; i++) {
//         ligne += "*";
//     }
//     console.log(ligne);
// }
// afficherEtoiles(10);

/* Affichage de plusieurs étoiles en ordre croissant */
function croissant(nombre) {
    let etoiles = "";
    for (let ligne = 0; ligne < nombre; ligne++) {
        etoiles += "*";
        console.log(etoiles);
    }
}

croissant(5);

/* Affichage de plusieurs étoiles en ordre décroissant */
// function decroissant(nombre) {
//     let etoiles = "";
//     for (let ligne = nombre; ligne >= 0; ligne--) {
//         etoiles += "*";
//         console.log(etoiles);
//     }
// }

// decroissant(5);