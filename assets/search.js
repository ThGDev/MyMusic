/* ------------------------------------
    TEMPLATE RECHERCHE ARTISTE :

    <!-- ARTISTE 1 - Image dans rep. IMG/ZIK/SEARCH/ARTISTE -->
    <div class="blocArtiste">
        <img class="img-fluid rounded" src="img/zik/search/artiste/${i}.jpg" alt="Image-Artiste">
        <a href="#"><p class="badge rounded-pill bg-secondary">${NOM_GROUPE}</p></a>
    </div>

    Nbre d'artistes par recherche : 12
----------------------------------- */

const boutonDeezer = document.querySelector('.btn-dz');
const resultatsRecherche = document.querySelector('#resultRecherche');
const resultatsRechercheArtistes = document.querySelector('#resultRechercheArtiste');
const resultatsRechercheTitres = document.querySelector('#resultRechercheTitre');
const artistes = document.querySelector('#artistes');
const inputArtiste = document.querySelector('#inputArtiste');
const inputTitre = document.querySelector('#inputTitre');
const errorMsg = document.querySelector('#errorMsg');
const nomArtiste = 'AC/DC';
const cheminImagesArtistes = 'img/zik/search/artiste/';
const cheminImagesTitres = 'img/zik/search/titre/';

// ---------------------------- POUR LES ARTISTES
const imagesArtistes = [`${cheminImagesArtistes}0.jpg`, `${cheminImagesArtistes}1.jpg`, `${cheminImagesArtistes}2.jpg`, `${cheminImagesArtistes}3.jpg`, `${cheminImagesArtistes}4.jpg`, `${cheminImagesArtistes}5.jpg`, `${cheminImagesArtistes}6.jpg`, `${cheminImagesArtistes}7.jpg`, `${cheminImagesArtistes}8.jpg`, `${cheminImagesArtistes}9.jpg`, `${cheminImagesArtistes}10.jpg`, `${cheminImagesArtistes}11.jpg`, ];


const remplissageArtistes = () => {
    imagesArtistes.forEach((image) => {
        resultatsRechercheArtistes.insertAdjacentHTML('beforeend',
        `<div class="blocRechArtiste col">
            <img class="img-fluid rounded" src="${image}" alt="Image-Artiste">
            <a href="#"><p class="badge rounded-pill bg-secondary">Titre Album</p></a>
        </div>`
        )
    })
}
remplissageArtistes();

const affichageRechercheArtistes = () => {
    artistes.style.display = 'block';
}

// ---------------------------- POUR LES TITRES
const imagesTitres = [`${cheminImagesTitres}0.jpg`, `${cheminImagesTitres}1.jpg`, `${cheminImagesTitres}2.jpg`, `${cheminImagesTitres}3.jpg`, `${cheminImagesTitres}4.jpg`, `${cheminImagesTitres}5.jpg`, `${cheminImagesTitres}6.jpg`, `${cheminImagesTitres}7.jpg`, `${cheminImagesTitres}8.jpg`, `${cheminImagesTitres}9.jpg`, `${cheminImagesTitres}10.jpg`, `${cheminImagesTitres}11.jpg`, ];


const remplissageTitres = () => {
    imagesTitres.forEach((image) => {
        resultatsRechercheTitres.insertAdjacentHTML('beforeend',
        `<div class="blocRechTitre col">
            <img class="img-fluid rounded" src="${image}" alt="Image-Titre">
            <a href="#"><span class="badge rounded-pill bg-light text-dark">Artiste</span></a>
            <a href="#"><span class="badge rounded-pill bg-success">Titre</span></a>
        </div>`
        )
    })
}
remplissageTitres();

const affichageRechercheTitres = () => {
    titres.style.display = 'block';
}

// ---------------------------- FONCTION DE TEST DE CHAMPS
//* au clic sur le bouton DEEZER :
//* si le champs "artiste" est rempli, alors j'affiche les résultats des artistes
//* si le champs "titre" est rempli, alors j'affiche les résultats des titres
//* si les 2 champs sont vides OU si les 2 champs sont remplis → MSG ERREUR

const verifChampsEtAffichage = () => {
    
    if (inputArtiste.value === '' && inputTitre.value === ''){
        artistes.style.display = 'none';
        titres.style.display = 'none';
        errorMsg.innerHTML = '<p class="alert alert-danger" role="alert">Veuillez saisir quelque chose svp !</p>';
    }
    if (inputArtiste.value !== '' && inputTitre.value !== ''){
        artistes.style.display = 'none';
        titres.style.display = 'none';
        errorMsg.innerHTML = '<p class="alert alert-danger" role="alert">Veuillez ne remplir qu\'un seul champs svp !</p>';
    }
    if(inputArtiste.value !== '' && inputTitre.value === ''){
        errorMsg.innerHTML = '';
        titres.style.display = 'none';
        affichageRechercheArtistes();
    }
    if(inputArtiste.value === '' && inputTitre.value !== ''){
        errorMsg.innerHTML = '';
        artistes.style.display = 'none';
        affichageRechercheTitres();
    }
    // else{
    //     errorMsg.innerHTML = '';
    // }
}

boutonDeezer.addEventListener('click', verifChampsEtAffichage);