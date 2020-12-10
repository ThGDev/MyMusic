const boutonsRech = document.querySelectorAll('button');
console.log(boutonsRech);
boutonsRech.forEach((boutons) => {
    boutons.addEventListener('click', (event) => {
        event.preventDefault();
    })
});