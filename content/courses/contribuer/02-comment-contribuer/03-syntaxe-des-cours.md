---
title: "Syntaxe des cours"
---

Les cours de FaireDesJeux.fr sont écrits en Markdown, une syntaxe simple et populaire également utilisée sur GitHub, Discord et bien d'autres services. Voici un tour d'horizon des fonctionnalités disponibles !

### Titres

Pour créer un titre, ajoutez des `#` avant le texte.

```md
### Titre de section
#### Titre de sous-section
```

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

### Citation

Une citation commence par `>`.

```md
William Shakespeare disait :

> Être ou ne pas être...
```

> Être ou ne pas être...

### Bulles de personnage

Pour faire parler les trois mascottes du site, entourez le dialogue de `:::` en précisant le nom du personnage : `marvin`, `astride` ou `remi`.

```md
:::marvin
Salut la compagnie !
:::
```

:::marvin
Salut la compagnie !
:::

Il existe également des émotions supplémentaires : `hypemarvin`, `oofmarvin`, `winkastride`, `sighastride`, `profremi` et `notlikethisremi`.

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

#### Vidéos YouTube

Si votre vidéo est longue, il est plus confortable de l'héberger sur YouTube. Vous pouvez afficher une vidéo YouTube dans un article ainsi :

```md
`youtube:https://www.youtube.com/watch?v=XprVZAtPqDI`
```

#### Vidéos hébergées sur le site

Dans le cas de vidéos de quelques secondes pour illustrer un article, vous pouvez les déposer dans le dossier `static/videos`. Préférez le format MP4, ou éventuellement WebM. Vous pouvez ensuite choisir plusieurs options :

- `autoplay` démarre la vidéo automatiquement. La plupart des navigateurs n'autorisent l'autoplay que si `muted` est aussi activé.
- `muted` joue la vidéo sans le son.
- `loop` joue la vidéo en boucle.
- `controls` affiche les boutons play/pause, volume, plein-écran, ainsi qu'une barre de progression.
- `poster = "static/videos/.../poster.png"` affiche une image quand la vidéo n'est pas encore lancée. Par défaut, la première image de la vidéo est affichée.

Avec des paramètres bien équilibrés, une vidéo MP4 est bien plus légère et de meilleure qualité qu'un gif animé, ce qui est bien pratique pour les petites connexions ! Pour imiter le comportement d'un gif animé, vous pouvez lancer la vidéo automatiquement et la faire boucler sans le son : `autoplay muted loop`.

Voici deux exemples :

```
[[Video src="/videos/pico-8/jelpi.mp4" autoplay muted loop]]
```

```
[[Video src="/videos/renpy/demo.mp4" poster="/videos/renpy/poster.png" muted loop controls]]
```

### Organisation des formations

Dans le dossier `content/courses`, chaque formation possède son dossier. Dans une formation, le fichier `course.md` contient le contenu de la page d'accueil, que l'on peut rédiger comme n'importe quelle autre page, ainsi que quelques paramètres :

```yaml
---
type: ENGINE          # Catégorie de la formation : ENGINE ou SKILL
title: "Créer des jeux avec PICO-8" # Titre complet
short_title: "PICO-8" # Titre court (pour la page d'accueil)
date: "2020-06-18"    # Date de publication
author: "Aurélien Dos Santos" # Auteurs principaux
medal: SILVER         # Médaille BRONZE, SILVER ou GOLD
medal_message: "Le dernier chapitre est en cours d'écriture."
# Message d'explication nécessaire si la médaille est BRONZE ou SILVER
---
```

Une formation doit forcément comporter un ou plusieurs chapitres, dans un dossier `01-nom-du-chapitre` et ainsi de suite. Le numéro indique l'ordre d'affichage, tandis que le texte indique le nom affiché dans l'URL. Dans le dossier, un petit fichier `chapter.json` précise le nom affiché sur le site :

```json
{
    "title": "Nom du chapitre"
}
```

Dans un chapitre, chaque page est un fichier `01-nom-de-la-section.md`. Ici aussi, c'est la numérotation dans le nom du fichier qui indique l'ordre. Des paramètres sont à renseigner au début du fichier :

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
