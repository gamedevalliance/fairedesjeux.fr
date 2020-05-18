---
title: "Les variables textuelles"
---

Vous commencez à vous habituer aux variables ? Laissez-moi vous présenter un dernier type de variable essentiel : le texte (ou chaîne de caractères). Dans cet exemple, on pourra parler à un vendeur et lui acheter soit du chocolat, soit du reblochon. La variable contiendra directement le texte `"chocolat"` ou `"reblochon"`.

Changeons de décor ! Je vous propose d'utiliser cette image :

![Décor de devanture de magasin](./magasin.jpg)
*L'image provient de [ce site](https://k-after.at.webry.info/) ([page](https://k-after.at.webry.info/200806/article_28.html)).*

```python
define m = Character("Marvin", color="ffc8c8")
define a = Character("Amélie", color="f4cdb5")

label start:
    scene magasin
    menu:
        "Vendeur" "Qu'est-ce qu'il vous faut ?"
        "Acheter du chocolat":
            $ cadeau = "chocolat"
        "Acheter du reblochon":
            $ cadeau = "reblochon"
```

Avec les guillemets, on fait comprendre à Ren'Py que la variable est un texte (ou *string* en anglais).

Plus tard dans le jeu, c'est l'anniversaire d'Amélie, qui aime beaucoup le chocolat :

```python
scene chambe
show amelie
m "Tu peux ouvrir ton cadeau !"

if cadeau == "chocolat":
    a "Oh, c'est merveilleux !"
```

On retrouve `==` qui permet de vérifier la valeur que contient la variable. Par contre, si on offre du reblochon à Amélie, elle va trouver ça immonde. Il y a plusieurs façon de l'écrire : dans une autre condition `if`, à la suite avec `elif`, ou encore avec `else`. Comme nous n'avons que deux cas de figure possibles, les trois solutions produisent le même résultat.

```python
if cadeau == "chocolat":
    a "Oh, c'est merveilleux !"
else:
    a "Beurk, c'est immonde !"
```

:::astride
Dans cette histoire, une variable textuelle n'était pas nécessaire, mais il est bon de savoir les utiliser !
:::

En effet, ici, un booléen aurait suffi. Cela me permet tout de même de vous introduire le concept afin de vous proposer une application très intéressante de ce type de variable : pouvoir personnaliser le nom du héros.
