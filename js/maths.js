/* MENU BURGER */

/* Déclaration des variables */
let burgerButton = document.querySelector('.burgerButton');
let burgerMenu = document.querySelector('.burgerMenu');
let span1 = document.querySelector('.span1');
let span2 = document.querySelector('.span2');
let span3 = document.querySelector('.span3');
let boutonMoyenne = document.querySelector('.moyenne');

/* Déclaration de la fonction qui switch l'ouverture du menu */
function menuOpen() {
    burgerMenu.classList.toggle('burgerMenuOpen');
    span1.classList.toggle('span1Open');
    span2.classList.toggle('span2Open');
    span3.classList.toggle('span3Open');
}

/* Ajout d'un écouteur d'événement sur le bouton Burger */
burgerButton.addEventListener('click', menuOpen);

/* Écouteurs d'événements sur les liens du menu */
boutonMoyenne.addEventListener('click', menuOpen);



// CALCUL MOYENNE

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
    // console.log(number + ", la somme est de : " + somme);
    enterNumber.value = "";
    compteur++;
}

function calculMoyenne() {
    let moyenne = somme / compteur;
    if (!moyenne) {
        result2.innerHTML = "Vous n'auriez pas oublié quelque chose ?";
    } else {
        result2.innerHTML = "La moyenne est de : " + moyenne;
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


// Conversion

let image = document.querySelector(".imagePng");
let boutonMetre = document.querySelector(".boutonCalcul");

function conversion(unite1, taux, unite2) {
    let userNumber = prompt(`Entrez un nombre`);
    let convert = userNumber * taux;
    console.log(`${userNumber} ${unite1} donne ${convert} ${unite2}.`);
}

function additionner(nombre1, nombre2) {
    nombre1 = Number(prompt("Entrez un nombre", "Votre nombre ici"));
    nombre2 = Number(prompt("Entrez un deuxième nombre", "Votre nombre ici"));
    let resultat = nombre1 + nombre2;
    alert(resultat);
}

function soustraire(nombre1, nombre2) {
    nombre1 = Number(prompt("Entrez un nombre", "Votre nombre ici"));
    nombre2 = Number(prompt("Entrez un deuxième nombre", "Votre nombre ici"));
    let resultat = nombre1 - nombre2;
    alert(resultat);
}

function multiplier(nombre1, nombre2) {
    nombre1 = Number(prompt("Entrez un nombre", "Votre nombre ici"));
    nombre2 = Number(prompt("Entrez un deuxième nombre", "Votre nombre ici"));
    let resultat = nombre1 * nombre2;
    alert(resultat);
}

function diviser(nombre1, nombre2) {
    nombre1 = Number(prompt("Entrez un nombre", "Votre nombre ici"));
    nombre2 = Number(prompt("Entrez un deuxième nombre", "Votre nombre ici"));
    let resultat = nombre1 / nombre2;
    alert(resultat);
}

function taillePoids() {
    let taille = prompt("Entrez votre taille en cm");
    let poids = prompt("Entrez votre poids en kg");
    if (taille >= 180 && poids >= 80) {
        alert("Vous êtes vachement costaud !");
    } else if(taille < 180 && poids >= 80) {
        alert("Vous êtes gros !");
    } else if(taille > 180 && poids <= 80) {
        alert("Vous êtes maigre");
    } else {
        alert("Vous n'entrez dans aucune catégorie.");
    }
}


