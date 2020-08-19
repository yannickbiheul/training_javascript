function exercice8(prochainClient) { 
    let poidsClient = prochainClient;
    let sommePoidsPourCeTour = 0;
    let nombreDeTours = 0;
    // Comment faire ma boucle ici ?
    for (let compteurPoids = prochainClient; compteurPoids <= 100; compteurPoids += 10) {
        sommePoidsPourCeTour += 1;
        console.log("On ajoute " + compteurPoids);
    }
    if (nombreDeTours === 0 || nombreDeTours === 1) {
        console.log(nombreDeTours + " tour");
    } else {
        console.log(nombreDeTours + " tours");
    }
} 

exercice8(10);