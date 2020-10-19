---
title: "Le principe des variables"
description: "Ajoutez de l'interaction et des mécaniques de gameplay à votre jeu en utilisant les variables."
---

Dans le premier chapitre, vous avez pu réaliser un premier petit jeu qui fontionne entièrement. C'était plutôt simple, pas vrai ? Je vous propose de continuer sur cette lancée : on va voir comment ajouter de l'interaction et des mécaniques de gameplay à votre jeu, en utilisant les variables. Qu'est-ce que c'est, me dites-vous ? Vous le saurez dans un instant.

Dans Ren'Py, il y a deux langages qui se mélangent. Jusqu'ici, nous avons vu le langage propre à Ren'Py, qui propose des commandes très simples telles que `scene`, `play music`, etc. Lorsque ces commandes ne suffisent plus, on peut utiliser le Python, un langage dont vous avez peut-être entendu parler puisqu'il est utilisé dans le jeu vidéo et dans le monde scientifique par exemple. Grâce à ce langage de script, vous pouvez personnaliser votre jeu en profondeur. 

:::hypemarvin
Est-ce que je peux vraiment faire *tout ce que je veux* ?
:::

:::winkastride
Bien sûr. Tu peux créer tes propres menus, des mini-jeux, et plein d'autres choses !
:::

:::marvin
Mais est-ce que je peux faire un FPS ?!
:::

:::sighastride
...Non, Marvin, tu ne peux pas faire de FPS.
:::

:::remi
Cela dit, on pourrait y écrire des logiciels, par exemple. Savais-tu que le launcher de Ren'Py a été fait avec Ren'Py lui-même ?
:::

:::hypemarvin
Wahou ! C'est dingue !
:::

Dans ce chapitre, nous allons écrire du Python pour créer des variables. Une variable a un nom et une valeur qui est stockée à l'intérieur :

```renpy
ma_variable = valeur
```

Dit comme ça, c'est un peu... abstrait. Concrètement, vous pouvez stocker plusieurs types de valeurs dans une variable. Vous pourriez y mettre un **nombre entier** :

```renpy
niveau = 12
```

Ou bien y stocker du **texte** :

```renpy
prenom = "Aurélien"
```

Votre variable peut aussi être un **booléen**, cela signifie qu'elle peut valoir vrai ou faux (`True` ou `False`) :

```renpy
mode_tutoriel = True
```

Ce sont les trois types de variable que l'on va utiliser dans ce chapitre. Il en existe bien d'autres : les nombres décimaux, les tableaux... Mais je n'ai pas envie de vous ennuyer avec la théorie pour le moment ! Passons à la pratique !
