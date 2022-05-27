---
title: "Les boucles"
---

En plus des conditions, il existe d'autres structures de contrôle très communes en programmation : les boucles.

Nous savons désormais comment créer un tableau, mais si on devait écrire plusieurs fois la même logique pour chaque élément du tableau, notre programme serait un peu long. C'est le rôle d'une boucle, qui va appliquer le même bout de code à chaque élément d'une structure de données itérable.

:::astride
Pour les plus attentifs, on a déjà parlé des fonctions récursives qui permettent de faire des boucles. Mais dans cette section, nous allons voir d'autres outils très courants !
:::

### La boucle for in

Imaginons que nous avons une liste d'ingrédients, et que nous voulons afficher dans la console chaque ingrédient. Je peux réaliser une boucle *for in* telle que :

```ts
let ingredients = list{"tomatoes", "cucumbers"}
for (ingredient in ingredients) {
    print(ingredient)
}
```

Dans cette boucle, la variable `ingredient` va prendre tour à tour la valeur de chaque élément de la liste `ingredients`, et à chaque fois appliquer le bout de code qui se trouve à l'intérieur de la boucle. Notez que la liste se nomme `ingredients` au pluriel, mais que la variable `ingredient` (que l'on appelle un itérateur) est au singulier.

Il existe d'autres boucles similaires, comme les boucles *for* et *while* dans lesquelles on ne se base pas sur une liste, mais où l'on précise directement le nombre de fois que la boucle doit se jouer. Dans tous les cas, ces structures ont les mêmes défauts :

1. Elles ne sont pas très lisibles : on ne sait pas vraiment ce que va produire la boucle avant d'en lire le contenu.
2. Les données initiales ne sont pas protégées : on pourrait très bien, dans une boucle for, modifier la liste d'ingrédients. Alors, une autre fonction qui aurait eu besoin de la liste d'origine ne pourrait plus fonctionner correctement.

C'est pourquoi nous allons regarder ensemble quelques boucles plus expressives.

### Fonctions de premier ordre

Afin de vous faciliter le travail, les langages de programmation embarquent tout un tas de fonctions pré-faites pour réaliser des tâches courantes. Dans notre cas, nous allons nous intéresser aux fonctions de premier ordre, qui ont la particularité de prendre une autre fonction en argument. Nous allons voir que beaucoup d'entre elles peuvent remplacer les boucles traditionnelles !

Par exemple, la *map* est une fonction (ou méthode selon les langages) à laquelle on passe une structure de données itérable - c'est-à-dire une liste ou un tableau par exemple — et qui renvoie une copie de cette liste modifiée en y appliquant une fonction. Dans notre cas, nous souhaitons créer une copie de la liste `ingredients` où chaque ingrédient a été coupé avec la fonction `cut()` :

```ts
let cut = (ingredient) => {
  return "cut " + ingredient
}
let cutIngredients = ingredients.map(ingredient => cut(ingredient))
```

La variable `cutIngredients` va contenir une liste `list{"cut tomatoes", "cut cucumbers"}`.

L'intérêt de ce genre de fonction est leur expressivité : plutôt que de décrire dans une boucle for les étapes nécéssaires, on laisse le soin à la machine d'obtenir le résultat voulu de la manière la plus efficace possible. Cela rend également notre programme plus lisible, un autre développeur comprendra immédiatement l'objectif sans avoir à déchiffrer toutes les instructions d'une boucle for.

Un autre exemple serait la fonction *filter*, qui permet de filtrer une structure itérable selon une condition donnée. Concrètement, on pourrait garder uniquement les ingrédients dont la propriété "est cru" (`isRaw`) est `true`.

```ts
let ingredients = list{
  {
    name: "tomatoes",
    isRaw: true
  },
  {
    name: "roasted chicken",
    isRaw: false
  }
}
let rawIngredients = ingredients.filter(ingredient => ingredient.isRaw)
```

:::marvin
Chouette ! Grâce au filtre, j'ai pu retrouver mes tomates fraîches !
:::

Dernier exemple : un *reducer* permet de transformer une structure de donnée itérable en une seule valeur finale. On pourrait l'utiliser pour additionner un tableau de nombres et obtenir la valeur totale.

```ts
let donations = [3, 50, 10]
let fundingTotal = donations.reduce((a, b) => a + b)
```

Ici, `fundingTotal` vaut 63. Notre *reducer* a d'abord réalisé le calcul `3 + 50`, puis `53 + 10`, et aurait continué de la sorte si le tableau contenait d'autres valeurs.

Il s'agit d'un exemple très simple, mais on pourrait imaginer un *reducer* plus complexe qui récupèrerait notre liste d'ingrédients pour en faire une salade ! Le principe est toujours de transformer un ensemble de valeurs en une valeur unique.
