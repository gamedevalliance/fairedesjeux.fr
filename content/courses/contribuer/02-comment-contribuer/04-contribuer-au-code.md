---
title: "Contribuer au code"
---

Cette dernière section explique comment contribuer à l'aspect technique du site. Si votre objectif est uniquement d'écrire du contenu, vous pouvez passer votre chemin, car vous savez déjà tout ce qu'il vous faut !

### Structure du repo

Pour vous aider à vous familiariser avec le repo, voici sa structure ainsi que les pages de documentation Gridsome et Tailwind qui détaillent le fonctionnement de chaque fichier.

- `tailwind.config.js` : [Configuration du thème Tailwind](https://tailwindcss.com/docs/configuration)
- `gridsome.config.js` : [Configuration du projet Gridsome](https://gridsome.org/docs/config/#project-configuration)
- `gridsome.server.js` : [API du serveur Gridsome](https://gridsome.org/docs/server-api/)
- `types.graphql` : Contient les types GraphQL utilisés à travers le site
- `src/` : [Structure d'un projet Gridsome](https://gridsome.org/docs/directory-structure/)
    - `assets/`
    - `layouts/`
    - `pages/`
    - `templates/`
    - `main.js`
- `content/` : Le contenu du site

### Conventions de style

Pour respecter les conventions du repo, nous utilisons les outils ESLint et stylelint. Les deux sont disponibles sous la forme d'extension pour la plupart des éditeurs de code à ces adresses :

- [ESLint](https://eslint.org/docs/user-guide/integrations)
- [stylelint](https://stylelint.io/user-guide/integrations/editor)

Installer les extensions sera plus confortable, notamment grâce aux erreurs affichées en temps réel et l'auto-fix lors des sauvegardes. Cela dit, vous pouvez également les télécharger séparément si vous préférez ([ESLint](https://eslint.org/docs/user-guide/getting-started), [stylelint](https://stylelint.io/user-guide/get-started)) et les utiliser manuellement dans le repo, par exemple avec `eslint .`.

Il vous faut également installer l'extension [EditorConfig](https://editorconfig.org/), qui permet de configurer automatiquement l'éditeur de code selon les règles définies dans le fichier `.editorconfig`, comme par exemple l'indentation avec 4 espaces et le format de retour à la ligne. C'est un moyen simple d'éviter les erreurs de style les plus communes.

### Créer une pull request

Pour que votre pull request soit acceptée, nous vous demandons bien sûr de suivre les conventions de style, mais aussi de ne pas inclure de fichier inutile au repo : ajoutez des règles à `.gitignore` si nécessaire. Si vous ajoutez une dépendance, précisez pourquoi elle est nécessaire à moins que ce ne soit évident. Merci beaucoup pour l'intérêt que vous portez au projet !
