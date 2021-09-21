---
title: "Structures de données"
---

structures de données
-> exemples simples : array, dictionnaire (map / associative array)
-> exemple avancé : tuples ou variant (type somme)
-> tous les langages n’ont pas les mêmes, mais y a des trucs utiles

Dans la première vidéo, nous avions déjà parlé de types simples comme les nombres entiers et les chaînes de caractère, mais pour réaliser un programme complexe, nous avons besoin de stocker des données plus complexes. Par exemple, dans la partie précédente, nous avons mentionné une liste de nombres.

Il existe ainsi différentes structures de données, chacune permettant d'enregistrer des données différentes et de répondre à des problèmes différents. Tous les langages n'ont pas les mêmes.

L'exemple le plus simple, c'est une liste, mais vous entendrez aussi parler de tableau ou d'array en fonction des langages. Généralement, une liste est une série de données du même type, par exemple, une liste de nombres entiers. Dans la majorité des langages, les listes ont des index, par exemple je peux obtenir le 3eme élément d'une liste.

> Schéma

Plus complexe, on a les tableaux associatifs qui existent sous de nombreux noms en fonction des langages, vous entendrez parler d'associative arrays, de dictionnaires, d'objets, de map ou de record.

C'est un peu comme une liste, mais où chaque valeur est associée à une clé unique, et que les valeurs n'ont pas d'ordre précis, il n'y a donc pas d'index. Par exemple, je pourrais créer un tableau associatif, qui va représenter une personne. prenom = Aurélien : on a une clé prénom, et une valeur qui est une chaine de caractère. age = 24 : la valeur d'age est un nombre entier. Un tableau associatif n'a pas besoin d'être homogène : toutes les valeurs n'ont pas besoin d'être du même type.

> Schéma

On a regardé deux types de structure de données qui sont très simples et très courantes, mais en fonction des langages et des technologies que vous utiliserez, il y aura des structures de données plus compliquées ou plus originales pour répondre à des problèmes plus spécifiques. Par exemple, les tuples, qui sont comme une liste, mais dont le nombre d'éléments à l'intérieur est déjà fixé. Par exemple, notre personnage de tout à l'heure va avoir des coordonnées qui vont être un tuple de deux int, x et y.

> Schéma

Retenez que quand vous commencez un nouveau langage, il est intéressant de se renseigner sur les différentes structures de données qu'il vous propose, et les qualités et défauts de chacune.

Dans certains langages, il n'y a qu'un seul type de tableau, mais dans d'autres, vous aurez par ex des différences entre un tableau (array) et une liste (linked list). La première étant plus performante pour retirer, ajouter et modifier des éléments, et la seconde meilleure pour faire des boucles ou des fonctions récursives. Donc si vous comprenez bien votre langage et ses possibilités, vous pourrez mettre en place plein de petites optimisations dans votre code !
