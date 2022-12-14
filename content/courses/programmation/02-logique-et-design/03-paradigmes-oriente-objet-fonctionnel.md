---
title: "Les paradigmes orienté objet et fonctionnel"
---

Précédemment, nous avons vu que pour régler certains problèmes, il existe des solutions standardisées, que tout le monde utilise. Plus largement, il existe même plusieurs manières de penser l'organisation de son programme, qu'on appelle des **paradigmes**.

Le paradigme le plus ancien et le plus simple, c'est la **programmation impérative**. Il consiste simplement à penser un programme comme une suite d'instructions que la machine exécute de haut en bas pour arriver à la solution. Bien sûr, il existe des paradigmes plus complexes ! Nous aborderons les deux les plus populaires :

- la **programmation orientée objet**, largement majoritaire dans le développement de jeux ;
- la **programmation fonctionnelle**, moins présente dans les jeux, mais qui nous permettra de comprendre comment on peut penser les programmes différemment.

### L'orienté objet

Comme son nom l'indique, l'orienté objet pense les programmes comme un assemblage de briques logiques que l'on appelle des objets. Un objet contient :

- des variables qui le définissent, que l'on appelle des attributs ou des propriétés ;
- des fonctions qui lui sont propres, que l'on appelle des méthodes.

Afin de faciliter la création de ces objets, on utilise des classes, qui servent de modèle. Une classe définit les propriétés et méthodes que peut avoir un certain type d'objet, et fournit une méthode pour créer des objets héritant de cette classe.

Par exemple, on peut créer une classe Voiture avec un poids et une vitesse fixe. La couleur de chaque voiture pourra être différente. La classe propose aussi une méthode `drive()` qui fait avancer la voiture en fonction de sa vitesse.

```ts
class Car {
    weight = 1500
    speed = 60
    position = (0, 0)
    color: string

    drive = () => {
        position.x += speed * 0.1
    }
}
```

Les classes proposent également un constructeur : une méthode pour créer un objet héritant de la classe. Dans notre exemple, le constructeur de `Car` permet de choisir la couleur de la voiture que l'on crée.


```ts
let redCar = new Car(color = "red")
let blueCar = new Car(color = "blue")
let greenCar = new Car(color = "green")
```

On appelle ces objets des **instances** de la classe `Car`. Chacun d'entre eux peut se déplacer individuellement en faisant appel à leur méthode.

```ts
redCar.drive()
blueCar.drive()
greenCar.drive()
```

#### L'héritage

Une classe peut hériter d'une autre classe. Dans ce cas, la classe enfant possède les mêmes attributs et méthodes que sa classe parente, mais également des attributs et méthodes supplémentaires. Par exemple, on peut créer une classe Camion avec une méthode supplémentaire, Charger, lui permettant de prendre des colis.

```ts
class Truck : Car {
    trunk = list{} // coffre vide

    load = (item) => {
        trunk.add(item)
    }
}
```

```ts
let blueTruck = new Truck(color = "blue")
blueTruck.load("cargaison")
blueTruck.drive()
```

Une classe enfant peut également remplacer des attributs et des fonctions de la classe parent. Par exemple, on pourrait créer une classe Voiture de course, avec une vitesse plus élevée.

```ts
class RaceCar : Car {
    speed = 180
}
```

```ts
let redCar = new Car(color = "red")
let redRaceCar = new RaceCar(color = "red")
redCar.drive() // avance de 6
redRaceCar.drive() // avance de 18
```

:::marvin
En fait, tous les composants de mon jeu seront des objets !
:::

:::profremi
Exactement. La programmation orientée objet considère les programmes comme étant des interactions entre différents objets.
:::

:::astride
C'est pour cela que ce paradigme est populaire dans les jeux vidéo. Tout l'enjeu est de prévoir comment ces objets vont interagir. Par exemple, si deux véhicules entrent en collision, ils se suppriment !
:::

L'orienté objet présente beaucoup d'avantages mais a aussi quelques défauts, notamment des problèmes de maintenabilité. Si l'on change d'avis sur la manière de penser nos classes ou si l'on souhaite corriger un bug, le système d'héritage a tendance à nous faire réécrire de nombreuses classes pour arriver à nos fins, ce qui peut mener à du code spaghetti. C'est ainsi que l'on appelle un code devenu si fouilli et incohérent que l'on a du mal à le comprendre et à remonter à la source d'un problème. Il est donc intéressant de se pencher sur la programmation fonctionnelle, qui aide à contrer ce phénomène.

### La programmation fonctionnelle

Pour rappel, une fonction est un outil qui, pour des paramètres donnés, retourne un résultat. La programmation fonctionnelle considère un programme comme étant un ensemble de fonctions mathématiques permettant d'arriver à un résultat final. Pour ce faire, deux problèmes sont importants à comprendre : les effets de bord et la mutabilité des structures de données.

#### Éviter les effets de bord

Une des choses qui peut causer un code spaghetti est un programme avec des fonctions ou des méthodes qui ont trop d'effets de bord, autrement dit des effets secondaires qui ne sont pas la valeur de retour de la fonction.

Imaginons qu'une fonction prenne un nombre et me renvoie un nombre modifié, mais qu'entre-temps, elle effectue aussi d'autres actions, par exemple modifier une autre variable et afficher une image. Ce sont des effets de bord ! Si cela arrive trop fréquemment dans votre programme, il vous sera difficile de réécrire votre code, car vous pourriez accidentellement briser d'autres parties du programme qui dépendaient des effets de bord d'anciennes fonctions.

On dit qu'une fonction est pure si elle est transparente référentiellement : la fonction n'a aucun effet de bord, et donc on pourrait remplacer l'appel de la fonction par son résultat. En d'autres termes, pour un paramètre donné, la fonction renvoie toujours le même résultat.

:::oofmarvin
Mais il y a forcément des effets de bord dans mon programme, sinon je ne pourrais pas afficher mes graphismes par exemple...
:::

:::astride
C'est vrai ! Mais il faut essayer de les isoler dans quelques fonctions qui sont uniquement dédiées à cela.
:::

#### La mutabilité des données

Un second problème à résoudre est la mutabilité des structures de données. Si plusieurs processus tournent dans mon programme, chacun modifiant les mêmes valeurs, cela peut créer des bugs ou casser la logique d'autres processus qui ne se retrouvent pas devant les valeurs qu'ils attendaient.

Reprenons l'exemple d'une liste d'ingrédients. J'ai une fonction qui me permet de faire un sandwich en découpant ces ingrédients en tranches. Cependant, ailleurs dans mon programme, une fonction a besoin des ingrédients d'origine. Si cette fonction se retrouve devant les ingrédients coupés en rondelles, cela peut l'empêcher de fonctionner correctement !

En programmation fonctionnelle, les structures de données sont immuables et les variables sont quasiment toutes des constantes. La liste d'ingrédients ne pourrait donc pas changer, et je devrai en faire une copie pour créer une liste d'ingrédients découpés !

En évitant les effets de bord et en protégeant les données, un programme écrit de manière fonctionnelle est donc un ensemble de fonctions que l'on peut facilement refactorer (réécrire, remplacer) sans avoir peur de briser quelque chose à l'autre bout du programme. Chaque processus peut librement agir sur les données sans avoir peur d'empêcher le travail d'un autre.

Ce n'est pas pour autant que vous devriez forcément utiliser ce paradigme : il est peu courant dans le jeu vidéo et vous auriez du mal à trouver des outils qui le supportent convenablement. En pratique, dans la création d'un jeu, vous pourriez écrire une structure générale en orienté objet mais penser certaines parties du code dans la logique fonctionnelle pour vous aider à le rendre plus maintenable.
