---
title: "Les paradigmes orienté objet et fonctionnel"
---

Orienté objet
-> 

Fonctionnel
-> 

Bonjour et bienvenue sur Game Dev Alliance.

Dans la vidéo précédente, on a dit que pour certains problèmes, y avait des solutions conventionnelles, que tout le monde utilise. Plus largement que ça, il existe plusieurs manières de penser sa manière de programmer et d'approcher les problèmes. Le plus ancien et le plus simple, c'est celui que l'on avait rapidement abordé dans la première vidéo : la programmation impérative, qui consiste à penser un programme comme une simple suite d'instruction que la machine exécute les uns à la suite des autres, jusqu'à arriver à la solution. Mais ce n'est pas la seule manière de penser et d'écrire un programme, et aujourd'hui, on va parler de deux paradigmes différents, le premier étant la programmation orientée objet, qui est le paradigme ultra majoritaire dans le développement de jeu vidéo, et un second paradigme, la programmation fonctionnelle, qui est beaucoup moins présent dans le jeu vidéo, mais qui va permettre de comprendre que l'on peut penser l'écriture d'un programme d'une manière fondamentalement différente.

L'orienté objet, comme son nom l'indique, pense les programmes comme un assemblage de briques logiques que l'on appelle des objets. Un objet va contenir des variables qui le définissent, que l'on appelle des attributs ou propriétés, mais aussi des fonctions qui lui sont propres, que l'on appelle des méthodes.

Afin de faciliter la création de ces objets, on utilise des classes. Une classe va définir les propriétés et méthodes que va avoir un certain type d'objet, et fournir une méthode pour créer des objets héritant de cette classe. Par exemple, on pourrait créer une classe Voiture, qui a un poids fixe, une vitesse fixe, une couleur définie par un string, et des coordonnées définies par un tuple de deux int, et une méthode qui, quand on va l'appeler, va modifier les coordonnées en fonction de la vitesse, et print les nouvelles coordonnées. A partir de là, nous allons créer plusieurs voitures (rouge, bleu, verte) pour lesquelles chacune pour appeler leur méthode pour se déplacer individuellement. On appelle ces objets voiture des instances de la classe Voiture.

Une classe peut hériter d'une autre classe. Dans ce cas, la classe enfant va avoir les mêmes attributs et méthodes que sa classe parente, mais également des attributs et méthodes supplémentaires. Par exemple, on peut créer une classe Camion qui va avoir une méthode supplémentaire, Charger, lui permettant de prendre des colis. Une classe enfant peut également écraser des attributs et des fonctions de la classe parent. Par exemple, on pourrait créer une classe Voiture de course, avec une vitesse plus élevée.

Ainsi, la programmation orientée objet envisage les programmes comme étant les interactions entre différents objets.
Bien évidemment, tout l'enjeu est de faire interagir ces objets entre eux. Par exemple, si un des véhicules entrent en collision avec un autre, ils se suppriment, car ils sont détruits.

L'orienté objet a beaucoup d'intérêts, mais a aussi des défauts, et notamment des problèmes de maintenabilité. En effet, si l'on change d'avis sur la manière dont on veut penser nos classes, ou si l'on souhaite corriger un bug, le système d'héritage peut très facilement créer du code spaghetti, ou l'on se retrouve à devoir réécrire de nombreuses classes pour corriger le problème. C'est pourquoi nous allons présenter un second paradigme qui répond à ce problème. Ce n'est pas pour autant que vous devez l'utiliser : c'est un paradigme peu utilisé dans le jeu vidéo et vous aurez du mal à trouver des outils qui conviennent, mais c'est pour vous donner un exemple concret de comment penser différemment la programmation permet de résoudre différemment les problèmes.

Vous vous rappelez de la seconde vidéo où nous avons parlé des fonctions ? Cet outil qui, pour des paramètres donnés, retourne un résultat. La programmation fonctionnelle considère un programme comme un ensemble de fonctions mathématiques permettant d'arriver au résultat voulu. Pour ce faire, deux problèmes sont importants à comprendre : les effets de bord et la mutabilité des structures de données.

Une des choses qui peut causer un code spaghetti est un programme avec des fonctions ou des méthodes qui ont trop d'effets de bord. Un effet de bord, c'est un effet secondaire d'une fonction qui n'est pas sa valeur de retour. Une fonction est qualifiée de pure si elle est transparente référentiellement, c'est-à-dire que l'on peut remplacer la fonction par son résultat. En clair, pour un paramètre donné, une fonction va toujours renvoyer le même résultat. Imaginons maintenant qu'une fonction prenne un nombre et me renvoie un nombre modifié, mais qu'entre-temps, elle effectue une seconde action, par exemple modifier une variable ou afficher une image. Si cela est trop fréquent dans mon programme, cela peut causer un problème quand j'essaie de réécrire des fonctions, car je peux accidentellement briser d'autres parties du programme qui dépendaient d'effets de bord des anciennes fonctions que j'avais oubliés.

Un second problème peut être la mutabilité des structures de données. Si plusieurs processus ou logiques tournent dans mon programme, modifiant des valeurs ou des attributs, cela peut créer des bugs ou casser la logique d'autres processus qui ne se retrouvent pas devant les attributs et valeurs qu'ils attendaient. Par exemple, imaginons que j'ai une liste d'ingrédients et que pour faire un sandwich, je découpe ces ingrédients en tranches. Si à ce moment-là, un autre processus arrive pour récupérer la liste d'ingrédients et se retrouve devant les ingrédients coupés en rondelles, cela peut l'empêcher de fonctionner correctement. En programmation fonctionnelle, les structures de données sont immuables, et les variables sont quasiment toutes des constantes. Si je souhaite utiliser cette liste d'ingrédients, j'en demanderai d'abord une copie avant de la découper.

Grâce à ces deux solutions et quelques autres, un programme écrit de manière fonctionnelle est ainsi un ensemble de fonctions que l'on peut facilement refactorer (refaire, remplacer) sans avoir peur de briser quelque chose à l'autre bout du programme, et qui peuvent librement agir sur les données sans avoir peur d'empêcher le travail d'un autre processus.

(Marvin Mais il y a forcément des effets de bord dans un programme!
Astride Oui mais il faut essayer de les isoler dans quelques fonctions ou outils qui sont dédiés à ça)
