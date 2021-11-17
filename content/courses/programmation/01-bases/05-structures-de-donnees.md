---
title: "Structures de données"
---

Dans les sections précédentes, nous avons déjà manipulé des types simples comme les nombres entiers et les chaînes de caractère. Mais chaque langage de programmation propose différentes structures de données plus complexes pour répondre à de nombreux problèmes.

Imaginons que vous gérez un refuge d'animaux et vous souhaitez suivre le compte de tous vos animaux. Pour cela, vous aurez besoin d'une **liste** -- vous entendrez aussi parler de tableau ou d'array selon les langages.

```js
let refuge = ["Lynx", "Chien", "Cerf", "Vache"]
print(refuge[2]) // affiche Cerf
```

En fonction du langage de programmation, la manière dont est gérée une structure de données peut varier. Dans notre cas, nous utilisons une array qui est homogène (c'est-à-dire qu'elle ne contient que des éléments d'un même type) et indexée (chaque valeur est ordonnée en partant de 0).

:::
Comme les index commencent à 0, l'index 2 me donne le troisième élément de la liste !
:::

Plus complexe, on a les tableaux associatifs qui existent sous de nombreux noms en fonction des langages : vous entendrez parler de tables de hachage, d'associative arrays, de dictionnaires, d'objets, de map ou de record. C'est un peu comme une liste, mais où chaque valeur est associée à une clé unique. Par exemple, je pourrais créer un tableau associatif, qui va représenter un animal du refuge.

```js
let lynx = {
    name: "Biscotte",
    race: "lynx",
    age: 6
}
```

:::
Généralement, un tableau associatif est hétérogène, donc libre à vous d'y stocker toutes les informations nécessaires.
:::



On a regardé deux types de structure de données qui sont très simples et très courantes, mais en fonction des langages et des technologies que vous utiliserez, il y aura des structures de données plus compliquées ou plus originales pour répondre à des problèmes plus spécifiques. Par exemple, les tuples, qui sont comme une liste, mais dont le nombre d'éléments à l'intérieur est déjà fixé. Par exemple, notre animal de tout à l'heure va avoir des coordonnées qui vont être un tuple de deux int, x et y.

```js
let lynx = {
    name: "Biscotte",
    race: "lynx",
    age: 6,
    coord: (168, 34)
}
```

Si vous deviez retenir une chose : quand vous commencez un nouveau langage de programmation, intéressez-vous aux différentes structures de données qu'il vous propose, et les qualités et défauts de chacune.

Dans certains langages, il n'y a qu'un seul type de tableau, mais dans d'autres, vous aurez par exemple des différences entre un tableau (array) et une liste (linked list). La première étant plus performante pour retirer, ajouter et modifier des éléments, et la seconde meilleure pour faire des boucles ou des fonctions récursives. Donc si vous comprenez bien votre langage et ses possibilités, vous pourrez mettre en place plein de petites optimisations dans votre code !
