---
title: "Tirer des projectiles"
---

Un tir aura deux propriétés : une position X et une position Y. Pour l'instant, on n'a pas encore d'ennemis. On va donc commencer par faire avancer les projectiles à chaque frame, puis les supprimer quand ils atteignent le bord de l'écran, afin de ne pas nous retrouver avec une quantité gigantesque de projectiles au bout de quelques minutes.

Mais d'abord, dessinons notre petit projectile !

![Dessin du tir](./dessin-du-tir.png)

Nous allons créer un tableau `bullets` qui contiendra tous nos projectiles. Déclarez le tableau dans `_init()` et laissez-le vide : on le remplira plus tard.

![Déclaration du tableau bullets vide](./tableau-bullets-vide.png)

### La fonction de tir

Je vous propose de créer un nouvel onglet pour y voir plus clair, dans lequel on mettra tout ce qui concerne les balles. Si vous écrivez un commentaire à la première ligne de l'onglet, cela affichera un petit nom lorsque vous passerez la souris dessus.

Créez une fonction `shoot()` que l'on appellera dès que le vaisseau doit tirer. Cette fonction va créer une nouvelle balle à l'endroit où se situe le joueur. Définissons la balle dans un tableau :

![Fonction shoot](./fonction-shoot.png)

Vous voyez que comme pour le vaisseau, on définit une vitesse que l'on utilisera plus tard. `local` signifie que cette variable est locale : lorsque nous quitterons la fonction, elle sera détruite. C'est une bonne pratique de créer une variable locale si vous n'en avez pas besoin en dehors du bloc où vous la créez.

Nous avions préparé un tableau `bullets` pour contenir toutes nos balles. Dans PICO-8, une commande permet d'ajouter un nouvel élément à la suite d'un tableau :

```lua
add(tableau, nouvel_element)
```

Dans notre cas, on ajoute le contenu de la variable locale `bullet` dans un nouvel emplacement de notre tableau `bullets`.

![Commande Add](./commande-add.png)

Si vous avez du mal à visualiser ce que cela veut dire, imaginez qu'en jeu, si l'on tire trois fois, le tableau `bullets` contiendra quelque chose comme :

```lua
bullets = {
    {x = 20, y = 30, speed = 4},
    {x = 26, y = 43, speed = 4},
    {x = 22, y = 61, speed = 4}
}
```

Toutes les balles existantes dans le jeu sont dans le tableau. C'est pratique car pour manipuler toutes les balles d'un coup, il suffira d'accéder à ce tableau.

On va appeler la fonction `shoot()` lorsque le joueur appuie sur X. Retournez à la fonction d'update, dans le premier onglet (naviguez avec Ctrl+Tab et Ctrl+Shift+Tab).

![Appel de la fonction shoot](./appel-fonction-shoot.png)
*Maj+X affiche le symbole X.*

Tout simplement ! Vous savez maintenant écrire une fonction et l'appeler ailleurs, ce qui est très pratique pour découper son code d'une façon plus lisible.

Notez que l'on utilise `btnp()` au lieu de `btn()`. C'est le diminutif de "button pressed" : au lieu d'être tout le temps vraie tant que le bouton est appuyé, cette fonction renvoie `true` par intervalles quand le bouton est maintenu. On l'utilise généralement pour se déplacer dans un menu, mais dans notre cas, ça permet d'obtenir très simplement un tir qui fonctionne. Vous pouvez modifier la durée de l'intervalle en consultant l'explication de "btnp" dans le manuel.

### Afficher les tirs

Si vous testez le jeu maintenant, il ne devrait rien se passer de spécial. C'est parce que nous devons afficher le sprite de tir dans la fonction `_draw()`.

Afficher le sprite du vaisseau était tout simple, parce qu'il n'y en a qu'un. Mais cette fois, nous devons afficher autant de sprites qu'il y a de balles dans le tableau `bullets` ! Il peut très bien y en avoir deux, vingt, ou zéro... Nous devons donc automatiser ça.

Une boucle for permet de répéter une instruction un nombre de fois donné. Par exemple, la boucle suivante affiche le sprite 1, puis le sprite 2... jusqu'au sprite 10.

```lua
for i=1,10 do
    spr(i, 60, 60)
end
```

`i` est une variable locale qui vaudra 1, 2... jusqu'à 10 à l'intérieur de la boucle. Vous pouvez nommer `i` comme vous voulez.

Nous pouvons utiliser une boucle for pour parcourir un tableau. La boucle sera jouera une fois par élément du tableau. Chaque élément de `bullets` étant une balle, la boucle va se jouer une fois par balle !

```lua
for b in all(bullets) do
    spr(2, b.x, b.y)
end
```

Chaque balle que nous avions créée possède une valeur X et Y. C'est pour ça que l'on peut les afficher au bon endroit.

Testez le jeu, et... les balles s'affichent, mais restent immobiles à l'endroit où elles ont été tirées. Nous avons fait le plus gros du travail ! Il faut maintenant les faire avancer.

### Déplacer les projectiles

### L'effet sonore

Un tir de vaisseau spatial sans son "piou piou", ce n'est pas un vrai tir ! Dans PICO-8, il est très facile de créer des sons et des musiques, même si vous n'y connaissez rien. Cliquez sur l'avant-dernière icône pour ouvrir l'éditeur de son.

![Editeur de son de PICO-8](./editeur-de-son.png)

Dessinez dans le cadre noir et appuyez sur Espace pour jouer le son. Vous allez voir, c'est magique !

N'hésitez pas à essayer les 8 différents instruments. Pour changer l'instrument des notes déjà dessinées, faites Shift+Clic sur l'instrument.

En haut à gauche, c'est le numéro du son que vous éditez. A côté, vous pouvez changer la vitesse du son avec le clic gauche et le clic droit. Pour un effet sonore, la vitesse doit être très rapide, tandis que pour une mélodie, elle doit être plus lente.

En bas de l'écran, vous pouvez modifier le volume. Baisser le volume à zéro supprime la note. Pour un bon son de tir, vous pouvez essayer d'avoir un volume assez fort au début, puis qui diminue au fil du temps.

![Son de tir finalisé](./son-de-tir.png)

Dans la fonction `shoot()`, jouez le son numéro 0 avec `sfx(0)`. Essayez-le jeu, et vous allez voir : ça change tout !
