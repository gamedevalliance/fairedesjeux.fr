# Bienvenue sur le projet de FaireDesJeux.fr !

FaireDesJeux.fr est un site collaboratif proposant des formations gratuites pour accompagner les débutants et débutantes dans la création de jeux vidéo, tout en leur permettant, une fois les bases acquises, de s'indépendantiser grâce aux documentations officielles et aux diverses ressources en ligne. Dans un contexte où les formations payantes et souvent interminables fleurissent sur le web, nous souhaitons proposer une autre façon d'apprendre, plus ouverte, qui va à l'essentiel et incite les lecteurs ou lectrices à progresser par eux-mêmes.

Tout le monde peut participer au projet, que ce soit pour corriger une faute ou créer du contenu. Une [charte de qualité](https://fairedesjeux.fr/contribuer/avant-propos/charte/) permet de s'assurer que tout le monde avance dans une même direction, et une [page de référence](https://fairedesjeux.fr/contribuer/comment-contribuer/syntaxe-des-cours/) détaille la syntaxe Markdown ainsi que les fichiers à créer pour commencer l'écriture d'une nouvelle formation.

## Modifier une page rapidement

Depuis n’importe quelle page du site, cliquez sur *Modifier cette page* dans le sommaire de droite. Cela ouvrira le fichier correspondant dans le dépôt.

## Télécharger le site

### 1. Installer Node.js et npm

#### Windows
[Télécharger la version Current](https://nodejs.org/) et cocher "Install the necessary tools" durant l'installation.

#### Linux
`sudo apt install nodejs` pour la dernière version d'Ubuntu. [Autres distributions.](https://nodejs.org/en/download/package-manager/)

#### macOS
[Installer la version Current.](https://nodejs.org/)

### 2. Préparer le dépôt

1. `git clone --recursive https://github.com/gamedevalliance/fairedesjeux.fr`
2. `cd fairedesjeux.fr`
3. (`sudo`) `npm install` pour télécharger les dépendances dans le dossier.
4. (`sudo`) `npm install --global @gridsome/cli` pour installer Gridsome CLI.

Pour une marche à suivre plus détaillée et accessible aux néophytes, lisez le [guide du site](https://fairedesjeux.fr/contribuer/comment-contribuer/installer-le-site/).

### 3. Démarrer un serveur local

`gridsome develop` démarre un serveur local à l'adresse `localhost:8080` pour voir vos changements en direct alors que vous travaillez.
