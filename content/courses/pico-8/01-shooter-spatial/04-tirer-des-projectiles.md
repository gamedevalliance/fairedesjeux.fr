---
title: "Tirer des projectiles"
---

Un tir aura deux propriétés : une position X et une position Y. Pour l'instant, on n'a pas encore d'ennemis. On va donc commencer par faire avancer les projectiles à chaque frame, puis les supprimer quand ils atteignent le bord de l'écran, afin de ne pas nous retrouver avec un tableau gigantesque au bout de quelques minutes.

Mais d'abord, dessinons notre petit projectile !

![Dessin du tir](./dessin-du-tir.png)

Nous allons créer un tableau `bullets` qui contiendra tous nos projectiles. Déclarez tout d'abord le tableau dans `_init()` et laissez-le vide : on le remplira plus tard.

### La fonction de tir

![Fonction shoot](./fonction-shoot.png)

```lua
--ajouter un élément à la suite du tableau :
add(tableau, element)
```

Vous l'aurez compris : on ajoute le contenu de `bullet` dans une nouvelle cellule de notre tableau `bullets`.

![Commande Add](./commande-add.png)

On va appeler cette fonction lorsque le joueur appuie sur X. Retournez à la fonction update, dans le premier onglet (naviguez avec Ctrl+Tab et Ctrl+Shift+Tab).

![Appel de la fonction shoot](./appel-fonction-shoot.png)

### L'effet sonore