---
title: "Déplacements au pixel près sur la carte"
description: "Comment déplacer son personnage pixel par pixel tout en respectant les collisions de la carte ? C'est ce que nous allons voir dans cette étape !"
---

Dans le chapitre sur le shooter, nous avons vu comment nous déplacer pixel par pixel, mais sans collision sur la carte. Dans le chapitre du jeu d'aventure, nous avons vu comment avoir des collisions sur la carte avec un déplacement case par case. Mais comment mêler le meilleur des deux mondes, autrement dit déplacer son personnage pixel par pixel tout en respectant les collisions sur la grille de la carte ? C'est ce que nous allons voir dans cette étape !

Dans cette démo, mon personnage est moins large qu'une case ; vous pouvez donc vous déplacer de gauche à droite dans le petit couloir !

<iframe width="538" height="539"
  src="/jeux-pico-8/demo-deplacement-pixel-simple/index.html">
</iframe>

Vous pouvez lire le contenu complet de cette cartouche [à cette adresse](https://github.com/aureliendossantos/pico-8-sample-games/blob/master/basic-pixel-movement-on-map.p8). Notez que pour plus de clarté, le code a été écrit dans un éditeur externe et les lignes sont trop longues pour être agréables à lire dans la fenêtre de PICO-8. Cela n'empêche pas le jeu de fonctionner parfaitement !

Pour commencer, préparez un nouveau projet en réalisant quelques sprites, dont un obstacle avec le flag 0, puis dessinez-les sur la carte. Notre game loop sera toute simple :

```lua
function _init()
	create_player()
end

function _update()
	player_movement()
end

function _draw()
	cls()
	map()
	spr(p.sprite, p.x, p.y)
end
```

Le personnage aura de nouvelles propriétés. La largeur de mon sprite est de 7 pixels et et sa hauteur est de 8, mais vous pouvez changer ces valeurs librement en fonction de la taille de votre sprite : vous n'êtes plus contraint·e par la grille de la carte !

```lua
function create_player()
	p = {
		x = 24, y = 24, -- position au pixel près
		dx = 0, dy = 0, -- vitesse actuelle du perso
		sprite = 6,
		speed = 1,
		w = 7, h = 8 -- largeur et hauteur
	}
end
```

Notez que pour trouver le point à droite et en bas du sprite, il faudra faire `p.x+p.w-1` et `p.y+p.h-1`, sinon, on sera un pixel trop loin. Souvenez-vous en !

C'est dans la fonction `player_movement()` que se déroulera toute la magie du système. On commence par changer la vitesse du personnage d'après les touches appuyées :

```lua
function player_movement()
	if (btn(⬅️)) p.dx -= p.speed
	if (btn(➡️)) p.dx += p.speed
	if (btn(⬆️)) p.dy -= p.speed
	if (btn(⬇️)) p.dy += p.speed
```

Ensuite, on vérifie si on peut bouger à l'endroit souhaité en donnant à une fonction `can_move()` un carré qui représente la hitbox du personnage. `can_move()` prendra donc quatre arguments : un point x, y ainsi que la largeur et la hauteur du carré.

```lua
	if can_move(p.x+p.dx, p.y, p.w, p.h) then
		p.x += p.dx
	end

	if can_move(p.x, p.y+p.dy, p.w, p.h) then
		p.y += p.dy
	end

	p.dx, p.dy = 0, 0 -- Ceci est une affectation multiple en une ligne !
end
```

On vérifie la direction x et y séparément afin de ne pas être stoppé net si une seule des directions est bloquée. Cela nous permet de longer les murs quand on se déplace en diagonale ! A la fin, on remet la vitesse à 0.

Revenons à `can_move()`. Cette fonction prend le rectangle qu'on lui donne en argument (x, y, largeur, hauteur) et vérifie, pour chaque coin du rectangle, si un tile avec le flag 0 s'y trouve.

```lua
function can_move(x, y, w, h)
	if (check_obstacle(x, y)) return false         -- coin haut-gauche
	if (check_obstacle(x+w-1, y)) return false     -- coin haut-droite
	if (check_obstacle(x, y+h-1)) return false     -- coin bas-gauche
	if (check_obstacle(x+w-1, y+h-1)) return false -- coin bas-droite
	return true
end
```

Dès que le programme atteint un `return`, on sort de la fonction et le reste n'est pas joué. Si on est arrivé jusqu'en bas, c'est qu'aucun coin n'était sur un obstacle, donc on peut `return true` !

La fonction `check_obstacle(x, y)` prend un pixel sur la map, trouve la case correspondante sur la carte et renvoie `true` si son sprite a le flag 0.

```lua
function check_obstacle(x, y)
	local map_x = flr(x/8)
	local map_y = flr(y/8)
	local sprite = mget(map_x, map_y)
	return fget(sprite, 0)
end
```

En écrivant tout ceci, vous devriez avoir reproduit l'exemple ci-dessus !

Cette méthode suffira pour certains jeux, mais se révèle trop imprécise dans d'autres cas. Essayez par exemple de mettre `p.speed` à `3`, et vous verrez que vous ne pourrez plus vous coller aux murs. Si un ou deux pixels vous séparent du mur, vous ne pourrez pas avancer de 3 pixels donc vous serez bloqué·e. Idéalement, le personnage devrait être ralenti pour se déplacer de ces un ou deux pixels ! Dans l'étape suivante, nous verrons comment programmer une méthode de déplacement plus précise avec des effets physiques.
