---
title: "Les boucles"
---

En plus des conditions, il existe d'autres structures de contrôle très communes en programmation : les boucles.

Pour faire un programme intelligent, on a les conditions, mais si on doit écrire plusieurs fois la même logique pour chaque élément d'une liste, ça va faire un peu long. C'est pourquoi on utiliser des boucles qui vont appliquer le même bout de code plusieurs fois pour tous les éléments d'une liste.

### La boucle *for in*

Imaginez que nous avons une liste d'ingrédients, et que je veux afficher dans la console chaque ingrédient. Je peux réaliser une boucle while telle que :

```lua
let ingredients = {"tomates", "concombre"}
for (ingredient in ingredients) {
    print(ingredient)
}
```

Dans cette boucle, la variable `ingredient` va prendre tour à tour la valeur de chaque élément de la liste `ingredients`, et à chaque fois appliquer le bout de code qui se trouve à l'intérieur de la boucle.

Il existe d'autres boucles du même genre, comme les boucles for et while, où l'on ne se base pas sur une liste, mais que l'on va indiquer le nombre de fois que l'on jouer la boucle. Dans tous les cas, ces instructions ont les mêmes défauts

1. ils ne sont pas très lisibles : on ne sait pas vraiment ce que va faire une boucle avant d'en lire le contenu.
2. ça ne protège pas les données initiales : vous pouvez très bien avec une boucle for, découper votre liste d'ingrédients, et dans ce cas une autre fonction qui aurait eu besoin de la liste d'ingrédients d'origine ne pourra plus fonctionner correctement.

C'est pourquoi on va regarder ensemble quelques boucles un peu plus expressives.

### Fonctions de premier ordre

Une des manières de faire des boucles de manière plus expressive est d'utiliser des fonctions de premier ordre, c'est-à-dire des fonctions qui vont prendre comme paramètre une autre fonction. Vous pouvez réaliser les votres, mais généralement, tous les langages embarquent plusieurs fonctions pré-faites pour réaliser des tâches courantes. Vérifiez ce qui est disponible dans votre langage avant de réinventer la roue !

Un premier exemple courant : la map, une fonction (ou méthode selon les langages) à laquelle on passe une structure de données -- souvent une liste -- et qui va nous renvoyer une copie de cette liste modifiée.

```js
cuttedIngredients = ingredients.map(ingredient => decouper(ingredient))
```

L'intérêt de cette fonction, c'est que la liste `ingredients` existe toujours. On a seulement réalisé une copie de celle-ci en appliquant une logique à chaque élément. Dans notre exemple, nous avons une nouvelle liste avec tous les ingrédients découpés, et si une autre fonction a besoin des ingrédients au même moment, elles ne vont pas entrer en conflit.

Très utile également : la fonction filter permet, quand on lui passe une structure de données -- souvent une liste -- de ne garder que les éléments répondant à une condition précise. Par exemple, on pourrait regarder quels ingrédients sont crus, et si la réponse est `true`, on conserve l'ingrédient.

```js
rawIngredients = ingredients.filter(ingredient => ingredient.isRaw)
```

Dernier exemple : un *reducer* permet d'accumuler une liste en une valeur finale. L'exemple le plus évident une liste de nombres que l'on additionnerait pour obtenir la valeur totale.

```js
funding = donations.reduce((a, b) => a + b)
```

:::astride
Encore une fois, l'important quand vous apprenez un langage de programmation est de vous intérésser aux différents outils disponibles, et comment ceux-ci peuvent vous aider à résoudre des problèmes spécifiques.
:::



<!--

### La boucle while

On pourrait traduire while en "tant que".

> Tant que i < 10, exécuter l'intérieur de la boucle.

```lua
i = 1
while i < 10 do
    print(i)
    i += 1 -- augmente i de 1
end
print("Fin de la boucle.")
```

Au début, `i` vaut 1, donc on peut entrer dans la boucle. A chaque fois qu'on atteint la fin de la boucle (`end`), on revient au début et on re-vérifie la condition de la boucle. Quand `i` vaudra 10, la condition sera fausse, donc on quittera la boucle.

Au final, ce programme va afficher les chiffres allant de 1 à 9 puis "Fin de la boucle." Bien sûr, si on écrivait dans le `while` une condition qui est toujours vraie, la boucle durerait indéfiniment... Il faut faire attention à ça !

Dans les boucles, il est courant d'utiliser une variable qui fait office de **compteur**, que l'on augmente à chaque passage dans la boucle afin de savoir où l'on en est. On appelle souvent ce compteur `i`, puis `j`, `k`, etc. si l'on utilise plusieurs boucles à la fois.

Dans l'exemple de la boucle while, on a créé le compteur et on a **itéré** dessus nous-même avec `i += 1`. Mais il existe une autre forme de boucle qui permet de réaliser tout ceci plus facilement : la boucle for.

### La boucle for

```lua
for i = 1, 10 do
    print(i)
end
print("Fin de la boucle.")
```

La variable `i` est créée par la boucle for et demeure **locale** à la boucle -- cela veut dire qu'elle n'existe plus une fois que l'on sort de la boucle.

On peut aussi préciser un pas (*step*) pour le compteur. Par exemple, pour que `i` avance de 2 en 2, écrire :

```lua
for i = 1, 10, 2 do
```
