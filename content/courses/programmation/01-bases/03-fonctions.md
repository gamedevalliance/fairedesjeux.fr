---
title: "Les fonctions"
---

Votre programme doit réaliser plusieurs fois la même série d'opérations et vous en avez marre de la réécrire à chaque fois ? Eh bien j'ai un outil très pratique pour vous, les fonctions !

Une fonction, c'est comme une machine dans laquelle on insère des arguments et qui produit un résultat. Vous pouvez donc réutiliser plusieurs fois la même fonction avec des paramètres différents !

> schéma

Concrètement, avant d'utiliser votre première fonction, il faut la créer, autrement dit la déclarer.

Déclarons une fonction qui met le nombre qu'on lui donne au carré — on va l'appeler `square()`. Entre les parenthèses, on précise que la fonction attend une valeur en argument, qui sera appelée `number` dans la logique interne.

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
Console.print(square(6)) -- affiche 36
```

Une fonction peut aussi prendre plusieurs arguments ! Nous pouvons créer la fonction `multiply()` qui prend *x* et *y*, et retourne *x* × *y*.

```ts
let multiply = (x, y) => {
  return x * y
}
```

Bien sûr, dans la vraie vie, on n'aura jamais besoin d'écrire des fonctions simples comme `square()` et `multiply()`, parce que les langages incluent déjà ce genre d'outils.

:::remi
Une fonction peut avoir plusieurs `return`, imbriqués dans des conditions par exemple. Dès que le premier `return` est atteint, la fonction s'arrête en renvoyant la valeur donnée.
:::

```ts
let isMoreThanOneHundred = (number) = {
  if(number > 100){
    return true
  }else{
    return false
  }
}
end
```

Pour finir, une fonction peut être **récursive**, c'est-à-dire qu'elle peut s'appeler elle-même.

Voici par exemple une fonction `chrono()` qui prend un entier et vérifie s'il est supérieur à 0. Si oui, la fonction affiche l'entier dans la console et attend une seconde, puis se rappelle avec comme argument l'entier − 1, et ce jusqu'à ce que l'entier atteigne 0.

```ts
let chrono = (count) => {
  if(count == 0){
    Console.print("Le chrono est terminé !")
  }else{
    Console.print(count)
    wait(1000)
    chrono(count - 1)
  }
}
```

Les fonctions récursives nous permettent de faire des boucles logiques, et nous verrons plus tard d'autres manières de créer des boucles.
