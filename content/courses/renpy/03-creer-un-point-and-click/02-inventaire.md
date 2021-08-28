---
title: "L'inventaire"
description: "Affichez un inventaire et ajoutez des objets avec les propriétés de votre choix."
---

### Un peu de théorie

En Python, les classes sont un moyen de réunir des données. En créant une nouvelle classe, on crée un **nouveau type d'objet**. Ainsi, si nous créons une classe `Item`, nous pourrons ensuite facilement créer plein d'objets de type `Item` : chaque objet sera une **instance** de ce type.

On définit donc une classe `Item` qui permettra de créer nos objets.

```renpy
init python:
    class Item:
        def __init__(self, name, image):
            self.name = name
            self.image = image
```

La méthode `__init__()` précise ce qu'il se passe dès que l'on veut créer un nouvel objet. En créant mes objets, je devrai donc leur donner un nom et une image. Vous pourriez également demander une description, une valeur... N'importe quoi qui serait utile à votre système !

Pour créer l'objet de livre, j'écris donc :

```renpy
$ livre = Item("Livre", "livre.png")
```

Désormais, la variable `livre` contient un objet de type `Item` !

Pour ajouter cet objet à l'inventaire, il faudrait que l'inventaire existe en premier lieu. Nous pouvons définir une liste vide au début du jeu :

```renpy
$ marvin_inventory = []
```

La méthode `append()` permet d'ajouter un élément à la suite d'une liste, et `remove()` permet de le retirer. Quand on voudra ajouter l'objet contenu dans `livre`, on écrira :

```renpy
$ marvin_inventory.append(livre)
```

Au final, si vous ajoutez plusieurs objets, le contenu de `marvin_inventory` ressemblera à quelque chose comme `[livre, pomme, stylo]`. Pour afficher l'inventaire, il nous suffira de naviguer dans cette liste et d'afficher l'image associée à chaque objet.

Voici un récapitulatif de ce que nous avons appris à faire jusqu'ici :

```renpy
# Création du type d'objet Item
init python:
    class Item:
        def __init__(self, name, image):
            self.name = name
            self.image = image

define m = Character("Marvin", color="#ffc8c8")
define a = Character("Astride", color="#c8c8ff")

label start:
    # Création d'un inventaire (liste vide)
    $ marvin_inventory = []

    scene ecole with dissolve
    m "J'aimerais tant créer un visual novel..."
    show astride with dissolve
    a "Je peux t'aider si tu veux !"
    a "Pour écrire ton histoire, il te faudrait un carnet. Je crois que j'ai oublié le mien au pied de l'arbre..."

    # Création de l'Item Livre
    $ livre = Item("Livre", "livre.png")
    
    call screen livre

label livre_recupere:
    # Ajout du livre à la suite de la liste
    $ marvin_inventory.append(livre)

    a "Félicitations, tu l'as retrouvé !"
```

Si tous ces concepts sont nouveaux pour vous et vous impressionnent un peu, ne vous inquiétez pas, c'est normal. Nous allons maintenant afficher l'inventaire, et vous vous rendrez mieux compte de l'utilité de tout ce que je vous ai raconté ! Vous pourrez toujours revenir à ces explications plus tard.

### Le screen d'inventaire

Vous savez déjà comment afficher un screen. Celui-là sera visible en parallèle du reste du jeu, donc on va utiliser `show`. Pour le cacher à des moments importants du jeu, on utilisera `hide`.

```renpy
show screen inventory
```

Il ne reste plus qu'à créer ce fameux screen ! Pour aligner nos objets, nous utiliserons une **hbox**. C'est une boîte horizontale invisible, qui affiche tous les éléments qu'elle contient les uns à la suite des autres. Pratique pour éviter que les objets ne se superposent ! Vous pourriez aussi utiliser une boîte verticale avec **vbox**.

Vous vous souvenez quand nous avions créé une frame à l'étape précédente ? Ce sera pratique pour faire ressortir nos objets.

```renpy
screen inventory:
    # Dans une horizontal box...
    hbox:
        # Pour chaque item dans marvin_inventory...
        for i in marvin_inventory:
            # On crée une frame...
            frame:
                xpadding 10
                ypadding 10
                xmargin 10
                ymargin 10
                # Contenant l'image attachée à chaque item.
                add i.image size(60,60)
```

`for` est une boucle qui va parcourir la liste `marvin_inventory`. Pour chaque élément de la liste, la boucle va jouer toutes les instructions qui se trouvent à l'intérieur. `i` vaut l'élément en cours : dans notre cas, `i.image` correspond à `livre.image`, mais grâce à la boucle le système va s'adapter à n'importe quel objet.

Regardez ce qui se passe quand on possède plusieurs objets. Vous pouvez essayer rapidement en vous donnant plusieurs fois le livre. Grâce à la hbox, tous les éléments sont positionnés les uns à la suite des autres !

Vous pouvez personnaliser le padding, qui est l'espace au sein de la frame, et la margin qui est l'espace entre les frames.
