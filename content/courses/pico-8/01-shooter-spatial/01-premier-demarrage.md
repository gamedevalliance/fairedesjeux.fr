---
title: "Premier démarrage"
---

Avant d'entrer dans le vif du sujet, laissez-moi vous guider à travers l'interface de la console. Lorsque vous démarrez PICO-8, se tient face à vous un écran noir où vous pouvez entrer des commandes.

![Ecran de démarrage de PICO-8](./startup.png)

> PICO-8 se démarre en plein écran. Si vous préférez, vous pouvez le passer en mode fenêtré avec Alt+Entrée.

La commande `help` affiche toutes les commandes de base dont vous pourriez avoir besoin.

![Aide](./help.png)

Ces commandes permettent de charger des fichiers, naviguer dans les dossiers... Mais remarquez aussi la mystérieuse commande `install_demos`. Utilisez-la et PICO-8 va installer des cartouches d'exemple dans le dossier `demos` ! Cependant, si vous tentez d'en ouvrir une avec la commande `load`, vous verrez que cela ne fonctionne pas...

![Erreur Could not load](./could-not-load.png)

C'est parce que nous ne sommes pas dans le bon dossier ! Ecrivez `cd demos` pour entrer dans le dossier, puis `ls` pour voir son contenu. Vous pouvez maintenant charger le jeu de votre choix en écrivant `load` suivi du nom (pas besoin décrire l'extension `.p8`).

![Chargement de waves](./load-waves.png)

Lancez une démo chargée en écrivant `run` ou avec Ctrl+R.

![Screenshot de la démo waves](./waves.png)
*La démo "Waves"*

Vous pouvez aussi voir comment le jeu a été programmé ! Faites Echap pour revenir à l'écran de commande, puis une deuxième fois Echap pour atteindre l'écran de développement. Ce sont les trois écrans principaux de PICO-8 :

![Les trois écrans de PICO-8](./screens.png)

Toutes ces petites démos sont sympathiques, mais vous aurez peut-être envie d'essayer des jeux ayant un peu plus de panache. Appuyez sur Echap pour revenir à l'écran de commande, et tapez `splore` pour entrer dans le navigateur des jeux publiés sur le site de PICO-8.

![Splore](./splore.gif)

Cerise sur le gâteau : en appuyant sur Echap pendant un jeu, vous pouvez examiner comment ont été faits le code, les graphismes et la musique.

Vous pouvez également trouver des tas de supers jeux PICO-8 jouables dans votre navigateur [sur itch.io](https://itch.io/games/tag-pico-8) !