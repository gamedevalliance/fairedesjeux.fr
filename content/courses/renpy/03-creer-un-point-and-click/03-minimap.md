---
title: "La minimap"
---

```renpy
a "Maintenant, il te faudrait un endroit calme pour écrire...{w} Pourquoi ne pas utiliser la mini map pour te déplacer ?"

show screen minimap

a "Si tu clique sur un des carrés de couleurs, nous allons nous téléporter dans une nouvelle pièce, plus calme."

call screen minimap
```

```renpy
screen minimap:
    # On englobe l'imagemap dans une frame
    frame:
        xalign 1.0
        xpadding 10
        ypadding 10
        xmargin 10
        ymargin 10

        # Une image map peut contenir jusqu'à 6 images.
        # On peut y ajouter des zones cliquables (hotspot)
        # mais aussi des barres clicables (hotbar).
        # C'est un très bon moyen de créer une interface
        # comme une minimap ou un menu d'option !
        imagemap:
            ground "minimap.png"
            # Pour récupérer les coordonnées, on fait Shift+D
            # en jeu -> Sélecteur d'emplacement d'images.
            # Dans la barre de recherche on cherche minimap.png
            # puis on sélectionne la zone cliquable dans l'outil.
            hotspot (25, 6, 115, 39) action Jump("map_classe")
            hotspot (3, 45, 84, 81) action Jump("map_chambre")
            hotspot (92, 49, 40, 42) action Jump("map_magasin")
```

```renpy
label map_classe:
    scene classe with dissolve
    a "Esperons qu'aucun cours ne viendra nous déranger !"
    return

label map_chambre:
    scene chambre with dissolve
    a "On est quand même mieux chez soi !"
    return

label map_magasin:
    scene magasin with dissolve
    a "Hmmm, ce n'est pas vraiment plus calme..."
    return
```