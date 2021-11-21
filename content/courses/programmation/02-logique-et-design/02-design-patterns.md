---
title: "Design patterns"
---

Une des choses importantes en programmation, c'est d'éviter à tout prix de réinventer la roue. Pas besoin de recréer un algorithme de tri quand votre langage en embarque déjà un qui sera compris par tous les autres programmeurs et qui sera mis à jour.

De la même manière, si vous êtes confrontée à un problème qui vous semble courant, plutôt que de bricoler votre propre solution, regardez s'il n'existe pas une manière standardisée d'y répondre. On appelle cela des design patterns. Ils ont deux intérêts : le premier est d'avoir sans doute été pensé par quelqu'un de plus expérimenté que vous, le second est d'être connu, et donc compris, par une grande partie des programmeurs de votre langage.

:::remi
Les design patterns servent à compenser les manques de certains langages. Préférez toujours les fonctions pré-faites si elles existent !
:::

Prenons un exemple avec un pattern Factory. N'ayez pas peur si ça a l'air compliqué, on vous explique ensuite.

Imaginons que nous voulons créer des animaux. Tous les animaux vont avoir la même structure, c'est à dire un objet qui contient un attribut nom et une méthode sound pour leur cri. Plutôt que de réécrire plusieurs fois le même code, on va créer une `AnimalFactory` qui, en fonction du type de l'animal, va créer l'objet adapté.

```js
function AnimalFactory() {
    this.createAnimal = (type, name) => {
        let animal
        animal.name = name
        if (type == "dog") {
            animal = new Dog()
        } else if (type == "cat") {
            animal = new Cat()
        }
        return animal
    }
}
function Dog() {
    this.sound() {
        print("ouaf")
    }
}
function Cat() {
    this.sound() {
        print("miaou")
    }
}
```

Dans notre exemple, en une seule ligne, nous pouvons créer un chat dont le nom serait Potimarron et donc la méthode `.sound()` afficherait "miaou" dans la console.

```js
let nouvelAnimal = AnimalFactory.createAnimal("cat", "Potimarron")
```

On ne va pas s'éterniser sur l'explication technique ligne par ligne, car la manière de faire diffère énormément d'un langage à l'autre. Si le sujet vous intéresse, il existe de nombreux sites référençant les design patterns et vous expliquant comment les mettre en place, tels que [Refactoring Guru](https://refactoring.guru/fr/design-patterns) et [Dofactory](https://www.dofactory.com/javascript/design-patterns/).

:::notlikethisremi
Ne sur-utilisez pas les design patterns là où ils ne sont pas nécessaires, surtout si vous ne les comprenez pas bien... Le code spaghetti est vite arrivé !
:::
