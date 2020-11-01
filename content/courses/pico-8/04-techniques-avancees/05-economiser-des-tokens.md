---
title: "Economiser des tokens"
---

Coûtent 1 token chacun :

- les noms de variables,
- les opérateurs,
- les parenthèses et les crochets,
- les nombres et les chaînes de caractères.

Ne sont pas comptés :

- les virgules, les points et les points-virgule,
- les `local`,
- les `end`.

character count, compressed size (pour png uniquement)

The current number of code tokens is shown at the bottom right. One program can have a
		maximum of 8192 tokens.

A few of these are pretty obvious, a few of them are not that obvious. Almost all of them make your code more unreadable, harder to edit, and would generally be considered "bad practice" in a less constrained system.

### Les économies propres

#### Assignations en une ligne

Vous pouvez déclarer autant de variables que vous le souhaitez en une ligne, ce qui vous économise un `=` par variable supplémentaire.

```lua
x, y, z = 10, 22, 3
```

Les virgules n'étant pas comptées, vous économisez ainsi un token par variable. Vous pouvez mélanger différents types de variables en une ligne. Le mot-clé `local` rendra toutes les variables de la ligne locales, et il ne coûte pas de token.

```lua
local text, anim = "abonnez-vous", {1, 2, 3}
```

A vrai dire, vous n'êtes même pas obligé·e d'assigner une valeur à chaque variable :

```lua
x, y, z = 10
```

Ici, `x` vaut `10` tandis que `y` et `z` valent `nil`, autrement dit n'ont pas de valeur. Lorsque vous avez envie de supprimer la valeur d'une variable, vous économisez un token supplémentaire en le faisant ainsi !

#### Foreach

```lua
for i in all(tableau) do
    action(i)
end
```

```lua
foreach(tableau,action)
```

### Astuces sur les tableaux

#### Créer des variables séparées

On utilise souvent les tableaux pour créer des objets ayant des propriétés, par exemple `player.x` et `player.y`. C'est utile lorsque vos fonctions prennent des objets en argument, par exemple une fonction de déplacement qui s'occupe de tous les objets aux propriétés `x` et `y`.

Cela dit, `player.x` prend 2 tokens là où `player_x` n'en prendrait qu'un. Si vous créez des objets par simple habitude mais n'exploitez pas leur intérêt, il vaudra mieux les remplacer par des variables simples pour économiser pas mal de tokens sur le long terme.

#### Utiliser des variables locales

Si vous utilisez une valeur d'un tableau à répétition dans une de vos fonctions, vous pouvez stocker son contenu dans une variable locale pour économiser des tokens.

Ecrire `local x = player.x` coûtera 4 tokens, qui seront rentables à partir de 5 utilisations de la variable. Le gain sera d'autant plus grand que la variable est difficile d'accès ; par exemple `local x = enemy[1].x` (6 tokens) est rentable au bout de 3 utilisations seulement.

:::winkastride
N'oubliez pas que vous pouvez également créer plusieurs variables locales en une ligne pour économiser un token par variable !
:::

:::remi
De plus, votre jeu devrait utiliser un petit peu moins de CPU puisque l'accès aux variables locales est plus rapide !
:::

#### Transformer les tableaux de données en strings
If you're working on a larger project, you might run into a situation where you've hit the token limit because you're trying to store large amounts of data. This could be enemy coordinates, lines of NPC dialogue, level configurations, item properties, etc.; whatever it is, chances are it's being stored in a big table somewhere in your project, taking up a bunch of tokens. Instead of storing data in tables, you can often save tokens by storing it in strings and parsing it into tables at runtime.

One of the added benefits of this method is that, depending on your data, you might actually be able to reduce your character count by moving the string data into unused portions of the cartridge memory (e.g. empty map space, empty sfx, etc.) and extract it at runtime.

The implementation of this can, of course, vary quite a bit from project to project. The following is a simple example of how one might convert a table of single-digit numbers into a string parsed at runtime: 
```lua
data={0,1,2,3,4,5,6,7,8,9,4,6,7,2,8,8,2,8,9,1,6,5,3,3,6,8,9,3,3,6,7,9,0,3,1,2,2,3,5,7,8,9,0}

for i in all(data) do
 print(i)
end
```
```lua
data_string="0,1,2,3,4,5,6,7,8,9,4,6,7,2,8,8,2,8,9,1,6,5,3,3,6,8,9,3,3,6,7,9,0,3,1,2,2,3,5,7,8,9,0"
data={}
while #data_string > 0 do
 local d=sub(data_string,1,1)
 if d!="," then
  add(data,d)
 end
 data_string=sub(data_string,2)
end

for i in all(data) do
 print(i)
end
```
Both programs produce the same result, but the first is 56 tokens and the second is only 44. Notably, each additional element in the first program's `data` table requires an additional token, but the second program stays the at same token count for an arbitrary length `data_string`.

*Note that this example is just for demonstration purposes, and not meant to show an optimal method for either storing or parsing data.*

- Use when: you're dealing with large amounts of similar data stored in tables
- Caveats: Remember that PICO-8's other limits (character, compressed, RAM) can be just as restrictive as the token limit; this technique is useful but it doesn't give you infinite storage. Also, strings aren't limited in length, but accessing data in a string with more characters than PICO-8 numbers can represent may require a bit of extra work (e.g. the `#` operator will overflow).
- Saves: depends; usually a whole lot of tokens, but with a fairly large overhead

### Les opérateurs logiques

Plus tôt dans cette formation, je vous avais montré comment imiter un opérateur ternaire en Lua, et c'est une bonne façon d'économiser des tokens :

```lua
-- 14 tokens :
local x
if a then
	x = b
else
	x = c
end
print(x)

-- 10 tokens :
local x = a and b or c
print(x)

-- 7 tokens :
print(a and b or c)
```

En fait, lorsque Lua lit une expression avec les opérateurs logiques `and` et `or`, le programme s'arrête dès qu'il peut résoudre la condition. Par exemple, dans le cas de l'expression `a or b`, si `a` retourne une valeur vraie, `b` n'est même pas évalué.

:::profremi
Tout ce qui n'est pas `false` ou `nil` est vrai pour les opérateurs logiques. Ainsi, un texte ou même le nombre 0 sont considérés comme vrais.
:::

En sachant cela, vous pouvez écrire :

```lua
variable = variable or "cool"
```

Si la variable existe déjà, alors elle garde sa valeur, mais si elle n'existe pas encore (`nil`) ou qu'elle vaut `false`, on lui donne la valeur `"cool"`. Cela prend 2 tokens de moins que :

```lua
if not variable then
    variable = "cool"
end
```

Mais nous reviendrons à cette astuce plus tard ! Pour récapituler :

- `a and b` renvoie `a` si l'expression est fausse, `b` si elle est vraie.
- `a or b` renvoie `a` si l'expression est vraie, `b` si elle est fausse.

Vous pouvez maintenant comprendre comment fonctionne l'astuce `a and b or c`. Comme `and` a une plus haute priorité que `or`, ce qui se passe est en fait ceci :

```lua
(a and b) or c
```

D'après les deux règles ci-dessus, vous pouvez mieux comprendre pourquoi le résultat de cette expression sera `b` ou `c`. Eurêka !

### Les fonctions

#### Créer des arguments par défaut

Vous savez déjà que les fonctions de base de PICO-8 ont beaucoup d'arguments facultatifs, et c'est un moyen efficace d'économiser des tokens. Par exemple, l'argument de couleur est souvent optionnel puisque son comportement par défaut est de prendre la dernière couleur utilisée. Vous pouvez utiliser le même principe dans vos propres fonctions ! Mettons que votre fonction `action()` est appelée très souvent, mais pas toujours, avec l'argument `"potion"`. L'écriture suivante :

```lua
function action(argument)
    -- Votre fonction
end
action("potion")
action("potion")
action("potion")
action("magie")
```

peut devenir :

```lua
function action(argument)
    argument = argument or "potion"
    -- Votre fonction
end
action()
action()
action()
action("magie")
```

C'est l'astuce dont je vous avais parlé tout à l'heure ! Comme la nouvelle ligne ajoute 5 tokens, cela devient rentable au bout de 6 utilisations de `action()`.

Cependant, si votre fonction n'a qu'un seul argument comme dans cet exemple, la prochaine astuce vous permettra sûrement d'économiser le même nombre de tokens tout en conservant un code explicite.

#### Appeler une fonction avec des strings

Instead of calling functions with brackets (i.e. `FUNC()`) you can call them using strings (i.e. `FUNC""`) or tables (i.e. `FUNC{}`). On its own, this doesn't save any tokens, but the string or table used to call the function will be passed in as the first argument at no extra token cost. This means that `FUNC("STRING")` or `FUNC({TABLE})`, 3-token statements, are the same as `FUNC"STRING"` or `FUNC{TABLE}`, 2-token statements.

In most cases, this format will also work for a single number contained in a string, e.g. `BTN(0)` can safely be replaced with `BTN"0"`. It's important to note that the argument is still passed in as a string, so some user-defined functions may not work as expected in this format, e.g.
```lua
function FOO(NUMBER)
 return NUMBER==0 or type(NUMBER)=="NUMBER"
end
function BAR(NUMBER)
 NUMBER+=0
 return NUMBER==0 and type(NUMBER)=="NUMBER"
end
print(FOO"0") -- false
print(BAR"0") -- true
```
- Use when: calling a function with a single literal argument.
- Caveats: Numbers are passed in as string and may need to be converted. String-to-number conversion is fine for most cases, but currently has a rounding error with negative numbers (see http://www.lexaloffle.com/bbs/?tid=27597).
- Saves: 1 token per function call

#### Renvoyer plusieurs valeurs

```lua
function calculs(a,b)
    return a*b, a/b
end

mult, div = calculs(12, 8)
```

### Remplacer les constantes par leur valeur

Comme on l'a vu dans cette formation, il est souvent préférable d'écrire vos valeurs dans des variables même lorsqu'elles sont constantes. Vous aurez une meilleure idée de ce que fait votre code s'il contient des noms tels que `speed` ou `gravity` plutôt que des `12.3` et des `5.67` un peu partout. Bien sûr, déclarer ces constantes au début du jeu vous coûtera quelques tokens, alors pour faire des petites économies vers la fin du développement, vous pourriez remplacer toutes les références à ces variables par leur véritable valeur, mais attention : retoucher votre jeu deviendra alors un véritable casse-tête. Dans la même idée, vous pouvez simplifier tous vos calculs, qui deviendront moins clairs mais plus condensés.

Prenons comme exemple la fonction de caméra qui suit le personnage que nous avions écrite dans le jeu d'aventure. Elle utilise 55 tokens et contient des constantes dans des variables locales ainsi que des calculs qui pourraient être simplifiés.

```lua
function update_camera()
    local map_width = 31
    local map_height = 31
    local camx = mid(0, (p.x - 7.5) * 8 + p.ox, (map_width - 15) * 8)
    local camy = mid(0, (p.y - 7.5) * 8 + p.oy, (map_height - 15) * 8)
    camera(camx, camy)
end
```

De plus, il faut penser aux 2 tokens qui seront nécessaires pour appeler `update_camera()` dans `_update()` ! Si l'on réduit la fonction à son strict minimum, on obtient :

```lua
camera(mid(0, 8 * p.x - 60 + p.ox, 128), mid(0, 8 * p.y - 60 + p.oy, 128))
```

Ici, on n'utilise plus aucune variable intermédiaire, ce qui a réduit le code à 28 tokens tout en le rendant moins agréable à lire (mais en s'accrochant un peu, ça va encore). Tant qu'à faire, on insère directement cette ligne dans `_update()` plutôt que d'en faire une fonction à appeler.

Ce genre de processus peut vous permettre de retrouver pas mal de tokens, mais je vous conseille, encore une fois, de ne le faire que lorsque vous êtes sûr·e de ne jamais retoucher à cette partie du code.
