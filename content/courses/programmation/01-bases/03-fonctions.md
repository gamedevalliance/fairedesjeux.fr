---
title: "Fonctions"
---

Vous devez faire plusieurs fois dans votre programme une série d'opérations et vous en avez marre de la réécrire à chaque fois ? Eh bien j'ai un outil très pratique pour vous, les fonctions ! Une fonction, c'est comme une machine dans laquelle vous insérez des arguments et vous récupérez à la fin un résultat. Vous pouvez donc utiliser plusieurs fois une même fonction avec des paramètres différents.

Concrètement, avant d'utiliser votre première fonction, il faut la créer, c'est-à-dire la déclarer. On lui donne un nom (square, pour mettre au carré), dire les arguments qu'elle attend (x pour un nombre) à l'intérieur, on va écrire la logique (let result = x*x) et puis on va dire la valeur qu'on souhaite retourner avec return (return result).
Ici, on pourrait aller plus vite, en faisant directement return = x*x.

Après la déclaration, vous pouvez utiliser cette fonction en écrivant son nom et en lui passant des arguments, par exemple 6. Si on print le résultat, on a bien 6*6 36.

> schéma

Bien sûr, une fonction peut prendre plusieurs arguments. Je peux créer la fonction multiply, qui prend x et y, et retourne x*y. Dans la vraie vie, on n'aura jamais besoin d'écrire des fonctions simples dans le genre de square ou multiply, parce que les langages incluent déjà ce genre d'outils.

> schéma

Mais on pourrait aussi faire ce qu'on appelle des fonctions de premier ordre, c'est-à-dire des fonctions qui prennent une fonction comme argument. Par exemple, je pourrais créer une nouvelle fonction qui, quand je lui passe une liste de nombres ainsi que la fonction square, me renvoie une nouvelle liste avec tout les nombres mis au carré.

> schéma

Enfin, une fonction peut être récursive, c'est-à-dire qu'elle va s'appeler elle-même. Par exemple, on pourrait faire une fonction chrono qui prend un entier et regarde si cet entier est supérieur à 0, si oui, la fonction print l'entier dans la console et attend une seconde, puis se rappelle avec comme argument cet entier - 1. Si l'entier est égal à 0, la fonction va simplement print dans la console "le chrono est terminé".

> schéma

> (a la fin de la vidéo, liste des différents types de fonctions pour imprimer)

---

Qu'est-ce qu'une fonction ? Une fonction, c'est un outil auquel on donne des arguments, et en fonction des arguments, il va nous renvoyer une valeur. C'est un peu comme une machine avec des trous dans lesquels on met des ingrédients, et ça nous sort des résultats. 