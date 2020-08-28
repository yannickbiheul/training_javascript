let div = document.querySelectorAll('.list');
let suppr = document.querySelectorAll('.suppr');

for (let i = 0; i < suppr.length; i++) {
    suppr[i].addEventListener('click', function() {
        div[i].style.opacity = "0";
    })
}