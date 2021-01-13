---
title: "Gérer un gros projet"
description: "TODO"
---

### Soyez humbles

Tout d'abord, sachez calmer vos ardeurs. Il vaut mieux finir un petit jeu sympathique et le partager à vos amis, que de s'embourber dans un projet qui ne sera même pas finit au bout de plusieurs années. Mais si toutefois vous débordez de motivation et d'imagination, voici quelques outils qui vous simplifieront la vie.

### Versionnez votre code

Git est un outil indispensable pour un gros projet. Travail en équipe, sur le long terme.

### Apprenez Python

Même si Ren'Py est très intuitif et agréable à utiliser, Ren'Py **seul** ne saura peut-être pas vous satisfaire. La maîtrise de Python deviendra de plus en plus nécessaire pour régler les problèmes suivants :

-   optimisation (éviter le lag)
-   clarté
-   temps de développement

En Python, les classes sont un moyen de réunir des données. En créant une nouvelle classe, on crée un **nouveau type d'objet**. Ainsi, si nous créons une classe `Item`, nous pourrons ensuite facilement créer plein d'objets de type `Item` : chaque objet sera une **instance** de ce type.

### Utilisez les variables persistantes - mais pas trop

Un outil très pratique de Ren'Py est la variable `persistent`. Elle permet de garder des informations entre #TODO
Chaque variable doit avoir sa place. Il ne faut pas abuser de variables globales, de variables persistantes, ou encore de `screens` gourmands en énergie.
