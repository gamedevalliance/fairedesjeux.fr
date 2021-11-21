---
title: "Logique algorithmique"
---

Dans les vidéos précédentes, on a vu les opérateurs, les types, les fonctions et les structures de données. Mais la base de la programmation, c'est d'utiliser tous ces outils pour résoudre des problèmes. C'est ce qu'on appelle un algorithme, c'est un programme fait pour résoudre un problème.

Dans notre exemple, on va avoir un service qui va nous envoyer une liste d'animaux. Vous reconnaissez peut-être que c'est une liste contenant plusieurs fois des tableaux associatifs d'animaux. On a donc une liste d'animaux sur laquelle on fait une boucle *for in*.

```js
for (animal in animals) {
    if (animal.race == "chien") print("C'est un chien.")
    else print("Pas un chien.")
}
```

Notre exemple est un algorithme très simple, mais pour des problèmes plus complexes, il peut parfois exister plusieurs approches, plus ou moins intéressantes. Par exemple, on pourrait imaginer un algorithme de tri, qui rangerait tous nos chiens dans l'ordre alphabétique de leur nom. Cela peut paraître simple, mais il existe des centaines de manières différentes d'implémenter un tel tri, des plus efficaces aux plus stupides comme le [bogosort](https://en.wikipedia.org/wiki/Bogosort).

Pour juger de la performance d'un algorithme, on peut jeter un oeil à sa complexité, aussi appelée temps de calcul. Dans le cas le plus simple, un algorithme est noté O(*n*), nous indiquant que son temps de résolution augmente linéairement avec le nombre d'éléments étudié. Mais vous verrez également des algorithmes être notés par exemple O(log *n*), indiquant que l'algorithme est performant sur de très nombreux éléments. A l'inverse, O(*n* log *n*) indique que le temps explose avec le nombre d'éléments, et qu'il faudra donc ne l'utiliser que sur de petites listes.

:::profremi
La complexité d'un algorithme peut être dure à comprendre pour un débutant, mais ce qui est important à retenir, c'est que l'on juge la performance d'un algorithme au temps qu'il met à résoudre un problème avec plus ou moins d'éléments.
:::

