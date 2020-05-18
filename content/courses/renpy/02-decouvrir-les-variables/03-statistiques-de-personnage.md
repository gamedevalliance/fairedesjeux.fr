---
title: "Statistiques de personnage"
---

Dans cette étape, on va créer un mini-jeu de gestion, dans lequel le personnage aura des points de force, des points de fatigue... Et ces statistiques évolueront d'après les actions que l'on choisira chaque jour.

### Création des variables

Nous allons définir nos statistiques de base :

```python
define m = Character("Marvin", color="#ffc8c8")

label start:
    scene chambre
    m "Quelle belle journée !"

    $ points_force = 0
    $ points_fatigue = 0
```

L'avantage des nombres, c'est qu'on va pouvoir les additionner et faire plein d'autres calculs dessus. Proposons un choix entre deux activités :

```python
menu:
    m "Que faire ?"
    "Faire du sport":
        $ points_force += 5
        $ points_fatigue += 10
        m "Ça fait du bien de s'entraîner, mais ça fatigue."
    "Se reposer":
        $ points_fatigue -= 20
        m "Ce canapé est sacrément confortable !"
```

Prenons un instant pour examiner le fonctionnement de ces `+=` et `-=`. Vous savez que l'opérateur `=` donne une nouvelle valeur à une variable, et ce faisant, il remplace l'ancienne valeur. Ainsi, pour additionner avec `=`, il faudrait écrire :

```python
points_force = points_force + 5
```

L'opérateur `+=` fait la même chose avec une écriture plus courte. Cela fonctionne également pour d'autres opérations : `-=`, `*=`, etc.

### Vérifier les valeurs

Nous pouvons changer les dialogues du jeu en fonction de l'état du personnage avec des conditions :

```python
if points_fatigue >= 50:
    m "Je devrais prendre des vacances."
elif points_fatigue < 10:
    m "Je pète le feu !"
else:
    m "Tout est normal."
```

`elif` est la contraction de `else if`. Si la première condition est fausse, Ren'Py vérifie la deuxième condition, et si elle est fausse aussi, on joue le `else`. Vous pouvez enchaîner autant de `elif` que vous le souhaitez.

Notez aussi la nuance entre écrire `>=` (supérieur ou égal) et `>` (strictement supérieur). Dans cet exemple, la première condition sera vraie si notre force est de 50. Par contre, la deuxième condition sera fausse si notre force est de 10. Testez le jeu en faisant du sport et vous verrez !

Changer les dialogues, c'est bien, mais on peut aller encore plus loin, et modifier les choix disponibles en jeu selon nos statistiques !

### Modifier les choix disponibles

Faisons en sorte que si Marvin est trop fatigué, il ne puisse plus faire de sport. C'est très simple : il suffit d'écrire une condition à côté du choix.

```python
menu:
    m "Que faire ?"
    "Faire du sport" if points_fatigue < 30:
```

En testant le jeu, le choix sera visible car vous débutez avec 0 point de fatigue. Remplacez le 0 par 30 ou plus... et le choix disparaît !

Vous pouvez utiliser ce principe dans plein de cas différents, par exemple dans un système de réputation : si quelqu'un vous aime beaucoup, vous aurez le choix de l'inviter à dîner, et sinon vous ne pourrez pas beaucoup lui parler. Cela peut donner aux joueurs et joueuses la sensation d'avoir un grand impact sur le personnage et le monde qui l'entoure.

Plus tard, dans le chapitre sur les point and click, vous apprendrez à créer une interface dans un coin de l'écran. Si vous faites un jeu avec des statistiques comme dans cet exemple, il sera très pratique d'afficher les chiffres en permanence !
