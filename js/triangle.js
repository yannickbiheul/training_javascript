// Former un triangle avec des étoiles sur la console.

// Fonction principale
function triangle(largeurTriangle) {
    // Ajouter une ligne vide
    let ligne = "";
    // Augmenter le nombre d'étoiles
    // Créer une boucle qui déterminera le nombre de lignes
    for (let longueurLigne = 1; longueurLigne <= largeurTriangle; longueurLigne += 1) {
        // Créer une boucle qui déterminera le nombre d'étoiles
        for (let position = 0; position < longueurLigne; position += 1) {
            // Ajouter une étoile dans la ligne
            ligne += "*";
        }
        // Afficher les étoiles ajoutées dans la console
        console.log(ligne);
        // Effacer la ligne
        ligne = "";
    }
    // Diminuer le nombre d'étoiles
    // Créer une boucle qui déterminera le nombre de lignes
    for (let longueurLigne = largeurTriangle - 1; longueurLigne > 0; longueurLigne -= 1) {
        // Créer une boucle qui déterminera le nombre d'étoiles
        for (let position = 0; position < longueurLigne; position += 1) {
            // Ajouter une étoile dans la ligne
            ligne += "*";
        }
        // Afficher les étoiles ajoutées dans la console
        console.log(ligne);
        // Effacer la ligne
        ligne = "";
    }
}

triangle(3);