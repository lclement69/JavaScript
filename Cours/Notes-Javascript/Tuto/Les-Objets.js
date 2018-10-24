// Création de l'objet voiture sous une syntaxe littérale

var voiture = { // je viens de définir mon objet voiture
	couleur: "bleue", // couleur, marque et prix sont des propriétés de l'objet voiture. 
	marque: "peugeot", // propriété avec des chiffre comme ci-dessous on ne met pas de cotes sinon oui pour les string
	prix: 8000
};

// Création de l'objet voiture à partir d'un constructeur

function Voiture(c,m,p) { // majuscule sur le premier mot puis des parenthèses. On s'épare les arguments par une virgule. 
	this.couleur = c; // this est un mot clé. il fait référence à l'objet en cours. Il est lié à l'attribut couleur. 
	this.marque = m;
	this.prix = p;
}

// Constructeur est une fonction. 

var vehicule1 = new Voiture ("noir", "Peugeot", 10000); /* vehicule1 devient un objet. Noir, peugeot et 10000 sont des arguments. Je viens d'instencier 
un nouvel objet véhicule1.*/

// Si je crée une nouvelle instance 

var vehicule2 = new Voiture ( "rouge", "Ford", 9500) //Je viens de créer une nouvelle instance de mon véhicule2

// Si je veux affciher la marque du vehicule1

document.write(vehicule1.prix) // Nous verrons apparaitre 10000.

/*Si on est capable de pouvoir acceder aux proprietes des objets pour le affciher, nous sommes en mesure de pouvoir les manipuler 
donc de les modifier.

Par exemple si on reprend l'exemple initial. 

document.write(voiture.prix);
voiture.prix = 7000;
document.write("<br /> Nouveau Prix: " +voiture.prix); 

Alors on verra apparaitre à l'écran :

8000
Nouveau Prix: 7000


