// Former un triangle avec des étoiles sur la console.

// Fonction principale
function triangle(largeurTriangle) {
    let ligne = "";
    for (let longueurLigne = 1; longueurLigne <= largeurTriangle; longueurLigne += 1) {
        for (let position = 0; position < longueurLigne; position += 1) {
            ligne += "*";
        }
        console.log(ligne);
        ligne = "";
    }
    for (let longueurLigne = largeurTriangle - 1; longueurLigne > 0; longueurLigne -= 1) {
        for (let position = 0; position < longueurLigne; position += 1) {
            ligne += "*";
        }
        console.log(ligne);
        ligne = "";
    }
}

triangle(3);