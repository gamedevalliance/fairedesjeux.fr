---
title: "Script de l'ordinateur"
description: "Dans cette' section, nous allons coder le script de déplacement de l'ordinateur afin qu'il puisse contrôler sa raquette."
---

Actuellement, la raquette de l’ordinateur n’est contrôlée que via les flèches haut et bas de notre clavier. Ce n’est pas ce que nous souhaitons. Dans l’idée, c’est l’ordinateur qui doit contrôler sa raquette de façon autonome afin que l’on puisse l’affronter.

Je vous invite donc à créer un nouveau script C# que vous appellerez `PongAI`. Ce script sera l’intelligence artificielle de l’ordinateur. Une fois créé, ajoutez ce script à la raquette de l’ordinateur uniquement. Enfin, ouvrez le script pour pouvoir l’éditer.

Le code de notre IA sera relativement simple. Nous allons avoir besoin de 3 variables. La première permettra de stocker le transform de la balle. Cela nous permettra entre autres de connaître la position précise de la balle sur le terrain.

La seconde variable sera la latence. En quelques sortes c’est le temps de réaction de notre intelligence artificielle. C’est un paramètre qu’il sera possible d’ajuster afin de modifier la difficulté du jeu.

La dernière variable sera la distance à laquelle l’ordinateur sera capable de voir la balle. Lorsque la balle est dans le champ de vision de l’ordinateur, celui-ci peut réagir. Dans le cas contraire, il restera immobile.

Voilà donc les 3 variables avec leurs valeurs par défaut :

```cs
public Transform pongBall;
public float latency = 4f;
public float viewDistance = 20;
```

Ensuite dans la fonction update, nous allons utiliser la fonction Vector3.Distance afin de connaître la distance entre la raquette et la balle, ainsi nous serons en mesure de savoir si la balle est à portée de vue :

```cs
if (Vector3.Distance(transform.position, pongBall.position) < viewDistance)
{

}
```

Dans cette condition, nous allons modifier la position de la raquette via transform.position. Contrairement à ce que nous avons pu faire précédemment, nous utiliserons Vector3.MoveTowards afin que ce mouvement soit plus « humain » afin d’appliquer un effet de temps de latence, d’accélération et décélération du mouvement :

```cs
transform.position = Vector3.MoveTowards(
    transform.position,
    new Vector3(pongBall.transform.position.x, .5f, 14),
    latency * Time.deltaTime
);
```

Le code complet pour ce script est donc le suivant :

```cs
using UnityEngine;

public class PongAi : MonoBehaviour
{
    public Transform pongBall;
    public float latency = 4f;
    public float viewDistance = 20;

    void Update()
    {
        if (Vector3.Distance(transform.position, pongBall.position) < viewDistance)
        {
            transform.position = Vector3.MoveTowards(
                transform.position,
                new Vector3(pongBall.transform.position.x, .5f, 14),
                latency * Time.deltaTime
            );
        }
    }
}
```

Vous pouvez sauvegarder le script, retourner dans Unity et vérifier que les valeurs dans l’inspector sont correctes. Vous devez notamment faire glisser la balle de la fenêtre hierarchy vers l’inspector afin de la lier au script via la variable `pongBall` que nous avons créée :

![Paramétrage script](./33_unity_ia.png)
_Paramétrage du script de l'IA_

Une fois le tout configuré, vous pouvez tester votre projet. Pour cela cliquez sur Play et jouez contre l’ordinateur. Il devrait maintenant réagir de façon autonome.

Vous devez tester et ajuster les valeurs des variables via l’inspector. L’idée est de trouver des valeurs qui donnent un niveau de difficulté suffisant pour que le jeu soit amusant mais pas trop élevé pour que le joueur puisse gagner. Les valeurs dépendront de la vitesse de la balle. Au plus la balle est rapide, au plus l’IA devra réagir vite. Chacun sélectionnera les valeurs qui lui correspondent.

Il est possible de créer une IA plus poussée. Cela serait un bon exercice pour vous afin de vous améliorer. Je vais vous donner une idée que vous devriez être en mesure de mettre en place assez facilement :

-   Créez une variable qui permettra de stocker le nombre de rebonds sur la raquette de l’ordinateur.
-   Faites en sorte que votre ordinateur soit très fort (presque imbattable).
-   Au bout d’un certain temps (par exemple tous les 10 rebonds), diminuez le temps de réaction de l’ordinateur.
-   Votre objectif est de créer une sorte de jauge de fatigue. Au plus le temps passe, au moins l’ordinateur est réactif et au plus il est facile de le battre.
-   Vous devrez donc modifier les valeurs des variables dynamiquement selon le nombre de rebonds.
-   Vous pouvez créer une fonction publique dans le script de l’IA qui sera appelée par le script de la balle lors d’un rebond.

Vous avez tout en main pour réaliser cet exercice. Vous savez détecter des collisions, vous savez modifier la valeur d’une variable, vous savez créer des fonctions, utiliser les conditions. Bref toutes les notions ont été vues dans les sections précédentes. Je vous suggère de passer au prochain chapitre que lorsque vous aurez réussi cet exercice, cela prouvera que vous maîtrisez parfaitement ce qui a été vu jusqu’ici.

Si vous bloquez réellement sur cet exercice (après avoir bien essayé de votre côté), voici une solution possible.

Il faut modifier le code de `PongBall` et ajouter dans la fonction OnCollisionEnter, à l’intérieur de la condition qui tests si la balle touche la raquette cette nouvelle condition :

```cs
if(!isPlayer)
{
    collision.gameObject.GetComponent<PongAi>().AddBounce();
}
```

Ce qui nous donne la fonction de collision complète suivante :

```cs
private void OnCollisionEnter(Collision collision)
    {
        if (collision.gameObject.tag == "Bar")
        {
            bool isPlayer = collision.gameObject.GetComponent<PongBar>().isHumanPlayer;
            if ((isPlayer && direction.z < 0) || (!isPlayer && direction.z > 0))
            {
                direction.z *= -1;
            }

            if(!isPlayer)
            {
                collision.gameObject.GetComponent<PongAi>().AddBounce();
            }
        }

        if (collision.gameObject.tag == "Side")
        {
            direction.x *= -1;
        }
    }
```

Il faut ensuite modifier le script `PongIa` pour y ajouter la variable suivante :

```cs
public int nbShots = 0;
```

Ainsi que la fonction suivante :

```cs
public void AddBounce()
    {
        nbShots++;
        if(nbShots >= 10)
        {
            nbShots = 0;
            latency -= 0.25f;
        }
    }
```

Ce qui nous donne le code :

```cs
using UnityEngine;

public class PongAi : MonoBehaviour
{
    public Transform pongBall;
    public float latency = 4f;
    public float viewDistance = 20;
    public int nbShots = 0;

    void Update()
    {
        if (Vector3.Distance(transform.position, pongBall.position) < viewDistance)
        {
            transform.position = Vector3.MoveTowards(
                transform.position,
                new Vector3(pongBall.transform.position.x, .5f, 14),
                latency * Time.deltaTime
            );
        }
    }

    public void AddBounce()
    {
        nbShots++;
        if(nbShots >= 10)
        {
            nbShots = 0;
            latency -= 0.25f;
        }
    }
}
```

Pensez à sauvegarder, à modifier les variables dans l’inspector pour rendre l’IA plus forte et à tester afin de vérifier qu’elle s’épuise au cours du temps et qu’elle devient simple à battre au bout d’un certain temps. Pour tester plus rapidement, vous pouvez mettre 2 ou 3 rebonds au lieu des 10.
