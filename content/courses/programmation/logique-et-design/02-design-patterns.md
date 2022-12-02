---
title: "Design patterns"
---

Une des choses importantes en programmation, c'est d'éviter à tout prix de réinventer la roue. Pas besoin de recréer un algorithme de tri quand votre langage en embarque déjà un qui sera compris par tous les autres programmeurs et qui sera mis à jour.

De la même manière, si vous êtes confrontée à un problème qui vous semble courant, plutôt que de bricoler votre propre solution, vous pouvez regarder s'il n'existe pas une manière standardisée d'y répondre. On appelle cela des design patterns. Ils ont deux intérêts : le premier est d'avoir sans doute été pensé par quelqu'un de plus expérimenté que vous, le second est d'être connu, et donc compris, par une grande partie des programmeurs de votre langage.

:::remi
L'exemple qui va suivre fait un peu peur, mais pas de panique, on essaye de vous faire comprendre le concept. Pas ce design pattern spécifiquement.
:::

Prenons un exemple avec un pattern Factory : Imaginons que nous voulons créer des animaux. Tous les animaux vont avoir la même structure, c'est à dire un objet qui contient un attribut nom et une méthode sound pour leur cri. Plutôt que de réécrire plusieurs fois le même code, on va créer une `AnimalFactory` qui, en fonction du type de l'animal, va créer l'objet adapté.

```js
let newCat = (name) => {
    let cat = {
        name: name
    }
    return cat
}
```

```js
for (animal in animals) {
    if (animal.name) {
        Console.print(animal.name)
    } else {
        Console.print("L'animal n'a pas de nom !")
    }
}
```

Dans notre exemple, toutes les parties "communes" aux chats et aux chiens (c'est à dire avoir un nom et renvoyer un objet) sont dans la factory `createAnimal`, et seuls les parties qui diffèrent (dans notre cas, la méthode `sound`) est dans les fonctions `Dog` et `Cat`. 

Une fois cela fait nous pouvons, en une seule ligne, créer un chat dont le nom serait Potimarron et donc la méthode `.sound()` afficherait "miaou" dans la console.

```js
let nouvelAnimal = AnimalFactory.createAnimal("cat", "Potimarron")
Console.print(nouvelAnimal.sound()) // affiche miaou
```

On ne va pas s'éterniser sur l'explication technique ligne par ligne, car la manière de faire diffère énormément d'un langage à l'autre. Si le sujet vous intéresse, il existe de nombreux sites référençant les design patterns et vous expliquant comment les mettre en place, tels que [Refactoring Guru](https://refactoring.guru/fr/design-patterns) et [Dofactory](https://www.dofactory.com/javascript/design-patterns/). Mais aussi le site Game Design Patern, qui référencent les patterns spécifiquement liés à la création de jeux.

:::marvin
Super ! Je peux régler tous mes problèmes en copiant collant des patterns d'internet ?
:::

Attention, les débutants qui découvrent un bout de code résolvant magiquement leurs problèmes peuvent avoir tendance à le sur-utiliser sans réellement en comprendre le fonctionnement. Cela mène à plusieurs limites : 
- Premièrement, quand on a un marteau, tout ressemble à un clou ! Attention à ne pas utiliser un design pattern complexes pour des problèmes qui auraient pu être réglés plus simplement 
- Ensuite, utiliser du code que vous ne comprenez pas va rendre la tâche de débogage compliquée le jour où la solution magique va cesser de fonctionner 
- Et enfin, les design patterns existent avant tout pour combler un manque d'abstraction dans certains langages. De la même manière que l'on préfèrera utiliser des fonctions de premier ordre plutôt que des boucles, demandez-vous si votre langage ne fournit pas une abstraction plus expressive et plus simple que votre design pattern.
