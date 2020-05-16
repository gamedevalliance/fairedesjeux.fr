---
title: "Une première contribution"
---

Si le projet de FaireDesJeux.fr vous emballe et que souhaitez contribuer, que ce soit en écrivant une simple correction ou une toute nouvelle formation, vous êtes au bon endroit !

Dans cette partie, je vais vous montrer comment vous préparer pour travailler efficacement sur le site. Après avoir lu cette page, vous saurez comment modifier rapidement un article et consulter les *issues* de GitHub.

### Créer un compte Github

GitHub est un site qui permet de partager du code et de le modifier à plusieurs. C'est là-bas que l'on rend accessible le code source du site, et donc le contenu des pages.

Un compte vous permettra de contribuer : toutes vos modifications seront créditées avec votre nom et image de profil. Vous pouvez [créer un compte ici](https://github.com/join). Pensez à valider votre adresse email à la fin de l'inscription !

### Petite visite du repo

Le code source du site se trouve à cette adresse :

https://github.com/gamedevalliance/fairedesjeux.fr

C'est un *dépôt*, ou *repository* en anglais. Entre nous, on appelle simplement ça le repo. Il contient tout le code qui permet de créer le site. Si vous êtes là pour écrire du contenu, vous pouvez visiter le dossier `content` et vous verrez que tout y est rangé clairement : chaque formation possède son dossier et chaque chapitre a son propre sous-dossier. Vous pouvez ouvrir des pages si vous êtes curieux, mais je vous montrerai comment les modifier dans la partie suivante.

Afin de tous nous coordonner et voir en un clin d'oeil les tâches à réaliser, il existe un système d'issues :

https://github.com/gamedevalliance/fairedesjeux.fr/issues

Une issue permet de consulter une tâche à réaliser et d'écrire des commentaires, comme un mini-forum. Vous pouvez voir en un clin d'oeil le domaine concerné par l'issue, les personnes assignées à la tâche... Lorsque la tâche est terminée, on ferme l'issue, et elle est cachée de la liste principale.

![Issue sur GitHub](./issue.png)

Si vous souhaitez émettre une suggestion, annoncer que vous travaillez sur une nouvelle formation, ou encore rapporter un bug du site... Vous pouvez créer une nouvelle issue, ou bien en parler sur Discord (nous avons un salon dédié aux projets GitHub).

Les issues sont également organisées dans des projets :

https://github.com/gamedevalliance/fairedesjeux.fr/projects

Ainsi, si c'est la rédaction qui vous intéresse avant tout, vous pouvez entrer dans le projet pour avoir une vue d'ensemble de toute l'activité.

### Créer un fork

Le repo original du site s'appelle `gamedevalliance/fairedesjeux.fr`. Dès qu'il est modifié, le site est automatiquement actualisé pour afficher les nouveautés. C'est pourquoi il est protégé : seule l'équipe de modération peut écrire à l'intérieur.

Pour travailler sur le site, vous devez copier le repo sur votre profil : on appelle ça un fork. Sur la page du repo, cliquez sur "Fork" en haut à droite.

Votre fork s'appellera `votre-pseudo/fairedesjeux.fr`. Dans ce fork, vous avez tous les droits en écriture : vous pouvez modifier des pages directement sur votre navigateur, et même le télécharger pour travailler dans votre éditeur favori, mais nous verrons cela dans la section suivante.

Vous pouvez retrouver votre fork facilement depuis la page d'accueil de GitHub, ou depuis votre profil.

### Modifier une page dans votre navigateur

Imaginons que vous avez repéré une faute dans une page de la formation Ren'Py, et que vous souhaitez la corriger. Sur la page de votre fork, naviguez jusqu'au dossier `content/courses/renpy` et ouvrez le fichier `.md` correspondant à la page. Sur la droite, vous trouverez une icône de crayon pour éditer le fichier.

![Bouton Edit this page sur GitHub](./edit-this-file.png)

Ecrivez vos changements, puis enregistrez-les plus bas. Donnez un nom descriptif à votre commit, et cochez l'option qui permet de créer une nouvelle branche, pour créer une pull request.

![Enregistrement du commit](./propose-file-changes.png)

L'écran suivant vous permettra de visualiser votre pull request et de la confirmer. Une pull request, c'est une demande pour fusionner les nouveautés de votre fork avec le repo originel (`gamedevalliance/fairedesjeux.fr`). Dès que vous envoyez une pull request, elle est publique et tout le monde pourra la consulter sur GitHub, même si elle n'est pas encore validée. Assurez-vous donc de bien lire la page avant de confirmer.

> Si vous n'avez pas créé de fork, en cliquant sur le crayon depuis une page de `gamedevalliance/fairedesjeux.fr`, un message apparaît pour vous informer qu'un fork est automatiquement créé dans lequel vous pouvez écrire. Lorsque vous enregistrez votre changement, vous pouvez directement créer une pull request. Par la suite, à chaque fois que vous cliquerez sur le crayon d'une page de `gamedevalliance/fairedesjeux.fr`, une nouvelle branche sera créée dans votre fork, pour faire une pull request de cette branche rapidement.
