// blocage rechargement de la page lors d'un clic sur un bouton
const boutonsRech = document.querySelectorAll('#buttons button');
console.log(boutonsRech);
boutonsRech.forEach((boutons) => {
    boutons.addEventListener('click', (event) => {
        event.preventDefault();
    })
});


// Activation des tooltips Bootstrap sur boutons de recherche
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})