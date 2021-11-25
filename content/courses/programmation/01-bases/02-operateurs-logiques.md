---
title: "Les conditions"
---

Dans la section précédente, nous avons vu le principe des variables et des opérateurs arithmétiques. C'est un bon début, mais actuellement, nos programmes ne font rien de plus qu'une calculatrice... Pour créer de véritables mécanismes, nous avons besoin d'écrire des conditions, une structure fondamentale en programmation :

> Schéma : **Si** x est vrai **alors** y **sinon** z. **Suite du programme**

```lua
number = 10
if number > 6 then
    print("Le nombre est supérieur à 6.")
else
    print("Le nombre est inférieur ou égal à 6.")
end
```

Ici, `number > 6` est une expression qui est évaluée par le programme pour valoir « vrai » ou « faux » (`true` ou `false` en anglais).

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
- `number == 5` est une **expression** qui demande « *Est-ce que* `number` *est égal à 5 ?* » et qui renvoie `true` ou `false`. On peut placer cette expression dans une condition.

Avec le double égal et le modulo, on peut savoir si un nombre est pair ou impair :

```lua
if number % 2 == O then
    print("Ce nombre est pair")
else
    print("Ce nombre est impair")
end
```

Enfin, il existe des opérateurs logiques, qui permettent de connecter plusieurs expressions. Selon les langages, ils peuvent être écrits en toutes lettres ou avec des symboles :

Opérateur | Alphanumérique | Non-alphanumérique
--- | --- | ---
`x` et `y` | `x and y` | `x && y`
`x` ou `y` | `x or y` | `x || y`
Inverse de `x` | `not x` | `!x`

Vous pouvez combiner ces opérateurs logiques et utiliser des parenthèses pour former des conditions complexes !

```lua
if (pommes > 5 and pommes < 10) or oranges != 5 then
    print("J'ai de quoi faire une tarte !")
end
```

Ce sont les opérateurs de comparaison et les opérateurs logiques qui vont permettre à votre code de réellement dépasser la calculatrice, en agissant en fonction des variables. Cela dit, pour que cela ait un intérêt, l'utilisateur devrait pouvoir agir sur le programme en écrivant lui-même les nombres.

```lua
print("Entrez un nombre.")
number = io.read() -- permet à l'utilisateur d'écrire dans la console
if number % 2 == O then
    print("Ce nombre est pair.")
else
    print("Ce nombre est impair.")
end
```

:::profremi
Quand une instruction agit sur le monde extérieur, par exemple en affichant un texte à l'écran, ou en demandant à l'utilisateur d'écrire quelque chose, on appelle cela un **effet**.
:::

Désormais, l'utilisateur peut entrer un nombre et le programme va lui répondre en fonction. C'est un exemple tout simple, mais qui vous permet de commencer à imaginer les possibilités qui s'offrent à nous !
