// Calculer et afficher la moyenne de nombres saisis au clavier.

// Variables
let enterNumber = document.querySelector('.enterNumber');
let boutonOk = document.querySelector('.ok');
let boutonStop = document.querySelector('.stop');
let boutonReset = document.querySelector('.reset');
let result = document.querySelector('.result');
let result2 = document.querySelector('.result2');
let number;
let somme = 0;
let compteur = 0;

// Fonctions
function ajouterNombre() {
    result2.innerHTML = "";
    number = parseInt(enterNumber.value);
    result.innerHTML += number + " ";
    somme += number;
    console.log(number + ", la somme est de : " + somme);
    enterNumber.value = "";
    compteur++;
}

function calculMoyenne() {
    if (enterNumber.value) {
        let moyenne = somme / compteur;
        result2.innerHTML = "La moyenne est de : " + moyenne;
    } else {
        result2.innerHTML = "Je veux au moins un nombre !";
    }
}

function reset() {
    number = 0;
    somme = 0;
    compteur = 0;
    moyenne = 0;
    result.innerHTML = "";
    result2.innerHTML = "";
}

// Écouteurs d'événements
boutonOk.addEventListener('click', ajouterNombre);
boutonStop.addEventListener('click', calculMoyenne);
boutonReset.addEventListener('click', reset);

