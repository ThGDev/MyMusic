# My Music
## Présentation
Mr et Mme Skeud, passionnés de musique depuis 40 ans, ont un projet d’application Web. Conseillés par un ami, ils souhaitent tester d’abord cette idée par un prototype de site Web statique. Ils proposent à une école un projet pédagogique consistant à faire réaliser cette première version en utilisant les langages **HTML 5**, **CSS3**, et, pourquoi pas, un zeste de **ECMA script 6**.

2 images d'aperçu sont fournies :

![Page d'accueil](https://github.com/ThGDev/MyMusic/blob/master/maquette/capt-1.jpg?raw=true)
![Page "My Artists"](https://github.com/ThGDev/MyMusic/blob/master/maquette/capt-2.jpg?raw=true)



## Jour 1 - 09/12/2020

Création d'une **maquette v. 1.0** pour la page d'accueil à l'aide de [FIGMA](https://www.figma.com/file/91sB9QX62lBYygXUc4j3z5/MyMusic?node-id=0:1) en 3 formats :

 1. Smartphone
 2. Tablette
 3. Desktop

Réflexion autour du **logo** également, puis autour de l'**ergonomie** (que mettre en avant, dans quel ordre).
→ Création *(très)* rapide du logo avec le service en ligne : [Looka](https://looka.com).

J'ai opté pour mettre en avant la recherche d'**artiste** ou de **titre**, car ça me semblait être la fonctionnalité la plus importante du projet.
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
![Arborescence du site](https://github.com/ThGDev/MyMusic/blob/master/orga_site.png?raw=true =450x)
		
Mise en place d'un repo GitHub ([Repo My Music](https://github.com/ThGDev/MyMusic) et activation de la page associée [Page GitHub My Music](https://thgdev.github.io/MyMusic))
Codage de l'**HTML** et du **CSS**.
→ J'ai, **pour un besoin de productivité**, fais le choix d'utiliser le framework CSS [Bootstrap 5.0](https://getbootstrap.com/docs/5.0/getting-started/introduction/), des bibliothèques [FontAwesome](https://fontawesome.com) et [Iconify](https://iconify.design).

## Jour 3 - 12/12/2020

Le **1er design** ne me semblait pas assez abouti, j'ai donc décidé de le **revoir entièrement** ainsi que le **logo**.
Conception de la **maquette v.1.1**. pour les 2 pages demandées, chacune aux 3 résolutions, toujours sur FIGMA.

## Jour 4 - 14/12/2020

**Mise en place** du **HTML** de la page [myartists.html](https://thgdev.github.i.o/MyMusic/myartists.html) et **refonte** complète CSS du design d'après la maquette v.1.1.
**Codage** de quelques **fonctionnalités basiques** en **JS** *(empêchement de rafraîchissement de page lors du clic sur un bouton de la page d'accueil)*.

## Jour 5 - 15/12/2020



## Jour 6 - 16/12/2020


## Fonctionnalités à venir

 - [ ] Chaque bouton/pastille d'*artiste/groupe* (cas 1) et *titre* (cas 2), lorsqu'elle sera cliquée, permettra d'aller sur une page dédiée.
→ vers la **page** de l'artiste/groupe (pour le 1er cas)
→ vers la **section** de l'album où se situe le titre dans la **page** de l'artiste/groupe (2ème cas)
		
 - [ ] La **recherche** des artistes/groupes/titres se fera en faisant appel aux [API](https://fr.wikipedia.org/wiki/Interface_de_programmation) de [MusicBrainz](https://musicbrainz.org/doc/MusicBrainz_API), [Spotify](https://developer.spotify.com/documentation/web-api/), [Deezer](https://developers.deezer.com/api) et [TuneIn](https://tunein.com/broadcasters/api/).
→ Le résultat de cette recherche s'affichera juste en dessous du bloc de recherche (sous les boutons).

 - [ ] Possibilité de **mettre en favoris** un **artiste/groupe** ou un **titre** depuis les résultats de recherche sur la page d'accueil.