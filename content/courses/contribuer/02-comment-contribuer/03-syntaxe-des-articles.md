---
title: "Syntaxe des articles"
---

Les articles de FaireDesJeux.fr sont écrits en Markdown, une syntaxe simple et populaire également utilisée sur GitHub, Discord et bien d'autres services. Voici un tour d'horizon des fonctionnalités disponibles !

### Titres

Pour créer un titre, ajoutez des `#` avant le texte.

```md
## Titre d'article
### Titre de section
#### Titre de sous-section
```

Le premier niveau de titre s'affiche comme le titre d'une page en violet. Pour éditer le contenu d'un article, on utilise donc des titres de deuxième ou troisième niveau.

### Emphases

Style                  | Syntaxe
-----------------------|-------------------------
*Italique*             | `*Italique*`
**Gras**               | `**Gras**`
***Italique et gras*** | `***Italique et gras***`

### Listes

Un élément de liste non ordonnée peut commencer par `-` ou `*`.

```md
- George Washington
- John Adams
- Thomas Jefferson
```

Pour ordonner une liste, précédez les éléments d'un nombre.

```md
1. George Washington
2. John Adams
3. Thomas Jefferson
```

### Notes

Une note ou astuce complémentaire commence par `>`.

```md
Ceci est un paragraphe.

> Et ceci est une petite astuce.
```

### Morceaux de code

Entourez un texte d'accents graves `` ` `` pour qu'il soit affiché comme un morceau de code.

```md
La balise `<h1>` est un titre en HTML.
```

Pour afficher un bloc de code distinct du paragraphe, utilisez trois accents graves.

````md
Voici un exemple de code :
```ruby
class Scene_Tuto
  puts "Coucou"
end
```
````

Ecrire `ruby`, `javascript` ou un autre nom de langage est facultatif et déclenche la coloration syntaxique.

### Tableaux

Un tableau est toujours composé d'une ligne principale, séparée des autres lignes par des tirets `-`.

```md
Jeux           | Auteurs
---------------|-------------
Undertale      | Toby Fox
Stardew Valley | Eric Barone
To the Moon    | Kan Gao
```

### Liens

Créez un lien en entourant le texte cliquable de crochets `[]`, puis en entourant l'URL de parenthèses `()`.

```md
Voici le [serveur Discord](https://discord.gg/RrBppaj) de GDA.
```

### Images

En Markdown, on crée une image en commençant par un point d'exclamation `!`, en entourant le texte alternatif de crochets `[]` et en entourant le lien vers l'image de parenthèses `()`. Le texte alternatif est utilisé lorsque l'image ne peut pas être affichée, mais permet aussi de décrire le contenu pour les malvoyants et les robots.

```md
![Description alternative](./exemple.png)
```

Ajoutez une légende sous l'image en écrivant un texte en italique en dessous :

```md
![Description alternative](./exemple.png)
*En voilà une belle image !*
```

### Vidéos

Dans le cas de vidéos de quelques secondes pour illustrer un article, vous pouvez les déposer dans le dossier adéquat. Préférez le format MP4, ou éventuellement WebM.

Par défaut, une vidéo est en lecture automatique et boucle sans le son (attributs `autoplay muted loop`). Cela permet d'imiter le comportement d'un gif animé tout en profitant des avantages d'une vidéo : une meilleure qualité et un fichier plus léger. Vous pouvez consulter des exemples sur la page du script [Scroll Pictures]({{< ref "scrollpictures.md" >}}).

Pour une vidéo plus longue, il sera plus confortable de l'héberger sur YouTube. Vous pouvez ajouter une vidéo YouTube à un article ainsi :

```md
`youtube:https://www.youtube.com/watch?v=XprVZAtPqDI`
```

### Organisation des formations

Dans le dossier `content/courses`, chaque formation possède son dossier. Dans une formation, le fichier `course.md` contient le contenu de la page d'accueil, que l'on peut rédiger comme n'importe quel autre article, ainsi que quelques paramètres :

```yaml
---
type: ENGINE          # Catégorie de la formation : ENGINE ou SKILL
title: "Créer des jeux avec PICO-8" # Titre complet
short_title: "PICO-8" # Titre court (pour la page d'accueil)
date: "2020-06-18"    # Date de publication
author: "Aurélien"    # Auteurs principaux
medal: GOLD           # Médaille (voir la charte de qualité)
---
```

Une formation doit forcément comporter un ou plusieurs chapitres, dans un dossier `01-nom-du-chapitre` et ainsi de suite. Le numéro indique l'ordre d'affichage, tandis que le texte indique le nom affiché dans l'URL. Dans le dossier, un petit fichier `chapter.json` précise le nom affiché sur le site :

```json
{
    "title": "Nom du chapitre"
}
```

Dans un chapitre, chaque section est un fichier `01-nom-de-la-section.md`. Ici aussi, c'est la numérotation dans le nom du fichier qui indique l'ordre. Des paramètres sont à renseigner au début du fichier :

```yaml
---
title: "Nom de la section"
description: "La description, idéalement de deux ou trois phrases, est affichée lors du partage sur les réseaux sociaux, Discord, etc."
---
```

### Image de couverture

Si vous créez une nouvelle formation en suivant les conseils ci-dessus, vous devez aussi ajouter une image de couverture, sans quoi le site ne pourra pas s'afficher. Les images de couverture se situent dans le dossier `src/assets/courses`.

L'image `cover-tall.png` est affichée dans toute sa hauteur sur une carte verticale de la page d'accueil. L'image `cover-wide.png` est affichée dans toute sa largeur sur les grandes cartes en haut de l'accueil, dans la première page de la formation, et en guise d'aperçu lorsque le lien est partagé sur les réseaux sociaux et Discord.

Il n'y a pas de taille précise à respecter, mais il est préférable que l'image `cover-wide.png` soit grande et dans un format 16:9 ou similaire.
