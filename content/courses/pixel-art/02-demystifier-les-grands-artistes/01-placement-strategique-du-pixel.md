---
title: "Le placement stratégique du pixel"
description: "Décomposons les grandes icônes du pixel art pour mieux comprendre ce qui les rend si légendaires ! Commençons par le jeu le plus beau que j'ai jamais vu : Secret of Mana 3."
---

Si vous aimez les RPG, vous avez sûrement déjà joué aux icônes du genre. Ce qu'on va faire dans ce chapitre, c'est les décomposer pour voir ce qui les rend aussi légendaires ! Parlons de Secret of Mana 3, qui est probablement le jeu le plus beau que j'ai jamais vu :

![Images de Secret of Mana 3](./secret-of-mana-3.png)

Impressionnant, hein... Mais décomposons-le et voyons ce qui le rend *si* impressionnant.

Regardez le premier screen. Ignorez les arbres, les piles de terre et tout le reste, et concentrez-vous uniquement sur le sol. Pourquoi est-il différent des sols que j'ai faits plus tôt, comme celui du châlet dans la partie sur les dégradés ? La différence, c'est le niveau d'intérêt.

Si vous regardez le sol de plus près, vous remarquerez qu'ils ne se sont pas contentés de prendre un tile d'herbe et de remplir toute la map avec, mettre des arbres autour, et dire « Ok, c'est terminé. On a notre forêt. » Rien que sur la première image, il y a peut-être bien quatre types de fleurs différents, et plusieurs motifs pour l'herbe, la terre et les herbes hautes !

Bien sûr, tout est extrêmement bien dessiné, mais ça ne veut pas dire que personne d'autre ne peut le faire. Prenons un morceau du screen et agrandissons-le.

![Zoom sur l'herbe de Secret of Mana 3](./secret-of-mana-herbe.png)

Petite note au passage... Ce dont je parlais tout à l'heure, éliminer la grille. Eh bien Secret of Mana 3 l'a absolument fait. J'ai été obligé de découper mon screen au hasard parce que je n'avais aucune idée d'où commencent et finissent les tiles. Ça, mes amis, c'est une réussite.

Maintenant, concentrons-nous sur l'herbe. Comptez le nombre de couleurs utilisées. Trois. Eh oui, seulement trois, comme l'herbe que l'on a faite plus tôt dans ce cours.

:::oofmarvin
Mais on ne dirait pas qu'il y a que trois couleurs ! Quand on regarde de loin, on dirait qu'il y a plein de teintes !
:::

C'est vrai, l'illusion est parfaite. Regardez une des larges touffes d'herbe, avec les grands brins. Vous pouvez voir que les brins sont dessinés en grande partie avec le vert le plus clair. Ils ont aussi utilisé le vert intermédiaire pour souligner cette teinte claire, mais il y en a peu.

Maintenant, attardez-vous sur une zone qui semble plus plate, en bas au centre par exemple. Cette fois, ils n'ont utilisé que le vert foncé et le vert intermédiaire. Il n'y a que quelques points ici et là de teinte claire, pour donner l'illusion de brins d'herbe qui pointent, attrapant la lumière. Le reste est composé de pixels éparpillés. La plupart n'ont même pas la forme d'un brin d'herbe ! Vous pouvez voir des amas de vert intermédiaire qui ont la forme de carrés, de gribouillis, de tetrominos... Mais quand vous êtes en train de jouer, ça ressemble à de l'herbe. 

Ce que nous avons appris ici, c'est que pour que quelque chose ait l'air plus clair, vous n'avez pas besoin d'une teinte supplémentaire. Vous devez juste décider d'à quel point vous utilisez chaque couleur.

Prenons une autre zone, du deuxième screen cette fois.

![Zoom sur la terre de Secret of Mana 3](./secret-of-mana-terre1.png)

Intéressons-nous à la terre : on peut distinguer quatre teintes. La quatrième, la plus foncée, est utilisée rarement. Ce sont juste des pixels parsemés ici et là pour ajouter un peu de profondeur ou pour souligner l'herbe, qui devrait projeter une ombre de toute façon.

C'est juste placé à quelques endroits... mais ça fait plus que vous ne pourriez l'imaginer. Pour vous montrer un exemple drastique de tout ce que fait cette teinte à l'image, j'ai éclairci d'un cran la teinte la plus foncée :

![Zoom sur la terre de Secret of Mana 3](./secret-of-mana-terre2.png)

:::oofmarvin
Qu'est-ce qui s'est passé ? C'est tout plat maintenant !
:::

Non seulement c'est plat, mais si vous plissez les yeux pour que les couleurs soient un peu floues, vous remarquerez que vous pouvez toujours dire où est l'herbe et où est la terre dans le screen original. Par contre, si vous regardez ma version éditée, vous voyez que la terre et l'herbe commencent à un peu trop se mélanger. 

Aussi, si vous regardez au milieu du chemin, la terre semble plus lisse, moins rocailleuse qu'avant.

Regardez de nouveau le screen d'origine et prêtez attention à où est placée cette teinte. Elle est toujours placée près des autres teintes foncées. On dirait qu'il y a des trous de différentes profondeurs dans le sol... Et les plus profonds sont ceux qui auraient les pixels les plus foncés pour le montrer. Ça rend le terrain rocheux et surtout, ça donne plus de variation de profondeur que l'herbe, parce que l'herbe n'utilise que trois teintes et n'en a pas une quatrième plus foncée. 

Alors à quoi est-ce que ça ressemblerait si l'herbe avait cette quatrième teinte ? Eh bien j'en ai ajouté une ici :

![Zoom sur la terre de Secret of Mana 3](./secret-of-mana-terre3.png)

Maintenant, vous pouvez voir que l'herbe semble plus épaisse, comme si d'autres brins d'herbe se cachaient en dessous. Et ça peut être sympa... Mais plissez à nouveau les yeux et observez les deux images. 

Quelle herbe semble bien plus gonflée que l'autre ? L'herbe de gauche. Pourquoi ? Parce qu'elle n'a pas de quatrième teinte. Avec seulement trois teintes, l'herbe de gauche a beaucoup de « joli vert foncé » pour lui donner un niveau sur lequel se reposer. On décide mentalement que cette herbe doit être plus haute que la terre, puisqu'il n'y a pas de teinte qui dit « cette texture s'enfonce dans le sol ».

Dans l'image de droite, on a plus de mal à différencier l'herbe de la terre, puisque maintenant que l'herbe a une quatrième teinte, elles sont toutes les deux au même niveau.

Vous remarquerez aussi que j'ai utilisé bien plus de vert foncé qu'il n'y a de marron foncé... Ce qui donne l'impression que l'herbe est encore plus basse que la terre. C'est subtil mais si vous relaxez vos yeux, le chemin a l'air d'être au dessus de l'herbe. 

C'est un mécanisme naturel de l'esprit : si c'est plus clair, c'est plus près. Si la terre a moins de teinte foncée, elle a l'air plus claire et donc plus proche. L'herbe, qui est désormais un tas de pixels clairs et sombres, semble repoussée. Tout ça à cause d'une teinte !

Passons désormais à l'arbre :

![L'arbre de Secret of Mana 3](./arbre.png)

Pas mal cet arbre, hein ? Regardez-le de près, en commençant par la grande zone verte. En mettant de côté les pixels les plus foncés, pratiquement noirs, placés ici et là, vous avez cinq teintes de vert. Seulement cinq.

:::oofmarvin
Mais ça ressemble tellement à... un arbre... et c'est... gonflé... Comment ?!
:::

Si vous vous reculez un peu, vous verrez comme des gros amas de feuilles, et pourtant elles ne sont pas séparées par des lignes noires ou que sais-je... On ressent juste leur présence. 

Eh bien ça marche de la même manière que la fameuse sphère avec de la lumière. Vous l'avez probablement déjà vue si vous vous êtes renseigné·e sur les concepts d'éclairage, mais je vais rapidement en parler pour cet exemple :

![Sphère avec de l'ombre](./sphere.png)

Voici une sphère avec une lumière qui se reflète dessus. Vous pouvez dire instantanément que la lumière vient frapper le coin en haut à gauche parce que ce côté est plus clair, et l'opposé est, bien évidemment, plus foncé. On ressent la 3D, même si ce ne sont que de simples pixels, comme tout ce qu'on a regardé depuis le début du cours.

Utilisons cette sphère pour recréer une partie de l'arbre : 

![Sphères assemblées](./spheres.png)

On dirait vraiment de la 3D... En regardant l'image, les sphères ont l'air d'être placées devant ou derrière les autres. Ça n'a pas été fait en dessinant une ligne noire, mais bien grâce à l'ombrage. Si vous regardez une sphère individuellement, les pixels ont tous plus ou moins la même teinte, donc ça semble être un seul objet. Mais là où deux sphères se chevauchent, le changement de teinte est bien plus drastique. De presque noir à pratiquement blanc. C'est pour ça qu'on a l'impression que ce sont des zones séparées.

Retournons à notre arbre maintenant :

![Arbre de Secret of Mana 3](./arbre.png)

Vous voyez peut-être maintenant le rapport. Là où la sphère était claire, l'arbre a un vert proche du jaune, et plus les teintes se rapprochent du bord d'une sphère, plus elles deviennent foncées. 

On va s'attarder maintenant sur la partie en bas à gauche, juste au-dessus de la fine ligne noire et violette... Le vert est quand même très foncé, non ? Pourtant il n'y a pas de nouvelle teinte plus foncée, c'est juste qu'il n'y a pas de jaune. C'est exactement comme pour l'herbe ! Quand vous utilisez des teintes foncées près de teintes claires, vous donnez l'impression qu'elles sont en retrait, ombrées.

D'ailleurs, aviez-vous remarqué que le tronc semble avoir des couleurs plus claires que la terre ? Eh bien ce n'est pas le cas. Le tronc a exactement les mêmes couleurs que la terre, mais il y a une plus grande zone de clair, qui donne l'impression que le tronc est plus lumineux. Tout est une question de placement stratégique du pixel. 

Parlons maintenant des bleus et violets un peu étranges... C'est la théorie des couleurs : les ombres ne sont *jamais* noires, il y a toujours un peu de bleu dedans. Quand vous utilisez du noir, tout a l'air plat et inintéressant. Quand le noir en question contient un peu de couleur, vous le faites ressortir, vous le rapprochez de la caméra.

C'est pour ça que si vous regardez les parties les plus sombres de l'arbre, vous pouvez voir qu'elles ne sont pas noires... Ce sont juste des teintes très foncées de vert. Et pour continuer sur la règle des ombres bleues, c'est la raison pour laquelle la moitié de l'arbre est ombrée avec du bleu et du violet. 

Bon, vous n'avez pas besoin d'utiliser du bleu dans toutes vos ombres, mais gardez ça en tête. N'utilisez des ombres noires que si le rendu est vraiment saisissant, comme pour une scène de nuit par exemple. 

Attaquons maintenant le dernier screen, la plage :

![Plage de Secret of Mana 3](./secret-of-mana-plage.png)

Tout d'abord, laissez-moi vous dire que c'est un bon exemple d'élimination de la grille. Il est presque impossible de dire où sont les tiles !

Combien de fois avez-vous vu quelqu'un créer un RPG et prendre un tile de sable pour l'utiliser comme un tile d'herbe en remplissant tout l'écran avec, et appeler ça une plage ? Regardez celle-là maintenant... Il y a non seulement plusieurs types de sable, que ce soient les dunes ou le sable mouillé, mais il y a aussi des pierres orange et de l'herbe séchée. Voilà qui est intéressant à regarder !

:::hypemarvin
C'est incroyable ! Il doit y avoir une tonne de teintes dans ce sable !
:::

:::remi
Vas-y, compte-les.
:::

:::oofmarvin
...Quatre. Il y en a quatre.
:::

Et pourtant on distingue plusieurs zones : les dunes, le sable humide et foncé et sa ligne de transition juste avant. La zone humide n'utilise que la deuxième teinte la plus sombre et aucune autre, ce qui lui donne un aspect plat, égalisé. Si vous êtes déjà allé·e à la plage, vous savez que c'est ce à quoi ressemble le sable quand une vague vient de passer.

La zone séparant le sable clair et la zone humide est une longue ligne de pixels d'une teinte intermédiaire. Le sable clair est fait la teinte la plus claire. Pour obtenir des creux et des courbes, la seconde teinte la plus claire est utilisée pour les plus petites zones... Pour les grandes ombres, toutes les teintes sont utilisées, la plus foncée étant là où la dune est la plus haute et projette donc le plus d'ombre.

C'est très subtil, mais la teinte la plus foncée n'est pas un simple jaune foncé. Il y a un peu de bleu dedans... Je souhaitais juste le souligner. Au programme ensuite : le génial et renommé Final Fantasy VI.
