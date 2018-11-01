// LE VOCABULAIRE JAVASCRIPT DE BASE

/* L'utilisation de jQuery requiert de bien connaître les bases de JavaScript. 

Pour cela nous allons aborder dans ce chapitre :

- Le DOM
- Les opérateurs
- Les types de données
- Les conditions

Ces concepts sont utilisés universellement dans les langages de programmation, bien au delà de JavaScript, donc leur compréhension nous servira
également bien au delà de ce chapitre. 

- LE DOM

Le Modèle Objet de Document (DOM) peut être l'un des concepts les plus difficiles et abstraits de la programmation. Il requiert une compréhension de
l'intéraction entre le HTML que l'on écrit et la représentation qu'en fait le navigateur. 

Une page web telle qu'onla regarde dans notre navigateur est un objet de document. C'est la modélisation de la page dans le navigateur. Le DOM n'est pas
exactement le HTML que vous écrivez, c'est en fait exactement le HTML que vous avez écrit modélisé par le navigateur. Souvent, les deux semblent 
identiques, mais la modélisation du HTML par un navigateur permet le ciblage de certains éléments par d'autres langages de programmation tels que 
JavaScript.

Cahque objet est appelé un noeud, et des scripts comme JavaScript ou jQuery interagissent avec cet ensemble de noeuds, pas avec le HTML brut lui-même !

- LES TYPES DE DONNEES

Les nombres, les chaînes de caractères, les booléens et les tableaux sont les principaux concepts que l'on rencontre lorsque l'on integre jQuery. 

Les nombres("numbers") sont exactement ce à quoi l'on s'attend : il y a des nombres positifs et négatifs (5, -5), décimaux (0.5) et des nombres aussi 
grands que l'on puisse souhaiter (5000000). Les nombres ne servent pas à faire de l'arithmétique ici, ils sont égalemnt très importants en jQuery, avec
lequel nous allons les utiliser pour interagir avec les éléments de la page. 

Les chaînes de caratères ("strings") sont normalement constituées de texte, et sont délimitées par des quillemets. Une chaîne peut être "Bonjour les 
étudiants" ou 'boujour les étudiants !'. L'essentiel est que le guillement d'ouverture soit le même que celui de fermeture.

Les booléens ("booleans") n'ont que deux valeurs possibles : true (Vrai) ou false (faux). À quoi ça sert ? Selon qu'ils soient vrais ou faux, vous 
pouvez exécuter un certain groupe de méthodes jQuery. 

Les tableaux ("arrays") sont des ensembles de valeurs, comme [ "chien", "chat", "hamster", "lapin"]. On peut aussi trouver des tableaux de nombres, de 
booléens, ou de tout autre type de données ! Ils sont délimités par des crochets, et leurs éléments sont séparés par des virgules. Pour accéder à un 
élément donné d'un tableau, on procède comme pour choisir un élément dans une liste numérotée qui commence à 0. Dans l'exemple ci-dessus, "chien" est
en position 0. Si notre tableau était appelé animaux, nous accéderions à "chien" en selectionnant animaux[0] pour lapin ce serait animaux[3].

Les opérateurs : La programmation n'est pas si différente des maths. On a un ensemble d'opérations liées les unes aux autres, avec un résultat final. 
Les opérateurs sont une simple représentation de ce concept ! malgré toute sa synthaxe assez complexe, JavaScript peut être réduit à de très simples
éléments de ponctuation.
Pour une utilisation de base de jQuery il est essentiel de connaitre deux opérateurs. Le signe = (égal) et le signe + (plus)

Les conditions : La logique en JavaScript mérite son prore chapitre, mais comme notre objectif est véritablement le jQuery, contentons nous de retenir 
que nous povons utiliser de mots comme if et else dans notre code, pour voir si certains prédicats sont vrais (is ceci, then do cela). Vous pouvez 
également utiliser des opérateurs comme > (supérieur à) < (inférieur à) == (égal à) et d'autres choses...

