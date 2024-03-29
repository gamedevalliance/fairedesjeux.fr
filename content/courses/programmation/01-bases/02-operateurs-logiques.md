---
title: "Les conditions"
---

Dans la section précédente, nous avons vu le principe des variables et des opérateurs arithmétiques. C'est un bon début, mais actuellement, nos programmes ne font rien de plus qu'une calculatrice... Pour créer de véritables mécanismes, nous avons besoin d'écrire des conditions, une structure fondamentale en programmation.

![Représentation schématique d'une condition](./condition.png)

```ts
let number = 10
if (number > 6) {
    Console.print("Le nombre est supérieur à 6")
} else {
    Console.print("Le nombre est inférieur ou égal à 6")
}
```

Ici, `number > 6` est une **expression** qui est évaluée par le programme pour valoir « vrai » ou « faux » (`true` ou `false` en anglais).

- Si l'expression est vraie, le programme exécute l'intérieur de la condition ;
- Si l'expression est fausse, le programme exécute la branche « sinon » (`else`). On peut aussi ne pas mettre de branche `else` : dans ce cas-là, le programme passe simplement à la suite.

:::astride
Le signe `>` est un **opérateur de comparaison**. Il en existe bien sûr d'autres !
:::

Opérateur | Signification
--- | ---
`>` | Supérieur à
`>=` | Supérieur ou à égal à
`<` | Inférieur à
`<=` | Inférieur ou égal à
`==` | Égal à
`!=` | Différent de

Remarquez l'opérateur double égal `==`. Il s'écrit ainsi pour une bonne raison :

- `number = 5` est une **instruction** qui assigne la valeur 5 à la variable `number`.
- `number == 5` est une **expression** qui demande « Est-ce que `number` est égal à 5 ? » et qui renvoie `true` ou `false`. On peut placer cette expression dans une condition.

Prenons un exemple. Avec le double égal et le modulo, on peut savoir si un nombre est pair ou impair :

```ts
if (number % 2 == 0) {
    Console.print("Ce nombre est pair")
} else {
    Console.print("Ce nombre est impair")
}
```

:::remi
En effet, si on divise un nombre par 2 et qu'il reste 0, alors le nombre est pair !
:::

Enfin, il existe des **opérateurs logiques**, qui permettent de connecter plusieurs expressions. Selon les langages, ils peuvent être écrits en toutes lettres ou avec des symboles :

Opérateur | Alphanumérique | Non-alphanumérique
--- | --- | ---
`x` et `y` | `x and y` | `x && y`
`x` ou `y` | `x or y` | `x || y`
Inverse de `x` | `not x` | `!x`

Vous pouvez combiner ces opérateurs logiques pour former des conditions complexes !

```ts
if (orangesCount == 5 || (applesCount > 5 && applesCount < 10)) {
    Console.print("J'ai pile de quoi faire une tarte !")
}
```

:::oofmarvin
Est-ce que je vois flou ou il y a des parenthèses à l'intérieur de parenthèses ?
:::

:::astride
Cela permet de grouper plusieurs expressions ! Cette condition est vraie si on a 5 oranges, et sinon, elle peut aussi être vraie si on a entre 5 et 10 pommes.
:::

Ce sont les opérateurs de comparaison et les opérateurs logiques qui vont permettre à notre code de réellement dépasser la calculatrice, en agissant en fonction des variables. Cela dit, pour le moment, c'est nous qui définissons les variables de départ et le programme fera toujours la même chose. Pour que les conditions aient un intérêt, l'utilisateur devrait pouvoir agir sur le programme en écrivant lui-même les nombres.

```ts
Console.print("Entrez un nombre.")
let number = Console.input() // permet à l'utilisateur d'écrire dans la console
if (number % 2 == 0) {
    Console.print("Ce nombre est pair.")
} else {
    Console.print("Ce nombre est impair.")
}
```

:::profremi
Quand une instruction agit sur le monde extérieur, par exemple en affichant un texte à l'écran ou en demandant à l'utilisateur d'écrire quelque chose, on appelle cela un **effet**.
:::

Désormais, l'utilisateur peut entrer un nombre et le programme va lui répondre en fonction. C'est un exemple tout simple, mais qui vous permet de commencer à imaginer les possibilités qui s'offrent à nous !
