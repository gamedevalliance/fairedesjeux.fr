---
title: "Interagir avec des objets"
---

Au cours de cette étape, je vais vous montrer comment interagir avec le décor avec un exemple tout simple : on pourra ramasser des clés qui ouvriront des portes verrouillées. Cela vous donnera une base que vous pourrez utiliser pour créer d'autres objets avec lesquels interagir !

### Ramasser une clé

Lorsque le personnage marchera sur le sprite de clé, on fera disparaître la clé en passant au sprite suivant, situé juste à sa droite dans la spritesheet. Dessinez donc deux cases : une avec la clé, et une sans.

![Sprites de clé et placement sur la map](./sprites-cle.png)

Pour mon jeu, j'ai dessiné deux clés : une sur un piédestal pour l'intérieur de mon donjon, et une que je peux poser dans l'herbe. Vous pouvez en faire autant que vous voulez, l'essentiel étant que le sprite de clé ait le flag 1 activé, pour signifier que c'est une clé, et que le sprite suivant ne l'ait pas.

Dans l'onglet "*Map*", commençons par écrire le petit bout de code qui nous permettra de passer au sprite suivant sur la map :

![Fonction Next tile](./next-tile.png)

Quand on appellera cette fonction en donnant les coordonnées d'une case, elle récupèrera le numéro du sprite actuel avec `mget`, puis la commande `mset` remplacera ce sprite par une nouvelle valeur, `sprite + 1`.

Utilisons cela dans notre fonction de ramassage de clé :

![Fonction Pick up key](./pick-up-key.png)

Cette fonction change le tile et donne une clé au personnage, tout simplement. D'ailleurs, pensez à ajouter la valeur `keys = 0` dans `create_player()` et à créer un effet sonore !

![Effet sonore de la clé](./sfx-1.png)
*Mon effet sonore de ramassage de clé.*

### La fonction d'interaction

Pour utiliser notre nouvelle fonction de ramassage de clé, nous allons écrire une fonction d'interaction qui se jouera lorsque le joueur ou la joueuse tente de se déplacer.

![Fonction Interact](./interact.png)

`interact()` se joue à la position "*New X Y*" avant même que l'on vérifie si le personnage peut marcher sur cette case. Cela veut dire que l'on peut aussi bien interagir avec une case praticable qu'avec un obstacle en face de nous !

La fonction en elle-même vérifie si les coordonnées "*New X Y*" correspondent au flag 1, et si oui, elle lance le ramassage de clé. Prenez le temps de tester votre jeu avant de passer à la suite !

### Ouvrir une porte verrouillée

Essayons maintenant d'utiliser notre nouvelle fonction d'interaction avec un nouveau type d'objet. Les portes verrouillées porteront le flag 2, ainsi que le flag 0 pour signifier qu'on ne peut pas les traverser. Si on possède une clé, on pourra interagir avec pour les ouvrir et passer au sprite de porte ouverte qui ne porte aucun flag.

Dessinez une porte et placez-la sur votre carte :

![Sprites de porte et placement sur la map](./sprites-porte.png)

Retournez dans l'onglet "*Map*" et créez la fonction d'ouverture de porte :

![Fonction Open door](./open-door.png)

Cette fonction ressemble beaucoup à la précédente, sauf qu'elle nous enlève une clé. N'oubliez pas de créer un petit son !

![Effet sonore de la porte](./sfx-2.png)

Enfin, retournez dans la fonction d'interaction et ajoutez une nouvelle condition, qui vérifie si la case visée correspond au flag 2 et si le personnage porte au moins une clé.

![Appel d'Open door](./interact-open-door.png)
*Vous pouvez écrire la condition en une seule ligne ou bien la découper en deux comme je l'ai fait.*

### Afficher une interface

Pour mieux comprendre ce qui se passe lorsqu'on ramasse des clés, il serait bon d'afficher une interface qui donne le nombre de clés possédées. Voici le résultat que je voudrais obtenir :

![Interface en jeu](./interface.png)
*L'interface est composée de deux éléments : un sprite de clé et un texte avec des contours.*

Créez un nouvel onglet nommé "*UI*" (pour *User Interface*) et une fonction nommée `draw_ui()` que vous appellerez tout à la fin de draw.

Penchons-nous sur le sprite pour commencer. Comme le noir est une couleur transparente pour les sprites, on ne peut pas dessiner le contour... à moins de changer la couleur utilisée pour la transparence !

![Sprite de clé sur fond bleu](./sprite-cle-ui.png)

`palt(couleur, true/false)` permet de rendre une couleur transparente ou opaque lors de l'affichage d'un sprite ou de la map. Ici, je dois rendre le noir opaque et le bleu clair transparent :

![Utilisation de palt](./draw-ui.png)

`palt` est pris en compte par ce qui est dessiné ensuite, donc cela ne va pas affecter ce qui a déjà été dessiné dans cette frame. Cela dit, il faut réinitialiser les paramètres pour éviter que la prochaine frame ne les prenne en compte, et pour cela il suffit d'écrire `palt()` sans rien d'autre.

Passons au texte maintenant ! Il est composé d'un x minuscule et de la valeur de `p.keys`. Pour écrire des lettres en minuscule, passez en mode Puny Font avec Ctrl+P. Et pour combiner un texte et une variable en un seul string, utilisez `..` – pour rappel, on appelle ça la [concaténation](https://www.lua.org/pil/3.4.html).

![](./print-ui.png)

Bon, comment afficher un contour cette fois-ci... En fait, il suffit de dessiner le texte en noir plusieurs fois, tout autour du vrai texte blanc que l'on dessinera par-dessus. Je vous propose d'en faire une fonction, comme ça vous pourrez facilement créer du texte contouré à l'avenir.

![Fonction Print outline](./print-outline.png)
*Libre à vous d'améliorer cette fonction pour qu'elle prenne une couleur en argument si vous le souhaitez !*

Et voilà, mission accomplie ! Enfin... presque. Vous vous êtes peut-être aperçu·e que l'interface ne s'affiche qu'en haut à gauche de la map puis qu'elle est décalée par la caméra, comme tout le reste. Pour éviter cela, écrivez simplement `camera()` au début de `draw_ui()` – c'est le raccourci de `camera(0, 0)`, la valeur par défaut. Cela ne posera pas de problème puisque la map et le personnage ont déjà été dessinés, et la caméra sera replacée correctement au début de la prochaine frame.

J'espère que ces petites astuces vous seront utiles. Vous pouvez utiliser ce que vous avez appris dans cette étape pour ajouter d'autres objets, par exemple des potions qui donneraient des cœurs affichés sur l'interface !
