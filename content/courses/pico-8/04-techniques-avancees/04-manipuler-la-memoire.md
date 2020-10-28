---
title: "Manipuler la mémoire"
---

la mémoire est composé d'octet (bytes).

Chaque octet a une adresse. Le premier octet est 0x0000

### Peek et poke

peek,poke
reload( destaddr, sourceaddr, len, [filename] )

### Compter avec des bits

En informatique, le plus petit élément d'information que l'on peut manipuler est le bit. Il ne peut avoir que deux valeurs : le signal est soit éteint, soit allumé, ce que l'on désigne par les chiffres 0 et 1.

Dans le système décimal, nous avons 10 chiffres pour représenter tous les nombres qui existent, c'est pourquoi on parle aussi de base 10. Lorsqu'on arrive au bout des 10 chiffres à notre disposition, on ajoute une dizaine et on repart du premier chiffre.

Quand on compte en binaire, on n'a que 2 chiffres, c'est donc une base 2. On va atteindre les dizaines, les centaines et ainsi de suite beaucoup plus rapidement !

```
Décimal │ Binaire       Décimal │ Binaire 
───────────────      ───────────────
    0   │      0            9   │   1001
    1   │      1           10   │   1010
    2   │     10           11   │   1011
    3   │     11           12   │   1100
    4   │    100           13   │   1101
    5   │    101           14   │   1110
    6   │    110           15   │   1111
    7   │    111           16   │  10000
    8   │   1000           17   │  10001
```

En informatique, on rassemble généralement les bits en octets, qui sont des suites de 8 bits. Avec un octet, on peut stocker 256 valeurs différentes.

```
Décimal │  Octet
────────────────
    0   │ 00000000
    1   │ 00000001
    2   │ 00000010
────────────────
  253   │ 11111101
  254   │ 11111110
  255   │ 11111111
```

Si l'on veut stocker des nombres plus grands, il faudra utiliser plusieurs octets. Par exemple, les nombres dans les variables de PICO-8 sont codés sur 4 octets (32 bits), ce qui pourrait permettre d'aller de 0 à 2 147 483 647. Cela dit, pour que PICO-8 puisse stocker des nombres négatifs et à virgule, l'intervalle utilisable va en réalité de -32768 à 32767,9999.

Le système binaire n'est pas la seule façon étrange de compter à laquelle vous serez confronté·e au cours de votre vie de programmeur ou programmeuse. Lorsque vous choisissez une couleur dans un logiciel de graphisme, vous avez probablement déjà eu affaire au système hexadécimal, qui est en base 16. Par exemple, ce code de violet [`#4c1b7a`](https://www.google.com/search?q=%234c1b7a) est une suite de trois nombres en hexadécimal :

```
            │  Rouge   │   Vert   │   Bleu
──────────────────────────────────────
Hexadécimal │       4c │       1b │       7a
Décimal     │       76 │       27 │      122
Octet       │ 01001100 │ 00011011 │ 01111010
```

Le format hexadécimal est populaire en informatique car chaque chiffre correspond à 4 bits, étant donné que 4 bits permettent de compter de 0 à 15. Cela permet une écriture plus compacte : vous pouvez représenter le contenu d'un octet en seulement deux chiffres. Mais comme les chiffres arabes s'arrêtent à 9, on représente la base 16 avec les lettres de l'alphabet !

En hexadécimal, les 16 chiffres sont 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E et F. Par exemple, le nombre 31 s'écrit 1F, et le nombre 32 s'écrit... 20. Oui, c'est un peu l'embrouille.

Ainsi, pour bien savoir dans quelle base le nombre est écrit, on utilise un préfixe qui dépend du langage de programmation. Dans PICO-8, `0x` désigne un nombre hexadécimal et `0b` désigne un nombre binaire.

### Anatomie de la mémoire

#### La RAM de base

32 Kio

mémoire adressable

![](./memoire.png)
*Un carré équivaut à 128 octets.*

##### Sprites et map

La spritesheet est stockée dans la mémoire comme une grande image de 128×128 pixels. Comme les pixels peuvent avoir 16 couleurs différentes, ils ont chacun besoin de 4 bits pour être représentés ; chaque octet contient donc 2 pixels. Pour rappel, la moitié basse de la spritesheet partage le même espace dans la mémoire que la moitié basse de la map.

La map fait au total 128×64 cases, chacune étant codée dans un octet puisqu'elles doivent stocker l'ID du sprite, qui peut aller de 0 à 255. La map utilise donc autant d'espace que la spritesheet, c'est-à-dire 8192 octets, mais la deuxième moitié se trouve dans l'espace partagé.

Chaque sprite a 8 flags qui peuvent être activés ou désactivés. Eh oui, cela fait un bit par flag et donc un octet par sprite ! Les sprites flags occupent donc 256 octets de la mémoire.

##### Musique et sons

Un jeu peut contenir 64 partitions utilisant chacune 4 octets, tandis que les 64 sons utilisent 68 octets chacun.

Chaque note d'un son est codée sur 16 bits :

- 1 bit active ou désactive les instruments personnalisés
- 3 bits pour l'effet (0 – 7)
- 3 bits pour le volume (0 – 7)
- 3 bits pour l'instrument (0 – 7)
- 6 bits pour la fréquence (0 – 63)

Dites-vous que chacune de ces valeurs peut être changée en temps réel en pokant la bonne adresse ! Dans le cas d'un jeu de voiture, vous pourriez obtenir un bruit de moteur dynamique en changeant la fréquence du son.

##### Espace libre

Les octets allant de l'adresse 0x4300 à 0x5dff n'ont aucune utilité particulière. Cela fait 6911 octets de mémoire que vous pouvez utiliser comme bon vous semble en cours de jeu.

Vous pourriez y copier une partie de l'écran pour créer une photo à réutiliser plus tard dans le jeu, ou encore utiliser `reload()` pour copier les données d'une autre cartouche dans cette région, et ainsi garder en mémoire une map ou des sprites supplémentaires.

##### Données persistantes

Cette région de 256 octets concerne le fichier de sauvegarde de votre jeu. En utilisant `cartdata("mon_super_jeu")`, vous créez un fichier de sauvegarde contenant 64 chiffres sur l'ordinateur du joueur ou de la joueuse. Vous pouvez ensuite utiliser les commandes simplifiées `dget()` et `dset()` pour accéder à la sauvegarde, ou bien peek et poke la mémoire directement pour davantage de contrôle. Quelque soit la méthode choisie, le fichier de sauvegarde sera automatiquement enregistré.

##### Draw state et hardware

##### Ports GPIO

Un connecteur GPIO permet à une machine de communiquer avec d'autres circuits électroniques. Ils sont notamment présents sur les Raspberry Pi et les PocketCHIP. Vous pouvez envoyer un signal pour allumer une LED, ou bien lire le signal entrant pour connaître l'état d'un interrupteur, par exemple.

`youtube:https://www.youtube.com/watch?v=aAdSbrCt5Mg`

Envoyer ou recevoir un signal d'un port GPIO se fait en accédant directement à sa valeur dans la mémoire. Les adresses précises sont listées dans la section GPIO du manuel de PICO-8. Chaque octet représentant un port, vous pouvez envoyer une information sur 8 bits, autrement dit un chiffre jusqu'à 255 ! De plus, vous pouvez y accéder en JavaScript dans le cas d'un jeu navigateur avec le tableau global `pico8_gpio`. Je vous laisse imaginer ce que vous pourriez réaliser avec des communications entre votre jeu et la page web !

##### L'écran

Enfin, c'est dans ce dernier espace de la mémoire qu'écrivent les fonctions de dessin telles que `spr()`, et comme ce serait le cas avec une vraie machine, l'écran est "branché" à la mémoire et en récupère le contenu pour l'afficher.

De la même façon, les boutons de la manette sont chacun branchés à un emplacement précis de la mémoire et allument un bit. C'est donc en lisant la mémoire que l'on sait si un bouton est appuyé ou non !

#### La ROM

Vous avez probablement déjà lu le terme ROM dans le domaine de l'émulation de jeux, par exemple. Il signifie Read Only Memory, ou mémoire morte en français. On l'utilise souvent pour désigner les cartouches de jeu, et comme son nom l'indique, le contenu d'une ROM est fixé et ne peut pas être modifié par l'utilisateur, contrairement à la RAM.

Les cartouches de PICO-8 sont agencées de la même façon que la RAM de l'adresse 0x0 à 0x4300. Ce sont donc les mêmes adresses entre la ROM et la RAM pour les sprites, la map, les flags, les musiques et les sons.

Pour plus de rapidité, dans la plupart des consoles de jeu et des ordinateurs, les données stockées dans une ROM sont copiées dans la RAM avant d'être traitées, et c'est aussi le cas dans PICO-8. La ROM est chargée au lancement du jeu, mais vous pouvez aussi recharger une partie précise de la cartouche (et même d'une autre cartouche) en plein jeu avec la fonction `reload()`. Cela peut-être utile lorsque vous avez modifié les sprites ou la map dans la RAM et souhaitez réinitialiser leur état. Cependant, le code ne peut être rechargé de la même façon, car il est protégé et stocké dans un espace de RAM différent.

#### La RAM de Lua

Cet espace limité à 2 Mio contient le code de votre programme compilé ainsi que vos variables en cours de jeu. Elle est entièrement séparée de la RAM de base et vous ne pouvez pas y accéder avec `peek()`, `poke()` et compagnie. Cependant, comme je vous l'avais dit précédemment, vous pouvez connaître la quantité de mémoire actuellement occupée avec `stat(0)` qui vous donne le nombre d'octets utilisés.

Les 2 Mio disponibles peuvent sembler énormes en comparaison des 32 Kio de la RAM de base, et il est vrai que ça vous laisse une très grande marge de manœuvre ! Vous n'aurez sans doute pas à vous soucier du nombre de variables dans votre jeu.

### Pokes utiles

changer la palette
désactiver le menu pause
importer des images hi res
poke(0x5f2c,3) reduire la resolution
delai de btnp

0x5f2c concerne draw mode : retourner l'écran, effet miroir 34:10

#### Options graphiques

#### Utiliser le clavier et la souris


Vous pouvez poker une adresse pour activer le mode devkit, qui active le clavier et la souris en jeu.

```lua
poke(0x5f2d, 1)
```

Il devient alors possible d'accéder à l'état du clavier et de la souris avec `stat()` !

##### Clavier

`stat(30)` est un booléen qui vaut vrai lorsqu'une touche du clavier parmi celles reconnues est appuyée, avec un fonctionnement proche de `btnp`. `stat(31)` renvoie un string contenant la lettre ou le caractère en question. Quelques touches spéciales sont aussi reconnues :

Touche | stat(31)
--- | ---
Retour arrière | "\b"
Tab | "\t"
Entrée | "\r"

Habituellement, P et Entrée ouvrent le menu de pause, mais vous pouvez désactiver temporairement son ouverture en faisant `poke(0x5f30, 1)` avant la fin de la frame. Pour plus de simplicité, sachez que `btn(6)` représente la touche Pause, bien que cela ne soit pas documenté dans le manuel. Avec cette astuce, à vous les menus de pause personnalisés !

```lua
if (btn(6)) poke(0x5f30, 1)
```

La touche Shift ne peut être reconnue par elle-même mais permet de produire des symboles plutôt que des lettres, de la même façon que dans l'éditeur de code. Les autres touches, telles que Control et Alt, ne produisent pas de caractère et ne sont donc pas reconnues.

`stat(31)` ne peut contenir qu'un caractère à la fois, mais il est tout de même possible de reconnaître que plusieurs touches sont appuyées au même moment. Lorsque votre jeu constate que `stat(30)` est vrai puis lit le contenu de `stat(31)`, PICO-8 en rafraîchit immédiatement la valeur pour passer au caractère suivant à lire, ou bien passe `stat(30)` à faux s'il n'en reste plus.

```lua
keys = {}
while stat(30) do
    add(keys, stat(31))
end
```

##### Souris

Le support de la souris est lui aussi assez particulier.

Pour commencer, `stat(32)` et `stat(33)` vous donnent tout simplement les coordonnées X et Y de la souris, ce qui vous permet d'afficher un curseur que vous aurez dessiné vous-même dans un sprite.

Là où c'est plus original, c'est en ce qui concerne les boutons. `stat(34)` renvoie une suite de 3 bits pour les 3 boutons de la souris :

stat(34) | Boutons
--- | ---
0b001 | Clic gauche
0b010 | Clic droit
0b100 | Clic molette

Je vous invite à tester `print(stat(34))` et vous verrez que le résultat est affiché en décimal, ce qui produit un nombre allant de 0 à 7. Nous pourrions évaluer les 7 cas de figure possibles avec 7 conditions (par exemple, 6 veut dire qu'on appuie sur le clic droit et la molette), mais nous ne sommes pas des sauvages et je suis là pour vous apprendre des choses ! Je vous propose plutôt de réaliser une opération bit à bit, afin de regarder directement si le bit qu'on cherche est activé ou non !

Mettons que vous souhaitiez vérifier le bit du clic gauche, c'est à dire `0b001`. Nous allons vérifier si `stat(34)` a ce bit d'activé à l'aide de l'opération AND. Voici quelques exemples :

```
    101        000        001    <-- valeurs possibles de stat(34)
AND 001    AND 001    AND 001    <-- bit du clic gauche
  = 001      = 000      = 001
```

Pour résumer, `band(stat(34), 0b001)` renverra le résultat 0b001 si les deux nombres ont le bit en commun, et renverra 0b000 sinon. Voici comment vérifier les trois types de clic :

![](./band.png)
*Pour plus de concision, j'ai écrit 1, 2 et 4, qui sont les écritures décimales de 0b001, 0b010 et 0b1000. Les deux écritures sont toujours interchangeables !*

Si les opérations bit à bit vous intéressent, je vous laisse consulter la section [Bitwise Operations](https://www.lexaloffle.com/pico-8.php?page=manual#main_div:~:text=Operations-,Bitwise%20Operations) du manuel de PICO-8 ainsi que les exemples de [Wikipédia](https://fr.wikipedia.org/wiki/Opération_bit_à_bit).

Pour finir, `stat(36)` vous donne ce qu'a parcouru la molette depuis la dernière frame. Cela donnera -1 si vous l'avez faite défiler d'un cran vers le haut, 0 si elle n'a pas bougé et 1 pour un cran vers le bas.

Méfiez-vous cependant : zep, le développeur de PICO-8, indique que la souris ne fonctionne pas encore idéalement sur navigateur, mais cela semble tout de même satisfaisant pour la plupart des jeux.

Gardez également à l'esprit que toutes les machines exécutant PICO-8 ne disposent pas forcément d'une souris et d'un clavier complet ; il est donc recommandé de rendre le mode devkit optionnel lorsque vous publiez votre jeu sur le site officiel. La première fois qu'une de ces `stat()` est lue par le jeu dans un contexte où la présence d'un clavier et d'une souris n'est pas garantie, PICO-8 affiche un court avertissement en bas de l'écran.

*Suite du chapitre disponible très bientôt !*