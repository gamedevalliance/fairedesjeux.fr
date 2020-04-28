---
title: "Installer le site localement"
---

Si vous souhaitez proposer des contributions plus importantes que des simples corrections, il est très probable que vous souhaitiez télécharger le code source du site directement sur votre ordinateur. Cela vous permettra de travailler avec vos outils favoris, de modifier très facilement les fichiers ou le code, et enfin de visualiser vos modifications avant de les publier !

Voici un petit guide sous Windows, mais les étapes sont globalement les mêmes sous MacOS et Linux. En premier lieu, vous devez télécharger le site :

- Si vous connaissez git, vous pouvez tout simplement cloner `github.com/gamedevalliance/fairedesjeux.fr`.
- Si vous débutez, installez [Github Desktop](https://desktop.github.com/) qui vous facilitera la tâche. Puis sur la page du [repository](https://github.com/gamedevalliance/fairedesjeux.fr), cliquez sur le bouton vert puis "Open in Desktop". Vous pouvez garder les paramètres par défaut.

![](./github-desktop.png)
*Le site est cloné par défaut dans vos Documents.*

Nous allons maintenant installer tout ce qui va servir à afficher le site dans un serveur local. Téléchargez Node.js sur le [site officiel](https://nodejs.org/en/). Choisir entre la version LTS et Current ne devrait pas faire de différence. Lors de l'installation, laissez les paramètres par défaut à l'exception de cette case qu'il est important de cocher :

![](./nodejs-modules-choix.png)

Si vous avez oublié de cocher cette case, pas d'inquiétude : il vous suffit de relancer l'installation pour la "réparer" puis de cocher l'option.

Une nouvelle fenêtre s'ouvrira ensuite pour installer automatiquement tous les modules nécessaires :

![](./nodejs-modules-install.png)
*Appuyez sur une touche pour valider et lancer l'installation.*

Cela peut prendre un moment. Faites-vous un petit café pour patienter !

![](./nodejs-modules-fin.png)
*L'installation est terminée quand vous êtes invité·e à appuyer sur Entrée.*

Ouvrez l'invite de commandes (tapez "cmd" dans la recherche Windows), naviguez jusqu'au dossier du site avec `cd` puis installez les paquets nécessaires avec `npm install`.

```
cd Documents\Github\fairedesjeux.fr
npm install
```

> **Note :** npm ne fonctionnera pas si vous ouvrez l'invite de commandes depuis Github Desktop. Il est conseillé d'ouvrir cmd séparément, mais lancer Github Desktop en tant qu'administrateur fonctionne aussi.

![](./npm-install.png)
*Là aussi, cela peut prendre un moment. C'est l'occasion de boire votre café.*

Quelques avertissements peuvent s'afficher en orange au cours de l'installation, mais ne vous inquiétez pas : elles ne devraient vous poser aucun problème.

Installez ensuite Gridsome :

```
npm install --global @gridsome/cli
```

Et vous avez terminé ! Désormais, la seule commande que vous aurez besoin d'utiliser est celle qui lance le serveur local :

```
gridsome develop
```

![](./gridsome.png)
*Tant que cette fenêtre est active, vous pouvez accéder au site.*

Tapez maintenant `localhost:8080` dans la barre d'adresse de votre navigateur. Magie, vous êtes sur le site !
