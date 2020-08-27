/* Stockage des éléments dans des variables */
let div = document.querySelectorAll('.list');
let suppr = document.querySelectorAll('.suppr');

/* Création d'une boucle pour parcourir les éléments de la NodeList */
for (let i = 0; i < suppr.length; i++) {
    suppr[i].addEventListener('click', function() {
        div[i].style.opacity = "0";
    })
}
