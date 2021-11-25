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

```js
let ingredients = {"tomatoes", "cucumbers"}
for (ingredient in ingredients) {
    print(ingredient)
}
```

Dans cette boucle, la variable `ingredient` va prendre tour à tour la valeur de chaque élément de la liste `ingredients`, et à chaque fois appliquer le bout de code qui se trouve à l'intérieur de la boucle.

Il existe d'autres boucles similaires, comme les boucles *for* et *while* dans lesquelles on ne se base pas sur une liste, mais où l'on précise directement le nombre de fois que la boucle doit se jouer. Dans tous les cas, ces structures ont les mêmes défauts :

1. Elles ne sont pas très lisibles : on ne sait pas vraiment ce que va produire la boucle avant d'en lire le contenu.
2. Les données initiales ne sont pas protégées : on pourrait très bien, dans une boucle for, modifier la liste d'ingrédients. Alors, une autre fonction qui aurait eu besoin de la liste d'origine ne pourrait plus fonctionner correctement.

C'est pourquoi nous allons regarder ensemble quelques boucles plus expressives.

### Fonctions de premier ordre

Les fonctions de premier ordre prennent comme argument une autre fonction. Vous pouvez réaliser les vôtres, mais généralement, les langages embarquent plusieurs fonctions pré-faites pour réaliser des tâches courantes. Vérifiez ce qui est disponible dans votre langage avant de réinventer la roue !

La *map* est une fonction (ou méthode selon les langages) à laquelle on passe une structure de données — souvent une liste — et qui renvoie une copie de cette liste modifiée.

```js
function cut(item) {
    return "cut " + item
}
let cutIngredients = ingredients.map(ingredient => cut(ingredient))
```

La variable `cutIngredients` va contenir `{"cut tomatoes", "cut cucumbers"}`.

L'intérêt de la *map*, c'est que la liste `ingredients` existe toujours. On en a seulement réalisé une copie en appliquant une logique à chaque élément. Si une autre fonction a besoin des ingrédients d'origine au même moment, elles ne vont pas entrer en conflit.

Très utile également, la fonction *filter* permet, quand on lui passe une structure de données — souvent une liste — de ne garder que les éléments répondant à une condition précise. Par exemple, on pourrait ne garder que les ingrédients dont la propriété "est cru" (`isRaw`) est `true`.

```js
let ingredients = {
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

Grâce au filtre, `rawIngredients` ne contient que les tomates.

Dernier exemple : un *reducer* permet d'accumuler une liste en une seule valeur finale. On peut l'utiliser pour additionner une liste de nombres et obtenir la valeur totale.

```js
let donations = {3, 50, 10}
let funding = donations.reduce((a, b) => a + b)
```

Ici, `funding` vaut 63. Notre *reducer* a d'abord réalisé le calcul `3 + 50`, puis `53 + 10`, et aurait continué de la sorte si le tableau contenait d'autres valeurs.

Il s'agit d'un exemple très simple, mais on pourrait imaginer un *reducer* plus complexe qui récupèrerait notre liste d'ingrédients pour en faire une salade ! Le principe est toujours de transformer un groupe de valeurs en une valeur unique.
