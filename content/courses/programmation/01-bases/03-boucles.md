---
title: "Les boucles"
---

En plus des conditions, il existe d'autres structures de contrôle très communes en programmation : les boucles.

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
