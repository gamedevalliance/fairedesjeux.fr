---
title: "Les design patterns"
---

Les design patterns sont des bouts de code qui permettent de résoudre des problèmes courants en programmation, mais qui ne sont pas automatisés par le langage que vous utilisez. Ces solutions standardisées sont partagées sous la forme d'un code à recopier dans votre programme et à adapter légèrement.

Les design patterns ont deux intérêts : le premier est d'avoir sans doute été pensé par quelqu'un d'expérimenté, le second est d'être connu, et donc compris, par une grande partie des programmeurs de votre langage.

:::remi
L'exemple qui va suivre peut sembler curieux, mais pas de panique. Le but est simplement de comprendre le concept, non pas ce design pattern spécifiquement.
:::

Prenons un exemple avec un pattern Factory pour créer des animaux. Tous les animaux auront la même structure : un objet contenant un attribut nom et une méthode sound pour leur cri. Plutôt que de réécrire plusieurs fois le même code, on va créer une `AnimalFactory` qui, en fonction du type de l'animal, va créer l'objet adapté.

```js
let newCat = (name) => {
    let cat = {
        name: name
    }
    return cat
}
```

Dans notre exemple, toutes les parties "communes" aux chats et aux chiens (c'est à dire avoir un nom et renvoyer un objet) sont dans la factory `createAnimal`, et seuls les parties qui diffèrent (dans notre cas, la méthode `sound`) est dans les fonctions `Dog` et `Cat`. 

Une fois cela fait nous pouvons, en une seule ligne, créer un chat dont le nom serait Potimarron et donc la méthode `.sound()` afficherait "miaou" dans la console.

```js
let nouvelAnimal = AnimalFactory.createAnimal("cat", "Potimarron")
Console.print(nouvelAnimal.sound()) // affiche miaou
```

Il n'est pas utile de s'éterniser sur l'explication ligne par ligne, car la manière de faire diffère énormément d'un langage à l'autre. Si le sujet vous intéresse, il existe de nombreux sites référençant les design patterns et vous expliquant comment les mettre en place, tels que [Refactoring Guru](https://refactoring.guru/fr/design-patterns) et [Dofactory](https://www.dofactory.com/javascript/design-patterns/). Le site [Game Programming Patterns](https://gameprogrammingpatterns.com/) référence les patterns spécifiquement liés à la création de jeux.

:::marvin
Super ! Je peux régler tous mes problèmes en copiant-collant des patterns d'internet !
:::

:::notlikethisremi
Pas si vite ! Il ne faut pas utiliser les design patterns à tout va...
:::

:::winkastride
Comme le dit l'adage, quand on a un marteau, tout ressemble à un clou ! Attention à ne pas utiliser un pattern complexe pour régler un problème simple.
:::

Les design patterns existent avant tout pour combler un manque d'outils dans certains langages (on peut parler d'un manque d'**abstraction**). De la même manière que les fonctions de premier ordre sont plus sûres et lisibles que des boucles for, une abstraction fournie par votre langage serait plus expressive et plus simple qu'un design pattern.

Utiliser un pattern copié d'Internet et dont vous ne comprenez pas le fonctionnement pourrait rendre le débogage plus compliqué lorsque votre code ne fonctionnera plus. Ainsi, il ne faut pas voir les design patterns comme des solutions magiques, mais toujours se demander s'il existe une autre solution plus adaptée à votre problème !
