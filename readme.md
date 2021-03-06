# My Music
## Présentation
> Mr et Mme Skeud, passionnés de musique depuis 40 ans, ont un projet d’application Web. Conseillés par un ami, ils souhaitent tester d’abord cette idée par un prototype de site Web statique. Ils proposent à une école un projet pédagogique consistant à faire réaliser cette première version en utilisant les langages **HTML 5**, **CSS3**, et, pourquoi pas, un zeste de **ECMA script 6**.

### Objectif
Proposer aux utilisateurs du site une expérience musicale, basée sur la recherche centralisée des ressources concernant les musiciens placés dans une liste de favoris.
L'utilisateur constitue donc une liste de ses artistes favoris à partir d'une recherche par nom d'artiste ou de nom de groupe, qui ira interroger les services de musique en ligne comme Spotify, TuneIn, Deezer ou MusicBrainz.

**Il est imposé :**

→ de produire un site "responsive" (s'adaptant à différentes résolutions d'écran)

→ d'utiliser un dégradé

→ de garder le nom du site (qui est une marque déposée)

**Il est attendu :**

→ un site *uniquement* statique

→ de montrer une **biographie** de l'artiste sélectionné sur la page "Mes Artistes" (voir *Jour 5*)

2 images d'aperçu sont fournies :

![Page d'accueil](https://github.com/ThGDev/MyMusic/blob/master/maquette/capt-1.jpg?raw=true)
![Page "My Artists"](https://github.com/ThGDev/MyMusic/blob/master/maquette/capt-2.jpg?raw=true)



## Jour 1 - 09/12/2020

Création d'une **maquette v. 1.0** pour la page d'accueil à l'aide de [FIGMA](https://www.figma.com/file/91sB9QX62lBYygXUc4j3z5/MyMusic?node-id=0:1) ***(cliquer pour aller voir ma maquette)*** en 3 formats :

 1. Smartphone
 2. Tablette
 3. Desktop

Réflexion autour du **logo** également, puis autour de l'**ergonomie** (que mettre en avant, dans quel ordre).

→ Création *(très)* rapide du logo avec le service en ligne : [Looka](https://looka.com).

J'ai opéré des changements par rapport à la capture d'écran fournie qui permettait la recherche soit par **nom**, soit par **groupe**, car cette différenciation de recherche ne me semblait pas cohérente (et redondante).

J'ai opté pour mettre en avant la recherche d'**artiste** ou de **titre**, car ça me semblait plus logique et être la fonctionnalité la plus importante du projet.

Il était également important de créer des boutons au visuel correspondant aux différents services de recherche proposés.
Concernant ces boutons, **seul** le bouton **deezer** est opérationnel pour la 1ère version du site. J'ai donc mis en place des "tooltips" *(nomenclature Bootstrap)* d'information.

→ La plupart des codes couleurs sont dispos là : [Brand Colors](https://brandcolors.net).

Puis ensuite, les **dernières recherches effectuées par l'utilisateur**, et enfin les **recherches les plus courantes dans la communauté**.

J'ai également pris le parti de **partager** visuellement *(code couleur différent)* chaque bloc en **2 éléments** pour mieux les distinguer :

 1. les *artistes/groupes*
 2. les *titres*

Pour les artistes/groupes, il y a une pastille en-dessous où s'inscrit le nom en relation.
Pour les titres, il y a 2 pastilles : l'une inscrit le nom de l'artiste/groupe sur fond clair, l'autre inscrit le titre sur fond vert.
Ces pastilles sont cliquables.

## Jour 2 - 10/12/2020

Finition de la maquette v1.0.
Mise en place du dossier de projet (arborescence et nom de dossiers imposés):

<img src="https://github.com/ThGDev/MyMusic/blob/master/orga_site.png" width="450" />
		
Mise en place d'un repo GitHub ([Repo My Music](https://github.com/ThGDev/MyMusic) et activation de la page associée [Page GitHub My Music](https://thgdev.github.io/MyMusic))
Codage de l'**HTML** et du **CSS**.

→ J'ai, **pour un besoin de productivité**, fais le choix d'utiliser le framework CSS [Bootstrap 5.0](https://getbootstrap.com/docs/5.0/getting-started/introduction/), des bibliothèques [FontAwesome](https://fontawesome.com) et [Iconify](https://iconify.design).

## Jour 3 - 12/12/2020

Le **1er design** ne me semblait pas assez abouti, le 1er logo créé n'était pas assez explicite, le texte trop petit, le logo trop gros, ensuite, les couleurs du site n'étaient pas très harmonisées ni dans l'air du temps. J'ai donc décidé de le **revoir entièrement** ainsi que le **logo**.

*Le 1er logo* :

<img src="https://github.com/ThGDev/MyMusic/blob/master/img/v1.0/logov1.png" width="200" />

*Le 1er design* :

<img src="https://github.com/ThGDev/MyMusic/blob/master/img/v1.0/maquette_p1_10-12-2020_9h.jpg" />

Conception de la **maquette v.1.1**. pour les 2 pages demandées, chacune aux 3 résolutions, toujours sur FIGMA.

## Jour 4 - 14/12/2020

**Mise en place** du **HTML** de la page [myartists.html](https://thgdev.github.i.o/MyMusic/myartists.html) et **refonte** complète CSS du design d'après la maquette v.1.1.
**Codage** de quelques **fonctionnalités basiques** en **JS** *(empêchement de rafraîchissement de page lors du clic sur un bouton de la page d'accueil)*.

## Jour 5 - 15/12/2020

 1. Concernant la fonctionnalité de biographie attendue, et après mûre réflexion, **j'ai pris le parti de changer ce comportement** estimant **plus pertinent** d'afficher une bio **aléatoire** afin d'inciter l'utilisateur à **découvrir** un nouvel artiste qu'il ne connaîtrait pas forcément (c'est souvent attrayant pour les fans de musique, la cible de notre site).

→ La redéfinition de cette fonctionnalité est à faire valider par le client.

 2. Test des pages sur le [validateur HTML W3C](https://validator.w3.org) : **OK**
 3. Test des pages sur le [validateur CSS W3C](https://jigsaw.w3.org/css-validator/) : des erreurs sont présentes, mais sont liées à **Bootstrap** et non à mon propre fichier de style.

 4. Modification de la maquette (uniquement la page d'accueil en version desktop pour gagner du temps) pour intégrer l'aperçu du résultat d'une recherche (artiste **ou** titre)
 5. Modification de la page d'accueil HTML pour afficher les résultats de recherche.

 → Pour le moment, les **recherches** sont **limitées** à 1 artiste/groupe et 1 titre, c'est **uniquement pour tester** la mise en page.

 → **codage** des **fonctions d'affichage** et de **vérification des champs** en JS *(au clic sur le bouton Deezer, vérifier que les 2 champs de recherche ne sont pas vides ou remplis -sinon message d'erreur, puis vérifier lequel est rempli et afficher les résultats en conséquence)*

## Jour 6 - 16/12/2020

 - Ajout de la fonctionnalité "favoris" dans les résultats de recherche
 - Ajout des tooltips sur les étoiles de favoris (soit *"Mettre en favoris"* soit *"Retirer des favoris"*)
 - Ajout du lecteur *Deezer* pour écouter un titre de l'artiste mis en avant dans la section "Bio"

## Annexe Temps

J'ai également passé un peu de temps en aide/dépannage/coaching divers.

## A FAIRE !!
*(mais absent sur maquette)*

 - [x] Rendre le logo "cliquable" → renvoi vers la page accueil
 - [x] Aperçu résultats de recherche sur page accueil
 - [x] Possibilité ajout favoris sur résultats de recherche
 - [x] Modifier "A propos" par "Qui sommes-nous" dans le footer (afin d'harmoniser avec la barre de navigation du header)
 - [x] Ajouter des Tooltips sur les étoiles de favoris (pour qu'on les remarque plus)
 - [x] Ajouter lecteur sous photo artiste "BIO" pour écouter un de ses titres.

 ## A FAIRE si possible et si temps restant

 - [ ] Tableau JSON Artistes/Groupes + Titres + images
 **OU**
 - [ ] fetch() API Deezer.
 - [ ] Boucle sur artistes/groupes/titres
 - [ ] Formulaire de contact
 - [ ] Page "A propos"

## Fonctionnalités à venir

 - [ ] Chaque bouton/pastille d'*artiste/groupe* (cas 1) et *titre* (cas 2), lorsqu'elle sera cliquée, permettra d'aller sur une page dédiée.

→ vers la **page** de l'artiste/groupe (pour le 1er cas)

→ vers la **section** de l'album où se situe le titre dans la **page** de l'artiste/groupe (2ème cas)
		
 - [ ] La **recherche** des artistes/groupes/titres se fera en faisant appel aux [API](https://fr.wikipedia.org/wiki/Interface_de_programmation) de [MusicBrainz](https://musicbrainz.org/doc/MusicBrainz_API), [Spotify](https://developer.spotify.com/documentation/web-api/), [Deezer](https://developers.deezer.com/api) et [TuneIn](https://tunein.com/broadcasters/api/).

→ Le résultat de cette recherche s'affichera juste en dessous du bloc de recherche (sous les boutons).

 - [ ] Possibilité de **mettre en favoris** un **artiste/groupe** ou un **titre** depuis les résultats de recherche sur la page d'accueil.

 - [ ] Prévoir un dark/light mode.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Light_Bulb_or_Idea_Flat_Icon_Vector.svg/20px-Light_Bulb_or_Idea_Flat_Icon_Vector.svg.png" /> *Fichier créé à l'aide de [StackEdit.io](https://stackedit.io) et modifié avec [Visual Studio Code](https://code.visualstudio.com/)*