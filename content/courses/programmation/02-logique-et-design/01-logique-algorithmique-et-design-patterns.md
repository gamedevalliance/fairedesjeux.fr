---
title: "Logique algorithmique et design patterns"
---

Caler dans cette vidéo les commentaires : Une bonne manière pour que les gens comprennent ce que vous faites, c'est de mettre des commentaires.

Algorithmes
-> 
-> exemples : tri ou filtre

Design pattern
-> a la fois de régler un problème de manière maline
-> améliore la lisibilité, car les autres devs vont reconnaître le pattern
-> exemple : factory ou autre
-> donner des sites qui montre pleins de design pattern


Dans les vidéos précédentes, on a vu les opérateurs, les types, les fonctions et les structures de données. Mais la base de la programmation, c'est d'utiliser tous ces outils pour résoudre des problèmes. C'est ce qu'on appelle un algorithme, c'est un programme fait pour résoudre un problème.

Dans notre exemple, on va avoir un service qui va nous envoyer une liste de personnes. Vous reconnaissez peut-être que c'est un tableau contenant plusieurs fois des tableaux associatifs de personnages comme celui de la vidéo précédente. On a donc un tableau de personnes.

On va faire un programme qui va filtrer uniquement les personnes majeures de ce tableau.

(Bien expliquer ce que c'est une loop, et ce qu'est user)
Nous allons créer une boucle for, qui va se jouer pour chaque élément du tableau. Pour chaque élément donc, on va vérifier si son âge est d'au moins 18, et si oui, on prend cet utilisateur et on l'ajoute à un nouveau tableau adults.

for user in users {
	if user.age >= 18 {
		adults.push(user)
	}
}

(Faire aussi un tri sur les adultes : https://fr.wikipedia.org/wiki/Algorithme_de_tri
et parler de ça :
https://fr.wikipedia.org/wiki/Analyse_de_la_complexit%C3%A9_des_algorithmes
)

algos courants : filtrer des valeurs selon une condition, trier des valeurs (trier des titres de livres par ordre alphabétique). mais ça peut aussi être des problèmes beaucoup plus complexes, et une des manière de régler des problèmes complexes, surtout quand on est débutant, c'est d'utiliser des design pattern, ou patrons de conception, qui sont des solutions établies et reconnues comme étant des bonnes pratiques pour régler des problèmes courants. Ainsi, quand vous devez réaliser un algorithme complexe et que vous doutez de la bonne manière de faire, un bon premier réflexe peut être d'aller vérifier sur internet s'il n'y a pas déjà un design pattern ou en tout cas une manière de faire recommandée par des gens plus expérimentés et connaissant mieux le langage que vous.

Exemples de sites

Conclusion
