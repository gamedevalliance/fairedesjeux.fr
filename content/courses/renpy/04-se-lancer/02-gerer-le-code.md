---
title: "Gérer le code"
description: "Voici comment gérer le code de votre jeu Ren'Py, en utilisant un gestionnaire de versions et les fonctionnalités de Python."
---

:::astride
Maintenant, tu as tous les outils créatifs en main pour te lancer dans ton histoire !
:::

:::hypemarvin
Génial ! Je vais pouvoir créer le jeu le plus incroyable jamais écrit !
:::

:::notlikethisremi
Pas si vite ! Tu dois faire attention à bien organiser ton code si ton jeu devient plus long.
:::

:::winkastride
Voici quelques outils qui te simplifieront la vie.
:::

### Utiliser un gestionnaire de versions

Un gestionnaire de versions est un outil indispensable pour un gros projet ! Il vous permet plusieurs choses, notamment :

- Enregistrer des versions de votre code et revenir à d'anciennes versions. Très pratique pour écrire des tests puis revenir en arrière.
- Travailler à plusieurs sur les mêmes fichiers, sans craindre qu'une personne ne puisse remplacer le travail de l'autre.
- Sauvegarder une copie du projet sur Internet, sur un site spécialisé comme [GitHub](https://github.com/).

Git est un outil à utiliser en tapant des lignes de commandes dans le terminal. Ce tutoriel sur [OpenClassrooms](https://openclassrooms.com/fr/courses/5641721-utilisez-git-et-github-pour-vos-projets-de-developpement) vous explique comment utiliser git et sauvegarder votre projet sur GitHub. Si vous ne souhaitez pas vous plonger dans des opérations aussi complexes pour le moment, vous pouvez utiliser [GitHub Desktop](https://desktop.github.com/) qui permet d'utiliser git dans une interface graphique simple et intuitive !

### Aller plus loin avec Python

Dans un gros projet, vous aurez sans doute besoin d'écrire des bouts de code en Python pour ajouter de nouvelles fonctionnalités à votre jeu. Une meilleure connaissance du langage vous permettra de trouver des solutions plus efficaces à vos problèmes !

Prenons un exemple où l'on souhaite enregistrer les informations de nos personnages. Un débutant pourrait être tenté d'utiliser plein de variables :

```renpy
python:
    astride_age = 16
    astride_nom = "Astride"
    astride_genre = "Femme"
    astride_anniversaire = True
    remi_age = 16
    remi_nom = "Rémi"
    remi_genre = "Homme"
    remi_anniversaire = False
    marvin_age = 16
    marvin_nom = "Marvin"
    marvin_genre = "Homme"
    marvin_anniversaire = False

marvin "Salut, [astride_nom], bon [astride_age]ème anniversaire !"
```

En réalité, ce code pourrait être regroupé en une liste ou un dictionnaire pour chaque personnage :

```renpy
$ remi    = {"age": 16, "nom": "Remi"   , "genre": "Homme", "anniversaire": False}
$ astride = {"age": 16, "nom": "Astride", "genre": "Femme", "anniversaire": True}
$ marvin  = {"age": 16, "nom": "Marvin" , "genre": "Homme", "anniversaire": False}

m "Salut, [astride[nom]], bon [astride[age]]ème anniversaire !"
```

Le code est bien plus clair et organisé ! Cette structure de données peut également être parcourue dans une boucle for :

```renpy
python:
    for perso in [astride, marvin, remi]:
        if perso[anniversaire]:
            perso[age] += 1
            alice "Salut, [perso[nom]], bon [perso[age]]ème anniversaire !"
```

Mais au lieu d'utiliser des listes ou des dictionnaires, nous aurions également pu utiliser des classes. En somme, connaître les structures de données disponibles dans Python, tout comme les autres fonctionnalités du langage, pourrait vous rendre le développement plus agréable !

Voici quelques tutoriels sur Python :

-   [OpenClassrooms](https://openclassrooms.com/fr/courses/4262331-demarrez-votre-projet-avec-python)
-   [Documentation de Python](https://docs.python.org/fr/3/tutorial/introduction.html)
-   [Developpez.com](https://koor.developpez.com/tutoriels/python/apprendre_python_video/?page=les-bases-de-la-syntaxe-python#LI-A)

### Utiliser le linter

Si votre jeu fonctionne quand vous le testez, rien ne dit que tout marchera correctement par la suite... Vérifiez le script du jeu avec le _linter_ proposé par le launcher pour éviter de futurs bugs rapidement !

:::profremi
Le linter ne signale pas toutes les erreurs de **logique**, mais il vous aidera en détectant les erreurs de **syntaxe** !
:::

### Trouver de l'aide

Vous avez peut-être déjà constaté qu'il existe assez peu de ressources en français sur Ren'Py. Pour couronner le tout, il peut être difficile de se retrouver dans la [documentation officielle](https://renpy.org/doc/html/), très complète mais peu digeste. Heureusement, la communauté anglaise est particulièrement active sur le forum [Lemma Soft](https://lemmasoft.renai.us/). Ainsi, en décrivant ce que vous souhaitez réaliser avec les bons mots-clés sur Google, vous tomberez souvent sur des topics de ce forum proposant plusieurs solutions.

Prenez l'habitude d'écrire vos recherches en anglais, même si vous ne maîtrisez pas complètement la langue. Vous gagnerez progressivement en compréhension, ce qui vous aidera à mieux naviguer dans la documentation par la suite.

Côté francophone, la communauté est assez discrète, mais il existe tout de même quelques lieux de discussion actifs. Vous pouvez rejoindre notre [serveur Discord](https://discord.gg/RrBppaj) qui contient un salon dédié à Ren'Py, mais aussi le serveur Ren'Py France fondé par le développeur et vidéaste [Random](https://www.youtube.com/channel/UCRSMPM3J_eKN599lbRxyhrw), ou bien la communauté de [Fiction-interactive.fr](http://www.fiction-interactive.fr/), un site majeur de la fiction interactive francophone. Sur ce site, vous trouverez des tutoriels, des interviews et d'autres articles en tous genres. Notez cependant qu'ils s'intéressent davantage aux jeux purement textuels et notamment aux logiciels Inform, Ink et Twine. Un salon de leur serveur Discord est dédié à Ren'Py, mais on y trouve des discussions générales plutôt que des demandes d'aide sur des sujets techniques. C'est une communauté dédiée avant tout à l'écriture en général !
