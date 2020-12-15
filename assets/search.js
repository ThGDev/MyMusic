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
const resultatsRechercheArtistes = document.querySelector('#resultRechercheArtiste');
const artistes = document.querySelector('#artistes');
const nomArtiste = 'AC/DC';
const cheminImagesArtistes = 'img/zik/search/artiste/';
const cheminImagesTitres = 'img/zik/search/titre/';
const nbreArtistesAffiches = 12;

// ---------------------------- POUR LES ARTISTES
const imagesArtistes = [`${cheminImagesArtistes}0.jpg`, `${cheminImagesArtistes}1.jpg`, `${cheminImagesArtistes}2.jpg`, `${cheminImagesArtistes}3.jpg`, `${cheminImagesArtistes}4.jpg`, `${cheminImagesArtistes}5.jpg`, `${cheminImagesArtistes}6.jpg`, `${cheminImagesArtistes}7.jpg`, `${cheminImagesArtistes}8.jpg`, `${cheminImagesArtistes}9.jpg`, `${cheminImagesArtistes}10.jpg`, `${cheminImagesArtistes}11.jpg`, ];
// console.log(images);

const remplissageArtistes = () => {
    imagesArtistes.forEach((image) => {
        resultatsRechercheArtistes.insertAdjacentHTML('beforeend',
        `<div class="blocRechArtiste col">
            <img class="img-fluid rounded" src="${image}" alt="Image-Artiste">
            <a href="#"><p class="badge rounded-pill bg-secondary">${nomArtiste}</p></a>
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
console.log(images);

const remplissageTitres = () => {
    imagesTitres.forEach((image) => {
        resultatsRechercheArtistes.insertAdjacentHTML('beforeend',
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

// boutonDeezer.addEventListener('click', affichageRechercheArtistes);