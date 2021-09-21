---
title: "A quoi ressemble un programme ?"
---

Qu'est-ce qu'un programme tout simple ? C'est une série d'ordres qui part du haut vers le bas, et que la machine exécute une par une pour faire une tâche.

Exemple je vais écrire un programme tout simple, où je vais créer une variable (jespliquerai plus tard ce que c'est exactement) avec le texte 'bjr gda' et je vais l'afficher dans la console. Mon programme c'est deux ordres : 1 créer une variable : c'est comme une boite dans laquelle on va mettre une donnée, ici un texte, et on va lui donner un nom, une étiquette, ici montexte. Une variable c'est une boite qui a un nom (un identifiant) et une valeur. Dans certains cas, une fois défini, on ne peut pas changer la valeur de la variable, et dans ce cas là on appelle ça une constante.

> Des boites avec une animation que les trucs rentrent dedans, et quand c'est une constante, la boite se ferme

Une variable peut contenir différentes choses, comme un nombre entier ou un texte par exemple. On appelle ça le type de la variable. Dans certains langages de programmation, une fois le type d'une variable défini, il ne peut plus changer : vous ne pouvez remplacer un nombre entier que par un autre nombre entier.

Comme en maths, on peut agir sur ces variables avec des opérateurs comme l'addition, soustraction, multiplication. Par exemple, je crée deux variables de chiffre, et après result multiplie les deux variables. Si je print result je vois le résultat.

> Schéma

Bien sur il y a tous les opérateurs que vous connaissez, masi en prog il nous arrive d'utiliser des opérateurs un peu plus originaux. Un exemple assez courant, c'est le modulo. Le modulo fait une division et récupère le reste de la division. Si je fais 10 modulo 5, il y a 2*5 dans 10, et il n'y a aucun reste : mon modulo renvoie 0. Mais si je fais 11 modulo 5, il reste 1 et mon modulo renvoie 1.

Concrètement, cela permet de faire des boucles. Imaginez que vous avez un plateau de jeu de l'oie avec 10 cases numérotées de 0 à 9. Quand vous dépassez la 9e case, vous recommencez à 0. Un joueur va lancer un dé, et vous voulez savoir sur quelle case il va arriver. En mettant le résultat du jet de dé modulo 9, vous obtiendrez la bonne case. < Exemple >
