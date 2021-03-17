---
title: "Gérer un gros projet"
description: "TODO"
---

Maintenant que vous avez tous les outils de code et créatifs en main, vous vous dites sûrement : _"Je vais pouvoir écrire le projet le plus incroyable jamais écrit !"_

Mais **comment gérer un gros projet ?**

### Soyez humbles

Tout d'abord, sachez calmer vos ardeurs. Il vaut mieux finir un petit jeu sympathique et le partager à vos amis, que de s'embourber dans un projet qui ne sera même pas fini au bout de plusieurs années.

Si toutefois vous débordez de motivation et d'imagination, voici quelques outils qui vous simplifieront la vie.

### Versionnez votre code

[Git](https://openclassrooms.com/fr/courses/5641721-utilisez-git-et-github-pour-vos-projets-de-developpement) est un outil **indispensable** pour un gros projet. Il permet de faire du "contrôle de version", c'est à dire qu'il permet de revenir à une certaine version de votre code, quand vous voulez ! Pratique pour éviter de "casser" votre VN en ajoutant une fonctionnalité qui s'avère être une mauvaise idée. Cela permet aussi d'éviter de laisser traîner des `eileen "test"`, `jump label_test` ou autres bêtises liées au débugage de votre jeu, partout dans votre code.

Cela permet en plus de travailler en continu en equipe, chacun pouvant ajouter de petites ameliorations au fur et a mesure tres simplement : fini l'envoi de fichiers par mail ou lien Drive !

### Faites des sauvegardes

Parce qu'on ne le répètera jamais assez... Utilisez une cle USB, un disque dur externe, un service d'hébergement de fichiers en ligne (Drive, OneDrive, NextCloud...), ou Git.

> Pour ceux qui utilisent Git, les sauvegardes se font automatiquement avec GitHub ou GitLab, votre projet est déjà à l'abri !

### Apprenez Python

Même si Ren'Py est très intuitif et agréable à utiliser, Ren'Py **seul** ne saura peut-être pas vous satisfaire. La maîtrise de Python deviendra de plus en plus nécessaire pour régler les problèmes suivants :

-   optimisation (éviter le lag)
-   clarté du code
-   temps de développement

Par exemple, il peut être plus utile d'utiliser une liste ou un dictionnaire que 10 variables.

```renpy
# Version 1 (mauvaise)
python:
    astride_age = 16
    astride_nom = "Astride"
    astride_genre = "Femme"
    astride_anniversaire = True
    remi_age = 16
    remi_nom = "Remi"
    remi_genre = "Homme"
    remi_anniversaire = False
    marvin_age = 16
    marvin_nom = "Marvin"
    marvin_genre = "Homme"
    marvin_anniversaire = False

marvin "Salut, [astride_nom], bon [astride_age]ème anniversaire !"

```

On peut tout regrouper sous une seule variable `astride`. Cela est tres utile si Astride a plein d'attributs, et s'il y a plusieurs personnages par exemple.

```renpy
# Version 2 (bien meilleure !)

$ remi    = {"age": 16, "nom": "Remi"   , "genre": "Homme", "anniversaire": False}
$ astride = {"age": 16, "nom": "Astride", "genre": "Femme", "anniversaire": True}
$ marvin  = {"age": 16, "nom": "Marvin" , "genre": "Homme", "anniversaire": False}

m "Salut, [astride[nom]], bon [astride[age]]ème anniversaire !"
```

Cela permet de garder un code bien plus organisé. On peut faire des choses comme cela après :

```renpy
python:
    for perso in [astride, marvin, remi]: # on regarde chaque personnage
        if perso[anniversaire]: # pareil que `perso[anniversaire] == True`
            perso[age] += 1 # si c'est son anniversaire, on augmente son age d'un an
            eileen "Salut, [perso[nom]], bon [perso[age]]ème anniversaire !" # et on lui souhaite un bon anniversaire bien sur !
```

Je vous laisse faire l'equivalent avec le premier code, vous n'y arrivez pas en moins de 20 lignes... Une autre facon de faire cela correctement aurait été d'utiliser des classes. Vous pouvez faire l'exercice si vous le souhaitez !

Il existe plein de tutoriels pour Python sur internet. En voici quelques-uns.

-   https://openclassrooms.com/fr/courses/4262331-demarrez-votre-projet-avec-python
-   https://docs.python.org/fr/3/tutorial/introduction.html
-   https://koor.developpez.com/tutoriels/python/apprendre_python_video/?page=les-bases-de-la-syntaxe-python#LI-A

### Utilisez les variables persistantes - mais pas trop

Un outil très pratique de Ren'Py est la variable `persistent`. Elle permet de garder des informations entre differentes sauvegardes, a travers les differentes parties du joueur !

N'oubliez pas que chaque variable doit avoir sa place. Il ne faut pas abuser des variables globales, de variables persistantes, ou encore de `screens` gourmands en énergie (en avoir un ou quelques uns à l'écran simultanément, c'est bien, mais pas plus de 5-6).
