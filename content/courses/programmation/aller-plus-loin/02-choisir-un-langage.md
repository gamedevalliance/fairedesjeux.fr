---
title: "Choisir un langage"
---

Conseils généraux
-> utilisation
-> ressources

Système de type
-> statique / dynamique

compilateurs, interpréteurs
Evaluation stricte / paresseuse 
Les grandes familles de langage

—

Là on a fait le tour de toutes les bases et les grands principes de la programmation, et dans cette dernière vidéo, le but est de donner toutes les clés de compréhension qui permettent de différencier les différents langages de programmation. Bien sûr, quand vous allez créer votre jeu vidéo, le langage n'est absolument pas le critère numéro un, et comme nous l'expliquions dans "choisir un moteur", vous devriez d'abord choisir le moteur ou le framework qui convient à votre projet. Mais avec cette vidéo, si vous êtes confronté à un nouveau langage, vous aurez toutes les clés pour comprendre comment il est fait et ses différences avec les langages que vous avez l'habitude d'utiliser.

Tout d'abord, tous les langages ne sont pas adaptés à tous les paradigmes. Quand on va sur la page wikipédia d'un langage, il y aura souvent indiqué les paradigmes qu'il supporte. Nous avons déjà vu impératif, fonctionnel et orienté objet, qui sont les 3 paradigmes que vous rencontrerez le plus, mais il en existe de nombreux autres, n'hésitez pas à être curieux !

Dans la première vidéo, nous avions mentionné ce qu'était le type d'une variable, c'est-à-dire sa nature, par exemple un entier ou un texte. Certains langages sont statiquement typés, c'est-à-dire qu'après la déclaration du type d'une variable, celle-ci ne peut pas bouger. Vous ne pouvez pas transformer un nombre entier en un nombre flottant. Vous entendrez parfois utiliser l'expression typage fort ou faible, mais de nos jours, ces comparaisons n'ont plus beaucoup de sens et sont souvent très subjectives. Ainsi regardez plutôt si le typage est statique ou dynamique, et s'il est statique, regardez aussi s'il est inféré, càd si le langage est capable de deviner le type d'un élément.

Regardez aussi si le langage a un compilateur. Dans ce cas, le code que vous écrivez n'est pas le code final que lira la machine, mais il passera par le compilateur, un logiciel qui analysera votre code puis le transformera soit en un autre langage (on parle de transpilation) soit en un exécutable qui va pouvoir tourner sur une machine, soit un bytecode qui pourra être facilement interprété par différentes machines. A contrario, certains langages (par exemple tous les langages dit “de script”) sont écrits directement sous la forme qui seront interprétés. Par exemple, javascript est un langage de script dont le code est interprété à chaque utilisation par le navigateur web. A contrario, la majorité des langages statiquement typés passe d’abord par un compilateur qui va vérifier le respect des types puis produire un bytecode optimisée qui sera lui interprété. Par abus de langage, on parle parfois de langages interprétés ou compilés.

Plus technique, vous verrez parfois parler d’évaluation stricte ou paresseuse. Dans le cas d'une évaluation paresseuse, les différentes fonctions, méthodes et structures de données ne sont pas évaluées tant qu'elles ne sont pas appelées. Cela permet dans certains cas des gains de performance, l'écriture de certaines formes de programmes récursifs mais également des petits trucs rigolos comme pouvoir gérer des listes infinies. En effet si une liste infinie était évaluée de manière stricte, le CPU n'arriverait jamais au bout de la liste et se retrouverait avec une erreur "stack overflow", alors qu'avec une évaluation paresseuse, seuls les éléments que l'on va observer dans cette liste infinie seront évalués. Certains langages de programmation ne peuvent gérer qu'un type d'évaluation. Par exemple, le langage Haskell est paresseux par défaut, mais la plupart des langages vous permettent de passer certains bouts de code en paresseux, par exemple Ocaml avec le module lazy, et Python avec les generator tels que la fonction range().

Enfin, une dernière astuce peut être de regarder la famille à laquelle appartient votre langage, et les langages antérieurs desquels il s'est inspiré. Souvent, les langages dans leur logique ou dans leur syntaxe ne viennent pas de nulle part, mais sont inspirés soit de langages qui existaient précédemment dans l'industrie, soit de langages expérimentaux produits par la recherche. On peut par exemple donner la famille C, avec C, C++, C#, Objective-C, Java, Perl, PHP, JavaScript, ou la famille ML, avec SML, Caml, Caml Light, OCaml puis F#.

Vous avez désormais tous les outils en main pour découvrir le monde de la programmation, tester tous les outils qui existent.
