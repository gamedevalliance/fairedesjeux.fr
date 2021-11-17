---
title: "Logique algorithmique"
---

Dans les vidéos précédentes, on a vu les opérateurs, les types, les fonctions et les structures de données. Mais la base de la programmation, c'est d'utiliser tous ces outils pour résoudre des problèmes. C'est ce qu'on appelle un algorithme, c'est un programme fait pour résoudre un problème.

Dans notre exemple, on va avoir un service qui va nous envoyer une liste d'animaux. Vous reconnaissez peut-être que c'est une liste contenant plusieurs fois des tableaux associatifs d'animaux comme celui de la section précédente. On a donc une liste d'animaux.

On va faire un programme qui va filtrer uniquement les chiens de ce tableau. Pour cela, nous allons utiliser une boucle `for in` qui va appliquer une logique (entre `{}`) pour chaque éléments du tableau `animals`. A chaque "tour" de la boucle, `animal` va prendre la valeur d'un animal différent de notre refuge, nous permettant de vérifier si sa race est bien `chien` :

```js
for (animal in animals) {
    if (animal.race == "chien") print("C'est un chien.")
    else print("Pas un chien.")
}
```

Il existe de nombreuses manières de répéter une action sur plusieurs éléments (boucles for, while, foreach, etc.) en fonction des langages. Par exemple, beaucoup de langage propose un fonction ou une méthode `map()` qui nous permet de créer une nouvelle liste en appliquant une fonction à chaque élément de notre ancienne liste. Dans notre cas, si l'élément (l'animal) est de race `chien` il sera ajouté à la nouvelle liste, sinon rien n'est ajouté. L'intérêt de cette approche est qu'elle conserve notre liste d'animaux initiale !

```js
let dogs = map(animals, animal => {
    if (animal.race == "dog") return animal
    else return Nothing
})
```

:::astride
Encore une fois, l'important quand vous apprenez un langage de programmation est de vous intérésser aux différents outils disponibles, et comment ceux-ci peuvent vous aider à résoudre des problèmes spécifiques.
:::

Nous avons donc mis en place un algorithme simple de filtre, mais l'on pourrait également imaginer un algorithme de tri, qui rangerait tous nos chiens dans l'ordre alphabétique de leur nom. Cela peut paraître simple, mais il existe des centaines de manières différentes d'implémenter un tel tri, des plus efficaces aux plus stupides comme le [bogosort](https://en.wikipedia.org/wiki/Bogosort).

Pour juger de la performance d'un algorithme, on peut jeter un oeil à sa complexité, aussi appelée temps de calcul. Dans le cas le plus simple, un algorithme est noté O(*n*), nous indiquant que son temps de résolution augmente linéairement avec le nombre d'éléments étudié. Mais vous verrez également des algorithmes être notés par exemple O(log *n*), indiquant que l'algorithme est performant sur de très nombreux éléments. A l'inverse, O(*n* log *n*) indique que le temps explose avec le nombre d'éléments, et qu'il faudra donc ne l'utiliser que sur de petites listes.

:::profremi
La complexité d'un algorithme peut être dure à comprendre pour un débutant, mais ce qui est important à retenir, c'est que l'on juge la performance d'un algorithme au temps qu'il met à résoudre un problème avec plus ou moins d'éléments.
:::

---

en tant qu'ingénieur pédagogique, faut-il dire liste ou tableau dans la section précédente et celle-ci ? ça doit être cohérent entre les deux

