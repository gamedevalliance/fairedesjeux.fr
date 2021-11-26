---
title: "Structures de données"
---

Dans les sections précédentes, nous avons déjà manipulé des types de variable simples comme les nombres entiers et les chaînes de caractère. Chaque langage de programmation propose d'autres structures de données plus complexes pour répondre à de nombreux problèmes.

Imaginons que vous gérez un refuge d'animaux et que vous souhaitez suivre le compte de tous vos animaux. Pour cela, vous aurez besoin d'un **tableau**, ou *array* en anglais.

```ts
let animals = ["Lynx", "Chien", "Cerf", "Vache"]
Console.print(animals[2]) // affiche Cerf
```

:::remi
Comme les index commencent à 0, l'index 2 donne le troisième élément du tableau !
:::

Selon le langage, la manière dont est gérée une structure de données peut varier. Dans notre cas, nous utilisons un tableau homogène (il ne contient que des éléments d'un même type) et indexé (chaque valeur est ordonnée en partant de 0).

Dans certains langages, il existe également la **liste** (ou *linked list*). Très semblable au tableau, elle est par contre plus rapide à parcourir et sera par exemple idéale dans vos fonctions récursives. Le tableau, quant à lui, est plus performant pour ajouter, modifier ou retirer des éléments. Idéal pour stocker des informations !

```ts
let animals = list{"Lynx", "Chien", "Cerf", "Vache"}
Console.print(animals[2]) // affiche Cerf
```

:::winkastride
Donc si vous comprenez bien votre langage et ses possibilités, vous pourrez mettre en place plein de petites optimisations dans votre code !
:::

Plus complexes, les **tableaux associatifs** existent sous de nombreux noms et formes en fonction des langages : vous entendrez parler de tables de hachage, d'*associative arrays*, de dictionnaires, d'objets, de *map* ou de *record*. C'est comme un tableau, sauf que chaque valeur est associée à une clé unique. Par exemple, nous pouvons utiliser un objet pour représenter un animal du refuge :

```ts
let lynx = {
  name: "Biscotte",
  race: "lynx",
  age: 6
}
```

:::profremi
Généralement, un tableau associatif (ou dictionnaire) est homogène, mais un objet (ou *record*) est hétérogène. Donc libre à vous d'y stocker toutes les informations nécessaires !
:::

En fonction des langages et des technologies que vous utiliserez, il y aura parfois des structures de données plus compliquées ou plus originales pour répondre à des problèmes plus spécifiques. Par exemple, les **tuples**, qui sont comme une liste, mais dont le nombre d'éléments à l'intérieur est déjà fixé. Notre animal peut avoir des coordonnées qui seront un tuple de deux nombres entiers, *x* et *y*.

```ts
let lynx = {
  name: "Biscotte",
  race: "lynx",
  age: 6,
  coord: (168, 34)
}
```

Chaque langage de programmation vous propose des structures de données différentes, avec leurs qualités et leurs défauts... Prenez le temps de vous y intéresser !
