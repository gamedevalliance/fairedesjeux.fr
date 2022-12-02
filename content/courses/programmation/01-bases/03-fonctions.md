---
title: "Les fonctions"
---

Votre programme doit réaliser plusieurs fois la même série d'opérations et vous en avez marre de la réécrire à chaque fois ? Voici un outil très pratique ! Une fonction, c'est comme une machine dans laquelle on insère des arguments et qui produit un résultat. Vous pouvez réutiliser plusieurs fois la même fonction avec des arguments différents !

Concrètement, avant d'utiliser votre première fonction, il faut la créer, autrement dit la déclarer. Déclarons une fonction qui retourne le nombre qu'on lui donne au carré — on va l'appeler `square()`. Entre les parenthèses, on déclare un paramètre `number` que l'on pourra utiliser dans la logique interne.

```js
let square = (number) => {
    let result = number * number
    return result
}
```

A l'intérieur de la fonction, on écrit la logique, puis on choisit la valeur que renverra la fonction avec `return` (ici, la valeur de `result`).

On pourrait écrire cette fonction encore plus rapidement, en écrivant la logique directement dans le `return`.

```ts
let square = (number) => {
    return number * number
}
```

Une fois la fonction déclarée, vous pouvez l'appeler en écrivant son nom et en lui passant un argument, par exemple 6. Si on affiche le résultat, on a bien 6 × 6 = 36.

```ts
Console.print(square(6)) // affiche 36
```

Une fonction peut également prendre plusieurs arguments ! Nous pouvons créer la fonction `multiply()` avec les paramètres *x* et *y*, et qui retourne *x* × *y*.

```ts
let multiply = (x, y) => {
    return x * y
}
Console.print(multiply(2, 3)) // affiche 6
```

Bien sûr, dans la vraie vie, on n'aura jamais besoin d'écrire des fonctions simples comme `square()` et `multiply()`, parce que les langages incluent déjà ce genre d'outils.

:::remi
Une fonction peut avoir plusieurs `return`, imbriqués dans des conditions par exemple. Dès que le premier `return` est atteint, la fonction s'arrête en renvoyant la valeur donnée.
:::

```ts
let isMoreThanOneHundred = (number) = {
    if (number > 100) {
        return true
    } else {
        return false
    }
}
Console.print(isMoreThanOneHundred(50)) // affiche "false"
```

:::hypemarvin
Est-ce que là aussi, on pourrait écrire la logique directement dans le `return` ?
:::

:::winkastride
Bien vu ! Comme `number > 100` est une expression qui renvoie `true` ou `false`, on peut l'écrire comme ceci.
:::

```ts
let isMoreThanOneHundred = (number) = {
    return number > 100
}
Console.print(isMoreThanOneHundred(50)) // affiche "false"
```

Pour finir, une fonction peut être **récursive**, c'est-à-dire qu'elle peut s'appeler elle-même.

Voici par exemple une fonction `chrono()` qui prend un entier et vérifie s'il est supérieur à 0. Si oui, la fonction affiche l'entier dans la console et attend une seconde, puis se rappelle avec comme argument l'entier − 1, et ce jusqu'à ce que l'entier atteigne 0.

```ts
let chrono = (count) => {
    if (count == 0) {
        Console.print("Le chrono est terminé !")
    } else {
        Console.print(count)
        wait(1000) // Attend 1000 ms, donc une seconde
        chrono(count - 1)
    }
}
```

On peut ainsi appeler `chrono(10)` et le programme affichera 10, 9, 8... puis le message de fin !

:::profremi
Les fonctions récursives sont un moyen pratique et expressif de faire des boucles logiques.
:::

:::astride
Nous verrons plus tard d'autres manières de créer des boucles !
:::
