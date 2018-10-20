// CREEZ VOS PREMIERS OBJETS

/* C'est quoi un Objet : Prenoms un exemple très concret : pensez à un stylo, ou regardez celui qui est peut-être devant vous. Etudions ce stylo : 
quelles sont ses caractéristiques ? Sa couleur d'écriture (bleu, noir, rouge...), son type (à encre, à bille, mine...), son fabricant ....
Sans oublier le plus important : il permet d'écrire ! Notre stylo possède un certain nombre de "propriétés" qui le caractérisent. */

/* Revenons à l'informatique ==> Tout comme ce stylo, un objet informatique est UNE ENTITE QUI POSSEDE DES PROPRIETES. Chaque propriété définit 
une caractéristique de l'objet. Une propriété peut être une "information associé à l'objet" comme par exemple = La couleur du stylo ou une action
comme la capacité du stylo à écrire).

// QUEL RAPPORT AVEC LA PROGRAMMATION 

/* La programmation orientée objet (en abrégé POO) est UNE MANIÈRE D'ÉCRIRE DES PROGRAMMES EN UTILISANT DES OBJETS. Quand on utilise la POO on cherche 
à représenter le domaine étudié sous la forme d'objets informatiques. Chaque objet informatique modélisera un élément de ce domaine. 

La POO modifie la manière dont un programme est écrit et organisé. Jusqu'ici, vous avez appris à créer des programmes plutôt basés sur des fonctions :
c'est ce que l'on appelle parfois " La programmation Procédurale" (https://fr.wikipedia.org/wiki/Programmation_procédurale). Vous allez découvrir 
comment les écrire en utilisant des objets.*/

// JAVASCRIPT ET LES OBJETS

/* Comme de nombreux langages, JavaScript permet de programmer en utilisant des objets : on dit que ce langage est orienté objet. Il vous fournit 
un certain nombre d'objets prédéfinis tout en vous permettant de créer les votres. */

// CR2ATION D'UN OBJET LITTÉRAL

/* Ci-dessous la représentation JavaScript d'un stylo à bille Bic qui écrit en bleu.*/

var stylo = {
	type: "bille",
	couleur: "bleu",
	marque: "Bic"
};

/* En JavaScript, on peut créer des objets en définissant ses propriétés à l'intérieur d'une paire d'accolades : {...};. Cette manière de créer 
des objets est appelée SYNTAXE LITTÉRALE;

Le code ci-dessus définit une variable nommée STYLO dont la valeur est un objet : on dit aussi que STYLO est un objet. 
Cet objet possède trois propriétés : TYPE, COULEUR, MARQUE. Chaque propriété possède un nom et une valeur, et est séparée des autres 
par une virgule "," sauf pour la dernière. 

Une propriété peut être vue comme une sorte de variable attachée à un objet. 

CRÉATION D'UN OBJET À L'AIDE D'UN CONSTRUCTEUR 

Une autre possibilité pour créer des objets JavaScript consiste à utiliser un CONSTRUCTEUR. Un constructeur est une fonction particulière 
dont le rôle est d'nitialiser un nouvel objet. Son nom commence souvent par une lettre majuscule, mais ne n'est pas une obligation. 

La création de l'objet à partir du constructeur est appelée L'INSTANCIATION. Elle s'effectue à l'aide de mot-clé NEW.

Exemple :

Constructeur MonObjet */

function MonObjet(){
	// initialisation de l'objet
	// ...
}
// Instanciation d'un objet à partir du constructeur 
var MonObjet = new MonObjet();

/* UTITLISATION D'UN OBJET

Une fois l'objet créé, on peut accéder à la valeur d'une de ses propriétés en utilisant la notation pointée nomObjet.nomPropriete :
On utilise un point (.) entre l'objet et la propriété dont on veut obtenir la valeur.

Voici comment officher les propriétés de notre stylo. */

console.log(stylo.type); // Affiche "bille"
console.log(stylo.marque); // Affiche "bleu"
console.log(stylo.marque); // Affiche "Bic"

/* il existe une autre synthaxe pour accéder aux prorpiétés d'un objet : nomObjet[ ' nomPropriete' ]. Ainsi l'exemple suivant produit 
exactement le même résultat que le précédent. */

console.log(stylo['type']); // Affiche "bille"
console.log(stylo['couleur']); // Affiche "bleu"
console.log(stylo['marque']); // Affiche "Bic"

// Cette dernière synthaxe est bien moins utilisée que la notation pointée. 

/* L'accès à une propriété d'un objet est une EXPRESSION qui produit une valeur. On peut inclure ces accès dans d'autres expressions plus complexes.
Voici par exemple comment afficher les caractéristiques du stylo en une seule ligne. */

var stylo = {
	type:"bille",
	couleur:"bleu",
	marque:"Bic"
};

concole.log("Mon stylo à " + stylo.type + " " + stylo.marque + " écrit en " + stylo.couleur);

/* MODIFICATION D'UN OBJET

Une fois un objet créé, on peut modifier les valeurs de ses propriétés avec la syntaxe monObjet.maPropriete = nouvelleValeur.*/

var stylo = {
	type: "bille",
	couleur: "bleu",
	marque: "Bic"
};

console.log("Mon stylo à " + stylo.type + " " + stylo.marque + "écrit en " + stylo.couleur);

stylo.couleur = "rouge"; // Modifie la couleur de l'encre du stylo

console.log ("Mon stylo à "+ stylo.type + " " + stylo.marque + "écrit en " + stylo.couleur);

// JavaScript offre même la possibilité  d'ajouter dynamiquement de nouvelles propriétés à un objet déjà créé.

var stylo = {
	type: "bille",
	couleur: "bleu",
	marque: "Bic"
};

console.log("Mon stylo à " + stylo.type " " + stylo.marque + "écrit en " + stylo.couleur);

stylo.prix = 2,5; // Ajout de la propriété prix à l'objet stylo

console.log("Il coûte " + stylo.prix + " euros");

/* SYNTHÉSE DU COURS

1°) La programmation orientée objet consiste à écrire des programmes en utilisant des OBJETS qui représentent les éléments du domaine étudié.

2°) En JavaScript, un objet est constitué d'un exemple de PROPRIETES.

3°) Une propriété est une association entre un NOM et une VALEUR.

4°) Lorsque la valeur d'une propriété est une FONCTION, on dit que cette propriété est une MÉTHODE de l'objet. */

// Voici la synthaxe générale de crétion et d'utilisation d'un objet : 

var monObjet = {
	propriete1: valeur1,
	propriete2: valeur2,
	//...  ,
	methode1: function(/*....*/) {
		// ...
	}
	methode2: function(/* ... */) {
		// ...
	},
	// ...
};

console.log(monObjet.propriete1); // Affiche la propriété propriete1 de monObjet

console.log(monObjet.methode1(...)); // Affiche le résultat de l'appel de la méthode methode1 de monObjet


